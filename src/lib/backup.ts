const BACKUP_FORMAT = 'medcore-hms-local-backup';
const BACKUP_VERSION = 1;

type BackupPayload = { format: typeof BACKUP_FORMAT; version: number; exportedAt: string; entries: Record<string, string> };

export function createBackup(): BackupPayload {
  const entries: Record<string, string> = {};
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (key?.startsWith('medcore-')) {
      const value = localStorage.getItem(key);
      if (value !== null) entries[key] = value;
    }
  }
  return { format: BACKUP_FORMAT, version: BACKUP_VERSION, exportedAt: new Date().toISOString(), entries };
}

export function downloadBackup(): void {
  const payload = createBackup();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `medcore-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function restoreBackupFile(file: File): Promise<number> {
  const raw: unknown = JSON.parse(await file.text());
  if (!raw || typeof raw !== 'object') throw new Error('The selected file is not a valid MedCore backup.');
  const backup = raw as Partial<BackupPayload>;
  if (backup.format !== BACKUP_FORMAT || backup.version !== BACKUP_VERSION || !backup.entries || typeof backup.entries !== 'object' || Array.isArray(backup.entries)) {
    throw new Error('Unsupported backup format or version. No data was changed.');
  }
  const entries = Object.entries(backup.entries);
  if (entries.length > 500 || entries.some(([key, value]) => !key.startsWith('medcore-') || typeof value !== 'string')) {
    throw new Error('The backup contains invalid or unsupported entries. No data was changed.');
  }
  // Validate every stored value as JSON before changing any existing data.
  for (const [, value] of entries) JSON.parse(value);
  if (!window.confirm(`Restore ${entries.length} saved data item(s)? Existing matching MedCore data will be replaced.`)) return 0;
  const snapshot: Record<string, string | null> = {};
  for (const [key] of entries) snapshot[key] = localStorage.getItem(key);
  try {
    for (const [key, value] of entries) localStorage.setItem(key, value);
  } catch (error) {
    for (const [key, value] of Object.entries(snapshot)) {
      try { if (value === null) localStorage.removeItem(key); else localStorage.setItem(key, value); } catch { /* best-effort rollback */ }
    }
    throw error;
  }
  window.dispatchEvent(new CustomEvent('medcore:data-changed', { detail: { key: '*' } }));
  return entries.length;
}

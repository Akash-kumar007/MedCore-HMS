import type { Appointment, Patient, Row } from './types';
import { seedAppointments, seedPatients } from '../data/seed';

const KEYS = {
  patients: 'medcore-patients',
  appointments: 'medcore-appointments',
  activity: 'medcore-activity',
} as const;

export type ActivityItem = { id: string; message: string; createdAt: string; category: string };

function cloneValue<T>(value: T): T { return JSON.parse(JSON.stringify(value)) as T; }

function storageAvailable(): boolean {
  try {
    const key = '__medcore_storage_test__';
    window.localStorage.setItem(key, '1');
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

function safeRead<T>(key: string, fallback: T, isValid: (value: unknown) => value is T): T {
  try {
    if (!storageAvailable()) return cloneValue(fallback);
    const raw = window.localStorage.getItem(key);
    if (!raw) return cloneValue(fallback);
    const parsed: unknown = JSON.parse(raw);
    return isValid(parsed) ? parsed : cloneValue(fallback);
  } catch {
    return cloneValue(fallback);
  }
}

function safeWrite<T>(key: string, value: T): boolean {
  try {
    if (!storageAvailable()) return false;
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('medcore:data-changed', { detail: { key } }));
    return true;
  } catch {
    return false;
  }
}

const isPatientArray = (v: unknown): v is Patient[] => Array.isArray(v) && v.every(p => p && typeof p.id === 'string' && typeof p.name === 'string');
const isAppointmentArray = (v: unknown): v is Appointment[] => Array.isArray(v) && v.every(a => a && typeof a.id === 'string' && typeof a.patient === 'string');
const isActivityArray = (v: unknown): v is ActivityItem[] => Array.isArray(v) && v.every(a => a && typeof a.id === 'string' && typeof a.message === 'string');

export const getPatients = (): Patient[] => safeRead(KEYS.patients, seedPatients, isPatientArray);
export const savePatients = (items: Patient[]): boolean => safeWrite(KEYS.patients, items);
export const getAppointments = (): Appointment[] => safeRead(KEYS.appointments, seedAppointments, isAppointmentArray);
export const saveAppointments = (items: Appointment[]): boolean => safeWrite(KEYS.appointments, items);
export const getActivity = (): ActivityItem[] => safeRead(KEYS.activity, [], isActivityArray);
export const addActivity = (message: string, category = 'General'): void => {
  const items = getActivity();
  safeWrite(KEYS.activity, [{ id: createId('ACT'), message, category, createdAt: new Date().toISOString() }, ...items].slice(0, 100));
};
export const createId = (prefix: string): string => `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
export const readModuleRows = (module: string, fallback: Row[]): Row[] => {
  try {
    const raw = window.localStorage.getItem(`medcore-module-${module}`);
    if (!raw) return cloneValue(fallback);
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.every(row => row && typeof row === 'object' && !Array.isArray(row)) ? parsed as Row[] : cloneValue(fallback);
  } catch {
    return cloneValue(fallback);
  }
};
export const saveModuleRows = (module: string, rows: Row[]): boolean => safeWrite(`medcore-module-${module}`, rows);
export const hasStoredValue = (key: string): boolean => {
  try { return window.localStorage.getItem(key) !== null; } catch { return false; }
};

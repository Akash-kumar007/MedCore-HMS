import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const sourceRoot = path.join(root, 'src');
const problems = [];
const files = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(tsx?|mts|cts)$/.test(entry.name) && !entry.name.endsWith('.d.ts')) files.push(full);
  }
}
walk(sourceRoot);
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const importPattern = /(?:from\s*|import\s*\()\s*['"]([^'"]+)['"]/g;
  for (const match of source.matchAll(importPattern)) {
    const specifier = match[1];
    if (!specifier.startsWith('.')) continue;
    const base = path.resolve(path.dirname(file), specifier);
    const candidates = [base, ...['.ts', '.tsx', '.js', '.jsx', '.json'].map(ext => base + ext), ...['index.ts', 'index.tsx', 'index.js', 'index.jsx'].map(name => path.join(base, name))];
    if (!candidates.some(candidate => fs.existsSync(candidate))) problems.push(`${path.relative(root, file)}: unresolved relative import ${specifier}`);
  }
  if (/href\s*=\s*['"]#['"]/.test(source)) problems.push(`${path.relative(root, file)}: placeholder href="#" found`);
}
const app = fs.readFileSync(path.join(sourceRoot, 'App.tsx'), 'utf8');
for (const route of ['appointments','patients','doctors','records','prescriptions','laboratory','pharmacy','billing','payments','analytics','notifications','wards','settings']) {
  if (!app.includes(`module="${route}"`)) problems.push(`Missing route module: ${route}`);
}
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
for (const script of ['dev','build','preview','verify:source']) if (!pkg.scripts?.[script]) problems.push(`Missing npm script: ${script}`);
console.log(`Scanned ${files.length} TypeScript source files.`);
if (problems.length) {
  console.error(`Found ${problems.length} problem(s):`);
  for (const problem of problems) console.error(` - ${problem}`);
  process.exit(1);
}
console.log('Source structure checks passed: relative imports resolve, expected modules are routed, and required scripts exist.');

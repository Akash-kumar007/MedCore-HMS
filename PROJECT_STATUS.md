# MedCore HMS — Project Status

## Current release scope

MedCore HMS is a frontend-only React + TypeScript + Vite application. No backend, remote database, authentication server, or payment processor is connected.

## Changes in this maintenance pass

- Added defensive browser-storage reads and writes with JSON validation, fallback data, storage availability checks, and a same-tab `medcore:data-changed` event.
- Unified patient and appointment screens with their canonical browser-storage records so create, edit, and delete actions update the same data used by the dashboard.
- Added stable record IDs, form validation for required and numeric fields, safer delete confirmation, activity history, pagination clamping, and CSV escaping/UTF-8 BOM support.
- Updated dashboard patient and appointment counts to use local records, and added recent activity from local storage instead of hardcoded activity items.
- Added patient search via the global search field and URL query parameter.
- Added versioned JSON backup export and validated restore in Settings, with input validation and best-effort rollback if storage writes fail.
- Improved modal semantics, Escape-key close behaviour, and background scroll handling.
- Added `npm run verify:source` for dependency-free source-structure checks.

## Verification status

- ZIP integrity: verified before editing.
- Relative-import and route source checks: passed with `node scripts/verify-project.mjs`.
- TypeScript/TSX syntax transpilation: passed using the globally available TypeScript compiler API.
- Full `npm run build`: **not verified in this environment**. Dependency installation timed out and the offline npm cache did not contain the packages. Run `npm install` and `npm run build` on a machine with npm registry access before treating this as a production build.
- Browser-based end-to-end tests: not run in this environment.

## Known frontend-only limitations

- Browser storage is local to one browser profile/device, can be cleared by the user/browser, and is not a secure shared database.
- This is not secure authentication or role-based authorization. UI labels must not be treated as access controls.
- Several non-core modules still use locally stored generic records and seeded initial rows; module-specific clinical, laboratory, payment, and inventory workflows need further validation before real-world use.
- Dashboard revenue and patient-traffic charts still use illustrative static chart series; they are not financial or operational reports.
- Never use real patient, clinical, or payment data in this frontend-only workspace.

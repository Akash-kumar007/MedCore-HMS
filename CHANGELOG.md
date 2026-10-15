# Changelog

## Frontend maintenance release

- Hardened local storage reads/writes and added activity history events.
- Synchronized patient and appointment CRUD with canonical browser records.
- Replaced hardcoded dashboard patient and appointment counts with local record calculations; invoice summary cards now use locally saved invoice records.
- Added cross-screen dashboard refresh for local changes and patient global search.
- Improved form validation, appointment conflict checks, pharmacy stock/expiry statuses, stable record IDs, CSV escaping, and pagination behaviour.
- Added JSON workspace backup and validated restore in Settings.
- Improved modal accessibility and Escape-key close behaviour.
- Added dependency-free source verification script and expanded documentation.

## Verification caveat

Source-structure and TypeScript/TSX syntax checks pass. The complete dependency-backed production build and browser end-to-end checks remain pending because npm dependency installation could not complete in the packaging environment.

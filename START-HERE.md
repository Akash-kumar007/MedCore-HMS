# MedCore HMS — Start Here

## Requirements
- Node.js 20.19+ or 22.12+
- npm
- VS Code (recommended)

## Start the frontend
1. Extract this ZIP.
2. Open the `MedCore-HMS` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the localhost URL printed by Vite.

## Included
- Dashboard and charts
- Patients, appointments, doctors/staff, medical records, prescriptions, laboratory, pharmacy, billing, payments, analytics, notifications, rooms/wards, and settings
- Search, status filters, pagination, record detail, create/edit/remove interactions, CSV export, and quick-add menu
- Browser local-storage persistence for module records

## Important
This is a frontend-only project with fictional records. Browser storage is local to one browser/device and is not a secure, shared hospital database. Do not use real patient, clinical, or payment data. Production use requires a secure backend, authentication, authorization, tenant isolation, audit logging, and verified payment integrations.

## Build
Run `npm run build` after installing dependencies. Dependency installation/build could not be verified in the packaging environment, so confirm the build on your machine.

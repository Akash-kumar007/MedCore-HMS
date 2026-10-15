export type Role = 'Super Admin' | 'Hospital Admin' | 'Doctor' | 'Nurse' | 'Receptionist' | 'Lab Technician' | 'Pharmacist' | 'Accountant' | 'Patient';
export type Patient = { id: string; name: string; age: number; gender: string; phone: string; email: string; blood: string; status: string; lastVisit: string; condition: string };
export type Appointment = { id: string; patient: string; doctor: string; department: string; date: string; time: string; status: string; type: string };
export type Row = Record<string, string | number | boolean>;

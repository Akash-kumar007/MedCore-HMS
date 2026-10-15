import type { Appointment, Patient } from '../lib/types';
export const seedPatients: Patient[] = [
 {id:'PT-1048',name:'Aarav Sharma',age:34,gender:'Male',phone:'+91 98765 43210',email:'aarav.sharma@example.com',blood:'B+',status:'Active',lastVisit:'12 Oct 2026',condition:'Hypertension'},
 {id:'PT-1047',name:'Priya Verma',age:28,gender:'Female',phone:'+91 98111 22334',email:'priya.verma@example.com',blood:'O+',status:'Active',lastVisit:'11 Oct 2026',condition:'Migraine'},
 {id:'PT-1046',name:'Rohan Mehta',age:52,gender:'Male',phone:'+91 98989 12121',email:'rohan.mehta@example.com',blood:'A+',status:'Follow-up',lastVisit:'10 Oct 2026',condition:'Type 2 diabetes'},
 {id:'PT-1045',name:'Ananya Singh',age:41,gender:'Female',phone:'+91 97654 11223',email:'ananya.singh@example.com',blood:'AB+',status:'Active',lastVisit:'09 Oct 2026',condition:'Asthma'},
 {id:'PT-1044',name:'Kabir Khan',age:19,gender:'Male',phone:'+91 98770 12345',email:'kabir.khan@example.com',blood:'O-',status:'New',lastVisit:'08 Oct 2026',condition:'General checkup'},
 {id:'PT-1043',name:'Meera Joshi',age:63,gender:'Female',phone:'+91 98100 56789',email:'meera.joshi@example.com',blood:'B-',status:'Follow-up',lastVisit:'07 Oct 2026',condition:'Arthritis'},
 {id:'PT-1042',name:'Ishaan Patel',age:37,gender:'Male',phone:'+91 98222 45678',email:'ishaan.patel@example.com',blood:'A-',status:'Active',lastVisit:'06 Oct 2026',condition:'Back pain'},
 {id:'PT-1041',name:'Sara Thomas',age:31,gender:'Female',phone:'+91 97555 66778',email:'sara.thomas@example.com',blood:'O+',status:'Active',lastVisit:'05 Oct 2026',condition:'Iron deficiency'}
];
export const seedAppointments: Appointment[] = [
 {id:'APT-2081',patient:'Aarav Sharma',doctor:'Dr. Ananya Rao',department:'Cardiology',date:'2026-10-13',time:'09:30 AM',status:'Confirmed',type:'Consultation'},
 {id:'APT-2082',patient:'Priya Verma',doctor:'Dr. Vikram Shah',department:'Neurology',date:'2026-10-13',time:'10:00 AM',status:'In Progress',type:'Follow-up'},
 {id:'APT-2083',patient:'Rohan Mehta',doctor:'Dr. Ananya Rao',department:'Cardiology',date:'2026-10-13',time:'10:30 AM',status:'Pending',type:'Follow-up'},
 {id:'APT-2084',patient:'Ananya Singh',doctor:'Dr. Neha Kapoor',department:'Pulmonology',date:'2026-10-13',time:'11:15 AM',status:'Confirmed',type:'Consultation'},
 {id:'APT-2085',patient:'Kabir Khan',doctor:'Dr. Vikram Shah',department:'Neurology',date:'2026-10-14',time:'12:00 PM',status:'Cancelled',type:'Consultation'},
 {id:'APT-2086',patient:'Meera Joshi',doctor:'Dr. Neha Kapoor',department:'Orthopedics',date:'2026-10-14',time:'02:30 PM',status:'Confirmed',type:'Follow-up'}
];
export const doctors = [
 {name:'Dr. Ananya Rao',specialty:'Cardiology',experience:'12 years',availability:'Available',color:'blue'},
 {name:'Dr. Vikram Shah',specialty:'Neurology',experience:'9 years',availability:'In consultation',color:'violet'},
 {name:'Dr. Neha Kapoor',specialty:'Pulmonology',experience:'8 years',availability:'Available',color:'teal'},
 {name:'Dr. Arjun Nair',specialty:'Orthopedics',experience:'15 years',availability:'On break',color:'amber'}
];
export const medicines = [
 {id:'MED-1001',name:'Paracetamol 500mg',category:'Pain relief',stock:420,expiry:'2027-06-30',price:25,status:'In Stock'},
 {id:'MED-1002',name:'Amoxicillin 250mg',category:'Antibiotic',stock:18,expiry:'2027-03-15',price:85,status:'Low Stock'},
 {id:'MED-1003',name:'Metformin 500mg',category:'Diabetes',stock:210,expiry:'2027-09-12',price:62,status:'In Stock'},
 {id:'MED-1004',name:'Cetirizine 10mg',category:'Allergy',stock:0,expiry:'2027-01-20',price:35,status:'Out of Stock'},
 {id:'MED-1005',name:'Omeprazole 20mg',category:'Gastro',stock:94,expiry:'2027-11-02',price:58,status:'In Stock'}
];
export const invoices = [
 {id:'INV-3091',patient:'Aarav Sharma',date:'13 Oct 2026',amount:2400,status:'Paid',method:'UPI'},
 {id:'INV-3090',patient:'Priya Verma',date:'13 Oct 2026',amount:1800,status:'Pending',method:'—'},
 {id:'INV-3089',patient:'Rohan Mehta',date:'12 Oct 2026',amount:4250,status:'Partial',method:'Card'},
 {id:'INV-3088',patient:'Ananya Singh',date:'12 Oct 2026',amount:950,status:'Paid',method:'Cash'},
 {id:'INV-3087',patient:'Meera Joshi',date:'11 Oct 2026',amount:3100,status:'Overdue',method:'—'}
];
export const labOrders = [
 {id:'LAB-4011',patient:'Aarav Sharma',test:'Complete Blood Count',orderedBy:'Dr. Ananya Rao',date:'13 Oct 2026',status:'Sample Collected'},
 {id:'LAB-4010',patient:'Rohan Mehta',test:'HbA1c',orderedBy:'Dr. Ananya Rao',date:'13 Oct 2026',status:'Awaiting Sample'},
 {id:'LAB-4009',patient:'Priya Verma',test:'Vitamin D',orderedBy:'Dr. Vikram Shah',date:'12 Oct 2026',status:'Result Ready'},
 {id:'LAB-4008',patient:'Ananya Singh',test:'Lipid Profile',orderedBy:'Dr. Neha Kapoor',date:'12 Oct 2026',status:'Approved'}
];

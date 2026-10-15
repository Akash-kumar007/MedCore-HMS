const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';
export class ApiError extends Error { constructor(message:string, public status:number) { super(message); this.name='ApiError'; } }
export async function apiRequest<T>(path:string, init:RequestInit = {}):Promise<T> { const response=await fetch(`${API_BASE_URL}${path}`, { ...init, headers:{'Content-Type':'application/json', ...(init.headers||{})} }); if(!response.ok) { const message=await response.text().catch(()=>response.statusText); throw new ApiError(message||'Request failed',response.status); } if(response.status===204) return undefined as T; return response.json() as Promise<T>; }
// No API is connected by default. Never place private credentials in VITE_* variables.

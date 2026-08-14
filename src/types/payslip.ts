export type PayslipStatus = 'pendiente' | 'firmado';

export interface PayslipItem {
  description: string;
  type: 'haberes' | 'descuentos';
  amount: number;
}

export interface Payslip {
  id: string;
  period: string; // e.g., "Julio 2026"
  month: string;
  year: number;
  grossSalary: number;
  netSalary: number;
  deductions: number;
  status: PayslipStatus;
  signedAt?: string;
  fileSize: string;
  items: PayslipItem[];
}

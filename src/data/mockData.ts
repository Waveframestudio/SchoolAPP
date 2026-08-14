import type { License } from '../types/license';
import type { Payslip } from '../types/payslip';

export interface UserProfile {
  name: string;
  email: string;
  fileNumber: string; // Legajo
  role: string;
  school: string;
  dni: string;
  seniority: string;
  shift: string;
  phone: string;
  address: string;
}

export const mockUser: UserProfile = {
  name: "Prof. María Elena Rossi",
  email: "m.rossi@colegiosanjose.edu.ar",
  fileNumber: "LEG-84920",
  role: "Docente Titular - Historia y F. Ética",
  school: "Colegio San José - Nivel Secundario",
  dni: "32.849.102",
  seniority: "9 años y 4 meses",
  shift: "Turno Mañana / Tarde",
  phone: "+54 11 4829-1092",
  address: "Av. Rivadavia 4520, Piso 3A, CABA"
};

export const initialLicenses: License[] = [
  {
    id: "LIC-2026-001",
    type: "propia",
    startDate: "2026-08-10",
    durationDays: 3,
    endDate: "2026-08-12",
    diagnosis: "Cuadro gripal agudo con fiebre de 38.5°C. Reposo absoluto prescrito por profesional médico.",
    status: "aprobada",
    certificateFileName: "certificado_medico_gripe_10-08.pdf",
    createdAt: "2026-08-09T14:30:00Z"
  },
  {
    id: "LIC-2026-002",
    type: "familiar",
    startDate: "2026-08-13",
    durationDays: 2,
    endDate: "2026-08-14",
    diagnosis: "Cuidado de hijo menor por gastroenteritis aguda con indicación de asistencia en domicilio.",
    status: "en_revision",
    certificateFileName: "certificado_pediatria_13-08.pdf",
    familyMemberRelation: "Hijo/a",
    createdAt: "2026-08-13T08:15:00Z"
  },
  {
    id: "LIC-2026-003",
    type: "propia",
    startDate: "2026-08-15",
    durationDays: 5,
    endDate: "2026-08-19",
    diagnosis: "Lumbalgia aguda post-esfuerzo con recomendación de kinesiología y reposo físico.",
    status: "pendiente",
    certificateFileName: "certificado_traumatologia.pdf",
    createdAt: "2026-08-14T07:45:00Z"
  },
  {
    id: "LIC-2026-004",
    type: "familiar",
    startDate: "2026-07-02",
    durationDays: 1,
    endDate: "2026-07-02",
    diagnosis: "Acompañamiento a estudio médico programado de familiar a cargo.",
    status: "rechazada",
    certificateFileName: "constancia_estudio_medico.pdf",
    familyMemberRelation: "Padre/Madre",
    rejectionReason: "Falta adjuntar orden de derivación médica estampillada conforme normativa ABC.",
    createdAt: "2026-07-01T11:20:00Z"
  },
  {
    id: "LIC-2026-005",
    type: "propia",
    startDate: "2026-06-15",
    durationDays: 14,
    endDate: "2026-06-28",
    diagnosis: "Intervención quirúrgica menor ambulatoria con reposo post-operatorio obligatorio.",
    status: "aprobada",
    certificateFileName: "alta_quirurgica_sanatorio.pdf",
    createdAt: "2026-06-14T18:00:00Z"
  }
];

export const initialPayslips: Payslip[] = [
  {
    id: "REC-2026-07",
    period: "Julio 2026",
    month: "Julio",
    year: 2026,
    grossSalary: 940000,
    netSalary: 780200,
    deductions: 159800,
    status: "pendiente",
    fileSize: "245 KB",
    items: [
      { description: "Sueldo Básico Docente", type: "haberes", amount: 520000 },
      { description: "Antigüedad (9 años - 50%)", type: "haberes", amount: 260000 },
      { description: "Plus Presentismo y Material Didáctico", type: "haberes", amount: 160000 },
      { description: "Aporte Jubilatorio (13%)", type: "descuentos", amount: 122200 },
      { description: "Obra Social IOMA (4.5%)", type: "descuentos", amount: 37600 }
    ]
  },
  {
    id: "REC-2026-06-SAC",
    period: "1er SAC 2026 (Aguinaldo)",
    month: "Junio",
    year: 2026,
    grossSalary: 450000,
    netSalary: 373500,
    deductions: 76500,
    status: "firmado",
    signedAt: "2026-07-02T10:14:00Z",
    fileSize: "198 KB",
    items: [
      { description: "Sueldo Anual Complementario (SAC 1/2)", type: "haberes", amount: 450000 },
      { description: "Aporte Jubilatorio SAC (13%)", type: "descuentos", amount: 58500 },
      { description: "Obra Social SAC (4.5%)", type: "descuentos", amount: 18000 }
    ]
  },
  {
    id: "REC-2026-06",
    period: "Junio 2026",
    month: "Junio",
    year: 2026,
    grossSalary: 900000,
    netSalary: 747000,
    deductions: 153000,
    status: "firmado",
    signedAt: "2026-07-01T15:30:00Z",
    fileSize: "240 KB",
    items: [
      { description: "Sueldo Básico Docente", type: "haberes", amount: 500000 },
      { description: "Antigüedad (9 años - 50%)", type: "haberes", amount: 250000 },
      { description: "Plus Presentismo y Material Didáctico", type: "haberes", amount: 150000 },
      { description: "Aporte Jubilatorio (13%)", type: "descuentos", amount: 117000 },
      { description: "Obra Social IOMA (4.5%)", type: "descuentos", amount: 36000 }
    ]
  },
  {
    id: "REC-2026-05",
    period: "Mayo 2026",
    month: "Mayo",
    year: 2026,
    grossSalary: 880000,
    netSalary: 730400,
    deductions: 149600,
    status: "firmado",
    signedAt: "2026-06-03T11:20:00Z",
    fileSize: "238 KB",
    items: [
      { description: "Sueldo Básico Docente", type: "haberes", amount: 490000 },
      { description: "Antigüedad (9 años - 50%)", type: "haberes", amount: 245000 },
      { description: "Plus Presentismo y Material Didáctico", type: "haberes", amount: 145000 },
      { description: "Aporte Jubilatorio (13%)", type: "descuentos", amount: 114400 },
      { description: "Obra Social IOMA (4.5%)", type: "descuentos", amount: 35200 }
    ]
  },
  {
    id: "REC-2026-04",
    period: "Abril 2026",
    month: "Abril",
    year: 2026,
    grossSalary: 850000,
    netSalary: 705500,
    deductions: 144500,
    status: "firmado",
    signedAt: "2026-05-04T09:45:00Z",
    fileSize: "235 KB",
    items: [
      { description: "Sueldo Básico Docente", type: "haberes", amount: 470000 },
      { description: "Antigüedad (9 años - 50%)", type: "haberes", amount: 235000 },
      { description: "Plus Presentismo y Material Didáctico", type: "haberes", amount: 145000 },
      { description: "Aporte Jubilatorio (13%)", type: "descuentos", amount: 110500 },
      { description: "Obra Social IOMA (4.5%)", type: "descuentos", amount: 34000 }
    ]
  },
  {
    id: "REC-2026-03",
    period: "Marzo 2026",
    month: "Marzo",
    year: 2026,
    grossSalary: 850000,
    netSalary: 705500,
    deductions: 144500,
    status: "firmado",
    signedAt: "2026-04-02T14:10:00Z",
    fileSize: "232 KB",
    items: [
      { description: "Sueldo Básico Docente", type: "haberes", amount: 470000 },
      { description: "Antigüedad (9 años - 50%)", type: "haberes", amount: 235000 },
      { description: "Plus Presentismo y Material Didáctico", type: "haberes", amount: 145000 },
      { description: "Aporte Jubilatorio (13%)", type: "descuentos", amount: 110500 },
      { description: "Obra Social IOMA (4.5%)", type: "descuentos", amount: 34000 }
    ]
  },
  {
    id: "REC-2026-02",
    period: "Febrero 2026",
    month: "Febrero",
    year: 2026,
    grossSalary: 800000,
    netSalary: 664000,
    deductions: 136000,
    status: "firmado",
    signedAt: "2026-03-03T16:00:00Z",
    fileSize: "230 KB",
    items: [
      { description: "Sueldo Básico Docente", type: "haberes", amount: 440000 },
      { description: "Antigüedad (9 años - 50%)", type: "haberes", amount: 220000 },
      { description: "Plus Presentismo y Material Didáctico", type: "haberes", amount: 140000 },
      { description: "Aporte Jubilatorio (13%)", type: "descuentos", amount: 104000 },
      { description: "Obra Social IOMA (4.5%)", type: "descuentos", amount: 32000 }
    ]
  },
  {
    id: "REC-2026-01",
    period: "Enero 2026",
    month: "Enero",
    year: 2026,
    grossSalary: 800000,
    netSalary: 664000,
    deductions: 136000,
    status: "firmado",
    signedAt: "2026-02-04T10:30:00Z",
    fileSize: "230 KB",
    items: [
      { description: "Sueldo Básico Docente", type: "haberes", amount: 440000 },
      { description: "Antigüedad (9 años - 50%)", type: "haberes", amount: 220000 },
      { description: "Plus Presentismo y Material Didáctico", type: "haberes", amount: 140000 },
      { description: "Aporte Jubilatorio (13%)", type: "descuentos", amount: 104000 },
      { description: "Obra Social IOMA (4.5%)", type: "descuentos", amount: 32000 }
    ]
  }
];

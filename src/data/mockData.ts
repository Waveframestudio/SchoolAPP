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
  email: "m.rossi@colegiosanjorge.edu.ar",
  fileNumber: "LEG-84920",
  role: "Docente Titular - Historia & Formación Ética",
  school: "Colegio San Jorge - Nivel Secundario (DIEGEP N° 4102)",
  dni: "32.849.102",
  seniority: "10 años y 2 meses (Escala 60% Antigüedad)",
  shift: "Turno Mañana / Tarde (20 Horas Cátedra)",
  phone: "+54 11 4829-1092",
  address: "Av. Rivadavia 4520, Piso 3A, CABA"
};

export const initialLicenses: License[] = [
  {
    id: "LIC-2026-089",
    type: "propia",
    startDate: "2026-08-18",
    durationDays: 3,
    endDate: "2026-08-20",
    diagnosis: "Art. 114 a.1 - Cuadro de bronquitis aguda febril con indicación de reposo laboral absoluto por 72 horas y tratamiento antibiótico. (Dr. Alejandro M. Peralta - MN 114.829 - Sanatorio Anchorena).",
    status: "pendiente",
    certificateFileName: "certificado_medico_bronquitis_dr_peralta.pdf",
    createdAt: "2026-08-17T18:45:00Z"
  },
  {
    id: "LIC-2026-074",
    type: "familiar",
    startDate: "2026-08-12",
    durationDays: 2,
    endDate: "2026-08-13",
    diagnosis: "Art. 114 o - Atención de hijo menor (Joaquín, 7 años) por gastroenteritis aguda con necesidad de asistencia y cuidado en domicilio. (Dra. Silvina V. Gómez - Pediatra MP 44.102).",
    status: "en_revision",
    certificateFileName: "constancia_pediatria_domicilio_joaquin.pdf",
    familyMemberRelation: "Hijo/a",
    createdAt: "2026-08-12T07:15:00Z"
  },
  {
    id: "LIC-2026-052",
    type: "propia",
    startDate: "2026-07-28",
    durationDays: 5,
    endDate: "2026-08-01",
    diagnosis: "Art. 114 a.1 - Lumbalgia aguda secundaria a contractura paravertebral severa. Recomendación kinesiológica de 5 sesiones y reposo físico. (Dr. Gabriel R. Torres - Traumatólogo MN 98.411).",
    status: "aprobada",
    certificateFileName: "certificado_traumatologia_lumbalgia.pdf",
    createdAt: "2026-07-27T20:10:00Z"
  },
  {
    id: "LIC-2026-038",
    type: "familiar",
    startDate: "2026-07-02",
    durationDays: 1,
    endDate: "2026-07-02",
    diagnosis: "Art. 114 o - Acompañamiento a estudio médico tomográfico programado de madre a cargo en Fundación Favaloro.",
    status: "rechazada",
    certificateFileName: "comprobante_turno_tomografia.pdf",
    familyMemberRelation: "Padre/Madre",
    rejectionReason: "El certificado presentado es un turno médico programado. Conforme al Estatuto Docente ABC, se requiere certificado de asistencia efectiva con firma y sello institucional de la clínica.",
    createdAt: "2026-07-01T11:20:00Z"
  },
  {
    id: "LIC-2026-021",
    type: "propia",
    startDate: "2026-06-15",
    durationDays: 10,
    endDate: "2026-06-24",
    diagnosis: "Art. 114 a.2 - Intervención quirúrgica menor ambulatoria (Colecistectomía por laparoscopía) y posoperatorio inmediato. (Hospital Italiano CABA - Protocolo Q-4912).",
    status: "aprobada",
    certificateFileName: "protocolo_quirurgico_alta_hospital_italiano.pdf",
    createdAt: "2026-06-14T18:00:00Z"
  },
  {
    id: "LIC-2026-011",
    type: "propia",
    startDate: "2026-05-04",
    durationDays: 2,
    endDate: "2026-05-05",
    diagnosis: "Art. 114 c - Examen de Posgrado Universitario en Licenciatura en Ciencias de la Educación (Universidad de Buenos Aires - UBA).",
    status: "aprobada",
    certificateFileName: "constancia_examen_rendido_uba.pdf",
    createdAt: "2026-05-03T19:30:00Z"
  }
];

export const initialPayslips: Payslip[] = [
  {
    id: "REC-2026-07",
    period: "Julio 2026",
    month: "Julio",
    year: 2026,
    grossSalary: 985000,
    netSalary: 817550,
    deductions: 167450,
    status: "pendiente",
    fileSize: "248 KB",
    items: [
      { description: "Cód. 101 - Sueldo Básico Docente (20hs Cátedra)", type: "haberes", amount: 540000 },
      { description: "Cód. 104 - Antigüedad Docente (10 años - 60%)", type: "haberes", amount: 324000 },
      { description: "Cód. 115 - Plus Presentismo & Material Didáctico", type: "haberes", amount: 121000 },
      { description: "Cód. 201 - Aporte Jubilatorio IPS / ANSES (13%)", type: "descuentos", amount: 128050 },
      { description: "Cód. 205 - Obra Social IOMA / OSPLAD (4.5%)", type: "descuentos", amount: 39400 }
    ]
  },
  {
    id: "REC-2026-06-SAC",
    period: "1er SAC 2026 (Aguinaldo)",
    month: "Junio",
    year: 2026,
    grossSalary: 472500,
    netSalary: 392175,
    deductions: 80325,
    status: "firmado",
    signedAt: "2026-07-02T10:14:22Z",
    fileSize: "195 KB",
    items: [
      { description: "Cód. 150 - Sueldo Anual Complementario (SAC 50%)", type: "haberes", amount: 472500 },
      { description: "Cód. 201 - Aporte Jubilatorio SAC (13%)", type: "descuentos", amount: 61425 },
      { description: "Cód. 205 - Obra Social IOMA SAC (4.5%)", type: "descuentos", amount: 18900 }
    ]
  },
  {
    id: "REC-2026-06",
    period: "Junio 2026",
    month: "Junio",
    year: 2026,
    grossSalary: 945000,
    netSalary: 784350,
    deductions: 160650,
    status: "firmado",
    signedAt: "2026-07-01T15:30:10Z",
    fileSize: "242 KB",
    items: [
      { description: "Cód. 101 - Sueldo Básico Docente (20hs Cátedra)", type: "haberes", amount: 520000 },
      { description: "Cód. 104 - Antigüedad Docente (10 años - 60%)", type: "haberes", amount: 312000 },
      { description: "Cód. 115 - Plus Presentismo & Material Didáctico", type: "haberes", amount: 113000 },
      { description: "Cód. 201 - Aporte Jubilatorio IPS / ANSES (13%)", type: "descuentos", amount: 122850 },
      { description: "Cód. 205 - Obra Social IOMA / OSPLAD (4.5%)", type: "descuentos", amount: 37800 }
    ]
  },
  {
    id: "REC-2026-05",
    period: "Mayo 2026",
    month: "Mayo",
    year: 2026,
    grossSalary: 920000,
    netSalary: 763600,
    deductions: 156400,
    status: "firmado",
    signedAt: "2026-06-03T11:20:45Z",
    fileSize: "239 KB",
    items: [
      { description: "Cód. 101 - Sueldo Básico Docente (20hs Cátedra)", type: "haberes", amount: 505000 },
      { description: "Cód. 104 - Antigüedad Docente (10 años - 60%)", type: "haberes", amount: 303000 },
      { description: "Cód. 115 - Plus Presentismo & Material Didáctico", type: "haberes", amount: 112000 },
      { description: "Cód. 201 - Aporte Jubilatorio IPS / ANSES (13%)", type: "descuentos", amount: 119600 },
      { description: "Cód. 205 - Obra Social IOMA / OSPLAD (4.5%)", type: "descuentos", amount: 36800 }
    ]
  },
  {
    id: "REC-2026-04",
    period: "Abril 2026",
    month: "Abril",
    year: 2026,
    grossSalary: 890000,
    netSalary: 738700,
    deductions: 151300,
    status: "firmado",
    signedAt: "2026-05-04T09:45:12Z",
    fileSize: "236 KB",
    items: [
      { description: "Cód. 101 - Sueldo Básico Docente (20hs Cátedra)", type: "haberes", amount: 490000 },
      { description: "Cód. 104 - Antigüedad Docente (10 años - 60%)", type: "haberes", amount: 294000 },
      { description: "Cód. 115 - Plus Presentismo & Material Didáctico", type: "haberes", amount: 106000 },
      { description: "Cód. 201 - Aporte Jubilatorio IPS / ANSES (13%)", type: "descuentos", amount: 115700 },
      { description: "Cód. 205 - Obra Social IOMA / OSPLAD (4.5%)", type: "descuentos", amount: 35600 }
    ]
  },
  {
    id: "REC-2026-03",
    period: "Marzo 2026",
    month: "Marzo",
    year: 2026,
    grossSalary: 890000,
    netSalary: 738700,
    deductions: 151300,
    status: "firmado",
    signedAt: "2026-04-02T14:10:05Z",
    fileSize: "234 KB",
    items: [
      { description: "Cód. 101 - Sueldo Básico Docente (20hs Cátedra)", type: "haberes", amount: 490000 },
      { description: "Cód. 104 - Antigüedad Docente (10 años - 60%)", type: "haberes", amount: 294000 },
      { description: "Cód. 115 - Plus Presentismo & Material Didáctico", type: "haberes", amount: 106000 },
      { description: "Cód. 201 - Aporte Jubilatorio IPS / ANSES (13%)", type: "descuentos", amount: 115700 },
      { description: "Cód. 205 - Obra Social IOMA / OSPLAD (4.5%)", type: "descuentos", amount: 35600 }
    ]
  },
  {
    id: "REC-2026-02",
    period: "Febrero 2026",
    month: "Febrero",
    year: 2026,
    grossSalary: 840000,
    netSalary: 697200,
    deductions: 142800,
    status: "firmado",
    signedAt: "2026-03-03T16:00:30Z",
    fileSize: "231 KB",
    items: [
      { description: "Cód. 101 - Sueldo Básico Docente (20hs Cátedra)", type: "haberes", amount: 460000 },
      { description: "Cód. 104 - Antigüedad Docente (10 años - 60%)", type: "haberes", amount: 276000 },
      { description: "Cód. 115 - Plus Presentismo & Material Didáctico", type: "haberes", amount: 104000 },
      { description: "Cód. 201 - Aporte Jubilatorio IPS / ANSES (13%)", type: "descuentos", amount: 109200 },
      { description: "Cód. 205 - Obra Social IOMA / OSPLAD (4.5%)", type: "descuentos", amount: 33600 }
    ]
  },
  {
    id: "REC-2026-01",
    period: "Enero 2026",
    month: "Enero",
    year: 2026,
    grossSalary: 840000,
    netSalary: 697200,
    deductions: 142800,
    status: "firmado",
    signedAt: "2026-02-04T10:30:15Z",
    fileSize: "231 KB",
    items: [
      { description: "Cód. 101 - Sueldo Básico Docente (20hs Cátedra)", type: "haberes", amount: 460000 },
      { description: "Cód. 104 - Antigüedad Docente (10 años - 60%)", type: "haberes", amount: 276000 },
      { description: "Cód. 115 - Plus Presentismo & Material Didáctico", type: "haberes", amount: 104000 },
      { description: "Cód. 201 - Aporte Jubilatorio IPS / ANSES (13%)", type: "descuentos", amount: 109200 },
      { description: "Cód. 205 - Obra Social IOMA / OSPLAD (4.5%)", type: "descuentos", amount: 33600 }
    ]
  }
];

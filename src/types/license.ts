export type LicenseType = 'propia' | 'familiar';

export type LicenseStatus = 'pendiente' | 'en_revision' | 'aprobada' | 'rechazada';

export interface License {
  id: string;
  type: LicenseType;
  startDate: string;
  durationDays: number;
  endDate: string;
  diagnosis: string;
  status: LicenseStatus;
  certificateFileName?: string;
  createdAt: string;
  familyMemberRelation?: string;
  rejectionReason?: string;
}

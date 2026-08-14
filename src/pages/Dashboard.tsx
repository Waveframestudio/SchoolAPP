import React from 'react';
import type { License } from '../types/license';
import type { Payslip } from '../types/payslip';
import { DashboardSummary } from '../components/dashboard/DashboardSummary';

interface DashboardProps {
  licenses: License[];
  payslips: Payslip[];
  onOpenNewLicense: () => void;
  onSelectPayslip: (payslip: Payslip) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  licenses,
  payslips,
  onOpenNewLicense,
  onSelectPayslip,
}) => {
  return (
    <div className="space-y-6">
      <DashboardSummary 
        licenses={licenses} 
        payslips={payslips} 
        onOpenNewLicense={onOpenNewLicense}
        onSelectPayslip={onSelectPayslip}
      />
    </div>
  );
};

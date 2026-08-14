import React, { useState } from 'react';
import type { Payslip } from '../../types/payslip';
import { mockUser } from '../../data/mockData';
import { X, Download, FileCheck, Building, ShieldCheck, Printer } from 'lucide-react';

interface PayslipDetailModalProps {
  payslip: Payslip | null;
  onClose: () => void;
  onSign: (id: string) => void;
}

export const PayslipDetailModal: React.FC<PayslipDetailModalProps> = ({ payslip, onClose, onSign }) => {
  const [isSigning, setIsSigning] = useState(false);
  const [signatureSuccess, setSignatureSuccess] = useState(false);

  if (!payslip) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleDigitalSignature = () => {
    setIsSigning(true);
    setTimeout(() => {
      onSign(payslip.id);
      setIsSigning(false);
      setSignatureSuccess(true);
      setTimeout(() => setSignatureSuccess(false), 2000);
    }, 800);
  };

  const handleDownload = () => {
    alert(`Descargando comprobante oficial en formato PDF: Recibo_${payslip.period.replace(/\s+/g, '_')}.pdf`);
  };

  const haberesItems = payslip.items.filter(i => i.type === 'haberes');
  const descuentosItems = payslip.items.filter(i => i.type === 'descuentos');

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-slate-900 text-slate-100 rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-800 overflow-hidden my-6 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-blue-950 border-b border-blue-900/60 p-5 flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-900/60 border border-blue-800 rounded-xl text-blue-300">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight text-white">Recibo de Sueldo Digital</h3>
              <p className="text-xs text-blue-300">Período: {payslip.period} • Colegio San José</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Imprimir Recibo"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Payslip Digital Document Container */}
        <div className="p-6 space-y-6 text-slate-200 text-sm">
          
          {/* Header Document Info */}
          <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase">Empleador / Institución</p>
              <p className="font-bold text-white">Colegio San José (DGCyE - DIEGEP N° 4102)</p>
              <p className="text-xs text-slate-400">CUIT: 30-58291049-9</p>
              <p className="text-xs text-slate-400">Av. Rivadavia 4500, CABA</p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase">Docente / Legajo</p>
              <p className="font-bold text-white">{mockUser.name}</p>
              <p className="text-xs text-slate-400">Legajo: <strong className="font-semibold text-white">{mockUser.fileNumber}</strong> | DNI: {mockUser.dni}</p>
              <p className="text-xs text-slate-400">Cargo: {mockUser.role}</p>
            </div>
          </div>

          {/* Table Breakdown */}
          <div className="border border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-slate-300 font-semibold uppercase border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-4">Concepto / Descripción</th>
                  <th className="py-2.5 px-4 text-right">Haberes (+)</th>
                  <th className="py-2.5 px-4 text-right">Descuentos (-)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
                {haberesItems.map((item, idx) => (
                  <tr key={`h-${idx}`} className="hover:bg-slate-800/50">
                    <td className="py-2.5 px-4 font-medium text-slate-200">{item.description}</td>
                    <td className="py-2.5 px-4 text-right font-semibold text-emerald-400">{formatCurrency(item.amount)}</td>
                    <td className="py-2.5 px-4 text-right text-slate-600">-</td>
                  </tr>
                ))}
                {descuentosItems.map((item, idx) => (
                  <tr key={`d-${idx}`} className="hover:bg-slate-800/50">
                    <td className="py-2.5 px-4 font-medium text-slate-200">{item.description}</td>
                    <td className="py-2.5 px-4 text-right text-slate-600">-</td>
                    <td className="py-2.5 px-4 text-right font-semibold text-rose-400">{formatCurrency(item.amount)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-950 border-t border-slate-800 font-bold">
                <tr>
                  <td className="py-3 px-4 text-white">SUBTOTALES</td>
                  <td className="py-3 px-4 text-right text-emerald-400">{formatCurrency(payslip.grossSalary)}</td>
                  <td className="py-3 px-4 text-right text-rose-400">{formatCurrency(payslip.deductions)}</td>
                </tr>
                <tr className="bg-blue-950 text-white text-base">
                  <td className="py-3.5 px-4">NETO A COBRAR</td>
                  <td colSpan={2} className="py-3.5 px-4 text-right font-extrabold text-lg text-emerald-300">
                    {formatCurrency(payslip.netSalary)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Digital Signature Box */}
          <div className="border border-slate-800 rounded-xl p-4 bg-slate-950/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Estado de Conformidad y Firma Digital
              </p>
              {payslip.status === 'firmado' ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>
                    Firmado digitalmente por el agente el {payslip.signedAt ? new Date(payslip.signedAt).toLocaleString('es-AR') : 'recientemente'}
                  </span>
                </div>
              ) : (
                <div className="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5">
                  <p className="font-semibold mb-0.5">Pendiente de firma del docente</p>
                  <p className="text-[11px] text-amber-400">
                    Al presionar "Firmar Digitalmente" prestas conformidad con la liquidación recibida.
                  </p>
                </div>
              )}
            </div>

            {payslip.status === 'pendiente' && (
              <button
                type="button"
                disabled={isSigning}
                onClick={handleDigitalSignature}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm shrink-0"
              >
                {isSigning ? (
                  <>Procesando firma...</>
                ) : (
                  <>
                    <FileCheck className="w-4 h-4" />
                    Firmar Digitalmente
                  </>
                )}
              </button>
            )}
          </div>

          {signatureSuccess && (
            <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 p-3 rounded-xl text-xs text-center font-semibold animate-fadeIn">
              ¡El recibo ha sido firmado digitalmente y guardado con éxito!
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex items-center justify-between no-print">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 px-3.5 py-2 rounded-xl hover:bg-slate-700 transition"
          >
            <Download className="w-4 h-4 text-slate-400" /> Descargar PDF Recibo
          </button>

          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-5 py-2 rounded-xl transition shadow-md"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};

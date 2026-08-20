import React from 'react';
import { GraduationCap, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b202e] border-t border-[#2c344b] text-slate-400 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center border border-blue-400/30">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-200">
              Colegio San Jorge • Portal Docente ABC
            </p>
            <p className="text-[11px] text-slate-400">
              Sistema Digital de Licencias & Recibos de Sueldo
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Firma Digital Certificada Ley N° 25.506</span>
        </div>

        <div className="text-xs text-slate-400 text-center sm:text-right">
          <p>© {new Date().getFullYear()} Colegio San Jorge. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

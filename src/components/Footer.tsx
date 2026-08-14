import React from 'react';
import { ShieldCheck, School, HelpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b202e] text-slate-400 py-8 border-t border-[#2b3348] mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-[#2b3348] pb-6 mb-6">
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/15 text-blue-300 border border-blue-500/30">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-200">Colegio San José</h4>
              <p className="text-xs text-slate-400">Dirección General de Escuelas (DGCyE)</p>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-2 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Firma Digital Certificada • Sistema de Licencias ABC</span>
          </div>

          <div className="flex items-center justify-start md:justify-end gap-4 text-xs">
            <a href="#" className="hover:text-blue-400 transition flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" /> Ayuda & Soporte
            </a>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">Versión MVP 1.2.0</span>
          </div>

        </div>

        <div className="text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Colegio San José. Gestión Administrativa Docente. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import type { License } from '../../types/license';
import { LicenseCard } from './LicenseCard';
import { Search, Plus, FileQuestion } from 'lucide-react';

interface LicenseListProps {
  licenses: License[];
  onSelectLicense: (license: License) => void;
  onOpenForm: () => void;
}

export const LicenseList: React.FC<LicenseListProps> = ({ 
  licenses, 
  onSelectLicense,
  onOpenForm 
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('todas');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredLicenses = licenses.filter((lic) => {
    const matchesStatus = filterStatus === 'todas' || lic.status === filterStatus;
    const matchesSearch = 
      lic.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lic.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lic.startDate.includes(searchTerm);

    return matchesStatus && matchesSearch;
  });

  const getStatusCount = (status: string) => {
    if (status === 'todas') return licenses.length;
    return licenses.filter(l => l.status === status).length;
  };

  return (
    <div className="space-y-6">
      
      {/* Top Controls Header */}
      <div className="bg-[#212738] p-4 sm:p-5 rounded-2xl border border-[#2c344a] shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            placeholder="Buscar por N° trámite, diagnóstico o fecha..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#181d2b] border border-[#2c344a] rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* New License Button */}
        <button
          onClick={onOpenForm}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-xl shadow-md transition text-sm shrink-0"
        >
          <Plus className="w-4 h-4" />
          Nueva Licencia
        </button>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'todas', label: 'Todas' },
          { id: 'pendiente', label: 'Pendientes' },
          { id: 'en_revision', label: 'En revisión' },
          { id: 'aprobada', label: 'Aprobadas' },
          { id: 'rechazada', label: 'Rechazadas' },
        ].map((tab) => {
          const count = getStatusCount(tab.id);
          const isActive = filterStatus === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilterStatus(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-2 border ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                  : 'bg-[#212738] text-slate-300 border-[#2c344a] hover:border-slate-600 hover:bg-[#283046]'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                isActive ? 'bg-blue-700 text-white' : 'bg-[#181d2b] text-slate-400 border border-[#2c344a]'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* License List Cards Grid */}
      {filteredLicenses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredLicenses.map((lic) => (
            <LicenseCard key={lic.id} license={lic} onSelect={onSelectLicense} />
          ))}
        </div>
      ) : (
        <div className="bg-[#212738] rounded-2xl border border-[#2c344a] p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#181d2b] text-slate-400 flex items-center justify-center mx-auto border border-[#2c344a]">
            <FileQuestion className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white">No se encontraron licencias</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            {searchTerm || filterStatus !== 'todas'
              ? 'Intenta modificar el filtro o el término de búsqueda para ver más resultados.'
              : 'Aún no has registrado ninguna solicitud de licencia médica.'}
          </p>
          {onOpenForm && (
            <button
              onClick={onOpenForm}
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-semibold bg-blue-500/10 px-3 py-2 rounded-xl border border-blue-500/30 hover:bg-blue-500/20 transition mt-2"
            >
              <Plus className="w-3.5 h-3.5" /> Registrar Primera Licencia
            </button>
          )}
        </div>
      )}

    </div>
  );
};

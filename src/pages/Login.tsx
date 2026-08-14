import React, { useState } from 'react';
import { 
  GraduationCap, 
  UserCheck, 
  Lock, 
  User, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { mockUser } from '../data/mockData';

interface LoginProps {
  onLogin: () => void;
  theme: 'dark' | 'light';
}

export const Login: React.FC<LoginProps> = ({ onLogin, theme }) => {
  const [username, setUsername] = useState('27-34567890-4');
  const [password, setPassword] = useState('••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 600);
  };

  const handleGuestLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 400);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 transition-colors duration-200 ${
      isDark ? 'bg-[#181c28] text-slate-100' : 'bg-slate-100 text-slate-900'
    }`}>
      
      {/* Container Box */}
      <div className="max-w-md w-full space-y-6">
        
        {/* Institutional Header Logo */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white shadow-xl mb-2">
            <GraduationCap className="w-10 h-10" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Colegio San José
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            Portal Oficial de Licencias & Recibos Digitales (DGCyE ABC)
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-[#212738] rounded-3xl border border-slate-200 dark:border-[#2c344a] shadow-xl p-6 sm:p-8 space-y-6">
          
          <div className="border-b border-slate-100 dark:border-[#2c344a] pb-4 text-center">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Acceso a la Plataforma
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Ingresá con tu CUIL / DNI y clave institucional
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* CUIL / Legajo */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                CUIL / DNI del Agente
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="27-XXXXXXXX-X"
                  className="w-full bg-slate-50 dark:bg-[#181d2b] border border-slate-300 dark:border-[#2c344a] rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-mono"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-[#181d2b] border border-slate-300 dark:border-[#2c344a] rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
            </div>

            {/* Standard Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
            >
              {isLoading ? 'Ingresando...' : (
                <>
                  Iniciar Sesión <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-[#2c344a]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-[#212738] px-3 text-slate-400 font-semibold">
                O Modo Demostración
              </span>
            </div>
          </div>

          {/* GUEST DEMO BUTTON */}
          <button
            type="button"
            onClick={handleGuestLogin}
            className="w-full bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 border-2 border-emerald-500/40 font-bold p-3.5 rounded-2xl transition-all shadow-sm flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-600 text-white rounded-xl shadow-xs group-hover:scale-105 transition-transform">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-extrabold block">
                  Entrar como Invitado (DEMO)
                </span>
                <span className="text-sm font-extrabold text-slate-900 dark:text-white block">
                  {mockUser.name}
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400 font-normal">
                  {mockUser.role} • Legajo {mockUser.fileNumber}
                </span>
              </div>
            </div>

            <Sparkles className="w-5 h-5 text-amber-500 shrink-0 group-hover:rotate-12 transition-transform" />
          </button>

        </div>

        {/* Security Footer Note */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Firma Digital Certificada Ley N° 25.506 • Portal San José</span>
        </div>

      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FileText, 
  Receipt, 
  User, 
  LayoutDashboard, 
  Menu, 
  X, 
  GraduationCap, 
  Bell,
  Sun,
  Moon,
  Sparkles,
  LogOut
} from 'lucide-react';
import { mockUser } from '../data/mockData';

interface HeaderProps {
  pendingPayslipsCount?: number;
  pendingLicensesCount?: number;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  pendingPayslipsCount = 0,
  pendingLicensesCount = 0,
  theme,
  onToggleTheme,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { 
      name: 'Licencias', 
      path: '/licencias', 
      icon: FileText,
      badge: pendingLicensesCount > 0 ? pendingLicensesCount : undefined
    },
    { 
      name: 'Recibos', 
      path: '/recibos', 
      icon: Receipt,
      badge: pendingPayslipsCount > 0 ? pendingPayslipsCount : undefined
    },
    { name: 'Módulos Colegio', path: '/modulos', icon: Sparkles },
    { name: 'Perfil', path: '/perfil', icon: User },
  ];

  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 shadow-md border-b ${
      isDark 
        ? 'bg-[#1e2436]/95 border-[#2c344b] text-slate-100 backdrop-blur-md' 
        : 'bg-blue-900 border-blue-800 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & School Name */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-inner group-hover:scale-105 ${
              isDark 
                ? 'bg-blue-500/20 border border-blue-400/30 text-blue-300 group-hover:bg-blue-500/30' 
                : 'bg-blue-800 border border-blue-700/60 text-white group-hover:bg-blue-700'
            }`}>
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-white leading-tight">
                Colegio San José
                <span className={`text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded border ${
                  isDark 
                    ? 'bg-blue-500/20 text-blue-300 border-blue-400/30' 
                    : 'bg-blue-600/80 text-blue-100 border-blue-500/50'
                }`}>
                  Portal ABC
                </span>
              </div>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-blue-200'}`}>
                Mis Licencias & Recibos Digitales
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30 shadow-xs'
                        : 'bg-blue-800/90 text-white font-semibold border border-blue-700/60 shadow-xs'
                      : isDark
                        ? 'text-slate-300 hover:bg-[#283046] hover:text-white'
                        : 'text-blue-100 hover:bg-blue-800/50 hover:text-white'
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {item.badge !== undefined && (
                  <span className="ml-1 bg-amber-500 text-slate-950 font-extrabold text-[11px] px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* User Quick Info & Theme Toggle */}
          <div className="flex items-center gap-3 border-l border-slate-700/60 pl-4">
            
            {/* Theme Switcher Button */}
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-semibold ${
                isDark
                  ? 'bg-[#283046] border-[#36405c] text-amber-300 hover:bg-[#303953]'
                  : 'bg-blue-800 border-blue-700 text-amber-200 hover:bg-blue-700'
              }`}
              title={isDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-300" />
                  <span className="hidden sm:inline">Claro</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-blue-200" />
                  <span className="hidden sm:inline">Oscuro</span>
                </>
              )}
            </button>

            {/* Notifications Icon */}
            <div className="relative hidden sm:block">
              <button 
                type="button" 
                className={`p-2 rounded-xl transition ${
                  isDark ? 'text-slate-300 hover:bg-[#283046] hover:text-white' : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                }`}
                title="Notificaciones"
              >
                <Bell className="w-5 h-5" />
                {(pendingPayslipsCount > 0 || pendingLicensesCount > 0) && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-[#1e2436] animate-pulse" />
                )}
              </button>
            </div>
            
            {/* User Pill */}
            <NavLink to="/perfil" className="hidden lg:flex items-center gap-2.5 group hover:opacity-90 transition">
              <div className={`w-9 h-9 rounded-full font-semibold text-xs flex items-center justify-center border shadow-xs ${
                isDark 
                  ? 'bg-blue-600/30 text-blue-300 border-blue-500/40' 
                  : 'bg-blue-700 text-white border-blue-500'
              }`}>
                MR
              </div>
              <div className="text-left leading-tight">
                <p className="text-xs font-semibold text-white group-hover:text-blue-300 transition">
                  {mockUser.name.split(' ')[1]} {mockUser.name.split(' ')[2]}
                </p>
                <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-blue-300'}`}>{mockUser.fileNumber}</p>
              </div>
            </NavLink>

            {/* Logout Button */}
            {onLogout && (
              <button
                onClick={onLogout}
                className="hidden sm:flex p-2 rounded-xl text-slate-300 hover:text-rose-400 hover:bg-slate-800/60 transition"
                title="Cerrar Sesión Demo"
              >
                <LogOut className="w-5 h-5" />
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:bg-[#283046] md:hidden"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-2 pb-4 space-y-1 ${
          isDark ? 'bg-[#181d2c] border-[#2c344b]' : 'bg-blue-950 border-blue-800'
        }`}>
          <div className="py-2 border-b border-slate-700/60 mb-2 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">{mockUser.name}</p>
              <p className="text-xs text-slate-400">{mockUser.role} • {mockUser.fileNumber}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-xl bg-[#283046] border border-[#36405c] text-amber-300 text-xs flex items-center gap-1.5"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{isDark ? 'Claro' : 'Oscuro'}</span>
              </button>

              {onLogout && (
                <button
                  onClick={onLogout}
                  className="p-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs"
                  title="Salir"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium ${
                  isActive
                    ? 'bg-blue-600/30 text-blue-300 font-semibold border border-blue-500/30'
                    : 'text-slate-300 hover:bg-[#283046] hover:text-white'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </div>
              {item.badge !== undefined && (
                <span className="bg-amber-500 text-slate-950 font-bold text-xs px-2 py-0.5 rounded-full">
                  {item.badge} pendientes
                </span>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

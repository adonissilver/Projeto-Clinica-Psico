import React from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Hourglass, 
  Calendar, 
  BarChart3, 
  Stethoscope, 
  HelpCircle, 
  LogOut, 
  Bell, 
  Settings, 
  Search,
  School,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isPatientPortal = location.pathname.startsWith('/portal');
  const isPsychologistOptions = location.pathname === '/psicologo/opcoes';
  const isAdminMaster = location.pathname === '/admin/master';
  const isDirectorDashboard = location.pathname === '/dashboard';
  const isSupervisorDashboard = location.pathname === '/supervisor/grupos';
  const isPsychologistPanel = location.pathname === '/psicologo/painel';
  const isInternDashboard = location.pathname === '/intern/dashboard';
  const isProjectCredits = location.pathname === '/admin/creditos';
  const isSelectionScreen = location.pathname === '/' || location.pathname === '/login/tradicional';

  if (isSelectionScreen || isPsychologistOptions || isAdminMaster || isDirectorDashboard || isSupervisorDashboard || isPsychologistPanel || isInternDashboard || isProjectCredits) return <Outlet />;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Hidden on Patient Portal if simple view */}
      {!isPatientPortal && (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-[#00355f]/10 flex flex-col py-8 z-50">
          <div className="px-8 mb-12 flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <School size={20} />
              </div>
              <h1 className="text-primary font-bold tracking-tight text-lg leading-tight serif">Santa Casa</h1>
            </div>
            <p className="text-[9px] text-[#00aeb5] font-bold uppercase tracking-[0.2em] mt-1 ml-13">Clínica Escola</p>
          </div>

          <nav className="flex-1 flex flex-col gap-2">
            <SidebarLink to="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <SidebarLink to="/pacientes" icon={<Users size={20} />} label="Pacientes" />
            <SidebarLink to="/fila" icon={<Hourglass size={20} />} label="Fila de Espera" />
            <SidebarLink to="/estagiario/agenda" icon={<Calendar size={20} />} label="Agenda" />
            <SidebarLink to="/supervisor/grupos" icon={<ShieldCheck size={20} />} label="Grupos (Supervisor)" />
            <SidebarLink to="/relatorios" icon={<BarChart3 size={20} />} label="Relatórios" />
            <SidebarLink to="/equipe" icon={<Stethoscope size={20} />} label="Equipe Clínica" />
          </nav>

          <div className="px-4 mt-auto pt-6 border-t border-[#00355f]/5 space-y-1">
            <SidebarLink to="/ajuda" icon={<HelpCircle size={20} />} label="Ajuda" />
            <button 
              onClick={() => navigate('/')}
              className="sidebar-link w-full text-left"
            >
              <LogOut size={20} />
              <span>Sair</span>
            </button>
          </div>
        </aside>
      )}

      {/* Main Content Area */}
      <div className={`flex-1 ${!isPatientPortal ? 'ml-64' : ''}`}>
        {/* TopBar - Hide on Patient Portal as it has its own header */}
        {!isPatientPortal && (
          <header className="h-20 bg-background/60 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-10 border-b border-[#00355f]/5">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00aeb5]/40" size={16} />
                <input 
                  type="text" 
                  placeholder="Buscar paciente ou prontuário..."
                  className="w-full bg-white/50 border border-slate-200 rounded-2xl pl-12 py-2.5 text-sm focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="p-2.5 text-[#00355f]/60 hover:bg-[#00355f]/5 rounded-xl transition-all">
                <Bell size={20} />
              </button>
              <button className="p-2.5 text-[#00355f]/60 hover:bg-[#00355f]/5 rounded-xl transition-all">
                <Settings size={20} />
              </button>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-2xl bg-secondary-container overflow-hidden border border-[#00355f]/10">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button 
                  onClick={() => navigate('/')}
                  className="p-2.5 text-error hover:bg-error/5 rounded-xl transition-all"
                  title="Sair do sistema"
                >
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </header>
        )}

        {/* Content */}
        <main className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={location.pathname}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}

function SidebarLink({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => isActive ? 'sidebar-link-active' : 'sidebar-link'}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </NavLink>
  );
}

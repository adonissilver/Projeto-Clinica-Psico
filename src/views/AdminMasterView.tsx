import React from 'react';
import { motion } from 'motion/react';
import DashboardAdminView from './DashboardAdminView';
import DashboardStaffView from './DashboardStaffView';
import GroupFormationView from './GroupFormationView';
import { ShieldAlert, ArrowLeft, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminMasterView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="h-20 bg-primary text-white flex items-center justify-between px-10 sticky top-0 z-[100] shadow-2xl shadow-primary/20">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <ShieldAlert size={24} className="text-secondary-container" />
            <h1 className="serif text-2xl font-light tracking-tight">Administrador: Visão Mestre</h1>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest">
            Modo Multi-Visão Ativo
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-2xl bg-white/20 overflow-hidden border border-white/10 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                alt="Admin Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              onClick={() => navigate('/')}
              className="p-2.5 text-white hover:bg-white/10 rounded-xl transition-all"
              title="Sair do sistema"
            >
              <LogOut size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className="p-10 space-y-32">
        <section className="animate-fade-in">
          <div className="mb-10 flex items-center gap-4">
            <span className="w-12 h-1 px-1 bg-primary rounded-full" />
            <h2 className="serif text-4xl text-[#2D2D2A]">Visão Estratégica (Diretor)</h2>
          </div>
          <DashboardAdminView />
        </section>

        <section className="pt-20 border-t border-[#5A5A40]/10">
          <div className="mb-10 flex items-center gap-4">
            <span className="w-12 h-1 px-1 bg-primary rounded-full" />
            <h2 className="serif text-4xl text-[#2D2D2A]">Visão Clínica (Staff/Estagiário)</h2>
          </div>
          <DashboardStaffView />
        </section>

        <section className="pt-20 border-t border-[#5A5A40]/10">
          <div className="mb-10 flex items-center gap-4">
            <span className="w-12 h-1 px-1 bg-primary rounded-full" />
            <h2 className="serif text-4xl text-[#2D2D2A]">Gestão de Formação (Supervisor)</h2>
          </div>
          <GroupFormationView />
        </section>
      </div>

      <footer className="p-20 text-center bg-white border-t border-[#5A5A40]/5">
        <p className="text-[10px] font-bold tracking-[0.5em] text-[#5A5A40]/40 uppercase">Acesso mestre restrito — Santa Casa Espaço Orgânico</p>
      </footer>
    </div>
  );
}

import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Stethoscope, 
  Lock, 
  ChevronRight, 
  LogOut, 
  BellRing,
  Activity,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

import { useNavigate } from 'react-router-dom';

export default function PatientPortalView() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto animate-fade-in py-12 px-6">
      <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-[40px] bg-primary flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-primary/30 relative">
            MS
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-green-500 shadow-sm">
              <Activity size={16} strokeWidth={3} />
            </div>
          </div>
          <div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] font-sans">PACIENTE ATIVO</span>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter leading-tight">Maria Helena dos Santos</h1>
            <p className="text-slate-500 font-medium italic mt-2">Desejamos que sua jornada acadêmica na Santa Casa seja acolhedora.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button className="bg-white p-4 rounded-3xl border border-slate-200 text-slate-400 hover:text-primary transition-all shadow-sm">
            <BellRing size={24} />
          </button>
          <button 
            onClick={() => navigate('/')}
            className="bg-white p-4 rounded-3xl border border-slate-200 text-error hover:bg-error/5 transition-all shadow-sm group"
            title="Sair do sistema"
          >
            <LogOut size={24} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Next Appointment Card */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="clinical-gradient p-1 bg-white rounded-[40px] shadow-2xl shadow-primary/5">
            <div className="bg-white p-12 rounded-[38px] flex flex-col md:flex-row items-center justify-between gap-12 group">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <Calendar size={32} strokeWidth={2.5} />
                  <h3 className="text-3xl font-black tracking-tight">Próxima Consulta</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter">Terça-feira</span>
                    <span className="text-xl font-bold text-slate-400 mt-1 uppercase tracking-widest">24 de out às 14:30</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-slate-600 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <MapPin size={20} className="text-primary" />
                    <span className="font-bold text-sm">Prédio Principal, 3º Andar - Sala 304</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="bg-primary/5 border-2 border-dashed border-primary/30 p-8 rounded-[32px] flex flex-col items-center text-center gap-3">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Lembrete de Confirmação</span>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">
                    Para confirmar sua presença ou avisar sobre atrasos, por favor ligue para a clínica:
                  </p>
                  <span className="text-xl font-black text-primary tracking-tighter">(11) 5555-0199</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <PortalActionCard 
              icon={<FileText size={32} />} 
              title="Meu Prontuário" 
              desc="Acesse resumos de suas últimas consultas e laudos." 
              color="bg-blue-50 text-blue-700"
            />
            <PortalActionCard 
              icon={<Stethoscope size={32} />} 
              title="Equipe de Cuidado" 
              desc="Conheça os estudantes e supervisores que cuidam de você." 
              color="bg-purple-50 text-purple-700"
            />
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-sm relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-50">
                <h4 className="font-black text-slate-900 tracking-tight uppercase text-xs tracking-[0.2em]">Equipe de Cuidado</h4>
                <Stethoscope className="text-primary" size={20} />
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Psicólogo Responsável</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">RT</div>
                    <span className="font-bold text-slate-800 text-sm">Dra. Rosa Teixeira</span>
                  </div>
                </div>

                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Estagiários</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 font-bold text-[10px]">JP</div>
                      <span className="font-bold text-slate-600 text-xs">João Pedro</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 font-bold text-[10px]">LL</div>
                      <span className="font-bold text-slate-600 text-xs">Lucas Lima</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 text-center">
                  <p className="text-sm font-bold text-primary italic leading-relaxed">
                    "Estamos aqui para caminhar ao seu lado. Cada passo que você dá é uma vitória que celebramos juntos."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 bg-slate-100 rounded-[40px] border border-slate-200 flex flex-col items-center justify-center text-center">
            <Lock className="text-slate-400 mb-6" size={40} />
            <h5 className="font-bold text-slate-800 mb-2">Dados Protegidos</h5>
            <p className="text-xs text-slate-500 font-medium leading-relaxed italic">Suas informações clínicas seguem os mais rigorosos protocolos de privacidade da Santa Casa.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortalActionCard({ icon, title, desc, color }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col items-center md:items-start text-center md:text-left">
      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${color} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h4 className="text-xl font-black text-slate-800 mb-3 tracking-tight">{title}</h4>
      <p className="text-sm font-medium text-slate-500 leading-relaxed italic">{desc}</p>
    </div>
  );
}

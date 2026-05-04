import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  User, 
  FileText,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function InternAgendaView() {
  const navigate = useNavigate();
  const [view, setView] = React.useState<'Dia' | 'Semana' | 'Mês'>('Semana');

  const trioPatients = [
    { id: '1', name: 'Maria Helena dos Santos', age: 64, status: 'Em Atendimento', nextAppt: '24 Out, 14:30' },
    { id: '2', name: 'João Ricardo Pera', age: 42, status: 'Aguardando', nextAppt: '25 Out, 09:00' },
    { id: '3', name: 'Lucia Ferraz', age: 31, status: 'Em Atendimento', nextAppt: '26 Out, 11:15' },
  ];

  const scheduleItems = [
    { time: '08:00 AM', label: 'Reunião de Trio', type: 'Acadêmico', color: 'bg-primary/5 text-primary border-primary/20' },
    { time: '09:00 AM', label: 'Atendimento: João R.', type: 'Clínico', color: 'bg-green-50 text-green-700 border-green-200' },
    { time: '11:00 AM', label: 'Supervisão Dr. Ricardo', type: 'Pedagógico', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { time: '02:30 PM', label: 'Atendimento: Maria H.', type: 'Clínico', color: 'bg-green-50 text-green-700 border-green-200' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-secondary-container text-primary text-[10px] font-black rounded-full uppercase tracking-widest border border-primary/10">Área do Internato</span>
          </div>
          <h1 className="text-5xl font-light text-primary tracking-tight mb-2 serif">Minha Agenda Clínica</h1>
          <p className="text-slate-500 font-medium italic serif">Organização de atendimentos e compromissos acadêmicos do Trio A.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-1 flex">
            {['Dia', 'Semana', 'Mês'].map((v) => (
              <button 
                key={v}
                onClick={() => setView(v as any)}
                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  view === v ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400 hover:text-primary'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <button className="bg-primary text-white px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-primary/20">
            <Plus size={18} />
            Agendar Sessão
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        {/* Main Content: Agenda */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
          <section className="glass-card rounded-[48px] overflow-hidden">
            <div className="p-8 border-b border-primary/5 flex items-center justify-between bg-white/40">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-primary/5 rounded-xl transition-colors"><ChevronLeft size={20} /></button>
                  <h3 className="serif text-2xl text-primary px-2">24 de Outubro, Terça-feira</h3>
                  <button className="p-2 hover:bg-primary/5 rounded-xl transition-colors"><ChevronRight size={20} /></button>
                </div>
              </div>
              <CalendarIcon className="text-primary/40" size={24} />
            </div>

            <div className="p-8">
              <div className="relative pl-20 space-y-8">
                {/* Time Indicators */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/10 ml-[70px]" />
                
                {scheduleItems.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-20 top-4 w-16 text-right">
                      <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest leading-none">{item.time}</span>
                    </div>
                    <div className="absolute left-[64px] top-4 w-3 h-3 rounded-full bg-white border-2 border-primary z-10" />
                    
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className={`ml-10 p-6 rounded-3xl border ${item.color} shadow-sm group cursor-pointer`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold tracking-tight">{item.label}</h4>
                        <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{item.type}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 opacity-60">
                          <Clock size={12} />
                          <span className="text-[10px] font-bold uppercase tracking-widest">60 min</span>
                        </div>
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-secondary-container border-2 border-white" />
                          <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-white" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar: Trio Patients */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <section className="glass-card rounded-[40px] p-8 border-white/40 shadow-sm relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-primary/5">
                <div>
                  <h4 className="serif text-2xl text-primary leading-none mb-1">Pacientes do Trio</h4>
                  <p className="text-[9px] font-bold text-primary/40 uppercase tracking-[0.2em]">Trio A: Ferreira, Oliveira, Mendes</p>
                </div>
                <Users className="text-primary/20" size={24} />
              </div>

              <div className="space-y-4">
                {trioPatients.map((patient) => (
                  <motion.div
                    key={patient.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => navigate('/pacientes/caso')}
                    className="p-5 bg-white/40 rounded-[28px] border border-white/60 hover:border-primary/20 transition-all cursor-pointer group/card shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-secondary-container flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-white transition-colors duration-500">
                        <User size={24} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-primary text-sm group-hover/card:text-primary transition-colors">{patient.name}</h5>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-[10px] font-semibold text-primary/60">{patient.age} Anos</span>
                          <span className={`text-[9px] font-black uppercase tracking-widest ${patient.status === 'Em Atendimento' ? 'text-primary' : 'text-amber-600'}`}>
                            {patient.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary/5 flex items-center justify-between opacity-0 group-hover/card:opacity-100 transition-opacity">
                      <span className="text-[9px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-1">
                        <FileText size={10} /> Ver Prontuário
                      </span>
                      <ArrowRight size={14} className="text-primary" />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <button className="w-full mt-8 py-4 border-2 border-dashed border-primary/10 rounded-3xl text-[10px] font-black uppercase tracking-widest text-primary/40 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
                Vincular Novo Caso
              </button>
            </div>
            
            <Users size={180} className="absolute -bottom-10 -right-10 text-primary opacity-[0.02] group-hover:scale-110 transition-transform duration-700" />
          </section>

          {/* Productivity Stats */}
          <section className="bg-primary shadow-xl shadow-primary/20 rounded-[40px] p-10 text-white relative overflow-hidden group">
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Horas de Atendimento</p>
                <h4 className="serif text-5xl font-light tracking-tighter mt-3">24.5<span className="text-xl opacity-40 ml-2">h</span></h4>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Meta do Semestre</span>
                  <span className="text-xs font-bold">48%</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-white h-full transition-all duration-1000" style={{ width: '48%' }} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

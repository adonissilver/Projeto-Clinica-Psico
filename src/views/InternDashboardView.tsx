import React from 'react';
import { 
  Calendar, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  User, 
  FileText, 
  Plus, 
  Search, 
  MoreVertical, 
  ChevronRight, 
  LogOut, 
  ArrowLeft,
  Bell,
  Lock,
  PlusCircle,
  ShieldCheck,
  Download,
  FileSearch,
  MessageSquare,
  Play,
  ClipboardCheck,
  History,
  GraduationCap,
  X,
  UserPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

type TabState = 'AGORA' | 'HOJE' | 'ESTÁGIO' | 'PACIENTES';

export default function InternDashboardView() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = React.useState<TabState>('AGORA');
  const [isFabOpen, setIsFabOpen] = React.useState(false);
  const [selectedPatient, setSelectedPatient] = React.useState<any>(null);

  // Mock Date for UI
  const today = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: '2-digit', 
    month: 'long' 
  });

  const nextAppointment = {
    patient: 'Ricardo Santos',
    complaint: 'TDAH & Foco Acadêmico',
    time: '09:00',
    countdown: '28 min',
    room: 'Sala 4',
    modality: 'Presencial',
    status: 'scheduled' as 'scheduled' | 'active' | 'waiting'
  };

  const daySchedule = [
    { time: '09:00', patient: 'Ricardo Santos', status: 'confirmado' },
    { time: '10:30', patient: 'Maria Helena', status: 'pendente' },
    { time: '14:00', patient: 'Julia Martins', status: 'confirmado' }
  ];

  const tasks = [
    { id: 't1', type: 'error', title: 'Evolução não registrada', desc: 'Sessão de ontem (Maria H.) sem registro.', time: '24h atraso' },
    { id: 't2', type: 'warn', title: 'Risco de Evasão', desc: 'Julia M. faltou às últimas 2 sessões.', time: 'Sinalizar técnico' },
    { id: 't3', type: 'info', title: 'Feedback do Supervisor', desc: 'Novas notas na evolução de 22/04.', time: 'Ontem' }
  ];

  const patients = [
    { id: '1', name: 'Maria Helena', complaint: 'Ansiedade Social', absences: 1, last: 'Há 2 dias', age: 24, phone: '(11) 98888-7766' },
    { id: '2', name: 'Ricardo Santos', complaint: 'TDAH & Foco', absences: 0, last: 'Hoje', age: 19, phone: '(11) 97777-6655' },
    { id: '3', name: 'Julia Martins', complaint: 'Conflito Familiar', absences: 2, last: '1 semana', age: 31, phone: '(11) 96666-5544' }
  ];

  const internshipData = {
    supervisor: 'Dra. Rosa Teixeira (Técnica)',
    psychologist: 'Dr. Ismar Frango Silveira (Orientador)',
    team: ['Adonis Silveira', 'Felipe Moretti', 'Geovane Guedes', 'Isaac Jesus'],
    hoursPerformed: 130,
    hoursRequired: 200,
    presences: 42,
    absences: 2,
    weeksLeft: 3
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900 pb-24">
      {/* Header Context */}
      <header className="bg-white/80 backdrop-blur-md px-6 py-4 sticky top-0 z-50 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop" 
              className="w-full h-full object-cover"
              alt="Avatar"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-xs font-black text-slate-400 uppercase tracking-widest">Estagiário Lucas</h1>
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tight capitalize">{today}</p>
          </div>
        </div>
        <div className="flex gap-2">
           <div className="relative p-2 bg-slate-50 rounded-xl">
            <Bell size={18} className="text-slate-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 border-2 border-white rounded-full" />
          </div>
          <button onClick={() => navigate('/')} className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </header>

      {/* Main Content Areas */}
      <main className="flex-1 px-6 py-6 max-w-lg mx-auto w-full">
        <AnimatePresence mode="wait">
          {/* TAB: AGORA */}
          {activeView === 'AGORA' && (
            <motion.div 
              key="agora"
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between px-2">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">AGORA</h2>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[8px] font-black uppercase tracking-widest">Em Horário Clínica</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-primary font-black text-lg">
                        {nextAppointment.patient.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-800 tracking-tight">{nextAppointment.patient}</h3>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                          {nextAppointment.modality} • {nextAppointment.room}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-primary tracking-tighter">{nextAppointment.time}</span>
                      <p className="text-[9px] font-black text-primary/40 uppercase tracking-widest leading-none">Inicia em {nextAppointment.countdown}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 mb-8">
                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Queixa Principal</p>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed italic">"{nextAppointment.complaint}"</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <button className="w-full bg-primary text-white py-5 rounded-3xl flex items-center justify-center gap-3 shadow-lg shadow-primary/20 active:scale-95 transition-all">
                      <Play size={18} fill="currentColor" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Iniciar Atendimento</span>
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-slate-50 text-slate-600 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest border border-slate-100 flex items-center justify-center gap-2">
                        <History size={14} /> Prontuário
                      </button>
                      <button className="bg-slate-50 text-slate-600 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest border border-slate-100 flex items-center justify-center gap-2">
                        <FileSearch size={14} /> Anamnese
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: HOJE */}
          {activeView === 'HOJE' && (
            <motion.div 
              key="hoje"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <section className="space-y-4">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">PENDÊNCIAS</h2>
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex gap-4 p-5 rounded-3xl bg-white border border-slate-100 shadow-sm">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        task.type === 'error' ? 'bg-rose-50 text-rose-500' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {task.type === 'error' ? <AlertCircle size={20} /> : <Clock size={20} />}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-black text-slate-800">{task.title}</p>
                        <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{task.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">AGENDA DO DIA</h2>
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-50">
                  {daySchedule.map((item, i) => (
                    <div key={i} className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-primary w-12">{item.time}</span>
                        <div>
                          <p className="text-xs font-bold text-slate-800">{item.patient}</p>
                          <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{item.status}</p>
                        </div>
                      </div>
                      <button className="p-2 text-slate-200">
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* TAB: PACIENTES */}
          {activeView === 'PACIENTES' && (
            <motion.div 
              key="pacientes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="Buscar pacientes..."
                  className="w-full bg-white border border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-xs font-bold outline-none focus:border-primary/30"
                />
              </div>

              <div className="space-y-3">
                {patients.map(p => (
                  <div 
                    key={p.id} 
                    onClick={() => setSelectedPatient(p)}
                    className="bg-white p-5 rounded-3xl border border-slate-100 flex items-center justify-between group active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary font-black text-xs">
                        {p.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-xs text-slate-900">{p.name}</h5>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest ${
                            p.absences > 1 ? 'bg-rose-100 text-rose-500' : 'bg-slate-100 text-slate-400'
                          }`}>
                            Faltas: {p.absences}/2
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-slate-200" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB: ESTÁGIO */}
          {activeView === 'ESTÁGIO' && (
            <motion.div 
              key="estagio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Progress Gauge Section */}
              <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden group h-80 flex flex-col justify-center items-center">
                <div className="flex flex-col items-center relative z-10 w-full">
                  <GaugeComponent percentage={Math.round((internshipData.hoursPerformed / internshipData.hoursRequired) * 100)} />
                  <div className="text-center">
                    <h3 className="text-2xl font-black tracking-tight">Caminho da Graduação</h3>
                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mt-1">Faltam {internshipData.weeksLeft} semanas</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
              </div>

              {/* Attendance Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-[32px] border border-slate-100 text-center">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Presenças</p>
                  <p className="text-2xl font-black text-emerald-500">{internshipData.presences}</p>
                </div>
                <div className="bg-white p-6 rounded-[32px] border border-slate-100 text-center">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Faltas</p>
                  <p className="text-2xl font-black text-rose-500">{internshipData.absences}</p>
                </div>
              </div>

              {/* Supervisor & Tech Team */}
              <section className="bg-white p-8 rounded-[40px] border border-slate-100 space-y-6 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-2">Psicólogo Técnico</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary"><ShieldCheck size={18} /></div>
                      <p className="text-xs font-bold text-slate-700">{internshipData.supervisor}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-2">Professor Orientador</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600"><GraduationCap size={18} /></div>
                      <p className="text-xs font-bold text-slate-700">{internshipData.psychologist}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <h4 className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-4">Equipe de Estagiários</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {internshipData.team.map((name, i) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100">
                          {i+1}
                        </div>
                        <p className="text-xs font-bold text-slate-600">{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FLOAT ACTION BUTTON (FAB) */}
      <div className="fixed bottom-24 right-6 z-[60]">
        <AnimatePresence>
          {isFabOpen && (
            <div className="flex flex-col gap-3 mb-4 items-end">
              <FabAction icon={<UserPlus size={18} />} label="Novo Atendimento" onClick={() => setIsFabOpen(false)} />
              <FabAction icon={<ClipboardCheck size={18} />} label="Registrar Evolução" onClick={() => setIsFabOpen(false)} />
              <FabAction icon={<Search size={18} />} label="Buscar Paciente" onClick={() => setIsFabOpen(false)} />
            </div>
          )}
        </AnimatePresence>
        <button 
          onClick={() => setIsFabOpen(!isFabOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all active:scale-90 ${
            isFabOpen ? 'bg-slate-800 text-white rotate-45' : 'bg-primary text-white shadow-primary/30'
          }`}
        >
          <Plus size={28} />
        </button>
      </div>

      {/* BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-t border-slate-100 px-8 flex items-center justify-between z-50">
        <NavButton active={activeView === 'AGORA'} icon={<Clock size={22} />} onClick={() => setActiveView('AGORA')} label="Agora" />
        <NavButton active={activeView === 'HOJE'} icon={<CheckCircle2 size={22} />} onClick={() => setActiveView('HOJE')} label="Hoje" />
        <NavButton active={activeView === 'PACIENTES'} icon={<User size={22} />} onClick={() => setActiveView('PACIENTES')} label="Pacientes" />
        <NavButton active={activeView === 'ESTÁGIO'} icon={<GraduationCap size={22} />} onClick={() => setActiveView('ESTÁGIO')} label="Estágio" />
      </nav>

      {/* Patient Detail Modal */}
      <AnimatePresence>
        {selectedPatient && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[70] bg-slate-900/40 backdrop-blur-sm p-6 flex flex-col justify-end"
          >
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              exit={{ y: "100%" }}
              className="bg-white rounded-[40px] p-10 space-y-8"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-6 items-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-[32px] flex items-center justify-center text-primary font-black text-2xl">{selectedPatient.name.charAt(0)}</div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">{selectedPatient.name}</h3>
                    <p className="text-sm font-bold text-slate-400">{selectedPatient.age} anos • {selectedPatient.phone}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedPatient(null)} className="p-3 bg-slate-50 rounded-2xl text-slate-400"><X size={20} /></button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-50 p-6 rounded-3xl">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Última Sessão</p>
                    <p className="text-sm font-bold text-slate-600">{selectedPatient.last}</p>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-3xl">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Absenteísmo</p>
                    <p className="text-sm font-bold text-rose-500">{selectedPatient.absences} faltas</p>
                 </div>
              </div>

              <div className="space-y-3">
                 <button className="w-full bg-primary text-white py-5 rounded-3xl text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20">Registrar Evolução</button>
                 <button className="w-full bg-slate-100 text-slate-600 py-5 rounded-3xl text-sm font-black uppercase tracking-widest">Ver Prontuário</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GaugeComponent({ percentage }: { percentage: number }) {
  const radius = 80;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * Math.PI;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center mb-4">
      <svg
        width={radius * 2}
        height={radius + 10}
        className="overflow-visible"
      >
        {/* Background Arc */}
        <path
          d={`M ${strokeWidth/2},${radius} A ${normalizedRadius},${normalizedRadius} 0 0 1 ${radius * 2 - strokeWidth/2},${radius}`}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Progress Arc */}
        <motion.path
          d={`M ${strokeWidth/2},${radius} A ${normalizedRadius},${normalizedRadius} 0 0 1 ${radius * 2 - strokeWidth/2},${radius}`}
          fill="none"
          stroke="currentColor"
          className={percentage > 80 ? 'text-emerald-500' : 'text-primary'}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "circOut" }}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-2 text-center">
        <span className="text-5xl font-black text-white leading-none">{percentage}%</span>
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Horas Concluídas</p>
      </div>
    </div>
  );
}

function FabAction({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <motion.button 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      onClick={onClick}
      className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-50 active:scale-95 transition-all text-left"
    >
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">{label}</span>
      <div className="text-primary">{icon}</div>
    </motion.button>
  );
}

function NavButton({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 transition-all outline-none relative ${active ? 'text-primary' : 'text-slate-300'}`}
    >
      <div className="relative">
        {icon}
        {active && (
          <motion.div 
            layoutId="navDot"
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary border-2 border-white shadow-sm"
          />
        )}
      </div>
      <span className="text-[8px] font-black uppercase tracking-widest leading-none">{label}</span>
      {active && (
        <motion.div 
           layoutId="navLine"
           className="absolute -bottom-2 w-6 h-1 bg-primary rounded-t-full"
        />
      )}
    </button>
  );
}

// Re-importing missing lucide icons or ensuring consistent use

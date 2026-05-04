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
  History,
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
  LayoutGrid,
  UserPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

type TabState = 'AGORA' | 'HOJE' | 'ESTÁGIO' | 'PACIENTES';

export default function InternDashboardView() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = React.useState<TabState>('AGORA');
  const [isFabOpen, setIsFabOpen] = React.useState(false);

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

  const tasks = [
    { id: 't1', type: 'error', title: 'Evolução não registrada', desc: 'Sessão de ontem (Maria H.) sem registro.', time: '24h atraso' },
    { id: 't2', type: 'warn', title: 'Risco de Evasão', desc: 'Julia M. faltou às últimas 2 sessões.', time: 'Sinalizar técnico' },
    { id: 't3', type: 'info', title: 'Feedback do Supervisor', desc: 'Novas notas na evolução de 22/04.', time: 'Ontem' },
    { id: 't4', type: 'warn', title: 'Autorização Pendente', desc: 'PDF de prontuário aguardando assinatura.', time: 'Há 2 dias' }
  ];

  const patients = [
    { id: '1', name: 'Maria Helena', complaint: 'Ansiedade Social', absences: 1, last: 'Há 2 dias' },
    { id: '2', name: 'Ricardo Santos', complaint: 'TDAH & Foco', absences: 0, last: 'Hoje' },
    { id: '3', name: 'Julia Martins', complaint: 'Conflito Familiar', absences: 2, last: '1 semana' }
  ];

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
      <main className="flex-1 px-6 py-6 max-w-lg mx-auto w-full space-y-8">
        
        {/* SECTION 1: AGORA */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">AGORA</h2>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-widest">No Horário</span>
            </div>
          </div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
            
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
                  <p className="text-[9px] font-black text-primary/40 uppercase tracking-widest">Inicia em {nextAppointment.countdown}</p>
                </div>
              </div>

              <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 mb-8">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Queixa Principal</p>
                <p className="text-xs font-bold text-slate-600 leading-relaxed italic">"{nextAppointment.complaint}"</p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <button className="w-full bg-primary text-white py-5 rounded-3xl flex items-center justify-center gap-3 shadow-lg shadow-primary/20 active:scale-95 transition-all group/btn">
                  <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Iniciar Atendimento</span>
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-slate-50 text-slate-600 py-4 rounded-3xl text-[9px] font-black uppercase tracking-widest border border-slate-100 flex items-center justify-center gap-2 hover:bg-white transition-all">
                    <History size={14} /> Prontuário
                  </button>
                  <button className="bg-slate-50 text-slate-600 py-4 rounded-3xl text-[9px] font-black uppercase tracking-widest border border-slate-100 flex items-center justify-center gap-2 hover:bg-white transition-all">
                    <FileSearch size={14} /> Anamnese
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: HOJE (TASKS) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">HOJE (PENDÊNCIAS)</h2>
            <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest">{tasks.length} alertas</span>
          </div>

          <div className="space-y-3">
            {tasks.map((task, idx) => (
              <motion.div 
                key={task.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`flex gap-4 p-5 rounded-[32px] bg-white border border-slate-100 shadow-sm relative group cursor-pointer active:scale-[0.98] transition-all overflow-hidden`}
              >
                <div className={`w-1.5 absolute left-0 top-4 bottom-4 rounded-full ${
                  task.type === 'error' ? 'bg-rose-500' : task.type === 'warn' ? 'bg-amber-400' : 'bg-primary'
                }`} />
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  task.type === 'error' ? 'bg-rose-50 text-rose-500' : task.type === 'warn' ? 'bg-amber-50 text-amber-500' : 'bg-primary/5 text-primary'
                }`}>
                  {task.type === 'error' ? <AlertCircle size={20} /> : task.type === 'warn' ? <Clock size={20} /> : <MessageSquare size={20} />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-0.5">
                    <h4 className="text-xs font-black text-slate-800 tracking-tight">{task.title}</h4>
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{task.time}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{task.desc}</p>
                </div>
                <div className="flex items-center text-slate-200 group-hover:text-primary transition-colors">
                  <ChevronRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: ESTÁGIO (GAUGE) */}
        <section className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">ESTÁGIO</h2>
          <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden group">
            {/* Speedometer Gauge Mock */}
            <div className="flex flex-col items-center relative z-10">
              <GaugeComponent percentage={65} />
              
              <div className="text-center mt-6">
                <h3 className="text-xl font-black tracking-tight">Caminho do Sucesso</h3>
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mt-1">Status: No Prazo</p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full mt-8">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                  <p className="text-[20px] font-black text-white">42</p>
                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Sessões Realizadas</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                  <p className="text-[20px] font-black text-white">18</p>
                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Faltam (Sem.)</p>
                </div>
              </div>
            </div>
            
            {/* Decor */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
          </div>
        </section>

        {/* SECTION 4: PACIENTES & SUPERVISÃO */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">PACIENTES ATIVOS</h2>
            <button className="text-[9px] font-black text-primary uppercase tracking-widest">Ver Todos</button>
          </div>
          
          <div className="space-y-3">
            {patients.map(p => (
              <div key={p.id} className="bg-white p-5 rounded-3xl border border-slate-100 flex items-center justify-between group active:scale-[0.98] transition-all">
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
                      <span className="text-[9px] text-slate-300 font-medium">• Úl: {p.last}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 text-slate-300 hover:text-primary transition-colors"><PlusCircle size={18} /></button>
                  <button className="p-2 text-slate-300 hover:text-primary transition-colors"><ChevronRight size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* SECTION 5: SUPERVISÃO REQUESTS */}
        <section className="bg-primary/5 p-8 rounded-[40px] border border-primary/10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={20} className="text-primary" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Solicitar Avaliação Técnica</h3>
          </div>
          <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6">Envie arquivos para conferência ou solicite a emissão de laudos oficiais pelo psicólogo técnico.</p>
          <div className="flex gap-3 overflow-hidden h-14">
            <button className="flex-1 bg-white border border-slate-100 rounded-2xl flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50">
              <Download size={14} /> PDF Prontuário
            </button>
            <button className="flex-1 bg-white border border-slate-100 rounded-2xl flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50">
              <FileSearch size={14} /> Teste Psicol.
            </button>
          </div>
        </section>

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
        <NavButton active={activeView === 'ESTÁGIO'} icon={<CheckCircle2 size={22} />} onClick={() => setActiveView('ESTÁGIO')} label="Estágio" />
      </nav>
    </div>
  );
}

function GaugeComponent({ percentage }: { percentage: number }) {
  const radius = 90;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * (circumference / 2);

  return (
    <div className="relative w-48 h-32 flex flex-col items-center">
      <svg height={radius} width={radius * 2} className="absolute top-0 overflow-visible">
        {/* Background Arc */}
        <circle
          stroke="rgba(255,255,255,0.05)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 2} ${circumference}`}
          style={{ strokeDashoffset: 0 }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(180 ${radius} ${radius})`}
        />
        {/* Progress Arc */}
        <motion.circle
          initial={{ strokeDashoffset: circumference / 2 }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "circOut" }}
          stroke="currentColor"
          className={percentage > 80 ? 'text-emerald-500' : percentage > 50 ? 'text-primary' : 'text-amber-500'}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 2} ${circumference}`}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(180 ${radius} ${radius})`}
        />
      </svg>
      <div className="absolute top-4 text-center">
        <span className="text-4xl font-black text-white">{percentage}%</span>
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Concluído</p>
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
      className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-50 active:scale-95 transition-all"
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
      className={`flex flex-col items-center gap-1.5 transition-all ${active ? 'text-primary' : 'text-slate-300'}`}
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
      <span className="text-[8px] font-black uppercase tracking-widest">{label}</span>
      {active && (
        <motion.div 
          layoutId="tabUnderline"
          className="absolute bottom-0 w-8 h-1 bg-primary rounded-t-full"
        />
      )}
    </button>
  );
}

function GridIcon({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="7" height="7" x="3" y="3" rx="2" />
      <rect width="7" height="7" x="14" y="3" rx="2" />
      <rect width="7" height="7" x="14" y="14" rx="2" />
      <rect width="7" height="7" x="3" y="14" rx="2" />
    </svg>
  );
}

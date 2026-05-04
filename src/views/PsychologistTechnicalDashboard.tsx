import React from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Calendar as CalendarIcon, 
  User, 
  History, 
  FileText, 
  Shield, 
  ArrowLeft, 
  LogOut, 
  ChevronRight, 
  Clock, 
  AlertCircle, 
  PlusCircle, 
  Download, 
  Eye, 
  Paperclip, 
  MoreHorizontal,
  LayoutGrid,
  ClipboardList,
  Lock,
  ArrowUpRight,
  Stethoscope
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

type TabType = 'Gestão' | 'Clínico' | 'Controle';

export default function PsychologistTechnicalDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState<TabType>('Gestão');
  const [selectedPatientId, setSelectedPatientId] = React.useState<string | null>('1');

  // Mock data for Gestão
  const waitingPatients = [
    { id: '101', name: 'Alvaro Juarez', type: 'Ansiedade', priority: 'Alta', age: 24 },
    { id: '102', name: 'Beatriz Costa', type: 'Autismo', priority: 'Média', age: 8 },
    { id: '103', name: 'Carlos Santos', type: 'Depressão', priority: 'Baixa', age: 45 }
  ];

  const scheduleSlots = [
    { time: '08:00', patient: 'Maria Silva', intern: 'João P.', supervisor: 'Dra. Rosa' },
    { time: '09:00', patient: 'Pedro Ramos', intern: 'Carla L.', supervisor: 'Dra. Rosa' },
    { time: '10:00', patient: null, intern: null, supervisor: null },
    { time: '11:00', patient: 'Ana Julia', intern: 'Mendes F.', supervisor: 'Dr. Thomas' }
  ];

  // Mock data for Clínico
  const historicalNotes = [
    { date: '22 Abr 2024', summary: 'Paciente apresentou melhora no controle de impulsos.' },
    { date: '15 Abr 2024', summary: 'Sessão focada em técnicas de respiração e ancoragem.' },
    { date: '08 Abr 2024', summary: 'Relatou crise de ansiedade moderada durante a semana.' }
  ];

  // Mock data for Controle
  const auditLogs = [
    { user: 'Estagiário João P.', action: 'Criou evolução', time: '10:45', date: 'Hoje' },
    { user: 'Psicólogo Técnico', action: 'Liberou prontuário #452', time: '09:12', date: 'Hoje' },
    { user: 'Sistema', action: 'PDF exportado - Relatório Mensal', time: 'Ontem', date: '23 Abr' },
    { user: 'Dra. Rosa', action: 'Validou alta de paciente', time: 'Ontem', date: '23 Abr' }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      {/* Top Context Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/')}
              className="p-2.5 hover:bg-slate-50 rounded-xl text-slate-400 transition-all border border-transparent hover:border-slate-100"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Stethoscope size={20} />
              </div>
              <div>
                <h1 className="text-sm font-black uppercase tracking-widest text-primary">Psicólogo Técnico</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Painel Operacional</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 bg-slate-50 px-5 py-2 rounded-2xl border border-slate-100">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-900">Paciente em Contexto</p>
              <p className="text-[10px] font-medium text-slate-500">Maria Silva (Ativo)</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
              MS
            </div>
          </div>

          <button 
            onClick={() => navigate('/')}
            className="p-3 text-error hover:bg-error/5 rounded-2xl transition-all"
          >
            <LogOut size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {(['Gestão', 'Clínico', 'Controle'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 pt-2 text-sm font-bold uppercase tracking-[0.2em] relative transition-all ${
                  activeTab === tab ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab === 'Gestão' && <LayoutGrid size={14} className="inline mr-2 -mt-0.5" />}
                {tab === 'Clínico' && <ClipboardList size={14} className="inline mr-2 -mt-0.5" />}
                {tab === 'Controle' && <Lock size={14} className="inline mr-2 -mt-0.5" />}
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="psyActiveTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'Gestão' && (
            <motion.div 
              key="gestao"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Left Panel: Queue */}
              <div className="lg:col-span-3 space-y-4">
                <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Fila de Espera</h3>
                    <Filter size={16} className="text-slate-400" />
                  </div>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                    <input 
                      type="text" 
                      placeholder="Filtrar..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-3 py-2 text-xs outline-none focus:border-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    {waitingPatients.map(p => (
                      <button 
                        key={p.id}
                        className="w-full text-left p-3 rounded-2xl border border-slate-50 hover:border-primary/20 hover:bg-primary/5 transition-all group"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-xs text-slate-700">{p.name}</span>
                          <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-full ${
                            p.priority === 'Alta' ? 'bg-error/10 text-error' : 'bg-slate-100 text-slate-400'
                          }`}>
                            {p.priority}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-medium">{p.type} • {p.age} anos</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Panel: Agenda */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Grade de Agenda</h3>
                    <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                      <button className="px-3 py-1.5 bg-white text-[10px] font-bold rounded-lg shadow-sm">Dia</button>
                      <button className="px-3 py-1.5 text-[10px] font-bold text-slate-400">Semana</button>
                    </div>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {scheduleSlots.map((slot, i) => (
                      <div key={i} className="flex group hover:bg-slate-50/50 transition-colors">
                        <div className="w-20 p-6 text-right border-r border-slate-50">
                          <span className="text-xs font-black text-slate-400">{slot.time}</span>
                        </div>
                        <div className="flex-1 p-4">
                          {slot.patient ? (
                            <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex justify-between items-center">
                              <div>
                                <p className="text-xs font-bold text-slate-700">{slot.patient}</p>
                                <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                                  <User size={10} /> {slot.intern} • <Shield size={10} /> {slot.supervisor}
                                </p>
                              </div>
                              <button className="p-2 text-slate-300 hover:text-primary transition-colors">
                                <MoreHorizontal size={18} />
                              </button>
                            </div>
                          ) : (
                            <button className="w-full py-4 border-2 border-dashed border-slate-100 rounded-2xl text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:border-primary/20 hover:text-primary transition-all">
                              + Alocar Horário
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel: Details */}
              <div className="lg:col-span-3 space-y-4">
                <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center text-primary font-black text-xl">
                      MS
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Maria Silva</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ativo • ID: 452</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Idade</span>
                      <span className="font-bold">42 anos</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Faltas</span>
                      <span className="font-bold text-error">2 (Mês)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Estagiário</span>
                      <span className="font-bold">João P.</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-primary text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">
                      Alocar Paciente
                    </button>
                    <button className="w-full bg-white border border-slate-200 text-slate-600 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">
                      Substituir
                    </button>
                    <button className="w-full text-error text-[10px] font-black uppercase tracking-widest hover:bg-error/5 py-3 rounded-xl transition-all">
                      Marcar Falta
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Clínico' && (
            <motion.div 
              key="clinico"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Main Content: Info & Editor */}
              <div className="lg:col-span-9 space-y-6">
                <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <h2 className="text-2xl font-black text-slate-800">Evolução Clínica</h2>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[9px] font-black uppercase tracking-widest rounded-full flex items-center gap-1.5">
                        <AlertCircle size={12} /> Alerta: Risco de Abandono
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-100 transition-all">
                        <User size={14} /> Usar Modelo
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary/20 transition-all">
                        <ArrowUpRight size={14} /> Gerar com IA
                      </button>
                    </div>
                  </div>

                  <div className="min-h-[400px] w-full bg-slate-50/30 rounded-3xl border-2 border-slate-100 p-8 focus-within:border-primary/20 transition-all">
                    <textarea 
                      placeholder="Comece a digitar o registro clínico..."
                      className="w-full h-full bg-transparent border-none outline-none resize-none text-slate-700 leading-relaxed font-medium"
                    />
                  </div>

                  <div className="mt-8 flex justify-between items-center border-t border-slate-100 pt-8">
                    <p className="text-[10px] italic text-slate-400">* Registros salvos são imutáveis e auditados.</p>
                    <button className="bg-primary text-white px-10 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-95">
                      Salvar Evolução
                    </button>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Documentação & Anexos</h3>
                    <button className="text-primary p-2 hover:bg-primary/5 rounded-xl transition-all">
                      <PlusCircle size={20} />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Laudo_Psicologico.pdf', 'Encaminhamento_Escolar.png', 'Termo_Compromisso.pdf'].map((doc, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <Paperclip size={16} className="text-slate-400 group-hover:text-primary" />
                          <span className="text-[11px] font-bold text-slate-600 truncate max-w-[120px]">{doc}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-1.5 text-slate-400 hover:text-primary"><Eye size={14} /></button>
                          <button className="p-1.5 text-slate-400 hover:text-primary"><Download size={14} /></button>
                        </div>
                      </div>
                    ))}
                    <label className="border-2 border-dashed border-slate-100 rounded-2xl p-4 flex flex-col items-center justify-center text-slate-300 hover:border-primary/20 hover:text-primary cursor-pointer transition-all">
                      <Paperclip size={16} className="mb-1" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Anexar Novo</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Side Panel: History */}
              <div className="lg:col-span-3 space-y-6">
                <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <History size={16} className="text-primary" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Histórico Recente</h3>
                  </div>
                  <div className="space-y-4">
                    {historicalNotes.map((note, i) => (
                      <div key={i} className="relative pl-4 border-l border-slate-100 pb-4 last:pb-0">
                        <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-slate-200" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{note.date}</span>
                        <p className="text-[11px] text-slate-600 font-medium leading-relaxed mt-1">{note.summary}</p>
                      </div>
                    ))}
                    <button className="w-full text-primary text-[10px] font-black uppercase tracking-[0.2em] pt-4 border-t border-slate-50 flex items-center justify-center gap-2 hover:gap-3 transition-all">
                      Ver tudo <ChevronRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="bg-slate-900 p-6 rounded-[32px] border border-slate-800 shadow-xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                    <FileText size={80} className="text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2">Anamnese</h4>
                    <p className="text-slate-400 text-[10px] leading-relaxed mb-6">Visualização restrita do histórico base do paciente.</p>
                    <button className="w-full bg-white/10 text-white border border-white/20 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all">
                      Visualizar Completa
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'Controle' && (
            <motion.div 
              key="controle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Main Content: Audit Log */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest">Trilha de Auditoria</h2>
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                      <input 
                        type="text" 
                        placeholder="Buscar por estudante, data..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-3 py-2.5 text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-0 relative">
                    <div className="absolute left-[33px] top-0 bottom-0 w-px bg-slate-100" />
                    {auditLogs.map((log, i) => (
                      <div key={i} className="flex gap-6 items-center p-4 hover:bg-slate-50/50 rounded-2xl transition-all relative">
                        <div className="w-16 text-right">
                          <p className="text-[10px] font-black text-slate-400">{log.date}</p>
                          <p className="text-[10px] font-medium text-slate-300">{log.time}</p>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-primary border-4 border-white shadow-sm relative z-10" />
                        <div className="flex-1">
                          <p className="text-xs font-bold text-slate-700">{log.user}</p>
                          <p className="text-[10px] text-slate-500">{log.action}</p>
                        </div>
                        <ArrowUpRight size={14} className="text-slate-200" />
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-8 py-4 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-2xl border border-slate-100 hover:bg-slate-100 transition-all">
                    Carregar Registros Anteriores
                  </button>
                </div>
              </div>

              {/* Side Panel: Actions */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Administração de Prontuário</h3>
                  <div className="space-y-4">
                    <ActionButton icon={<Eye size={18} />} label="Liberar para Revisão" desc="Acesso temporário para auditores externos" />
                    <ActionButton icon={<Download size={18} />} label="Gerar PDF Certificado" desc="Exportação com assinatura digital ICP-Brasil" />
                    <ActionButton icon={<Clock size={18} />} label="Histórico de Acessos" desc="Visualizar quem abriu este arquivo" />
                  </div>
                </div>

                <div className="bg-error/5 p-8 rounded-[40px] border border-error/10">
                  <div className="flex items-center gap-3 text-error mb-4">
                    <AlertCircle size={24} />
                    <h4 className="font-black text-xs uppercase tracking-widest">Solicitações Pendentes</h4>
                  </div>
                  <p className="text-[11px] text-error/70 font-medium leading-relaxed mb-6">Há 2 solicitações de exportação de dados aguardando sua aprovação técnica.</p>
                  <button className="w-full bg-error text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-error/20">
                    Resolver Solicitações
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function ActionButton({ icon, label, desc }: { icon: React.ReactNode, label: string, desc: string }) {
  return (
    <button className="w-full text-left p-4 rounded-3xl border border-slate-50 hover:border-primary/20 hover:bg-primary/5 transition-all group">
      <div className="flex items-center gap-3 mb-1">
        <div className="text-slate-300 group-hover:text-primary transition-colors">
          {icon}
        </div>
        <span className="text-xs font-bold text-slate-700">{label}</span>
      </div>
      <p className="text-[10px] text-slate-400 font-medium leading-relaxed pl-7">{desc}</p>
    </button>
  );
}

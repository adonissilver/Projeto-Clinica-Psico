import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Users, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  X,
  User,
  BookOpen,
  Calendar,
  ChevronDown,
  Trash2,
  Copy,
  Edit2,
  ArrowRight,
  Maximize2,
  Stethoscope,
  ArrowLeft,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface Student {
  id: string;
  name: string;
  semester: string;
}

interface Group {
  id: string;
  name: string;
  psychologist: string;
  students: Student[];
  day: string;
  time: string;
  theme: string;
  status: 'Completo' | 'Incompleto';
}

export default function SupervisorGroupView() {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Tab states for modal
  const [newGroup, setNewGroup] = React.useState({
    name: '',
    psychologist: '',
    theme: '',
    students: [] as Student[],
    slots: [] as string[],
    observations: ''
  });

  const [groups, setGroups] = React.useState<Group[]>([
    {
      id: '1',
      name: 'Grupo A - Terapia Cognitiva',
      psychologist: 'Dra. Ana Silva',
      students: [
        { id: 's1', name: 'Maria Santos', semester: '7º Semestre' },
        { id: 's2', name: 'João Oliveira', semester: '8º Semestre' },
        { id: 's3', name: 'Carla Lima', semester: '7º Semestre' }
      ],
      day: 'Segunda',
      time: '08:00 - 09:00',
      theme: 'Terapia Cognitivo-Comportamental',
      status: 'Completo'
    },
    {
      id: '2',
      name: 'Grupo B - Psicanálise Infantil',
      psychologist: 'Dr. Roberto Costa',
      students: [
        { id: 's4', name: 'Pedro Souza', semester: '9º Semestre' },
        { id: 's5', name: 'Julia Martins', semester: '9º Semestre' }
      ],
      day: 'Quarta',
      time: '14:00 - 15:00',
      theme: 'Psicanálise Lacaniana',
      status: 'Incompleto'
    }
  ]);

  const filteredGroups = groups.filter(g => 
    g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.psychologist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    g.students.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSave = () => {
    const group: Group = {
      id: Math.random().toString(36).substr(2, 9),
      name: newGroup.name,
      psychologist: newGroup.psychologist,
      theme: newGroup.theme,
      students: newGroup.students,
      day: newGroup.slots[0] || 'A definir',
      time: '08:00 - 09:00', // Simplified for demo
      status: newGroup.students.length === 3 ? 'Completo' : 'Incompleto'
    };
    setGroups([...groups, group]);
    setIsModalOpen(false);
    setNewGroup({ name: '', psychologist: '', theme: '', students: [], slots: [], observations: '' });
  };

  return (
    <div className="max-w-5xl mx-auto pb-20 p-8">
      {/* System Header */}
      <header className="flex justify-between items-center mb-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest group"
        >
          <div className="p-2 bg-white rounded-xl border border-slate-200 group-hover:border-primary/20 shadow-sm transition-all">
            <ArrowLeft size={16} />
          </div>
          <span>Retornar</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-primary">Supervisor Acadêmico</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Painel de Grupos</p>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-secondary-container overflow-hidden border border-primary/10 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" 
              alt="Supervisor Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button 
            onClick={() => navigate('/')}
            className="p-3 text-error hover:bg-error/5 rounded-2xl transition-all border border-transparent hover:border-error/10"
            title="Sair do sistema"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md pt-4 pb-6 mb-8 border-b border-slate-100">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar aluno, grupo ou psicólogo..."
              className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:ring-4 focus:ring-primary/10 transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`p-3.5 rounded-2xl border transition-all ${isFilterOpen ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
            >
              <Filter size={20} />
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-xl shadow-primary/20"
            >
              <Plus size={18} />
              Criar Grupo
            </button>
          </div>
        </div>

        {/* Filter Panel (Collapsible) */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
                <FilterSelect label="Psicólogo" options={['Todos', 'Dra. Ana', 'Dr. Roberto']} />
                <FilterSelect label="Semestre" options={['Todos', '7º', '8º', '9º']} />
                <FilterSelect label="Tema" options={['Todos', 'TCC', 'Psicanálise']} />
                <FilterSelect label="Status" options={['Todos', 'Completo', 'Incompleto']} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Group List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredGroups.map((group) => (
          <div key={group.id}>
            <GroupCard group={group} />
          </div>
        ))}
      </div>

      {/* Create Group Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between p-8 border-b border-slate-100">
                <div>
                  <h2 className="serif text-3xl text-primary">Criar Novo Grupo</h2>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Configuração de Trios e Horários</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 hover:bg-slate-50 rounded-2xl transition-colors text-slate-400"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 overflow-y-auto flex-1 space-y-10">
                {/* Section 1: Basic Info */}
                <section>
                  <SectionLabel icon={<BookOpen size={16} />} text="Informações Básicas" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <InputField 
                      label="Nome do Grupo" 
                      placeholder="Ex: Grupo C - Infantil" 
                      value={newGroup.name}
                      onChange={(val) => setNewGroup({...newGroup, name: val})}
                    />
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Psicólogo</label>
                      <div className="relative">
                        <select 
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm appearance-none focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                          value={newGroup.psychologist}
                          onChange={(e) => setNewGroup({...newGroup, psychologist: e.target.value})}
                        >
                          <option value="">Selecionar Psicólogo</option>
                          <option value="Dra. Ana Silva">Dra. Ana Silva</option>
                          <option value="Dr. Roberto Costa">Dr. Roberto Costa</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <InputField 
                      label="Tema do Grupo" 
                      placeholder="Ex: Abordagem Humanista" 
                      value={newGroup.theme}
                      onChange={(val) => setNewGroup({...newGroup, theme: val})}
                    />
                  </div>
                </section>

                {/* Section 2: Students */}
                <section>
                  <div className="flex justify-between items-end mb-4">
                    <SectionLabel icon={<Users size={16} />} text="Alunos (Trios)" />
                    <span className={`text-[10px] font-black uppercase tracking-widest ${newGroup.students.length === 3 ? 'text-primary' : 'text-slate-400'}`}>
                      {newGroup.students.length}/3 Selecionados
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      disabled={newGroup.students.length >= 3}
                      placeholder={newGroup.students.length >= 3 ? "Limite atingido" : "Buscar aluno por nome..."}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {newGroup.students.map((s, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 animate-fade-in">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary border border-slate-100">
                            <User size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{s.name}</p>
                            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{s.semester}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setNewGroup({...newGroup, students: newGroup.students.filter((_, i) => i !== idx)})}
                          className="text-slate-300 hover:text-error transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => {
                      if(newGroup.students.length < 3) {
                        setNewGroup({...newGroup, students: [
                          ...newGroup.students, 
                          { id: Math.random().toString(), name: 'Aluno Sugerido', semester: '8º Semestre' }
                        ]});
                      }
                    }}
                    className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
                  >
                    Preencher automaticamente
                  </button>
                </section>

                {/* Section 3: Schedule */}
                <section>
                  <SectionLabel icon={<Calendar size={16} />} text="Horário Sugerido" />
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Segunda 08:00', 'Segunda 14:00', 'Terça 09:00', 'Quarta 10:00', 'Quinta 11:00', 'Sexta 15:00'].map((slot) => (
                      <button 
                        key={slot}
                        onClick={() => {
                          const slots = newGroup.slots.includes(slot) 
                            ? newGroup.slots.filter(s => s !== slot)
                            : [...newGroup.slots, slot];
                          setNewGroup({...newGroup, slots});
                        }}
                        className={`px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                          newGroup.slots.includes(slot)
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-white border border-slate-200 text-slate-500 hover:border-primary/40'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Section 4: Observations */}
                <section>
                  <SectionLabel icon={<Edit2 size={16} />} text="Observações Opcionais" />
                  <textarea 
                    rows={3}
                    placeholder="Notas extras sobre o grupo ou perfil dos alunos..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-6 py-4 mt-4 text-sm focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none"
                    value={newGroup.observations}
                    onChange={(e) => setNewGroup({...newGroup, observations: e.target.value})}
                  />
                </section>
              </div>

              <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex gap-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-5 rounded-3xl font-bold text-xs uppercase tracking-widest text-slate-400 hover:text-slate-600 transition-all"
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleSave}
                  className="flex-[2] bg-primary text-white py-5 rounded-3xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.98]"
                >
                  Salvar Grupo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionLabel({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="text-primary">{icon}</div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{text}</span>
    </div>
  );
}

function InputField({ label, placeholder, value, onChange }: any) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-4 focus:ring-primary/5 transition-all outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function FilterSelect({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative">
        <select className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs font-semibold appearance-none focus:ring-4 focus:ring-primary/5 transition-all outline-none text-slate-700">
          {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={14} />
      </div>
    </div>
  );
}

function GroupCard({ group }: { group: Group }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group/card"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="serif text-2xl text-slate-900 group-hover/card:text-primary transition-colors">{group.name}</h3>
            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 ${
              group.status === 'Completo' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
            }`}>
              {group.status === 'Completo' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
              {group.status}
            </span>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                <Stethoscope size={16} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Responsável</p>
                <p className="text-xs font-bold text-slate-700">{group.psychologist}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Horário</p>
                <p className="text-xs font-bold text-slate-700">{group.day}, {group.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                <BookOpen size={16} />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Tema</p>
                <p className="text-xs font-bold text-slate-700">{group.theme}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-6 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
          <div className="flex -space-x-3">
            {group.students.map((s, idx) => (
              <div key={idx} className="w-10 h-10 rounded-2xl bg-secondary-container border-2 border-white flex items-center justify-center text-primary text-[10px] font-black group-hover/card:bg-primary group-hover/card:text-white transition-colors cursor-help" title={`${s.name} - ${s.semester}`}>
                {s.name.charAt(0)}
              </div>
            ))}
            {group.students.length < 3 && (
              <div className="w-10 h-10 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                <Plus size={14} />
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"><Edit2 size={18} /></button>
            <button className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"><Copy size={18} /></button>
            <button className="p-2.5 text-slate-400 hover:text-error hover:bg-error/5 rounded-xl transition-all"><Trash2 size={18} /></button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import React from 'react';
import { 
  Users, 
  Info, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  X,
  PlayCircle
} from 'lucide-react';

export default function GroupFormationView() {
  const [capacity, setCapacity] = React.useState(8);

  const patients = [
    { id: '44920', name: 'Marco Aurélio', initials: 'MA', wait: '42 Dias', priority: 'Alta', adherence: 95, color: 'bg-blue-100 text-blue-700' },
    { id: '44931', name: 'Lucia Silva', initials: 'LS', wait: '18 Dias', priority: 'Padrão', adherence: 82, color: 'bg-purple-100 text-purple-700' },
    { id: '44955', name: 'Ricardo J.', initials: 'RJ', wait: '65 Dias', priority: 'Alta', adherence: 90, color: 'bg-amber-100 text-amber-700' },
    { id: '45001', name: 'Beatriz Nunes', initials: 'BN', wait: '5 Dias', priority: 'Padrão', adherence: 60, color: 'bg-blue-100 text-blue-700' }
  ];

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Formação de Grupos Clínicos</h1>
          <p className="text-slate-500 font-medium italic">Construa coortes de estudantes e filtre as listas de espera para atribuição otimizada de pacientes.</p>
        </div>
        <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-95 transition-all shadow-xl shadow-primary/20 active:scale-95 leading-none">
          <PlayCircle size={20} />
          Inicializar Grupo
        </button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Form */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <section className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
              <h4 className="font-bold text-slate-800">Definição da Coorte</h4>
              <Info className="text-slate-400" size={18} />
            </div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Semestre Acadêmico</label>
                <select className="w-full bg-slate-50 border-none rounded-xl font-bold text-sm px-4 py-3.5 focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer">
                  <option>7º Semestre</option>
                  <option>8º Semestre</option>
                  <option>9º Semestre (Internato)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Área Temática</label>
                <select className="w-full bg-slate-50 border-none rounded-xl font-bold text-sm px-4 py-3.5 focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer">
                  <option>Avaliação Psicológica</option>
                  <option>Terapia Cognitivo-Comportamental</option>
                  <option>Neuropsicologia Clínica</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Atribuição de Supervisor</label>
                <div className="flex items-center gap-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&q=80" alt="Supervisor" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Dra. Elena Rodriguez</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PhD, Psicologia Clínica</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Capacidade</label>
                  <span className="font-black text-primary text-sm">{capacity.toString().padStart(2, '0')} Alunos</span>
                </div>
                <input 
                  type="range" 
                  min="1" max="15" 
                  value={capacity} 
                  onChange={(e) => setCapacity(parseInt(e.target.value))}
                  className="w-full accent-primary h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer"
                />
              </div>
            </div>
          </section>

          {/* Quick Context Stats */}
          <section className="bg-primary/5 border border-primary/10 rounded-2xl p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="font-bold text-primary text-sm mb-6 uppercase tracking-widest opacity-80">Contexto da Fila de Espera</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-black text-primary tracking-tighter">248</span>
                  <span className="text-[10px] font-black text-primary/60 uppercase tracking-[0.2em] mb-1">Total Pendente</span>
                </div>
                <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full transition-all duration-1000" style={{ width: '65%' }} />
                </div>
                <p className="text-xs font-bold text-primary/70 leading-relaxed italic">
                  65% dos pacientes atendem aos critérios de "Avaliação Psicológica".
                </p>
              </div>
            </div>
            <Users size={180} className="absolute -bottom-10 -right-10 text-primary opacity-[0.03] group-hover:scale-110 transition-transform duration-700" />
          </section>
        </div>

        {/* Right Content */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <section className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-8 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-bold text-slate-900 border-l-4 border-primary pl-4">Triagem: Lista de Espera em Avaliação Psicológica</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2 pl-5">Filtrando para a Coorte do 7º Semestre</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  <input 
                    type="text" 
                    className="pl-12 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-xs font-bold focus:ring-4 focus:ring-primary/10 w-48"
                    placeholder="Filtrar ID..."
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 transition-all">
                  <Filter size={14} />
                  Avançado
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <th className="px-8 py-5">Informação do Paciente</th>
                    <th className="px-8 py-5">Tempo de Espera</th>
                    <th className="px-8 py-5">Prioridade Clínica</th>
                    <th className="px-8 py-5">Aderência à Categoria</th>
                    <th className="px-8 py-5 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {patients.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-xs shadow-sm ${p.color}`}>
                            {p.initials}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-sm">{p.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 tabular-nums uppercase">ID: #{p.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-sm font-bold text-slate-600 italic">{p.wait}</td>
                      <td className="px-8 py-5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border ${
                          p.priority === 'Alta' ? 'bg-error/5 text-error border-error/10' : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}>
                          {p.priority === 'Alta' ? 'Alta Prioridade' : 'Padrão'}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${p.adherence > 80 ? 'bg-green-500' : 'bg-amber-500'}`} style={{ width: `${p.adherence}%` }} />
                          </div>
                          <span className={`text-[11px] font-black ${p.adherence > 80 ? 'text-green-600' : 'text-amber-600'}`}>{p.adherence}%</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="bg-primary text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 shadow-md shadow-primary/10">
                          Selecionar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-8 py-6 bg-slate-50/50 flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Exibindo 4 de 248 pacientes</span>
              <div className="flex items-center gap-1.5">
                <PaginationBtn icon={<ChevronLeft size={16} />} />
                <PaginationBtn label="1" active />
                <PaginationBtn label="2" />
                <PaginationBtn label="3" />
                <PaginationBtn icon={<ChevronRight size={16} />} />
              </div>
            </div>
          </section>

          {/* Selected Preview */}
          <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-bold text-slate-800">Visualização da Coorte: Pacientes Selecionados (3/{capacity})</h4>
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">Em Progresso</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Marco Aurélio', 'Lucia Silva', 'Ricardo J.'].map(name => (
                <div key={name} className="p-4 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-between hover:border-primary/50 transition-all group">
                  <span className="text-sm font-black text-slate-700">{name}</span>
                  <button className="text-slate-300 hover:text-error transition-colors"><X size={16} /></button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function PaginationBtn({ label, icon, active }: any) {
  return (
    <button className={`w-9 h-9 flex items-center justify-center rounded-xl font-bold text-xs transition-all ${
      active ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-110' : 'bg-white border border-slate-200 text-slate-400 hover:border-primary hover:text-primary'
    }`}>
      {label || icon}
    </button>
  );
}

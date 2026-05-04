import React from 'react';
import { 
  AlertCircle, 
  MoreVertical, 
  Group, 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  TrendingUp,
  School,
  FileText,
  User,
  Activity,
  UserPlus
} from 'lucide-react';
import { Patient } from '../types';

export default function DashboardStaffView() {
  const waitingPatients: Patient[] = [
    { id: '1', name: 'Arnaldo Silveira', age: 45, gender: 'Masculino', complaint: 'Autismo', waitTime: '42 Dias', status: 'Urgente', priority: 'Alta', adherence: 95 },
    { id: '2', name: 'Beatriz Nunes', age: 28, gender: 'Feminino', complaint: 'Psicoterapia', waitTime: '15 Dias', status: 'Normal', priority: 'Padrão', adherence: 82 },
    { id: '3', name: 'Carlos Eduardo', age: 34, gender: 'Masculino', complaint: 'Autismo', waitTime: '68 Dias', status: 'Crítico', priority: 'Alta', adherence: 90 }
  ];

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in">
      {/* Alert Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Painel do Psicólogo</h1>
          <p className="text-slate-500 font-medium">Visão operacional da Clínica Escola Santa Casa.</p>
        </div>
        <div className="lg:col-span-4 bg-error-container/40 border border-error/20 p-5 rounded-2xl flex items-start gap-4">
          <div className="bg-error text-white p-2.5 rounded-xl shadow-lg shadow-error/20">
            <AlertCircle size={24} />
          </div>
          <div>
            <h3 className="font-bold text-error leading-tight mb-1">Alerta de Absenteísmo</h3>
            <p className="text-xs text-error/80 font-medium leading-relaxed">
              <span className="font-black">4 pacientes</span> com 2 faltas consecutivas detectadas.
            </p>
            <button className="mt-2 text-[10px] font-black text-error uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
              Revisar Lista
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Waiting List Table Container */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Activity className="text-primary" size={20} />
                Fila de Espera
              </h3>
              <div className="flex gap-3">
                <select className="bg-slate-50 border-none text-xs font-bold rounded-lg py-2 px-4 focus:ring-2 focus:ring-primary/20 appearance-none pr-8 relative">
                  <option>Todas as Queixas</option>
                  <option>Autismo</option>
                  <option>Psicoterapia</option>
                </select>
                <button className="bg-primary text-white text-xs font-bold px-5 py-2 rounded-xl flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-md shadow-primary/10">
                  <UserPlus size={16} />
                  Inserir em Grupo
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                    <th className="px-6 py-4">Nome do Paciente</th>
                    <th className="px-6 py-4">Queixa</th>
                    <th className="px-6 py-4">Tempo de Espera</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {waitingPatients.map(patient => (
                    <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-5">
                        <span className="font-semibold text-slate-800">{patient.name}</span>
                      </td>
                      <td className="px-6 py-5 text-sm uppercase">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wider ${
                          patient.complaint === 'Autismo' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'
                        }`}>
                          {patient.complaint}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-500 font-medium">{patient.waitTime}</td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${
                            patient.status === 'Urgente' ? 'bg-amber-500' : 
                            patient.status === 'Normal' ? 'bg-green-500' : 'bg-error'
                          }`} />
                          <span className="text-xs font-medium text-slate-600">{patient.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="text-slate-300 hover:text-slate-600 p-1 group-hover:scale-110 transition-transform">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mini KPI Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <MiniStat 
              label="Total de Pacientes" 
              value="128" 
              info="12% em relação ao mês anterior" 
              trend="up" 
            />
            <MiniStat 
              label="Estagiários" 
              value="32" 
              info="Média de 8 por supervisor" 
              icon={<School size={20} className="text-slate-400" />}
            />
            <MiniStat 
              label="Espera Média" 
              value="24d" 
              info="Aumento de 3 dias" 
              trend="down" 
            />
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-8">
          {/* Calendar Widget */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800">Agenda Semanal</h3>
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"><ChevronLeft size={16} /></button>
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">16-22 OUT</span>
                <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"><ChevronRight size={16} /></button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <AgendaDay day="SEG 16" color="border-primary">
                <AgendaItem time="09:00 AM" label="Paciente: Marina S." sub="Estagiário: J. Doe" doctor="Sup: Dr. Silva" />
              </AgendaDay>

              <AgendaDay day="TER 17" color="border-slate-200">
                <div className="bg-slate-50/80 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-xs text-slate-800">Sessão em Grupo #4</span>
                    <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">10:30 AM</span>
                  </div>
                  <span className="text-[9px] font-black tracking-widest uppercase bg-primary/10 text-primary px-2 py-1 rounded-md">6 Pacientes</span>
                </div>
              </AgendaDay>

              <AgendaDay day="QUA 18" color="border-error">
                <div className="bg-error/5 rounded-xl p-3 border border-error/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-extrabold text-xs text-slate-900">Paciente: Ricardo V.</span>
                    <span className="text-[9px] text-error font-black tracking-widest uppercase">2ª FALTA</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <User size={12} />
                    <span className="text-[10px] font-medium">Alocado: L. Pera</span>
                  </div>
                </div>
              </AgendaDay>
            </div>
            
            <div className="p-6 pt-0">
              <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-primary hover:text-primary transition-all">
                + Novo Agendamento
              </button>
            </div>
          </div>

          {/* Clinical Capacity Card */}
          <div className="bg-primary shadow-xl shadow-primary/30 rounded-2xl p-6 text-white overflow-hidden relative group">
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[120px]">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Capacidade Clínica</p>
                <h4 className="text-4xl font-black tracking-tighter mt-2">92%</h4>
              </div>
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mt-6">
                <div className="bg-white h-full transition-all duration-1000" style={{ width: '92%' }} />
              </div>
            </div>
            <Group size={120} className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value, info, trend, icon }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-primary/20 transition-all group">
      <div>
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
          {icon}
        </div>
        <h4 className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors mt-2">{value}</h4>
      </div>
      {(trend || info) && (
        <div className={`flex items-center gap-2 text-[10px] font-bold mt-4 ${
          trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-error' : 'text-slate-400'
        }`}>
          {trend === 'up' && <TrendingUp size={12} />}
          {trend === 'down' && <TrendingUp size={12} className="rotate-90" />}
          <span>{info}</span>
        </div>
      )}
    </div>
  );
}

function AgendaDay({ day, color, children }: any) {
  return (
    <div className={`relative pl-4 border-l-2 ${color}`}>
      <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-2 block">{day}</span>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function AgendaItem({ time, label, sub, doctor }: any) {
  return (
    <div className="bg-slate-50/80 rounded-xl p-3">
      <div className="flex justify-between items-start mb-2">
        <span className="font-bold text-xs text-slate-800">{label}</span>
        <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">{time}</span>
      </div>
      <div className="flex flex-col gap-1 text-slate-500">
        <div className="flex items-center gap-1.5">
          <School size={12} />
          <span className="text-[10px] font-medium">{sub}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FileText size={12} />
          <span className="text-[10px] font-medium">{doctor}</span>
        </div>
      </div>
    </div>
  );
}

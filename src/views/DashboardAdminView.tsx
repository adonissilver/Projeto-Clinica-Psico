import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  UserRoundCheck, 
  Contact, 
  Hourglass, 
  TrendingUp, 
  AlertTriangle,
  FileDown,
  Plus,
  ArrowUpRight,
  Lightbulb,
  ShieldCheck,
  Award,
  ArrowLeft,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Staff } from '../types';

export default function DashboardAdminView() {
  const navigate = useNavigate();
  
  const supervisors = [
    { 
      id: '1', 
      name: 'Dra. Rosa Martinez', 
      department: 'Neurologia', 
      students: 8, 
      status: 'OTIMIZADO', 
      initials: 'RM',
      summary: 'Especialista em reabilitação cognitiva com foco em neuroplasticidade. Lidera o grupo de pesquisa em Terapia Cognitiva.'
    },
    { 
      id: '2', 
      name: 'Dr. Thomas Kalu', 
      department: 'Cardiologia & Psicossomática', 
      students: 12, 
      status: 'SOBRECARGA', 
      initials: 'TK',
      summary: 'Focado na intersecção entre saúde mental e doenças crônicas. Coordena triagens de alta complexidade.'
    },
    { 
      id: '3', 
      name: 'Dra. Luiza Mendes', 
      department: 'Infantil', 
      students: 6, 
      status: 'OTIMIZADO', 
      initials: 'LM',
      summary: 'Referência em desenvolvimento infantil e ludoterapia. Supervisora sênior do programa de inclusão.'
    }
  ];

  const psychologists = [
    { id: '1', name: 'Alana Ferreira', department: 'Clínica Adulto', cases: 14, status: 'Ativo' },
    { id: '2', name: 'Bruno Oliveira', department: 'Terapia de Casal', cases: 8, status: 'Ativo' },
    { id: '3', name: 'Carla Dias', department: 'Neuropsicologia', cases: 22, status: 'Alerta' },
    { id: '4', name: 'Daniel Souza', department: 'Infantil', cases: 11, status: 'Ativo' }
  ];

  const symptoms = [
    { label: 'Ansiedade Generalizada', percentage: 42, color: 'bg-primary' },
    { label: 'Depressão Crônica', percentage: 28, color: 'bg-primary/80' },
    { label: 'TDAH & Foco', percentage: 18, color: 'bg-primary/60' },
    { label: 'Transtornos Alimentares', percentage: 7, color: 'bg-primary/40' },
    { label: 'Outros', percentage: 5, color: 'bg-primary/20' }
  ];

  const semesters = [
    { label: '5º Sem', count: 45 },
    { label: '6º Sem', count: 82 },
    { label: '7º Sem', count: 124 },
    { label: '8º Sem', count: 96 },
    { label: '9º Sem', count: 65 }
  ];

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in p-8 space-y-12">
      {/* System Header */}
      <header className="flex justify-between items-center bg-white/40 backdrop-blur-md p-6 rounded-[32px] border border-white/60 shadow-sm">
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
            <p className="text-sm font-bold text-primary">Diretor Administrativo</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Acesso Mestre</p>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-secondary-container overflow-hidden border border-primary/10 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" 
              alt="Admin Profile"
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

      {/* Hero Welcome */}
      <div className="px-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/10">Painel de Controle</span>
        </div>
        <h1 className="text-5xl font-light text-primary tracking-tight mb-2 serif">Visão das Operações</h1>
        <p className="text-slate-500 font-medium italic lowercase">Monitoramento em tempo real da capacidade institucional e fluxo clínico.</p>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard 
          icon={<Contact className="text-primary" />} 
          label="Em Tratamento" 
          value="1.204" 
          indicator="ALTO FLUXO"
          indicatorColor="bg-primary"
        />
        <KpiCard 
          icon={<Hourglass className="text-error" />} 
          label="Fila de Espera" 
          value="187" 
          change="+4.1%" 
          trend="warn" 
        />
        <KpiCard 
          icon={<Users className="text-primary" />} 
          label="Psicólogos" 
          value="142" 
          status="Online" 
        />
        <KpiCard 
          icon={<UserRoundCheck className="text-primary" />} 
          label="Supervisores" 
          value="58" 
          status="Equilibrado" 
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Student per Semester */}
        <div className="bg-white border border-slate-200 rounded-[40px] overflow-hidden shadow-sm flex flex-col">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <div>
              <h4 className="serif text-2xl text-primary">Alunos por Semestre</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Distribuição de Estágio</p>
            </div>
            <School className="text-primary/20" size={32} />
          </div>
          <div className="p-10 flex-1 flex items-end justify-between gap-6 h-64 bg-slate-50/30">
            {semesters.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 h-full">
                <div className="flex-1 w-full bg-slate-200/50 rounded-2xl relative group overflow-hidden">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${(s.count / 150) * 100}%` }}
                    className="absolute bottom-0 left-0 right-0 bg-primary rounded-2xl transition-all duration-700 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-black text-white bg-primary px-2 py-1 rounded-lg">{s.count}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Symptoms Chart */}
        <div className="bg-white border border-slate-200 rounded-[40px] overflow-hidden shadow-sm flex flex-col">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <div>
              <h4 className="serif text-2xl text-primary">Sintomas Prevalentes</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Principais Queixas em Triagem</p>
            </div>
            <Lightbulb className="text-primary/20" size={32} />
          </div>
          <div className="p-10 space-y-6 flex-1 bg-slate-50/30">
            {symptoms.map((s, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-slate-600">{s.label}</span>
                  <span className="text-primary">{s.percentage}%</span>
                </div>
                <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${s.percentage}%` }}
                    className={`h-full ${s.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Supervisors Section */}
        <div className="bg-white border border-slate-200 rounded-[40px] overflow-hidden shadow-sm">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <h4 className="serif text-2xl text-primary">Supervisores Sêniores</h4>
            <ShieldCheck className="text-primary/20" size={24} />
          </div>
          <div className="p-8 space-y-6">
            {supervisors.map(member => (
              <div key={member.id} className="p-6 bg-slate-50/50 rounded-[28px] border border-slate-100 group hover:border-primary/20 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm">
                    {member.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{member.name}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{member.department}</p>
                  </div>
                  <span className={`ml-auto px-3 py-1 rounded-full text-[9px] font-black tracking-widest ${
                    member.status === 'OTIMIZADO' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-error'
                  }`}>
                    {member.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500 italic leading-relaxed">"{member.summary}"</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  <span>Alunos sob gestão: {member.students}</span>
                  <ArrowUpRight size={14} className="text-primary/40" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Psychologists Section */}
        <div className="bg-white border border-slate-200 rounded-[40px] overflow-hidden shadow-sm">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <h4 className="serif text-2xl text-primary">Pilar de Psicólogos</h4>
            <Award className="text-primary/20" size={24} />
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 gap-4">
              {psychologists.map(psy => (
                <div key={psy.id} className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-3xl hover:shadow-lg hover:shadow-primary/5 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary">
                      <Users size={18} />
                    </div>
                    <div>
                      <h6 className="font-bold text-slate-900 text-sm">{psy.name}</h6>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{psy.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-light text-primary serif">{psy.cases}</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Casos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function KpiCard({ icon, label, value, change, trend, status, indicator, indicatorColor }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-[32px] border-white/40 shadow-sm flex flex-col justify-between min-h-[180px]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-[#E6DFD3]/40 rounded-2xl text-primary">
          {React.cloneElement(icon as React.ReactElement, { size: 22 })}
        </div>
        {change && (
          <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${trend === 'up' ? 'bg-primary/10 text-primary' : 'bg-error/10 text-error'} border border-current/10 uppercase tracking-widest`}>
            {change} {trend === 'up' ? '↑' : '↓'}
          </span>
        )}
        {status && <span className="text-[10px] font-bold text-[#5A5A40]/40 uppercase tracking-widest">{status}</span>}
      </div>
      <div>
        <p className="text-primary/60 text-[10px] font-bold mb-2 uppercase tracking-[0.2em]">{label}</p>
        <h3 className="text-4xl font-light text-primary serif tracking-tight">{value}</h3>
      </div>
      {indicator && (
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[9px] font-bold text-primary/30 uppercase tracking-[0.2em]">{indicator}</span>
          <div className={`h-2 w-2 rounded-full ${indicatorColor}`} />
        </div>
      )}
    </motion.div>
  );
}

function ChartHeader({ title, subtitle, score, change, scoreColor = 'text-primary' }: any) {
  return (
    <div className="p-8 border-b border-[#5A5A40]/5 flex justify-between items-center bg-white/40">
      <div>
        <h4 className="text-lg font-light text-[#2D2D2A] serif">{title}</h4>
        <p className="text-[9px] text-[#5A5A40]/40 uppercase tracking-[0.2em] font-bold mt-1">{subtitle}</p>
      </div>
      <div className="text-right">
        <div className={`text-3xl font-light serif ${scoreColor} leading-none`}>
          {score}<span className="text-sm text-[#5A5A40]/20 font-light ml-1">/10</span>
        </div>
        <p className="text-[10px] text-primary font-bold mt-1 uppercase tracking-widest">{change}</p>
      </div>
    </div>
  );
}

function CircularProgress({ percentage, label, sub, color = 'text-primary' }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100" />
          <circle 
            cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" 
            strokeDasharray={2 * Math.PI * 28} 
            strokeDashoffset={2 * Math.PI * 28 * (1 - percentage / 100)} 
            className={color}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-black">{percentage}%</span>
      </div>
      <div>
        <p className="text-sm font-bold text-slate-800">{label}</p>
        <p className="text-[10px] text-slate-400 font-medium">{sub}</p>
      </div>
    </div>
  );
}

function WaitTimeItem({ label, time, change, percentage, color = 'bg-primary' }: any) {
  return (
    <div>
      <div className="flex justify-between items-end mb-3">
        <span className="text-[11px] font-bold text-[#5A5A40]/60 uppercase tracking-widest">{label}</span>
        <span className="text-lg font-light text-[#2D2D2A] serif">{time} <span className={`text-[10px] font-bold italic ml-1 ${change.startsWith('-') ? 'text-primary' : 'text-error'}`}>({change})</span></span>
      </div>
      <div className="h-3 bg-[#E6DFD3]/30 rounded-full overflow-hidden p-0.5 border border-[#5A5A40]/5">
        <div className={`h-full rounded-full transition-all duration-1000 ${color}`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function InsightCard({ icon, title, desc, color }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white/80 backdrop-blur-sm border border-[#5A5A40]/10 rounded-[28px] p-8 flex items-center gap-6 shadow-sm shadow-[#5A5A40]/5"
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${color} shadow-lg shadow-current/10`}>
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
      <div>
        <h5 className="text-lg font-light text-[#2D2D2A] serif mb-1">{title}</h5>
        <p className="text-sm text-[#5A5A40]/60 leading-relaxed font-medium">{desc}</p>
      </div>
    </motion.div>
  );
}

function School(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z"/>
      <path d="m2 10 10 5 10-5"/>
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
    </svg>
  );
}

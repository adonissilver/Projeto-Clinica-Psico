import React from 'react';
import { 
  Fingerprint, 
  Cake, 
  User, 
  History, 
  FileText, 
  Paperclip, 
  FileCheck2, 
  Lock, 
  Download,
  AlertCircle,
  PlusCircle,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

export default function PatientCaseView() {
  const [activeTab, setActiveTab] = React.useState('Evoluções');

  return (
    <div className="max-w-[1400px] mx-auto animate-fade-in">
      {/* Case Header */}
      <div className="grid grid-cols-12 gap-8 mb-8">
        <div className="col-span-12 lg:col-span-8 bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-50 text-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg">Caso Atual</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Maria Helena dos Santos</h1>
            <div className="flex gap-6 mt-4 text-slate-500 font-medium">
              <span className="flex items-center gap-2"><Fingerprint className="text-slate-300" size={18} /> <span className="font-bold text-xs uppercase tracking-widest text-slate-400">ID:</span> 882.102-X</span>
              <span className="flex items-center gap-2"><Cake className="text-slate-300" size={18} /> 64 Anos</span>
              <span className="flex items-center gap-2"><User className="text-slate-300" size={18} /> Feminino</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-end">
            <div className="text-left">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Professor Supervisor</p>
              <h4 className="font-extrabold text-slate-800">Dr. Ricardo Menezes, PhD</h4>
              <p className="text-xs text-slate-500 font-medium">Departamento de Cardiologia</p>
            </div>
          </div>
        </div>

        {/* Academic Trio Wrapper */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-slate-200 rounded-2xl shadow-sm p-8 flex flex-col">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-3">Trio Acadêmico</p>
          <div className="space-y-4">
            <TrioMember initials="AA" name="Ana Alice Ferreira" />
            <TrioMember initials="BO" name="Bruno Oliveira" />
            <TrioMember initials="CM" name="Carolina Mendes" />
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="flex border-b border-slate-100 bg-slate-50/50">
          {['Resumo', 'Anamnese', 'Evoluções', 'Anexos'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-5 font-bold text-sm transition-all relative ${
                activeTab === tab ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Active Tab Content - Evoluções */}
        <div className="p-12 flex flex-col lg:flex-row gap-12">
          {/* Action Column */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="bg-blue-50/50 border border-primary/10 p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <AlertCircle size={20} />
                  <h3 className="font-bold text-sm">Integridade do Prontuário</h3>
                </div>
                <p className="text-xs text-primary/80 font-medium leading-relaxed italic">
                  Registros evolutivos são imutáveis em conformidade com os protocolos clínicos acadêmicos. Para correções, favor adicionar uma nova entrada de "Retificação".
                </p>
              </div>

              <button className="w-full py-4 px-6 bg-primary text-white font-bold text-sm rounded-xl shadow-lg shadow-primary/20 hover:opacity-95 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                <FileCheck2 size={20} />
                Gerar Relatório PDF
              </button>
              
              <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest italic opacity-60">
                Requer assinatura do supervisor
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex-1 space-y-12">
            <div className="mb-8 flex justify-between items-center bg-white/40 p-6 rounded-3xl border border-white/60">
              <div>
                <h3 className="serif text-xl text-primary">Registros de Evolução</h3>
                <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mt-1">Histórico Clínico Serializado</p>
              </div>
              <button className="bg-primary text-white px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                <PlusCircle size={18} />
                Nova Evolução
              </button>
            </div>

            <div className="relative pl-10 border-l-2 border-slate-100 space-y-16">
              <TimelineEntry 
                date="24 Out, 2023"
                time="14:30"
                author="Carolina Mendes"
                title="Exame Físico e Sinais Vitais"
                content="Paciente estável. PA: 120/80 mmHg. FC: 72 bpm. Temperatura: 36.6°C. Paciente relata melhora no aperto no peito após iniciar medicação prescrita. Pulmões limpos à ausculta. Sem edema periférico observado hoje."
                signed
              />
              <TimelineEntry 
                date="21 Out, 2023"
                time="09:15"
                author="Ana Alice Ferreira"
                title="Revisão Inicial de Caso"
                content="Avaliação inicial do histórico cardiológico. Paciente apresenta histórico de hipertensão (10 anos) e dislipidemia. Atualmente em uso de Enalapril 20mg BID. Revisão de sistemas revela dispneia ocasional em grandes esforços (NYHA Classe I). Agendado teste ergométrico para próxima terça-feira."
                signed
              />
              <TimelineEntry 
                date="20 Out, 2023"
                time="11:00"
                author="Triagem do Sistema"
                title="Resumo de Admissão"
                content="Entrada automatizada: Prontuário do paciente importado com sucesso do portal de triagem da Universidade. Atribuído ao Trio A (Ferreira, Oliveira, Mendes) sob supervisão do Dr. Menezes."
                faded
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrioMember({ initials, name }: { initials: string, name: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xs transition-colors group-hover:bg-primary group-hover:text-white">
        {initials}
      </div>
      <span className="font-semibold text-slate-800 transition-colors group-hover:text-primary">{name}</span>
    </div>
  );
}

function TimelineEntry({ date, time, author, title, content, signed, faded }: any) {
  return (
    <div className={`relative ${faded ? 'opacity-50' : ''}`}>
      <div className={`absolute -left-[49px] top-0 w-4 h-4 rounded-full border-4 border-white ${faded ? 'bg-slate-300' : 'bg-primary'} shadow-sm`} />
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <span className="font-black text-slate-900 tracking-tight">{date}</span>
          <span className="text-xs font-bold text-slate-400">{time}</span>
        </div>
        <div className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 flex items-center gap-2">
          <History size={12} />
          {author}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
        <h4 className="font-bold text-lg text-slate-900 mb-4 border-b border-slate-50 pb-3">{title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-medium">{content}</p>
        
        {signed && (
          <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">
            <Lock size={12} fill="currentColor" />
            Assinado com Certificado Digital
          </div>
        )}
      </div>
    </div>
  );
}

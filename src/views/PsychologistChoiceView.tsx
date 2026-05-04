import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Hourglass, 
  ArrowLeft,
  School,
  Stethoscope,
  LogOut
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PsychologistChoiceView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen clinical-gradient flex flex-col p-8">
      <header className="w-full flex justify-between items-center mb-12">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          Voltar
        </button>
        
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-secondary-container overflow-hidden border border-primary/10 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=100&h=100&fit=crop" 
              alt="Psychologist Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button 
            onClick={() => navigate('/')}
            className="p-2.5 text-error hover:bg-error/5 rounded-xl transition-all"
            title="Sair do sistema"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full">

        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Stethoscope size={32} />
          </div>
          <h1 className="serif text-5xl font-light text-primary mb-4">Área do Psicólogo</h1>
          <p className="text-lg text-slate-500 font-medium serif italic text-center">Qual módulo deseja acessar hoje?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChoiceCard 
            title="Pacientes" 
            desc="Acesse prontuários, evoluções e histórico de casos clínicos." 
            icon={<FileText size={48} />}
            onClick={() => navigate('/pacientes/caso')}
          />
          <ChoiceCard 
            title="Fila de Espera" 
            desc="Gerencie a prioridade e alocação da fila de espera clínica." 
            icon={<Hourglass size={48} />}
            onClick={() => navigate('/fila')}
            color="bg-secondary/10"
          />
        </div>
        </div>
      </div>
    </div>
  );
}

function ChoiceCard({ title, desc, icon, onClick, color = "bg-primary/5" }: any) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`glass-card p-12 rounded-[48px] text-center flex flex-col items-center group border-white/60 shadow-lg shadow-primary/5 ${color}`}
    >
      <div className="text-primary mb-8 transition-transform group-hover:scale-110 duration-500">
        {icon}
      </div>
      <h3 className="serif text-3xl text-primary mb-4">{title}</h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">{desc}</p>
      
      <div className="mt-10 h-1.5 w-12 bg-primary/20 rounded-full group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
    </motion.button>
  );
}

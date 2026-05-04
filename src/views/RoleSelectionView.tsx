import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  UserRound, 
  Stethoscope, 
  GraduationCap, 
  Heart, 
  Building2,
  ArrowRight,
  School
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RoleSelectionView() {
  const navigate = useNavigate();

  const roles = [
    { 
      id: 'diretor', 
      title: 'Diretor', 
      icon: <Building2 size={32} />, 
      color: 'bg-primary text-white',
      desc: 'Gestão estratégica e visão operacional completa.',
      target: '/dashboard' 
    },
    { 
      id: 'supervisor', 
      title: 'Supervisor', 
      icon: <ShieldCheck size={32} />, 
      color: 'bg-primary/20 text-primary',
      desc: 'Supervisão acadêmica e formação de grupos.',
      target: '/supervisor/grupos' 
    },
    { 
      id: 'psicologo', 
      title: 'Psicólogo', 
      icon: <Stethoscope size={32} />, 
      color: 'bg-primary/10 text-primary',
      desc: 'Gestão de prontuários e fila de espera clínico.',
      target: '/psicologo/painel' 
    },
    { 
      id: 'aluno', 
      title: 'Estagiário', 
      icon: <GraduationCap size={32} />, 
      color: 'bg-secondary-container text-primary',
      desc: 'Atendimento clínico e registros de evolução.',
      target: '/intern/dashboard' 
    },
    { 
      id: 'paciente', 
      title: 'Paciente', 
      icon: <Heart size={32} />, 
      color: 'bg-[#B4A697]/20 text-[#5A5A40]',
      desc: 'Portal do paciente e agendamentos pessoais.',
      target: '/portal' 
    },
    { 
      id: 'admin', 
      title: 'Administrador', 
      icon: <School size={32} />, 
      color: 'bg-[#2D2D2A] text-white',
      desc: 'Acesso mestre a todas as visões do sistema.',
      target: '/admin/creditos' 
    },
  ];

  return (
    <div className="min-h-screen clinical-gradient flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-7xl w-full">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
              <School size={32} />
            </div>
            <h1 className="serif text-5xl font-light text-primary">Santa Casa</h1>
          </div>
          <h2 className="text-5xl font-light text-primary serif tracking-tight mb-4">Escolha seu Perfil de Acesso</h2>
          <p className="text-lg text-slate-500 font-medium italic serif">Selecione o cargo correspondente para navegar na plataforma acadêmica da FCMSCSP.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, i) => (
            <motion.button
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(role.target)}
              className="glass-card p-10 rounded-[40px] text-left border-white/60 hover:border-primary/20 transition-all flex flex-col items-start group relative overflow-hidden"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-transform group-hover:rotate-6 ${role.color}`}>
                {role.icon}
              </div>
              
              <h3 className="serif text-3xl text-primary mb-3 group-hover:text-primary transition-colors">{role.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{role.desc}</p>
              
              <div className="mt-auto flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                Acessar Área
                <ArrowRight size={16} />
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.button>
          ))}
        </div>

        <footer className="mt-20 text-center opacity-40">
          <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">© 2024 FCMSCSP — Tecnologia e Humanidade na Saúde</p>
        </footer>
      </div>
    </div>
  );
}

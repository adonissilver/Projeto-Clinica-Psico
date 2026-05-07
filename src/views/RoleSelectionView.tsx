import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RoleSelectionView() {
  const navigate = useNavigate();

  const roles = [
    { 
      id: 'diretor', 
      title: 'Diretor', 
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop',
      color: 'from-[#004a8e]/90 to-[#004a8e]/40',
      desc: 'Gestão estratégica e visão operacional completa.',
      target: '/dashboard' 
    },
    { 
      id: 'supervisor', 
      title: 'Supervisor', 
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop',
      color: 'from-[#00a651]/90 to-[#00a651]/40',
      desc: 'Supervisão acadêmica e formação de grupos.',
      target: '/supervisor/grupos' 
    },
    { 
      id: 'psicologo', 
      title: 'Psicólogo', 
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=800&fit=crop',
      color: 'from-[#004a8e]/80 to-[#004a8e]/30',
      desc: 'Gestão de prontuários e fila de espera clínico.',
      target: '/psicologo/painel' 
    },
    { 
      id: 'aluno', 
      title: 'Estagiário', 
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=800&fit=crop',
      color: 'from-[#8dc63f]/90 to-[#8dc63f]/40',
      desc: 'Atendimento clínico e registros de evolução.',
      target: '/intern/dashboard' 
    },
    { 
      id: 'paciente', 
      title: 'Paciente', 
      image: 'https://images.unsplash.com/photo-1581056316648-5c7423089fb2?w=800&h=800&fit=crop',
      color: 'from-[#00a651]/80 to-[#00a651]/30',
      desc: 'Portal do paciente e agendamentos pessoais.',
      target: '/portal' 
    },
    { 
      id: 'admin', 
      title: 'Administrador', 
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop',
      color: 'from-slate-900/90 to-slate-900/40',
      desc: 'Acesso mestre a todas as visões do sistema.',
      target: '/admin/creditos' 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-7xl w-full">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-6 mb-8 group cursor-pointer">
            <img 
              src="https://fcmscp.br/wp-content/uploads/2023/11/logo_fcmsantacasa.png" 
              className="h-16 w-auto" 
              alt="FCMSCSP"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://fcmsantacasasp.edu.br/wp-content/uploads/2021/04/logo_santa_casa.png";
              }}
            />
            <div className="h-12 w-[2px] bg-slate-200" />
            <h1 className="text-3xl font-black text-primary tracking-tighter uppercase">Clínica de <span className="text-primary-container">Psicologia</span></h1>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 tracking-tight mb-4">Escolha seu Perfil de Acesso</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Selecione o seu cargo para acessar as ferramentas acadêmicas e clínicas da Santa Casa.</p>
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
              className="relative h-80 rounded-[40px] overflow-hidden text-left shadow-2xl shadow-primary/10 group bg-slate-200 focus:outline-none"
            >
              {/* Role Image Background */}
              <img 
                src={role.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt=""
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${role.color} mix-blend-multiply opacity-80 group-hover:opacity-90 transition-opacity`} />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white relative z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-black mb-2 tracking-tight">{role.title}</h3>
                    <p className="text-white/80 text-xs font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all" />
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

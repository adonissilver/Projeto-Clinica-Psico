import React from 'react';
import { motion } from 'motion/react';
import { School, Mail, Lock, CheckCircle2, ArrowRight, LifeBuoy, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoginView() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen clinical-gradient flex items-center justify-center p-6 bg-background">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[1100px] h-[680px] glass-card rounded-[48px] shadow-2xl shadow-primary/5 flex overflow-hidden border-white/40"
      >
        {/* Left Side: Brand Visual */}
        <div className="hidden md:block w-[45%] relative bg-primary">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" 
            alt="Medical School"
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
          
          <div className="absolute bottom-16 left-16 right-16 text-[#F7F5F2]">
            <h1 className="text-5xl font-light mb-6 leading-tight tracking-tight serif">
              Faculdade Santa Casa <br/>de São Paulo
            </h1>
            <p className="text-xl opacity-90 font-light italic serif leading-relaxed">
              "Ensino de excelência para <br/>o futuro da saúde."
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-[55%] flex flex-col justify-center p-20 bg-white">
          <div className="mb-12 text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary rounded-2xl text-white shadow-lg shadow-primary/20">
                <School size={24} />
              </div>
              <span className="font-semibold text-primary tracking-[0.3em] text-[10px] uppercase">Portal Acadêmico</span>
            </div>
            <h2 className="text-4xl font-light text-primary tracking-tight serif mb-2">Bem-vindo</h2>
            <p className="text-slate-500 font-medium lowercase">Acesse sua jornada de formação acadêmica.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-3">
              <label className="block text-[10px] font-bold text-primary/60 uppercase ml-1 tracking-[0.2em]">Email Institucional</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/30" size={18} />
                <input 
                  type="email" 
                  placeholder="nome@fcmsantacasasp.edu.br"
                  className="w-full pl-14 pr-6 py-4.5 rounded-3xl border border-slate-200 bg-slate-50 focus:ring-8 focus:ring-primary/5 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center px-1">
                <label className="block text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em]">Senha</label>
                <a href="#" className="text-[10px] font-bold text-secondary hover:underline tracking-widest uppercase">Esqueceu?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/30" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-14 pr-6 py-4.5 rounded-3xl border border-slate-200 bg-slate-50 focus:ring-8 focus:ring-primary/5 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-1 py-1">
              <input type="checkbox" id="remember" className="w-5 h-5 rounded-lg border-slate-300 text-primary focus:ring-primary/20 accent-primary" />
              <label htmlFor="remember" className="text-sm text-slate-500 cursor-pointer select-none font-medium">Manter conectado</label>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary text-white py-5 rounded-3xl font-bold text-lg hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group active:scale-[0.98] mt-4"
            >
              Acessar Sistema
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </form>

          <p className="mt-10 text-center text-slate-400 text-sm font-medium">
            Primeiro acesso? <a href="#" className="text-secondary font-bold hover:underline">Solicite credenciais</a>
          </p>

          <footer className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between opacity-60">
            <span className="text-[9px] font-bold tracking-[0.3em] text-primary">© 2024 FCMSCSP SISTEMAS</span>
            <div className="flex gap-4">
              <button className="hover:text-primary transition-colors"><LifeBuoy size={16} /></button>
              <button className="hover:text-primary transition-colors"><Globe size={16} /></button>
            </div>
          </footer>
        </div>
      </motion.div>

      {/* Floating Support Info */}
      <div className="fixed top-8 right-8 hidden lg:flex items-center gap-4 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 pr-6">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
          <LifeBuoy size={20} />
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none mb-1">Atendimento</p>
          <p className="font-semibold text-slate-700 leading-none">0800 123 4567</p>
        </div>
      </div>
    </div>
  );
}

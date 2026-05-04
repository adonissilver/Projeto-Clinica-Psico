import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Users, User, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProjectCreditsView() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans">
      <div className="max-w-4xl w-full">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-primary transition-all font-bold text-xs uppercase tracking-widest group"
        >
          <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-primary/20 transition-all">
            <ArrowLeft size={16} />
          </div>
          Voltar ao Início
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] shadow-2xl shadow-primary/5 border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[500px]"
        >
          {/* Left Side: Image */}
          <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
            <img 
              src="https://fcmscp.br/wp-content/uploads/2023/11/logo_fcmsantacasa.png" // Placeholder or descriptive if I can't find direct URL, I'll try a generic representative image
              className="absolute inset-0 w-full h-full object-cover"
              alt="Santa Casa de São Paulo"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=1200&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                Desde 1963
              </span>
            </div>
          </div>

          {/* Right Side: Data */}
          <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap size={20} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Instituição</span>
                </div>
                <h1 className="text-2xl font-black text-slate-800 leading-tight">
                  Faculdade Ciências Médicas Santa Casa de São Paulo
                </h1>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-slate-300">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Curso & Disciplina</p>
                    <p className="text-sm font-bold text-slate-600">Graduação Análise e Desenvolvimento de Sistemas</p>
                    <p className="text-sm font-medium text-slate-500 mt-1">Projeto Integrador</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-primary">
                  <div className="mt-1">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-1">Professor Orientador</p>
                    <p className="text-sm font-black">Ismar Frango Silveira</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400 mb-4">
                    <Users size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Integrantes do Grupo</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      'Adonis Silveira',
                      'Felipe Moretti',
                      'Geovane Guedes',
                      'Isaac Jesus'
                    ].map((name, i) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-primary/20 transition-all group">
                        <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-[10px] font-black text-primary border border-slate-100 group-hover:border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                          {i + 1}
                        </div>
                        <span className="text-sm font-bold text-slate-700">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

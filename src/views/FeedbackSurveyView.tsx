import React from 'react';
import { 
  Heart, 
  MessageSquare, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Star,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';

export default function FeedbackSurveyView() {
  const [step, setStep] = React.useState(1);
  const [rating, setRating] = React.useState(0);

  return (
    <div className="max-w-[1000px] mx-auto animate-fade-in py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-primary tracking-tighter mb-4">Sua Opinião é Vital</h1>
        <p className="text-slate-500 font-medium text-lg italic">Nos ajude a aprimorar o cuidado clínico acadêmico da Santa Casa.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-[50px] shadow-2xl overflow-hidden shadow-primary/5 flex flex-col md:flex-row min-h-[600px]">
        {/* Left Side Info */}
        <div className="w-full md:w-[350px] bg-primary p-12 text-white flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full mb-10 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">Avaliação Rápida</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight leading-none mb-4">Experiência do Paciente</h2>
            <p className="text-white/70 font-medium leading-relaxed italic">
              Este formulário é confidencial e utilizado exclusivamente para melhoria contínua dos nossos protocolos de atendimento e ensino.
            </p>
          </div>

          <div className="space-y-6 pt-12 border-t border-white/10">
            <InfoItem icon={<Calendar size={18} />} label="Data" value="24 de Outubro, 2023" />
            <InfoItem icon={<Clock size={18} />} label="Sessão" value="14:30 - Psicologia Clínica" />
            <InfoItem icon={<MessageSquare size={18} />} label="Referência" value="TK-882-PQ" />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 p-16 flex flex-col items-center justify-center relative">
          {step === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full max-w-sm text-center"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
                <Star size={40} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-8 tracking-tight">Como você avalia o acolhimento da equipe hoje?</h3>
              
              <div className="flex justify-center gap-4 mb-12">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setRating(star)}
                    className={`transition-all ${rating >= star ? 'scale-125 text-amber-400' : 'text-slate-200'}`}
                  >
                    <Star size={44} fill={rating >= star ? 'currentColor' : 'none'} strokeWidth={3} />
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setStep(2)}
                  disabled={rating === 0}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg tracking-tight shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3"
                >
                  Continuar
                  <ChevronRight size={20} />
                </button>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest cursor-pointer hover:text-slate-500">Pular esta pergunta</p>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full max-w-2xl"
            >
              <div className="mb-10 text-center">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 block">QUASE LÁ</span>
                <h3 className="text-3xl font-black text-slate-800 tracking-tight">Algum comentário ou sugestão adicional?</h3>
              </div>
              
              <div className="relative mb-10">
                <textarea 
                  className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-3xl p-8 h-48 focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all text-lg font-medium outline-none resize-none placeholder:text-slate-300"
                  placeholder="Seu feedback faz a diferença..."
                />
                <div className="absolute top-6 right-6 text-slate-200"><MessageSquare size={32} /></div>
              </div>

              <div className="bg-blue-50/50 border border-primary/10 rounded-2xl p-6 mb-10 flex items-start gap-4">
                <AlertCircle className="text-primary mt-1" size={20} />
                <p className="text-xs text-primary/70 font-semibold leading-relaxed">
                  Para urgências clínicas ou cancelamentos, favor utilizar os canais oficiais de comunicação da recepção. Este formulário é processado mensalmente.
                </p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="px-8 py-5 border-2 border-slate-100 rounded-2xl font-bold text-slate-400 hover:border-slate-200 transition-all active:scale-95"
                >
                  Voltar
                </button>
                <button 
                  onClick={() => setStep(3)}
                  className="flex-1 bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Enviar Feedback
                  <CheckCircle2 size={24} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 shadow-inner">
                <CheckCircle2 size={56} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-black text-slate-800 tracking-tight mb-4">Feedback Enviado com Sucesso</h3>
              <p className="text-slate-500 font-medium mb-12 max-w-xs mx-auto text-lg leading-tight">
                Obrigado por ajudar a Santa Casa a ser cada vez mais humana e eficiente.
              </p>
              <button 
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-3 font-black text-primary text-sm uppercase tracking-widest border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity"
              >
                Retornar ao Painel principal
              </button>
            </motion.div>
          )}

          {/* Progress Indicators */}
          {step < 3 && (
            <div className="absolute bottom-12 flex gap-3">
              {[1, 2].map(s => (
                <div key={s} className={`h-1 rounded-full transition-all duration-500 ${step === s ? 'w-10 bg-primary' : 'w-4 bg-slate-200'}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="text-white/50 group-hover:text-white transition-colors">{icon}</div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-white/50">{label}</p>
        <p className="font-bold text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}

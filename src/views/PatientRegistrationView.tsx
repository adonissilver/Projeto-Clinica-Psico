import React from 'react';
import { 
  User, 
  MapPin, 
  ClipboardCheck, 
  Wallet, 
  Upload, 
  ChevronRight, 
  Plus, 
  Camera,
  Map as LucideMap,
  Link,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

export default function PatientRegistrationView() {
  return (
    <div className="max-w-[1200px] mx-auto animate-fade-in pb-12">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-slate-400 mb-4 px-1">
          <span className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors cursor-pointer">Pacientes</span>
          <ChevronRight size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Novo Registro</span>
        </div>
        <h1 className="text-4xl font-extrabold text-primary tracking-tighter leading-tight">Cadastro de Paciente</h1>
        <p className="text-slate-500 font-medium mt-2 italic">Preencha os dados cuidadosamente para a triagem clínica acadêmica.</p>
      </header>

      <form className="space-y-10">
        <div className="grid grid-cols-12 gap-10">
          {/* Main Info Section */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-slate-200 rounded-3xl shadow-sm p-10">
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-50">
              <div className="p-2 bg-blue-50 text-primary rounded-xl"><User size={24} /></div>
              <h2 className="text-xl font-black text-slate-800 tracking-tight">Informações Pessoais</h2>
            </div>
            
            <div className="grid grid-cols-6 gap-x-8 gap-y-10">
              <div className="col-span-6 md:col-span-2 space-y-4">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Foto do Paciente</label>
                <div className="relative group cursor-pointer aspect-square border-4 border-dashed border-slate-100 rounded-3xl flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-100/50 transition-all">
                  <Camera size={40} className="text-slate-300 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-black text-slate-400 mt-4 tracking-widest uppercase">UPLOAD FOTO</span>
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
              </div>

              <div className="col-span-6 md:col-span-4 space-y-8">
                <TextInput label="Nome Completo" placeholder="Ex: Maria Oliveira Silva" />
                <div className="grid grid-cols-2 gap-8">
                  <TextInput label="Data de Nascimento" type="date" />
                  <TextInput label="Idade (Automático)" placeholder="--" readOnly bg="bg-slate-50" />
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Sexo Biológico</label>
                  <div className="flex gap-8">
                    {['Feminino', 'Masculino', 'Outro'].map(s => (
                      <label key={s} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="sexo" className="text-primary w-5 h-5 focus:ring-primary/20 border-slate-200" />
                        <span className="text-sm font-semibold text-slate-600 group-hover:text-primary transition-colors">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Column */}
          <div className="col-span-12 lg:col-span-4 bg-white border border-slate-200 rounded-3xl shadow-sm p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-50">
                <div className="p-2 bg-blue-50 text-primary rounded-xl"><MapPin size={24} /></div>
                <h2 className="text-xl font-black text-slate-800 tracking-tight">Localização</h2>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Endereço Residencial</label>
                  <textarea 
                    className="w-full rounded-2xl border-slate-100 bg-slate-50/50 p-4 text-sm font-medium focus:ring-4 focus:ring-primary/10 transition-all resize-none h-32" 
                    placeholder="Rua, Número, Bairro, CEP" 
                  />
                </div>
                <div className="p-5 bg-blue-50/70 border border-blue-100 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <LucideMap className="text-primary" size={20} />
                    <span className="text-[10px] font-black text-primary/80 uppercase tracking-widest">Distância Clínica</span>
                  </div>
                  <span className="text-sm font-black text-primary font-mono tracking-tighter">1.2 km</span>
                </div>
                <TextInput label="Telefone de Contato" placeholder="(00) 00000-0000" />
              </div>
            </div>
          </div>

          {/* Clinical & Social Rows */}
          <div className="col-span-12 lg:col-span-7 bg-white border border-slate-200 rounded-3xl shadow-sm p-10">
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-50">
              <div className="p-2 bg-blue-50 text-primary rounded-xl"><FileCheck size={24} /></div>
              <h2 className="text-xl font-black text-slate-800 tracking-tight">Informações Clínicas</h2>
            </div>
            <div className="space-y-10">
              <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-50 border-dashed">
                <label className="block text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Queixas Principais</label>
                <textarea 
                  className="w-full bg-white border-slate-100 rounded-xl p-5 text-sm font-medium focus:ring-4 focus:ring-primary/10 transition-all resize-none h-40" 
                  placeholder="Descreva os sintomas e reclamações do paciente..." 
                />
              </div>
              <div className="flex items-center justify-between p-6 bg-error/5 rounded-2xl border border-error/10">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="text-error" size={24} />
                  <span className="font-bold text-sm text-error/80 leading-tight">O paciente possui alergias conhecidas?</span>
                </div>
                <input type="checkbox" className="w-6 h-6 rounded-lg border-error/20 text-error focus:ring-error/20" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 bg-white border border-slate-200 rounded-3xl shadow-sm p-10">
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-slate-50">
              <div className="p-2 bg-blue-50 text-primary rounded-xl"><Wallet size={24} /></div>
              <h2 className="text-xl font-black text-slate-800 tracking-tight">Perfil Socioeconômico</h2>
            </div>
            <div className="space-y-8">
              <SelectInput label="Escolaridade">
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Completo</option>
                <option>Pós-graduação</option>
              </SelectInput>
              <SelectInput label="Faixa Salarial Familiar">
                <option>Até 1 salário mínimo</option>
                <option>1 a 3 salários mínimos</option>
                <option>Acima de 5 salários mínimos</option>
              </SelectInput>
              <TextInput label="Profissão Atual" placeholder="Ex: Auxiliar Administrativo" />
            </div>
          </div>

          {/* Upload Full Width */}
          <div className="col-span-12 glass-card rounded-[40px] p-12 flex flex-col md:flex-row items-center justify-between gap-12 border-2 border-primary/5">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-4 text-primary">
                <Upload size={32} strokeWidth={2.5} />
                <h3 className="text-2xl font-black tracking-tight">Documentação Complementar</h3>
              </div>
              <p className="text-sm font-medium text-slate-500 leading-relaxed italic">
                Anexe cópias do RG, CPF e comprovante de residência em formato PDF ou Imagem. A segurança dos dados é nossa prioridade. (Máx 10MB)
              </p>
            </div>
            <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-primary/30 active:scale-95 shrink-0">
              <Link size={20} />
              Selecionar Arquivos
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end items-center gap-6 pt-12 border-t border-slate-100">
          <button type="button" className="px-10 py-4 rounded-xl font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase text-xs tracking-widest">
            Cancelar Operação
          </button>
          <button type="submit" className="px-16 py-5 bg-primary text-white rounded-xl font-black text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-[0.98] uppercase tracking-widest">
            Finalizar e Salvar Registro
          </button>
        </div>
      </form>
    </div>
  );
}

function TextInput({ label, placeholder, type = "text", readOnly, bg = "bg-white" }: any) {
  return (
    <div className="space-y-3">
      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{label}</label>
      <input 
        type={type} 
        readOnly={readOnly}
        className={`w-full ${bg} border border-slate-100 rounded-2xl px-5 py-4 text-sm font-semibold focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none`} 
        placeholder={placeholder}
      />
    </div>
  );
}

function SelectInput({ label, children }: any) {
  return (
    <div className="space-y-3">
      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{label}</label>
      <select className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-sm font-extrabold focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none cursor-pointer">
        {children}
      </select>
    </div>
  );
}

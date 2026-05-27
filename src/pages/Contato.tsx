import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone é obrigatório"),
  subject: z.string().min(2, "Assunto é obrigatório"),
  message: z.string().min(10, "Mensagem é obrigatória")
});

type FormValues = z.infer<typeof formSchema>;

export function Contato() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className="pt-36 pb-24 min-h-screen bg-brand-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Fale Conosco</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-light text-white max-w-2xl leading-tight">
            Agende uma consulta <span className="font-serif italic text-gold-500">estratégica.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block text-[9px] uppercase tracking-[0.25em] text-gold-500/70 font-semibold mb-1">Nome Completo</label>
                  <input 
                    {...register("name")}
                    placeholder="Seu nome"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/20 font-light"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
                </div>
                <div className="relative group">
                  <label className="block text-[9px] uppercase tracking-[0.25em] text-gold-500/70 font-semibold mb-1">E-mail Corporativo</label>
                  <input 
                    {...register("email")}
                    placeholder="exemplo@empresa.com"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/20 font-light"
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block text-[9px] uppercase tracking-[0.25em] text-gold-500/70 font-semibold mb-1">Telefone / WhatsApp</label>
                  <input 
                    {...register("phone")}
                    placeholder="+55 (11) 99999-9999"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/20 font-light"
                  />
                  {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone.message}</span>}
                </div>
                <div className="relative group">
                  <label className="block text-[9px] uppercase tracking-[0.25em] text-gold-500/70 font-semibold mb-1">Área de Interesse</label>
                  <select 
                    {...register("subject")}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors appearance-none font-light animate-none"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option className="bg-brand-900" value="">Selecione...</option>
                    <option className="bg-brand-900" value="empresarial">Direito Empresarial & Governança</option>
                    <option className="bg-brand-900" value="familia">Direito de Família & Sucessões</option>
                    <option className="bg-brand-900" value="previdenciario">Previdenciário & Aposentadorias</option>
                    <option className="bg-brand-900" value="trabalhista">Direito Trabalhista</option>
                    <option className="bg-brand-900" value="bancario">Direito Bancário & Juros Abusivos</option>
                    <option className="bg-brand-900" value="propriedade">Propriedade Intelectual & Marcas</option>
                    <option className="bg-brand-900" value="outro">Outro</option>
                  </select>
                  {errors.subject && <span className="text-red-400 text-xs mt-1 block">{errors.subject.message}</span>}
                </div>
              </div>
              
              <div className="relative group">
                <label className="block text-[9px] uppercase tracking-[0.25em] text-gold-500/70 font-semibold mb-1">Breve Descrição do Caso</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  placeholder="Descreva resumidamente sua necessidade jurídica corporativa ou individual..."
                  className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors resize-none placeholder:text-white/20 font-light"
                />
                {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-10 py-4 bg-gold-500 text-brand-900 font-semibold uppercase text-[10px] tracking-[0.25em] hover:bg-gold-400 hover:scale-[1.02] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-gold-500/10"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-display font-medium text-white mb-8">Informações de Contato</h3>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/5 bg-transparent flex items-center justify-center shrink-0 text-gold-500">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm tracking-wide mb-1">Nosso Endereço</h4>
                    <a 
                      href="https://share.google/OqIFiSvPTdZo2Divq" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-cashmere-500/70 text-xs leading-relaxed font-light hover:text-gold-500 transition-colors"
                    >
                      Av. Floriano Peixoto, 546 - Sala 302<br />Centro, Campina Grande - PB<br />CEP: 58400-110
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/5 bg-transparent flex items-center justify-center shrink-0 text-gold-500">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm tracking-wide mb-1">Contato Telefônico</h4>
                    <a 
                      href="https://wa.me/5583998765432" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-cashmere-500/70 text-xs leading-relaxed font-light hover:text-gold-500 transition-colors"
                    >
                      +55 (83) 99876-5432 (WhatsApp Central)
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/5 bg-transparent flex items-center justify-center shrink-0 text-gold-500">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm tracking-wide mb-1">E-mail</h4>
                    <a 
                      href="mailto:atendimento@diasadvocacia.adv.br" 
                      className="text-cashmere-500/70 text-xs leading-relaxed font-light hover:text-gold-500 transition-colors"
                    >
                      atendimento@diasadvocacia.adv.br
                    </a>
                  </div>
                </li>
              </ul>

              {/* Styled Google Maps iframe directly integrated */}
              <div className="w-full h-[280px] relative border border-white/[0.05] shadow-2xl overflow-hidden group">
                <iframe
                  title="Google Maps Dias Advocacia Contato"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.406981440786!2d-35.8848772!3d-7.2287239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aee0f9191d9b3d%3A0x6e2a2223fa8c9d4b!2sR.%20Afonso%20Campos%2C%20304%20-%20Centro%2C%20Campina%20Grande%20-%20PB%2C%2058400-235!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  className="w-full h-full border-0 dark-map absolute inset-0 z-10 transition-all duration-700"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute -top-3 -right-3 w-10 h-10 border-t border-r border-gold-500/30 z-0 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

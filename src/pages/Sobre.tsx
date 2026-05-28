import { motion } from "motion/react";
import { Award, Scale, Users, ShieldCheck, HelpCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";

export function Sobre() {
  return (
    <div className="pt-36 pb-24 min-h-screen bg-brand-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Quem Somos</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extralight text-white max-w-5xl leading-[1.1] text-balance">
            Lisura, qualidade e <br/>
            <span className="font-serif italic font-light text-gold-500">entendimento jurídico integrado.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-[15px] text-cashmere-500/80 leading-relaxed font-light font-sans text-balance"
          >
            <p>
              Somos uma banca jurídica estruturada para atender o <strong className="text-white font-medium">pequeno e médio empresário</strong> e <strong className="text-white font-medium">pessoas físicas no geral</strong> que necessitam de orientação franca, segura e altamente eficaz.
            </p>
            <p>
              Acreditamos que resultados consistentes são alcançados não apenas pelo notável conhecimento jurídico material e prática processual, mas pelo diálogo aberto e constante e por uma afinada e talentosa equipe, inteiramente comprometida com as expectativas e reais necessidades de cada cliente.
            </p>
            <p>
              Diante de uma concorrência empresarial complexa e cada vez mais exigente, nossa preocupação é elevar as soluções a uma <strong className="text-white font-medium">visão global de negócios</strong>, respeitando integralmente o nicho de atuação e as dores de quem nos submete sua confiança.
            </p>
            
            <div className="pt-8 border-t border-white/5 mt-8 space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                <p className="text-xs text-cashmere-400 font-sans"><strong className="text-white font-medium">Visão de Negócios:</strong> Nossas soluções transcendem a frieza técnica das leis, focando-se no reequilíbrio operacional e comercial do empresário.</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-gold-500 mt-2 shrink-0" />
                <p className="text-xs text-cashmere-400 font-sans"><strong className="text-white font-medium">Diálogo Francó:</strong> Praticamos um acompanhamento acessível, informando andamentos processuais com máxima transparência e clareza.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[480px] w-full max-w-md mx-auto lg:mx-0 select-none"
          >
            {/* Imagem 1: Fachada Corporativa (Fundo) */}
            <div className="absolute inset-y-6 right-6 left-12 overflow-hidden border border-white/[0.04] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" 
                alt="Santana Advogados - Escritório Corporativo" 
                className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-750"
              />
            </div>

            {/* Imagem 2: Balança da Justiça e Livros (Frente) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 left-0 w-2/3 aspect-[4/3] border-[6px] border-brand-900 shadow-2xl overflow-hidden z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600" 
                alt="Santana Advogados - Símbolo de Justiça" 
                className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-750"
              />
            </motion.div>

            {/* Moldura Decorativa */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-[1px] border-gold-500/20 z-0 pointer-events-none" />
          </motion.div>
        </div>

        {/* 2. Timeline Histórica Interativa */}
        <div className="py-24 border-t border-white/[0.06] relative">
          <div className="text-center flex flex-col items-center mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold-500" />
              <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Nossa História</span>
              <div className="w-8 h-px bg-gold-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-white leading-tight">
              Uma trajetória de <span className="font-serif italic text-gold-500 font-light">lisura e compromisso.</span>
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Linha Vertical Central */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent transform sm:-translate-x-1/2" />

            <div className="space-y-16">
              {[
                {
                  year: "1990",
                  title: "A Fundação",
                  desc: "O Escritório Santana, Adv. foi fundado em 27 de abril de 1990, na R. Praça Dom Adauto, Centro, João Pessoa-PB, sob a retidão de seu fundador, o advogado José Santana de Jesus (OAB/PB 5.815)."
                },
                {
                  year: "1994",
                  title: "Integração e Crescimento",
                  desc: "A advogada Maria de Fátima dos Santos (OAB/PB 6.343), esposa do fundador, passa a integrar a banca corporativa de maneira integrada e ativa."
                },
                {
                  year: "2007",
                  title: "A Perda e Interrupção",
                  desc: "Ocorre o doloroso falecimento do fundador José Santana de Jesus. Em sinal de luto e reorganização, as atividades do escritório sofrem interrupção."
                },
                {
                  year: "2014",
                  title: "Retomada em Campina Grande",
                  desc: "O escritório reinicia suas atividades operacionais no estado, estabelecendo-se na cidade de Campina Grande - PB sob a reponsabilidade direta e liderança do advogado Jaksson Santana de Jesus."
                },
                {
                  year: "2019",
                  title: "Novo Endereço e Dupla Presença",
                  desc: "Com foco na expansão e melhoria do atendimento, o escritório fixa endereço na Av. Dom Pedro II, passando a funcionar de forma integrada e próxima em João Pessoa e Campina Grande."
                },
                {
                  year: "2020",
                  title: "Estrutura Híbrida & Homeoffice",
                  desc: "Diante dos desafios da pandemia, o escritório investe significativamente em tecnologias e arranjos híbridos para trabalho homeoffice de sua equipe operacional e advogados associados."
                },
                {
                  year: "2024",
                  title: "Coordenação & Destaque de Mercado",
                  desc: "Com sólida tradição de atuação, a banca destaca-se em assuntos de advocacia consultiva e litigiosa empresarial e cível, prestando serviços multidisciplinares com segurança e resolutividade."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col sm:flex-row items-stretch relative ${
                    index % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Ponto na Linha Central */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-brand-900 border-2 border-gold-500 transform -translate-x-1.5 sm:-translate-x-2 z-20 flex items-center justify-center top-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                  </div>

                  {/* Espaço de Alinhamento Desktop */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8" />

                  {/* Card da Timeline */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 mt-2 sm:mt-0">
                    <div className="bg-brand-800 border border-white/[0.04] p-6 hover:border-gold-500/20 transition-all duration-700 shadow-xl relative group">
                      <span className="font-display font-light text-2xl text-gold-500 block mb-2 tracking-wider group-hover:scale-105 transition-transform duration-500 origin-left">
                        {item.year}
                      </span>
                      <h4 className="text-white font-medium text-base mb-2 tracking-wide font-sans">{item.title}</h4>
                      <p className="text-cashmere-500/70 text-xs leading-relaxed font-light font-sans text-justify">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pilares (Grid Arquitetônico) */}
        <div className="py-24 border-t border-b border-white/[0.06]">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-light text-white text-center">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {[
              { icon: Users, title: "Diálogo", desc: "A vanguarda nos faz acreditar na possibilidade de se fazer algo melhor por meio do diálogo franco e ação conjunta." },
              { icon: Scale, title: "Gestão", desc: "As demandas submetidas a confiança de nossa banca são rigorosamente gerenciadas, garantindo conformidade ao plano definido." },
              { icon: Award, title: "Aperfeiçoamento", desc: "Resultados só são possíveis por meio de equipe qualificada, experiente, multidisciplinar e altamente criativa." },
              { icon: ShieldCheck, title: "Valores", desc: "Atitude correta para hoje, amanhã e sempre; a segurança e a resolutividade pragmática são os pilares que nos norteiam." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 text-center flex flex-col items-center group hover:bg-white/[0.01] transition-all duration-700"
              >
                <div className="w-14 h-14 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:scale-110 group-hover:border-gold-500 transition-all duration-500 mb-6">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-medium text-white mb-4">{item.title}</h3>
                <p className="text-cashmere-500/70 leading-relaxed text-xs font-light max-w-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

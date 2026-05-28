import { motion } from "motion/react";
import { ArrowRight, Scale, Building2, Coins, HeartHandshake, ShieldCheck, Users, HelpCircle, Laptop, Award } from "lucide-react";

export function AreasAtuacao() {
  const areas = [
    { 
      id: 1, 
      icon: Scale, 
      title: "Contencioso Civil & Administrativo", 
      desc: "Defesas sólidas e atuação processual de alto nível nos tribunais estaduais/federais e órgãos da administração. Especialidade no Regime Jurídico de Servidores Públicos, concursos públicos (nomeações e desclassificações), mandados de segurança, defesas em ações de improbidade, sindicâncias disciplinares e análise rígida de editais de licitações.",
      bg: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/558321065680?text=Olá,%20Santana%20Advogados.%20Gostaria%20de%20um%20atendimento%20especializado%20em%20Contencioso%20Civil%20e%20Administrativo."
    },
    { 
      id: 2, 
      icon: Building2, 
      title: "Empresarial, Societário & Imobiliário", 
      desc: "Orientação global preventiva e contenciosa sob medida para negócios. Constituição de sociedades empresárias, acordos de sócios/quotistas, proteção de propriedade intelectual (registro de marcas & patentes), falências, recuperação judicial estruturada, due diligence e contratos mercantis estratégicos, além de assessoria especializada em questões imobiliárias e de vizinhança.",
      bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/558321065680?text=Olá,%20Santana%20Advogados.%20Gostaria%20de%20um%20atendimento%20especializado%20em%20Direito%20Empresarial%20e%20Societário."
    },
    { 
      id: 3, 
      icon: Coins, 
      title: "Tributário, Emprego & Previdenciário", 
      desc: "Planejamento fiscal de conformidade e defesa em autos de infração fiscal. Estruturação técnica de contratos de trabalho e consultoria preventiva para mitigação de passivos trabalhistas laborais (contencioso trabalhista). Planejamento previdenciário e assessoria completa em concessão de aposentadorias de regimes diversos e auxílios decorrentes de doenças ocupacionais.",
      bg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/558321065680?text=Olá,%20Santana%20Advogados.%20Gostaria%20de%20um%20atendimento%20especializado%20em%20Áreas%20Tributária,%20Trabalhista%20ou%20Previdenciária."
    },
    { 
      id: 4, 
      icon: HeartHandshake, 
      title: "Processo Disciplinar, Arbitragem & Família", 
      desc: "Resoluções céleres e sensíveis de alta complexidade. Condução humanizada de inventários rápidos judiciais ou em cartório, planejamento de testamentos, partilha patrimonial e divórcios sob absoluto sigilo e ética. Resoluções por arbitragem de contratos corporativos, defesas em sindicâncias e Processo Administrativo Disciplinar (PAD).",
      bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
      link: "https://wa.me/558321065680?text=Olá,%20Santana%20Advogados.%20Gostaria%20de%20agendar%20um%20atendimento%20sobre%20Família,%20Inventário%20ou%20Processo%20Disciplinar."
    }
  ];

  const publicos = [
    { name: "Pessoas Físicas no Geral", desc: "Apoio humanizado em planejamento de aposentadorias, inventários, divórcios, direito do consumidor e defesa criminal celer.", icon: Users },
    { name: "Servidores Públicos", desc: "Defesa rígida em sindicâncias, Processo Administrativo Disciplinar (PAD), mandados de segurança, anulações de concursos ou nomeações.", icon: Award },
    { name: "ME & EPP's", desc: "Estruturação sob medida para pequenas e médias empresas, mitigando riscos de passivos trabalhistas, contratuais e fiscais.", icon: Building2 },
    { name: "Empregados & Empregadores", desc: "Assessoria técnica imparcial e conformidade em contratos trabalhistas, acordos coletivos e contencioso na justiça do trabalho.", icon: Scale },
    { name: "Franquias", desc: "Análise estratégica de contratos de franquias (Circular de Oferta), royalties, blindagem e conformidade de know-how.", icon: ShieldCheck },
    { name: "Atacadistas & Varejistas", desc: "Consultoria preventiva em contratos mercantis, relações tributárias e defesa em autos de infração fiscal de mercadorias.", icon: Coins },
    { name: "Softwarehouses & T.I.", desc: "Suporte especializado para empresas de tecnologia, resolvendo propriedade intelectual, licenças, contratos de software e LGPD.", icon: Laptop }
  ];

  return (
    <div className="pt-36 pb-24 min-h-screen bg-brand-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Especialidades</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white max-w-4xl leading-[1.1] text-balance">
            Áreas de domínio <span className="font-serif italic text-gold-500 font-light">técnico & prático.</span>
          </h1>
          <p className="text-cashmere-500/70 text-sm max-w-2xl mt-6 leading-relaxed font-light">
            Desenvolvemos estratégias robustas e planos de ação meticulosamente estudados para dar conformidade jurídica e segurança à sua trajetória corporativa ou familiar.
          </p>
        </motion.div>

        {/* 1. Grid das 4 Macro-Áreas de Atuação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-10 border border-white/[0.04] bg-brand-850 hover:bg-white/[0.01] hover:border-gold-500/20 transition-all duration-700 rounded-2xl flex flex-col justify-between min-h-[380px] overflow-hidden shadow-xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                <img 
                  src={area.bg} 
                  alt={area.title} 
                  className="w-full h-full object-cover grayscale opacity-[0.03] group-hover:opacity-[0.18] transition-opacity duration-700" 
                />
              </div>
              
              {/* Overlay de Degradê Escuro */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 via-brand-900/95 to-brand-900 z-10" />

              <div className="relative z-20 mb-8 space-y-6">
                <div className="w-14 h-14 bg-brand-900 border border-white/5 rounded-full flex items-center justify-center text-gold-500 group-hover:border-gold-500/50 transition-colors duration-500 shrink-0">
                  <area.icon size={26} strokeWidth={1} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-gold-500 transition-colors duration-500 leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-cashmere-500/70 text-[13px] leading-relaxed font-light font-sans text-justify">
                    {area.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-20 flex items-center justify-between mt-auto pt-6 border-t border-white/[0.03]">
                <a 
                  href={area.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cashmere-400 group-hover:text-gold-500 transition-colors duration-500"
                >
                  Agendar Consulta Estratégica
                </a>
                <a 
                  href={area.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-cashmere-400 group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-brand-900 transition-all duration-500 shrink-0"
                >
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Seção do Público de Interesse / Carteira de Clientes */}
        <div className="py-24 border-t border-white/[0.06] relative">
          <div className="text-center flex flex-col items-center mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold-500" />
              <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Público de Interesse</span>
              <div className="w-8 h-px bg-gold-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-white leading-tight">
              Uma carteira diversificada de <span className="font-serif italic text-gold-500 font-light">clientes satisfeitos.</span>
            </h2>
            <p className="text-cashmere-500/70 text-xs max-w-2xl mt-4 leading-relaxed font-sans text-balance">
              Graças à característica multidisciplinar de nosso corpo jurídico, prestamos assessoria continuada a diversos perfis de clientes cíveis e empresariais.
            </p>
          </div>

          {/* Grid de Públicos de Interesse */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {publicos.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-brand-800/40 border border-white/[0.03] hover:border-gold-500/20 p-6 rounded-xl transition-all duration-700 flex flex-col justify-between group h-full shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 border border-white/5 rounded-lg flex items-center justify-center text-gold-500 group-hover:bg-gold-500/5 group-hover:border-gold-500/30 transition-all duration-500 shrink-0">
                    <pub.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-white font-display font-medium text-lg group-hover:text-gold-500 transition-colors duration-500 leading-tight">
                    {pub.name}
                  </h4>
                  <p className="text-cashmere-500/60 text-xs leading-relaxed font-sans font-light text-justify">
                    {pub.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

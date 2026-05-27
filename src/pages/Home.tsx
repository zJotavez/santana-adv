import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Scale, ShieldCheck, Briefcase, Users, ChevronRight, ChevronLeft, Award, MessageSquare, Star, Landmark, MapPin, Phone, Mail } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  
  // Refs e Estados para o Carrossel Infinito Mobile de Advogados
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const interactionTimeoutRef = useRef<any>(null);

  // Auto-scroll loop infinito de cards de advogados (mobile) - da esquerda para a direita
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animationFrameId: number;

    const initScroll = () => {
      const setWidth = container.scrollWidth / 3;
      if (setWidth > 0) {
        container.scrollLeft = setWidth;
      } else {
        requestAnimationFrame(initScroll);
      }
    };
    initScroll();

    const scrollSpeed = 0.45; // velocidade sutil e fluida

    const updateScroll = () => {
      if (!isInteracting && container) {
        const setWidth = container.scrollWidth / 3;
        if (setWidth > 0) {
          container.scrollLeft -= scrollSpeed;
          if (container.scrollLeft <= 0) {
            container.scrollLeft += setWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    animationFrameId = requestAnimationFrame(updateScroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, [isInteracting]);

  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
  };

  const handleInteractionEnd = () => {
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2500);
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const setWidth = container.scrollWidth / 3;
    if (setWidth > 0) {
      if (container.scrollLeft >= 2 * setWidth) {
        container.scrollLeft -= setWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += setWidth;
      }
      
      const normalizedScroll = container.scrollLeft % setWidth;
      const cardWidth = setWidth / 3;
      const index = Math.round(normalizedScroll / cardWidth) % 3;
      setActiveDot(index);
    }
  };

  const scrollManual = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;

    handleInteractionStart();

    const setWidth = container.scrollWidth / 3;
    const cardWidth = setWidth / 3;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth"
    });

    handleInteractionEnd();
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

  const team = [
    {
      id: "wellem",
      name: "Dra. Wellem Dias",
      role: "Fundadora • Diretora Executiva",
      oab: "OAB/PB: 30.120",
      spec: "Direito Empresarial, Família e Planejamento Patrimonial",
      image: "/wellem_dias.jpg",
      bio: "Especialista em Direito Empresarial, Governança Corporativa e Sucessões. Atuação estratégica com foco em resultados rápidos, seguros e eficientes."
    },
    {
      id: "ana",
      name: "Dra. Ana Beatriz",
      role: "Advogada Associada Sênior",
      oab: "OAB/PB: 35.412",
      spec: "Direito de Família, Previdenciário (Aposentadorias e Benefícios)",
      image: "/ana_beatriz.jpg",
      bio: "Atendimento humanizado na concessão de aposentadorias, benefícios previdenciários, divórcios e planejamentos de partilha de bens."
    },
    {
      id: "joao",
      name: "Dr. João Victor",
      role: "Advogado Associado Sênior",
      oab: "OAB/PB: 36.890",
      spec: "Direito Trabalhista, Propriedade Intelectual e Direito Bancário",
      image: "/joao_victor.jpg",
      bio: "Foco na mitigação de riscos contratuais, reequilíbrio de contratos financeiros abusivos e na proteção estratégica de marcas e patentes."
    }
  ];

  const especialidades = [
    { 
      id: 1, 
      title: "Direito Empresarial", 
      desc: "Consultoria corporativa preventiva, estruturação societária, compliance, governança e contratos estratégicos.",
      bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 2, 
      title: "Regularização Imobiliária", 
      desc: "Regularizações de imóveis urbanos e rurais, auditoria de riscos documentais e segurança nas transações imobiliárias.",
      bg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 3, 
      title: "Direito Bancário & Juros Abusivos", 
      desc: "Revisão judicial de contratos bancários abusivos, suspensão de leilões e repactuação de dívidas de alta complexidade.",
      bg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 4, 
      title: "Direito de Família", 
      desc: "Sucessões, partilha patrimonial, inventários rápidos, divórcios consensuais e litígios com máximo sigilo e respeito.",
      bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 5, 
      title: "Previdenciário & Aposentadorias", 
      desc: "Planejamento previdenciário, concessão de aposentadorias de regimes diversos e benefícios assistenciais no INSS.",
      bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 6, 
      title: "Defesa Criminal Especializada", 
      desc: "Atuação criminal contundente nos tribunais estaduais e federais, e assistência especializada completa a vítimas.",
      bg: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const depoimentos = [
    { 
      name: "Fernanda Albuquerque", 
      date: "12/05/2025", 
      text: "Atendimento excepcional! A Dra. Ana Beatriz resolveu minha aposentadoria com rapidez e dedicação que raramente se vê. Recomendo de olhos fechados.", 
      initial: "F" 
    },
    { 
      name: "Carlos Eduardo Melo", 
      date: "08/05/2025", 
      text: "Dr. João Victor é impressionante. Resolveu uma questão trabalhista complexa com muita competência e transparência durante todo o processo.", 
      initial: "C" 
    },
    { 
      name: "Juliana Wanderley", 
      date: "02/05/2025", 
      text: "A Dra. Wellem Dias demonstrou domínio absoluto do meu caso. Além de excelente profissional, é uma pessoa de caráter exemplar.", 
      initial: "J" 
    },
    { 
      name: "Roberto Figueiredo", 
      date: "28/04/2025", 
      text: "Equipe altamente qualificada e comprometida. Senti segurança desde a primeira consulta. Resultado excelente na revisão contratual.", 
      initial: "R" 
    },
    { 
      name: "Patrícia Sousa", 
      date: "20/04/2025", 
      text: "Serviço diferenciado, ético e eficiente. A Dra. Ana Beatriz cuidou do meu inventário com toda atenção e humanidade que o momento exigia.", 
      initial: "P" 
    },
    { 
      name: "Anderson Cavalcante", 
      date: "15/04/2025", 
      text: "Profissionalismo de alto nível. O escritório me surpreendeu positivamente. Cumpriram tudo o que prometeram e no prazo acordado.", 
      initial: "A" 
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-brand-900 overflow-x-hidden">
      
      {/* 1. Hero Section com Zoom ao Scroll e Degradê Assimétrico */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        
        {/* Imagem de Fundo animada */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: heroScale, y: heroY, opacity: heroOpacity }}
        >
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            alt="Dias Advocacia - Escritório de Advocacia" 
            className="w-full h-full object-cover grayscale contrast-115 brightness-[0.55] object-center"
          />
        </motion.div>

        {/* Degradê Assimétrico: Sólido à esquerda, transparente à direita */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-transparent z-10 w-full md:w-3/5" />
        {/* Camada escura de base no mobile */}
        <div className="absolute inset-0 bg-brand-900/40 md:bg-transparent z-10 w-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 w-full pt-20">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gold-500" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-gold-500">DIAS ADVOCACIA</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-extralight tracking-tight leading-[1.05] text-cashmere-300 mb-8">
              Defendendo direitos com <br/> 
              <span className="font-serif italic font-light text-gold-500 select-none">estratégia & prestígio.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-cashmere-500/80 mb-10 max-w-2xl leading-relaxed font-light text-balance">
              Sob a leadership da Dra. Wellem Dias, atuamos com rigor, ética e método absoluto para construir soluções jurídicas ágeis, eficientes e responsáveis.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/5583998765432?text=Ol%C3%A1%2C%20DIAS%20Advocacia.%20Gostaria%20de%20agendar%20um%20atendimento%20jur%C3%ADdico%20especializado."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gold-500 text-brand-900 font-semibold uppercase text-[10px] tracking-[0.25em] text-center hover:bg-gold-400 hover:scale-[1.02] transition-all duration-500 ease-out flex items-center justify-center gap-2 group shadow-xl shadow-gold-500/10 w-full sm:w-auto"
              >
                Falar com Especialista
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-500" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gold-500/40 hidden md:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-light">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-gold-500/40 to-transparent" />
        </motion.div>
      </section>

      {/* 2. Faixa Lateral Rotativa (Ticker Tape / Letreiro Infinito) */}
      <section className="py-6 bg-brand-800 border-y border-gold-500/15 overflow-hidden relative z-20 select-none">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 text-gold-500/85 font-display font-light text-sm tracking-[0.25em] uppercase">
            <span>DIAS ADVOCACIA • ÉTICA E TRANSPARÊNCIA • MÉTODO E RIGOR ESTRATÉGICO • COMPROMISSO COM O CLIENTE • DIAS ADVOCACIA • ÉTICA E TRANSPARÊNCIA • MÉTODO E RIGOR ESTRATÉGICO • COMPROMISSO COM O CLIENTE •</span>
          </div>
        </div>
      </section>

      {/* 3. Seção "Nossa Banca" (Advogados com Foto de Grupo + Revelação) */}
      <section className="py-24 bg-brand-900 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center flex flex-col items-center mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold-500" />
              <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Membros da Banca</span>
              <div className="w-8 h-px bg-gold-500" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white max-w-4xl leading-[1.15] text-balance">
              Corpo jurídico de elite focado em <span className="font-serif italic text-gold-500 font-light">soluções estratégicas.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-20 overflow-hidden border border-white/[0.05]"
          >
            <div className="absolute inset-0 bg-[#070B19]/25 z-10 pointer-events-none" />
            <img 
              src="/equipe.jpg" 
              alt="Dias Advocacia - Banca de Advogados Reunida" 
              className="w-full aspect-[3/2] md:aspect-[16/9] object-cover grayscale object-[center_15%] select-none"
            />
            <div className="absolute bottom-6 left-6 z-20 bg-brand-900/90 backdrop-blur-sm px-6 py-4 border border-white/5 max-w-lg hidden sm:block">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold-500 mb-1 font-semibold">Liderança & Método</p>
              <h3 className="text-sm font-display text-white">Nossa condução jurídica apoia-se no entendimento profundo do problema e em execução meticulosamente documentada.</h3>
            </div>
          </motion.div>

          {/* Versão Desktop (Cards Estáticos Lado a Lado) */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {team.map((person, index) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-full bg-transparent border border-white/[0.04] hover:border-gold-500/20 transition-all duration-700"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 select-none"
                  />
                  <div className="absolute inset-0 bg-brand-900/5 group-hover:opacity-0 transition-opacity duration-700" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-gold-500 text-[9px] font-semibold tracking-[0.2em] uppercase mb-1.5 block">
                      {person.role}
                    </span>
                    <h3 className="text-xl font-display font-medium text-white mb-1 group-hover:text-gold-500 transition-colors duration-500">{person.name}</h3>
                    <span className="text-cashmere-500 text-xs font-semibold block mb-4">{person.oab}</span>
                    <p className="text-cashmere-500/60 text-xs leading-relaxed font-light mb-6 font-sans">
                      {person.spec}
                    </p>
                  </div>
                  
                  <Link 
                    to={`/advogados#${person.id}`}
                    className="text-[9px] font-semibold uppercase tracking-[0.25em] text-cashmere-400 group-hover:text-gold-500 border-t border-white/5 pt-4 flex items-center justify-between transition-colors duration-500 mt-auto"
                  >
                    Ver Perfil Completo
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Versão Mobile (Carrossel Horizontal de Loop Infinito da Esquerda para Direita com Suporte Tátil & Manual) */}
          <div className="block md:hidden relative w-full overflow-hidden pb-8 px-1 select-none">
            
            {/* Contêiner de Arrastar/Rolar nativo com Refs */}
            <div 
              ref={carouselRef}
              className="flex gap-3 overflow-x-auto scrollbar-none scroll-smooth px-4"
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
              onMouseDown={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onScroll={handleScroll}
            >
              {[...team, ...team, ...team].map((person, index) => (
                <div 
                  key={`${person.id}-${index}`} 
                  className="w-[165px] shrink-0"
                >
                  <div className="group relative flex flex-col bg-brand-800/40 border border-white/[0.04] rounded-xl overflow-hidden hover:border-gold-500/25 transition-all duration-700 w-full shadow-2xl h-full">
                    
                    {/* Imagem do Advogado Compacta */}
                    <div className="aspect-[4/5] relative overflow-hidden shrink-0">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover grayscale opacity-90 object-[center_10%] select-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent z-10" />
                    </div>

                    {/* Informações Compactadas e Reduzidas para Mobile */}
                    <div className="p-3 flex flex-col justify-between flex-1 min-h-[170px]">
                      <div>
                        <span className="text-gold-500 text-[8px] font-bold tracking-[0.15em] uppercase mb-1 block leading-none">
                          {person.role.split(" • ")[0]}
                        </span>
                        <h3 className="text-sm font-display font-medium text-white mb-0.5 leading-tight">{person.name}</h3>
                        <span className="text-cashmere-500/60 text-[9px] font-semibold block mb-2">{person.oab}</span>
                        <p className="text-cashmere-500/70 text-[10px] leading-relaxed font-light mb-3 font-sans text-justify line-clamp-3">
                          {person.spec}
                        </p>
                      </div>
                      
                      <Link 
                        to={`/advogados#${person.id}`}
                        className="text-[8px] font-semibold uppercase tracking-[0.2em] text-gold-500 border-t border-white/5 pt-2 flex items-center justify-between mt-auto"
                      >
                        Ver Perfil
                        <ChevronRight size={10} />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Controles Manuais: Setas Laterais */}
            <button 
              onClick={() => scrollManual("left")}
              className="absolute left-1 top-[35%] -translate-y-1/2 w-8 h-8 rounded-full bg-brand-900/80 border border-white/10 flex items-center justify-center text-gold-500 active:scale-90 transition-transform z-20 shadow-lg"
              aria-label="Advogado Anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={() => scrollManual("right")}
              className="absolute right-1 top-[35%] -translate-y-1/2 w-8 h-8 rounded-full bg-brand-900/80 border border-white/10 flex items-center justify-center text-gold-500 active:scale-90 transition-transform z-20 shadow-lg"
              aria-label="Próximo Advogado"
            >
              <ChevronRight size={16} />
            </button>

            {/* Bullets / Indicadores de Paginação */}
            <div className="flex justify-center gap-1.5 mt-5">
              {team.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const container = carouselRef.current;
                    if (!container) return;
                    handleInteractionStart();
                    const setWidth = container.scrollWidth / 3;
                    const cardWidth = setWidth / 3;
                    container.scrollTo({
                      left: setWidth + idx * cardWidth,
                      behavior: "smooth"
                    });
                    handleInteractionEnd();
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeDot ? "bg-gold-500 w-3.5" : "bg-white/10"
                  }`}
                  aria-label={`Ir para o advogado ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. Cards Conceituais com Imagem de Fundo que Remetem à Advocacia */}
      <section className="py-24 bg-brand-800 border-t border-b border-white/[0.05] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Segurança Contratual", 
                subtitle: "Garantia e Rigidez",
                desc: "Análise estratégica de contratos para identificar juros abusivos e blindar o patrimônio do cliente.",
                bg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Atuação Proativa", 
                subtitle: "Eficiência e Precisão",
                desc: "Foco integral em consultoria empresarial consultiva e soluções imobiliárias de alto nível.",
                bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: "Condução Combativa", 
                subtitle: "Defesa e Assistência",
                desc: "Defesa criminal rigorosa, assistência especializada a vítimas e suporte estratégico continuado.",
                bg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden aspect-[4/3] flex flex-col justify-end p-8 border border-white/[0.04] hover:border-gold-500/30 transition-all duration-700"
              >
                <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                  <img src={card.bg} alt={card.title} className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-35 transition-opacity duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-transparent z-10" />

                <div className="relative z-20">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-gold-500/80 mb-1.5 block font-semibold">{card.subtitle}</span>
                  <h3 className="text-3xl font-display font-medium text-white mb-3 group-hover:text-gold-500 transition-colors duration-500">{card.title}</h3>
                  <p className="text-cashmere-500/70 text-xs leading-relaxed font-light">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Sobre o Escritório (Collage Style com Fotos Reais) */}
      <section className="py-28 md:py-36 bg-brand-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Texto do Escritório */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold-500" />
                <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Sobre o Escritório</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-8 leading-[1.15] text-balance">
                Ética, transparência e <span className="font-serif italic text-gold-500 font-light">condução criteriosa.</span>
              </h2>
              <div className="space-y-6 text-cashmere-500/85 text-[15px] leading-relaxed font-light font-sans text-balance">
                <p>
                  Sob a liderança da advogada <strong className="text-white font-medium">Dra. Wellem Dias</strong>, a Dias Advocacia atua com foco em soluções jurídicas responsáveis, eficientes e perfeitamente adequadas à realidade de seus clientes.
                </p>
                <p>
                  Nosso método assenta-se em quatro pilares inegociáveis: primeiro, a <strong className="text-white font-medium">compreensão do problema</strong> real de forma atenta; segundo, a <strong className="text-white font-medium">definição da melhor estratégia</strong> legal; terceiro, a <strong className="text-white font-medium">execução precisa e documentada</strong>; e, por fim, o acompanhamento próximo com <strong className="text-white font-medium">comunicação clara e transparente</strong>.
                </p>
                <p>
                  Operamos com atendimento boutique em Campina Grande/PB e ampla projeção nacional, integrando governança corporativa, planejamento patrimonial e defesa contundente perante os órgãos administrativos e judiciais.
                </p>
              </div>
              
              <Link 
                to="/sobre"
                className="mt-12 inline-flex items-center gap-2 text-white hover:text-gold-500 transition-colors uppercase tracking-[0.25em] text-[10px] font-semibold group"
              >
                Conheça Nossa História e Valores
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Collage de Múltiplas Imagens Reais do Escritório */}
            <div className="lg:col-span-6 relative h-[500px] w-full max-w-lg mx-auto lg:mx-0 select-none">
              
              {/* Imagem 1: Escritório - Sala de Reunião (Grande) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-y-8 right-8 left-16 overflow-hidden border border-white/[0.04] shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
                  alt="Dias Advocacia - Sala de Reuniões" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-750"
                />
              </motion.div>

              {/* Imagem 2: Escritório - Biblioteca Jurídica (Inferior Esquerda) */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-4 left-0 w-2/3 aspect-[4/3] border-[6px] border-brand-900 shadow-2xl overflow-hidden z-20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600" 
                  alt="Dias Advocacia - Biblioteca de Direito" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-750"
                />
              </motion.div>

              {/* Imagem 3: Escritório - Detalhe de Assinatura e Mesa (Pequena Superior Direita) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-4 right-0 w-1/3 aspect-square border-[4px] border-brand-900 shadow-xl overflow-hidden z-20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600" 
                  alt="Dias Advocacia - Recepção Boutique" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-750 object-top"
                />
              </motion.div>

              {/* Moldura sutil decorativa */}
              <div className="absolute -top-8 left-12 w-24 h-24 border-t border-l border-gold-500/20 z-0 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 6. Especialidades com Imagens Temáticas de Fundo (Sem ícones/emojis) */}
      <section className="py-24 md:py-32 bg-brand-800 border-t border-b border-white/[0.05] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-gold-500" />
                <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Especialidades</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white leading-tight">
                Áreas de Atuação
              </h2>
            </motion.div>
            
            <Link 
              to="/atuacao"
              className="px-6 py-3 border border-gold-500/30 text-gold-400 hover:text-white font-medium hover:bg-white/5 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] inline-flex"
            >
              Ver Todas as Áreas
            </Link>
          </div>

          {/* Grid de Especialidades com Fundo Temático */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {especialidades.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-4 md:p-10 overflow-hidden bg-brand-900 border border-white/[0.04] hover:border-gold-500/30 transition-all duration-700 flex flex-col justify-between min-h-[190px] md:min-h-[300px]"
              >
                {/* Imagem de Fundo do Card */}
                <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                  <img 
                    src={area.bg} 
                    alt={area.title} 
                    className="w-full h-full object-cover grayscale opacity-[0.1] group-hover:opacity-[0.25] transition-opacity duration-700" 
                  />
                </div>
                {/* Overlay de gradiente escuro de segurança */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-brand-900/85 to-brand-900 z-10" />

                <div className="relative z-20">
                  <h3 className="text-sm md:text-2xl font-display font-medium text-white mb-2 md:mb-4 group-hover:text-gold-500 transition-colors duration-500 leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-cashmere-500/65 text-xs leading-relaxed font-light font-sans text-justify hidden md:block">
                    {area.desc}
                  </p>
                </div>

                <div className="relative z-20 flex items-center justify-between mt-4 md:mt-8 pt-3 md:pt-4 border-t border-white/[0.03]">
                  <Link to={`/atuacao`} className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] text-cashmere-450 group-hover:text-gold-500 transition-colors duration-500">
                    Saber Mais
                  </Link>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-brand-900 transition-all duration-500">
                    <ArrowRight size={10} className="md:w-3 md:h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Carrossel Infinito de Depoimentos (Cards Laterais com Marquee) */}
      <section className="py-24 bg-brand-900 relative overflow-hidden border-b border-white/5 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-16">
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold-500" />
              <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Reconhecimento</span>
              <div className="w-8 h-px bg-gold-500" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white max-w-3xl leading-[1.1] text-balance">
              Endossos que atestam nossa <span className="font-serif italic text-gold-500 font-light">excelência jurídica.</span>
            </h2>
          </div>
        </div>

        {/* Linha Infinita de Depoimentos */}
        <div className="flex whitespace-nowrap overflow-hidden select-none relative z-10">
          <div className="animate-marquee flex gap-8 py-4">
            {[...depoimentos, ...depoimentos].map((dep, index) => (
              <div 
                key={index}
                className="w-[340px] md:w-[380px] shrink-0 bg-brand-800/50 backdrop-blur-sm border border-white/[0.04] p-6 relative flex flex-col justify-between whitespace-normal shadow-xl hover:border-gold-500/15 transition-colors duration-500"
              >
                {/* Cabeçalho do Card */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/5 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar Circular com Inicial */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-700 to-gold-600 border border-gold-500/30 flex items-center justify-center text-white font-premium-serif font-bold text-sm shadow-inner shrink-0 select-none">
                      {dep.initial}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white text-xs font-semibold tracking-wider font-sans leading-tight">{dep.name}</h4>
                      <span className="text-[9px] text-cashmere-500/40 font-sans mt-0.5">{dep.date}</span>
                    </div>
                  </div>
                  {/* Selo do Google SVG Oficial Colorido */}
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.22-.66-.35-1.36-.35-2.09z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>

                {/* Estrelas & Selo Verificado */}
                <div className="flex items-center gap-2.5 mb-3.5 select-none">
                  <div className="flex gap-0.5 text-gold-500">
                    <Star size={11} fill="currentColor" className="stroke-none" />
                    <Star size={11} fill="currentColor" className="stroke-none" />
                    <Star size={11} fill="currentColor" className="stroke-none" />
                    <Star size={11} fill="currentColor" className="stroke-none" />
                    <Star size={11} fill="currentColor" className="stroke-none" />
                  </div>
                  <span className="text-[7.5px] bg-blue-500/10 text-blue-400 font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full flex items-center gap-1 border border-blue-500/15 font-sans">
                    <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                    Verificado
                  </span>
                </div>

                {/* Mensagem da Avaliação */}
                <div className="flex-1">
                  <p className="text-xs md:text-sm text-cashmere-300 font-sans leading-relaxed italic font-light font-sans text-justify">
                    "{dep.text}"
                  </p>
                </div>

                {/* Selo Trustindex no rodapé do Card */}
                <div className="mt-4 pt-3 border-t border-white/[0.03] flex items-center justify-between text-[8px] uppercase tracking-wider text-cashmere-500/30 font-semibold font-sans select-none">
                  <span>Avaliação do Google</span>
                  <span className="text-[7px] text-gold-500/40">Trustindex Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Localização do Escritório com Google Maps e Imagens Corporativas */}
      <section className="py-24 bg-brand-850 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Coluna 1: Informações e Endereço */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-gold-500" />
                  <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Nossa Sede</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-light text-white leading-tight">
                  Localização estratégica <br />
                  <span className="font-serif italic text-gold-500 font-light">em Campina Grande/PB.</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/5 bg-brand-900 flex items-center justify-center shrink-0 text-gold-500">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm tracking-wide mb-1 font-sans">Endereço Oficial</h4>
                    <p className="text-cashmere-500/70 text-xs leading-relaxed font-light font-sans">Av. Floriano Peixoto, 546 - Sala 302<br />Centro, Campina Grande - PB<br />CEP: 58400-110</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/5 bg-brand-900 flex items-center justify-center shrink-0 text-gold-500">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm tracking-wide mb-1 font-sans">Canais de Contato</h4>
                    <p className="text-cashmere-500/70 text-xs leading-relaxed font-light font-sans">+55 (83) 99876-5432 • WhatsApp Central<br />Atendimento das 08h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-white/5 bg-brand-900 flex items-center justify-center shrink-0 text-gold-500">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm tracking-wide mb-1 font-sans">E-mail</h4>
                    <p className="text-cashmere-500/70 text-xs leading-relaxed font-light font-sans">atendimento@diasadvocacia.adv.br</p>
                  </div>
                </div>
              </div>

              {/* Botão de Direcionamento Direto no Maps */}
              <a 
                href="https://share.google/OqIFiSvPTdZo2Divq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:text-gold-500 transition-colors pt-4 group"
              >
                Abrir Rota no Google Maps
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Coluna 2: Google Maps Iframe Estilizado Escuro (Afonso Campos 304, CG) */}
            <div className="lg:col-span-7 h-[450px] md:h-[550px] w-full relative border border-white/[0.05] shadow-2xl">
              <iframe
                title="Google Maps Hato Advogados"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.406981440786!2d-35.8848772!3d-7.2287239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aee0f9191d9b3d%3A0x6e2a2223fa8c9d4b!2sR.%20Afonso%20Campos%2C%20304%20-%20Centro%2C%20Campina%20Grande%20-%20PB%2C%2058400-235!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 dark-map absolute inset-0 z-10"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t border-r border-gold-500/30 z-0 pointer-events-none" />
            </div>

          </div>

        </div>
      </section>

      {/* 9. Card Final de CTA Dinâmico (VIP Invitation Style) */}
      <section className="py-24 relative overflow-hidden bg-brand-900 border-t border-white/[0.04]">
        <div className="absolute inset-0 mix-blend-multiply opacity-15 grayscale contrast-120 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1505664177922-24af2dbbed93?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="border border-gold-500/20 py-16 px-8 md:py-24 md:px-16 text-center backdrop-blur-sm relative hover:border-gold-500/40 transition-colors duration-700"
          >
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-gold-500" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-gold-500" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-gold-500" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-gold-500" />
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-6 leading-tight max-w-3xl mx-auto">
              Pronto para defender seus <span className="font-serif italic text-gold-500">interesses legais?</span>
            </h2>
            <p className="text-cashmere-500/70 text-[15px] font-light mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
              Agende uma consulta estratégica com nossa banca de advogados seniores e garanta a melhor estruturação e defesa patrimonial para seu negócio.
            </p>
            <a 
              href="https://wa.me/5583998765432?text=Ol%C3%A1%2C%20DIAS%20Advocacia.%20Gostaria%20de%20agendar%20um%20atendimento%20jur%C3%ADdico%20especializado."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-brand-900 font-semibold uppercase text-[10px] tracking-[0.25em] hover:bg-gold-400 transition-all duration-500 ease-out hover:scale-[1.02] shadow-xl shadow-gold-500/10"
            >
              Agendar Consulta
              <MessageSquare size={14} className="text-brand-900" />
            </a>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}

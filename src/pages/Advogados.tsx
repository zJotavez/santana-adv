import { motion, AnimatePresence } from "motion/react";
import { Instagram, Mail, Phone, X, Award, Briefcase, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Lawyer {
  id: string;
  name: string;
  role: string;
  oab: string;
  spec: string;
  image: string;
  bio?: string;
  email?: string;
  whatsapp?: string;
  knowHow?: string[];
}

export function Advogados() {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null);

  const founder: Lawyer = {
    id: "jose-santana",
    name: "Dr. José Santana de Jesus",
    role: "Advogado-Fundador • in memorian",
    oab: "OAB/PB: 5.815",
    spec: "Fundador do Escritório em 27 de abril de 1990",
    image: "/José Santana de Jesus.jpg",
    bio: "Advogado visionário e íntegro, fundou o escritório Santana, Adv. no Centro de João Pessoa - PB. Sua atuação foi pautada pelo diálogo próximo, lisura irrepreensível e notável dedicação às causas sociais e cíveis. Lançou as bases de compromisso e ética profissional que hoje norteiam toda a nossa banca multidisciplinar.",
    knowHow: [
      "Retidão e Ética Profissional",
      "Fundador da Tradição Santana",
      "Pilar Histórico do Escritório"
    ]
  };

  const team: Lawyer[] = [
    {
      id: "jaksson",
      name: "Dr. Jaksson Santana de Jesus",
      role: "Diretor Jurídico • Advogado Sócio-Diretor",
      oab: "OAB/PB: 19.538",
      spec: "Direito Empresarial, Societário, Tributário e Imobiliário",
      image: "/Jaksson Santana de Jesus.jpg",
      bio: "Advogado com forte atuação em consultoria jurídica empresarial preventiva e contenciosa. Possui sólida experiência em reestruturação societária, acordos de sócios, falências, governança corporativa, planejamento fiscal e transações imobiliárias de alta complexidade. Bacharel em Direito e pós-graduado em Direito Empresarial pela Universidade Cândido Mendes (UCAM/RJ); pós-graduado em Direito Tributário e Processo pela Escola Superior de Advocacia da Paraíba (ESA/PB); e pós-graduando em Direito Imobiliário pela Escola Paulista de Direito (EPD/SP). É participante de diversos cursos voltados a negócios pela BMF&BOVESPA, CEJUS, OAB/SP, ABAT/SP, FGV/RJ e SEBRAE/PB.",
      email: "jaksson@stna.adv.br",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dr.%20Jaksson%20Santana.%20Gostaria%20de%20agendar%20uma%20consulta%20especializada.",
      knowHow: [
        "Empresas, Franquias, Emprego e Serviços",
        "Startup's & Scale-ups",
        "Sociedades, Acordo de Quotistas e Acionistas",
        "Contratos Mercantis e Imobiliários",
        "Consultoria e Planejamento Jurídico Empresarial",
        "Falência e Recuperação Judicial",
        "Arbitragem, Marcas & Patentes",
        "Processo Administrativo Disciplinar",
        "Recuperação de Crédito",
        "Compliance & Due Diligence",
        "Autos de Infração Fiscal",
        "Questões Imobiliárias e de Vizinhança",
        "Questões legais que envolvem T.I."
      ]
    },
    {
      id: "daiane",
      name: "Dra. Daiane Garcias Barreto",
      role: "Advogada Associada Sênior",
      oab: "OAB/PB: 14.889",
      spec: "Direito Administrativo e Regime dos Servidores Públicos",
      image: "/daiane2.jpg",
      bio: "Advogada altamente especializada em Direito Administrativo e Constitucional. É doutora em ciências jurídicas e sociais e autora da renomada obra 'Sinopse de Direito Administrativo - 5. ed., Editora Edijur, 2019'. Atua firmemente na defesa de servidores públicos municipais, estaduais e federais, análise de processos licitatórios e sindicâncias disciplinares.",
      email: "daiane@stna.adv.br",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dra.%20Daiane%20Garcias.%20Gostaria%20de%20agendar%20um%20atendimento%20sobre%20Direito%20Administrativo.",
      knowHow: [
        "Regime Jurídico do Servidor Público",
        "Concursos Públicos (Nomeações, Cadastro de Reserva)",
        "Mandados de Segurança e Ações de Improbidade",
        "Análise de Instrumentos Convocatórios e Editais",
        "Habilitações e Classificações em Licitações",
        "Sindicâncias e Processo Administrativo Disciplinar (PAD)",
        "Defesa em Ações de Ressarcimento ao Erário",
        "Anulações de Questões de Prova e Desclassificações Indevidas"
      ]
    },
    {
      id: "marcelo",
      name: "Dr. Marcelo Vieira da Silva",
      role: "Advogado Associado",
      oab: "OAB/PB: 22.100",
      spec: "Direito Previdenciário e Planejamento de Rendas",
      image: "/Marcelo Vieira da Silva.jpg",
      bio: "Advogado dedicado à assessoria previdenciária individual e consultiva. Especialista em Prática Judicante pela Escola Superior da Magistratura do Estado da Paraíba (ESMA/PB) e Universidade Estadual da Paraíba (UEPB). Conduz planejamentos de aposentadorias de regimes diversos com foco em mitigação de erros contributivos.",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dr.%20Marcelo%20Vieira.%20Gostaria%20de%20um%20suporte%20sobre%20Direito%20Previdenciário.",
      knowHow: [
        "Planejamento Previdenciário Integrado",
        "Assessoria para Inscrição e Filiação à Previdência",
        "Postulação de Benefícios Previdenciários (Aposentadorias)",
        "Revisão de Auxílio-Doença, Acidente e Reclusão",
        "Concessão de Salário-Maternidade e Pensão por Morte",
        "Postulação de Benefícios Assistenciais (BPC/LOAS)",
        "Defesa perante Juntas de Recurso do INSS"
      ]
    },
    {
      id: "jadisma",
      name: "Dra. Jadisma Figueiredo",
      role: "Advogada Associada",
      oab: "OAB/PB: 29.953",
      spec: "Contencioso Trabalhista e Contratos de Emprego",
      image: "/JadismaR.jpg",
      bio: "Advogada associada com foco contundente na área laboral. Realiza auditorias em contratos de emprego para prevenção de riscos de passivos trabalhistas, atua em negociações e defende os direitos dos trabalhadores e empregadores nos tribunais do trabalho.",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dra.%20Jadisma.%20Gostaria%20de%20falar%20sobre%20Contrato%20de%20Emprego%20/%20Trabalhista.",
      knowHow: [
        "Contencioso Trabalhista de Alta Performance",
        "Auditoria de Contratos de Emprego",
        "Mitigação de Passivo Trabalhista para Empresas",
        "Defesa de Direitos Trabalhistas Individuais",
        "Acordos Judiciais e Extrajudiciais Laborais"
      ]
    },
    {
      id: "cristiane",
      name: "Dra. Cristiane Queiroz",
      role: "Advogada Associada",
      oab: "OAB/PB: 12.270",
      spec: "Planejamento Previdenciário, Indenizações e Rendas",
      image: "/cristiane.jpg.webp",
      bio: "Advogada previdenciarista dedicada a estruturar rendas vitalícias de aposentadoria e planejar indenizações contratuais ou securitárias. Oferece orientação ética e precisa para maximizar benefícios assistenciais.",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dra.%20Cristiane.%20Gostaria%20de%20uma%20consulta%20sobre%20Planejamento%20Previdenciário.",
      knowHow: [
        "Planejamento Previdenciário de Rendas",
        "Cálculos de Tempo de Contribuição e Indenizações",
        "Postulação de Aposentadoria Especial",
        "Acompanhamento de Processos de Benefícios do INSS"
      ]
    },
    {
      id: "janaina",
      name: "Dra. Janaína Rodrigues Jesus",
      role: "Advogada Associada",
      oab: "OAB/DF: 45.733",
      spec: "Direito Imobiliário, Contratos e Homologações",
      image: "/janaina3.jpg",
      bio: "Advogada com expertise em consultoria cível de imóveis. Bacharel em Direito pela Faculdade Projeção e pós-graduada em Direito Imobiliário pela Faculdade Unyleya. Atuou como Membro da Comissão de Direito Imobiliário da OAB/DF (Gestão 2019/2021). Especialista em homologações estrangeiras e contratos de compra, venda e locações.",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dra.%20Janaína.%20Gostaria%20de%20tirar%20dúvidas%20sobre%20Contratos%20Imobiliários.",
      knowHow: [
        "Contratos Imobiliários Complexos",
        "Consultoria de Compra, Venda e Locação",
        "Homologações Estrangeiras",
        "Regularização de Ativos Imobiliários e Cível",
        "Auditoria Preventiva de Riscos Documentais"
      ]
    },
    {
      id: "yonara",
      name: "Dra. Yonara Kelly Alves de Brito",
      role: "Advogada Associada",
      oab: "OAB/PB: 20.368",
      spec: "Ciências Criminais e Direito de Família",
      image: "/yonara3.jpg",
      bio: "Advogada com sólida e aguerrida atuação nos tribunais de júri e varas de família. É especialista em Ciências Criminais e membro ativo da Comissão de Direito Criminal da OAB Campina Grande. Conduz mediações de divórcios e partilhas com alto sigilo.",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dra.%20Yonara%20Kelly.%20Gostaria%20de%20agendar%20um%20atendimento%20sobre%20Direito%20Criminal%20/%20Família.",
      knowHow: [
        "Defesa Criminal e Ciências Criminais",
        "Atendimento em Delegacias e Tribunal do Júri",
        "Processos de Divórcio, Partilha de Bens e Guarda",
        "Alimentos e Reconhecimento de União Estável",
        "Membro da Comissão de Direito Criminal da OAB CG"
      ]
    },
    {
      id: "ronnie",
      name: "Dr. Ronnie Menezes",
      role: "Advogado Associado",
      oab: "OAB/PB: 24.035",
      spec: "Sucessões, Inventário, Família e Direito Criminal",
      image: "/ronnie2.jpg",
      bio: "Advogado com atuação focada no reequilíbrio de patrimônios familiares após falecimento e litígios cíveis. Atua de forma humanizada e técnica em inventários judiciais e extrajudiciais rápidos, planejamento de testamentos e causas penais.",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dr.%20Ronnie.%20Gostaria%20de%20falar%20sobre%20Inventário%20/%20Sucessões.",
      knowHow: [
        "Inventários Rápidos (Judiciais e em Cartório)",
        "Planejamento de Sucessões e Testamento",
        "Ações de Família (Divórcio e Guarda de Menores)",
        "Defesa Criminal Célere e Acompanhamento de Inquéritos"
      ]
    },
    {
      id: "julihermes",
      name: "Dr. Julihermes de Sá Bezerra",
      role: "Advogado Associado",
      oab: "OAB/PB: 20.345",
      spec: "Direito Civil, Direito do Consumidor e Assessoria Pública",
      image: "/julihermes03.jpg",
      bio: "Especialista em Direito Civil e Relações de Consumo. Atua como Vice-presidente da Comissão de Direito do Consumidor da OAB CG. Acumula sólida experiência administrativa como Assessor Jurídico no Município de Lagoa Seca - PB, assessorando licitações e contratos públicos.",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dr.%20Julihermes.%20Gostaria%20de%20uma%20consulta%20sobre%20Direito%20do%20Consumidor.",
      knowHow: [
        "Defesa do Consumidor perante Órgãos Administrativos",
        "Processos Judiciais Cíveis de Alta Complexidade",
        "Assessoria Jurídica de Órgãos Públicos Municipais",
        "Vice-presidente da Comissão de Consumidor OAB CG",
        "Análise de Contratos e Contestações Cíveis"
      ]
    },
    {
      id: "gerlania",
      name: "Dra. Gerlania Dantas",
      role: "Advogada Associada",
      oab: "OAB/PB: 20.317",
      spec: "Benefícios Previdenciários e Doenças Ocupacionais",
      image: "/gerlania1.jpg",
      bio: "Advogada previdenciarista focada no restabelecimento e concessão de auxílios e aposentadorias decorrentes de doenças laborais, acidentes de trabalho e nexo técnico epidemiológico. Defesa rígida de direitos sociais de vulneráveis.",
      whatsapp: "https://wa.me/558321065680?text=Olá,%20Dra.%20Gerlania.%20Gostaria%20de%20suporte%20sobre%20Aposentadoria%20por%20Invalidez%20/%20Doença%20Ocupacional.",
      knowHow: [
        "Concessão de Aposentadoria por Incapacidade Permanente",
        "Comprovação de Doenças Ocupacionais e Nexo Técnico",
        "Ações Indenizatórias por Acidentes do Trabalho",
        "Restabelecimento de Auxílio-Incapacidade (Antigo Auxílio-Doença)"
      ]
    }
  ];

  return (
    <div className="pt-36 pb-24 min-h-screen bg-brand-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Nosso Corpo Jurídico</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white max-w-4xl leading-[1.1] text-balance">
            Talento, compromisso e <span className="font-serif italic text-gold-500 font-light">sólida atuação.</span>
          </h1>
          <p className="text-cashmere-500/70 text-sm max-w-2xl mt-6 leading-relaxed font-light">
            Nossa banca é integrada de forma coordenada por advogados com especialidades complementares, garantindo aos nossos clientes orientação integral em qualquer área do Direito.
          </p>
        </motion.div>

        {/* 1. Homenagem ao Fundador in memorian */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 p-8 md:p-12 border border-gold-500/10 bg-brand-850 relative group rounded-2xl max-w-4xl mx-auto"
        >
          <div className="absolute top-0 left-8 -translate-y-1/2 bg-brand-900 px-4 text-gold-500 font-display font-light tracking-[0.25em] text-xs uppercase">
            Advogado-Fundador • Homenagem
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Foto Redonda do Fundador */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-gold-500/20 shrink-0 relative group">
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 transition-opacity duration-700 select-none"
                />
                <div className="absolute inset-0 bg-brand-900/10" />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold-500 font-semibold block leading-none">
                {founder.role}
              </span>
              <h3 className="text-3xl font-display font-light text-white">{founder.name}</h3>
              <span className="text-cashmere-500/50 text-xs font-semibold block font-sans">{founder.oab}</span>
              <p className="text-cashmere-500/70 text-[13px] leading-relaxed font-light font-sans text-justify">
                {founder.bio}
              </p>
              <button 
                onClick={() => setSelectedLawyer(founder)}
                className="mt-2 text-gold-500 hover:text-white transition-colors text-[10px] uppercase font-semibold tracking-widest flex items-center gap-1 mx-auto md:mx-0 group/link"
              >
                Ver Homenagem e Know-how
                <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* 2. Banca de Associados */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-display text-white text-center mb-12 uppercase tracking-widest font-light">Corpo de Advogados Associados</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((person, index) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-full bg-brand-800/40 border border-white/[0.04] hover:border-gold-500/20 transition-all duration-700 cursor-pointer rounded-xl overflow-hidden shadow-lg"
                onClick={() => setSelectedLawyer(person)}
              >
                {/* Foto */}
                <div className="aspect-[4/5] relative overflow-hidden bg-brand-900">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-103 transition-all duration-1000 select-none object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/10 to-transparent opacity-60 z-10" />
                </div>

                {/* Info Rápida */}
                <div className="p-6 flex flex-col justify-between flex-1 relative z-20">
                  <div>
                    <span className="text-gold-500 text-[9px] font-bold tracking-[0.2em] uppercase mb-1.5 block">
                      {person.role.split(" • ")[0]}
                    </span>
                    <h3 className="text-xl font-display font-medium text-white mb-1 group-hover:text-gold-500 transition-colors duration-500">{person.name}</h3>
                    <span className="text-cashmere-500/50 text-[10px] font-semibold block mb-4 font-sans">{person.oab}</span>
                    <p className="text-cashmere-500/70 text-xs leading-relaxed font-light font-sans text-justify line-clamp-3">
                      {person.spec}
                    </p>
                  </div>

                  <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold-500 border-t border-white/5 pt-4 flex items-center justify-between mt-6">
                    <span>Visualizar Trajetória &amp; Know-how</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-500">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. Gaveta Lateral de Detalhes do Advogado (Boutique Drawer) */}
      <AnimatePresence>
        {selectedLawyer && (
          <>
            {/* Overlay Escuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLawyer(null)}
              className="fixed inset-0 bg-[#000] z-40 cursor-pointer"
            />

            {/* Painel da Gaveta */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[500px] md:w-[580px] bg-brand-900 border-l border-white/5 z-50 overflow-y-auto shadow-2xl p-6 md:p-10 flex flex-col justify-between"
            >
              
              {/* Botão de Fechar */}
              <div className="flex justify-end mb-6">
                <button 
                  onClick={() => setSelectedLawyer(null)}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-gold-500 flex items-center justify-center text-cashmere-450 hover:text-gold-500 transition-all duration-300 active:scale-95"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 space-y-8">
                {/* Cabeçalho */}
                <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-white/5">
                  <div className="w-32 h-32 rounded-full overflow-hidden border border-gold-500/20 shrink-0 relative">
                    <img src={selectedLawyer.image} alt={selectedLawyer.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <span className="text-[9px] uppercase tracking-widest text-gold-500 font-semibold block">{selectedLawyer.role}</span>
                    <h2 className="text-2xl font-display font-light text-white leading-tight">{selectedLawyer.name}</h2>
                    <span className="text-cashmere-500/40 text-xs font-semibold block font-sans">{selectedLawyer.oab}</span>
                  </div>
                </div>

                {/* Sobre / Biografia */}
                {selectedLawyer.bio && (
                  <div className="space-y-3">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold-500/80 font-bold font-sans flex items-center gap-2">
                      <Briefcase size={12} strokeWidth={1.5} />
                      Perfil e Trajetória Acadêmica
                    </h4>
                    <p className="text-cashmere-300 text-[13px] leading-relaxed font-light font-sans text-justify whitespace-pre-wrap">
                      {selectedLawyer.bio}
                    </p>
                  </div>
                )}

                {/* Know-how Especializado */}
                {selectedLawyer.knowHow && selectedLawyer.knowHow.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold-500/80 font-bold font-sans flex items-center gap-2">
                      <Award size={12} strokeWidth={1.5} />
                      Ramos de Domínio Especializado (Know-how)
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedLawyer.knowHow.map((item, idx) => (
                        <div key={idx} className="flex gap-3 items-start bg-brand-850 p-3 border border-white/[0.02] hover:border-gold-500/10 transition-colors duration-500">
                          <CheckCircle2 size={13} className="text-gold-500 shrink-0 mt-0.5" />
                          <span className="text-cashmere-500/80 text-[12px] leading-snug font-sans">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Rodapé da Gaveta - Contatos Diretos */}
              {(selectedLawyer.email || selectedLawyer.whatsapp) && (
                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {selectedLawyer.email ? (
                    <a 
                      href={`mailto:${selectedLawyer.email}`} 
                      className="text-xs text-cashmere-500 hover:text-gold-500 transition-colors flex items-center gap-2 font-sans"
                    >
                      <Mail size={14} />
                      {selectedLawyer.email}
                    </a>
                  ) : <div />}

                  {selectedLawyer.whatsapp ? (
                    <a
                      href={selectedLawyer.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-gold-500 text-brand-900 font-semibold uppercase text-[9px] tracking-[0.2em] hover:bg-gold-400 transition-all duration-300 flex items-center gap-2 shrink-0 shadow-lg"
                    >
                      <Phone size={12} className="fill-current" />
                      Agendar Consulta
                    </a>
                  ) : <div />}
                </div>
              )}

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

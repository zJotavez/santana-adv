import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Calendar, User, X, Tag, FileText, ChevronRight, MessageSquare } from "lucide-react";
import { useState } from "react";

interface Post {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
}

export function Blog() {
  const [activePost, setActivePost] = useState<Post | null>(null);

  const posts: Post[] = [
    {
      id: 1,
      title: "Plano de saúde negou SPRAVATO? Entenda que a Justiça pode ser o caminho.",
      category: "Saúde",
      date: "15 Mai 2026",
      author: "Dr. Jaksson Santana",
      image: "/publi1.webp",
      excerpt: "Entenda seus direitos diante de uma negativa injusta do plano de saúde para o tratamento à base de cloridrato de escetamina (SPRAVATO®) contra a depressão resistente.",
      content: [
        "Quando um(a) filho(a) enfrenta um quadro grave de saúde mental, toda a família sofre junto. Pais que acompanham filhos nestas situações se sentem impotentes diante de uma negativa do plano de saúde para o tratamento à base de cloridrato de escetamina (SPRAVATO®), utilizado em casos de depressão resistente.",
        "O SPRAVATO® é um medicamento com custo elevado, por isso é comum que operadoras de saúde neguem tratamentos alegando carência contratual, ausência no rol da ANS, exclusão contratual ou natureza ambulatorial do medicamento. Mas é importante saber que o direito à saúde não pode ser tratado apenas como uma cláusula contratual.",
        "Quando o tratamento é recomendado por equipe médica e a negativa do plano coloca em risco a continuidade terapêutica do paciente, a família pode buscar o caminho jurídico para assegurar o tratamento de forma célere.",
        "Diversas entidades reconhecem benefícios concretos com o tratamento SPRAVATO, como redução clinicamente significativa dos sintomas depressivos, início de ação mais rápido que antidepressivos convencionais, prevenção de recaída e melhora funcional.",
        "Então, a primeira providência para assegurar o tratamento é organizar a documentação. A família deve providenciar:\n\n• Relatório médico detalhado, indicando a ineficácia de outros tratamentos;\n• Prescrição do SPRAVATO;\n• Justificativa médica para o tratamento;\n• Exames, prontuários ou documentos de internação, se houver;\n• Negativa formal do plano de saúde;\n• Contrato, carteirinha ou comprovante do plano de saúde.\n\nCom esses documentos, é possível buscar um pedido de urgência (liminar), buscando a continuidade ou o custeio integral do tratamento indicado pela operadora.",
        "Quando há indicação médica séria, risco concreto e necessidade de tratamento imediato, a via judicial deve ser um instrumento de proteção, especialmente para evitar a interrupção de terapias essenciais. A orientação médica e jurídica adequada pode fazer diferença na proteção da saúde, da dignidade e da vida.",
        "Não deixe para amanhã. O escritório Santana Advogados permanece à inteira disposição para prestar esclarecimentos jurídicos adicionais, com responsabilidade, sigilo e análise individualizada de cada situação.",
        "\"Santana, Adv: escritório comprometido com a saúde das pessoas.\""
      ]
    },
    {
      id: 2,
      title: "Todo homem que encontro me é superior",
      category: "Reflexão",
      date: "23 Set 2024",
      author: "Administrador",
      image: "/publi2.webp",
      excerpt: "O pensamento clássico de Ralph W. Emerson nos ensina a valorizar e extrair aprendizados sinceros de cada pessoa com quem cruzamos ao longo da jornada da vida.",
      content: [
        "O pensamento de Ralph W. Emerson na frase “Todo o homem que encontro me é superior em alguma coisa. E, neste particular, aprendo com ele.” sugere que cada pessoa que encontramos tem alguma qualidade, habilidade ou conhecimento que é superior ao nosso em algum aspecto.",
        "Reconhecido isto, podemos aprender algo de valor com cada pessoa, independentemente de quem ela seja, seu nicho ou sua classe social. A frase incentiva a abertura sincera para o aprendizado e a valorização das qualidades dos outros, promovendo uma mentalidade de crescimento contínuo e respeito mútuo pelas diferenças individuais.",
        "Eu acho que faz muito sentido esta frase clássica. Ela nos estimula a ouvir mais, a julgar menos e a entender que o diálogo é o maior veículo de aperfeiçoamento da sociedade. E você, o que acha desse pensamento de Emerson?"
      ]
    },
    {
      id: 3,
      title: "Nem tudo são flores; mas tudo é semente",
      category: "Desenvolvimento",
      date: "02 Set 2024",
      author: "Dr. Jaksson Santana",
      image: "/publi3.webp",
      excerpt: "A vida é feita de ciclos, altos e baixos. Cada desafio e cada florada guardam em si a semente preciosa do aprendizado e do crescimento pessoal.",
      content: [
        "A vida é feita de altos e baixos, momentos de florescer e também de severos desafios. Mas cada experiência, boa ou ruim, carrega em si uma semente de aprendizado e crescimento constante.",
        "As flores não nascem do nada; elas germinam a partir de sementes que enfrentam a escuridão e a dureza do solo antes de emergirem triunfantes rumo à luz. Assim somos nós diante dos desafios: temos a oportunidade única de semear a perseverança, a resiliência e a sabedoria.",
        "Que possamos olhar para cada situação como uma semente pronta para ser cultivada. Vamos regar com paciência, nutrir com esforço cotidiano e colher os frutos de uma jornada cheia de propósito e realizações.",
        "✨ \"Nem tudo são flores; mas tudo é semente.\" ✨\n– Smagiezi"
      ]
    },
    {
      id: 4,
      title: "O testamento de Silvio Santos",
      category: "Família & Sucessões",
      date: "22 Ago 2024",
      author: "Administrador",
      image: "/publi4.webp",
      excerpt: "A recente partida do comunicador Sílvio Santos levanta um tema crucial: o testamento e o planejamento sucessório como maiores atos de amor e responsabilidade.",
      content: [
        "Em breve teremos conhecimento detalhado do testamento deixado pelo lendário Sílvio Santos. Esse fato chama a atenção para um tema por vezes evitado, mas essencial.",
        "Planejar o futuro é um ato de amor e profunda responsabilidade com a sua descendência. Ter um testamento ou estrutura de planejamento sucessório bem elaborado não apenas garante que seus desejos patrimoniais sejam plenamente respeitados, mas também evita desentendimentos e dolorosos conflitos familiares após a sua partida.",
        "Um planejamento claro, ético e preciso pode prevenir litígios e disputas judiciais de anos sobre bens e direitos, promovendo a perenidade do patrimônio e a harmonia entre aqueles que você mais ama.",
        "Não deixe para depois. Cuide de resguardar o seu legado hoje mesmo com assessoria dedicada. Siga-nos nas redes sociais para compartilhamos mais conhecimentos sobre proteção de patrimônios e sucessões."
      ]
    },
    {
      id: 5,
      title: "O que um policial penal faz?",
      category: "Direito Público",
      date: "20 Ago 2024",
      author: "Dr. Jaksson Santana",
      image: "/publi5.webp",
      excerpt: "Entenda as atribuições do cargo de Policial Penal, criado pela Emenda Constitucional 104/2019, que reformulou a segurança do sistema prisional.",
      content: [
        "O Policial Penal é um oficial da segurança pública responsável por manter a ordem e a disciplina de todo o sistema prisional, atuando tanto no âmbito externo (como recapturas de foragidos, monitoração de custodiados e escoltas oficiais) quanto no âmbito interno (proteção das unidades prisionais, custódia e afins).",
        "Embora a função prática seja antiga e essencial à sociedade, o cargo formal é novo no ordenamento jurídico brasileiro.",
        "Ele foi formalmente instituído pela Emenda Constitucional 104/2019, que reorganizou as carreiras de segurança pública e substituiu a atividade dos antigos 'agentes penitenciários', elevando-os à categoria de policiais com garantias e responsabilidades inerentes à profissão policial penal."
      ]
    },
    {
      id: 6,
      title: "Registro no CREA?",
      category: "Empresarial",
      date: "23 Mai 2024",
      author: "Dr. Jaksson Santana",
      image: "/publi6.webp",
      excerpt: "Empresas não obrigadas ao registro e custas no CREA: o vínculo de obrigatoriedade jurídica está atrelado apenas à atividade-fim básica da organização.",
      content: [
        "O CREA - Conselho Regional de Engenharia e Agronomia - é uma entidade autárquica que regulamenta e fiscaliza o exercício das profissões de engenharia, arquitetura e agronomia no Brasil. O CREA tem como objetivo principal garantir a qualidade e a segurança das atividades profissionais, zelando pelo cumprimento das normas técnicas.",
        "O vínculo legal de exigência de registro entre uma pessoa jurídica e o CREA está diretamente relacionado à atividade principal (atividade-fim) que a empresa realiza. Se a empresa desenvolve atividades básicas ligadas diretamente à engenharia, ela é obrigada a se registrar e a indicar um responsável técnico habilitado.",
        "No entanto, se a atividade principal da empresa não se enquadra nessas áreas técnicas exclusivas, ela não é obrigada por lei a se registrar no CREA e pagar as respectivas taxas e anuidades. Isso porque a obrigatoriedade está vinculada à atividade básica da empresa (Lei 6.839/80) e não a atividades acessórias relacionadas a conselhos.",
        "Temos acompanhado várias empresas e prestadores de serviços sendo autuados e multados indevidamente pelo CREA. Caberá ao prejudicado se manifestar e recorrer de forma adequada para anular administrativamente ou judicialmente o auto de infração e buscar a declaração de não-obrigatoriedade."
      ]
    },
    {
      id: 7,
      title: "Domicílio Judicial Eletrônico obrigatório para PJs",
      category: "Empresarial",
      date: "05 Mar 2024",
      author: "Dr. Jaksson Santana",
      image: "/publi7.webp",
      excerpt: "Grandes e médias empresas devem obrigatoriamente se cadastrar no Domicílio Judicial Eletrônico. Fique atento às obrigações legais da Portaria CNJ n. 46.",
      content: [
        "O Domicílio Judicial Eletrônico tornou-se obrigatório para grandes e médias empresas brasileiras, conforme estabelece a Portaria CNJ n. 46, sob pena de multas e perda de prazos cruciais de defesas.",
        "Trata-se de uma ferramenta eletrônica centralizada que concentra em um único local virtual todas as comunicações, citações, intimações e notificações de processos emitidas por todos os tribunais do país diretamente para as empresas.",
        "Agora, quem precisa receber e acompanhar comunicações de processos encontra no sistema digital nacional uma forma de consulta muito mais simples, ágil e em tempo real.",
        "A solução, 100% digital e gratuita, integra os esforços do Programa Justiça 4.0 do Conselho Nacional de Justiça (CNJ) para garantir que os serviços do Poder Judiciário sejam ágeis, práticos e amplamente eficientes.",
        "Empresários devem atentar-se ao cadastro regular no portal eletrônico oficial do CNJ para evitar o desconhecimento de citações oficiais."
      ]
    },
    {
      id: 8,
      title: "O que é um advogado empresarial?",
      category: "Empresarial",
      date: "29 Fev 2024",
      author: "Dr. Jaksson Santana",
      image: "/publi7.webp",
      excerpt: "Entenda o papel do advogado empresarial na blindagem e tomada de decisões estratégicas de PMEs e na sua formação multidisciplinar em negócios.",
      content: [
        "O advogado empresarial é um profissional altamente especializado que presta assessoria jurídica continuada para empresas, com o objetivo principal de garantir segurança legal no planejamento e na efetivação de seus negócios de mercado.",
        "Diferente de atuações pontuais, o advogado empresarial atua com foco preventivo. Ele é pós-graduado em Direito Empresarial e possui formação multidisciplinar ampla, com sólidos conhecimentos em negócios, finanças, administração e empreendedorismo.",
        "Ele deve estar atento a todas as normas administrativas, cíveis, laborais e fiscais que regulam as complexas relações entre empresário, empresa, sociedade de sócios, concorrência, mercado e órgãos reguladores.",
        "Em suma, ele defende os interesses de seus clientes em juízo ou fora dele e auxilia efetivamente o empresário em tomadas de decisões corporativas estratégicas, reestruturando contratos e blindando o patrimônio social."
      ]
    },
    {
      id: 9,
      title: "Acesso a medicamentos para além de fármacos fornecidos pelo SUS.",
      category: "Direito Público",
      date: "06 Nov 2023",
      author: "Dr. Jaksson Santana",
      image: "/publi9.webp",
      excerpt: "Saiba quais são os requisitos fixados pelos tribunais superiores (STJ e STF) para exigir do Estado o fornecimento de medicamentos de alto custo fora da lista do SUS.",
      content: [
        "Diante das dificuldades orçamentárias enfrentadas pelo Estado na efetivação de políticas públicas de saúde, o cidadão brasileiro passou a buscar a tutela jurídica para ter acesso a fornecimento de medicações, leitos de UTI ou cirurgias complexas, gerando a judicialização da saúde.",
        "A Constituição Federal de 1988 estabelece que a saúde é direito de todos e dever do Estado (art. 196), devendo ser garantido mediante políticas públicas econômicas que reduzam o risco de doenças e garantam acesso igualitário.",
        "Mas é dever da Administração fornecer medicamentos ou tratamentos não incorporados ao SUS ao cidadão que deles necessite?",
        "Na tentativa de trazer alguma racionalidade, o Superior Tribunal de Justiça (STJ) editou o Tema 106, consolidando os requisitos cumulativos obrigatórios para exigir do Estado o fornecimento de fármacos fora do SUS:\n\n(i) Comprovação por laudo médico fundamentado da imprescindibilidade ou necessidade do medicamento, assim como da ineficácia dos fármacos fornecidos pelo SUS;\n(ii) Incapacidade financeira do paciente de arcar com o custo da medicação;\n(iii) Registro regular da medicação na ANVISA.",
        "Já o Supremo Tribunal Federal (STF), nos Temas 500 e 1.161, firmou o entendimento de ser possível exigir excepcionalmente medicamentos sem registro na ANVISA caso houver mora administrativa irrazoável de registro e preenchidos três requisitos: (i) pedido de registro em andamento no país; (ii) registro em renomadas agências estrangeiras; e (iii) inexistência de substituto terapêutico no Brasil.",
        "Além disso, no Tema 793, o STF reafirmou a responsabilidade solidária de todos os entes federados (União, Estados e Municípios) na prestação de assistência à saúde para tratamento de enfermidades graves.",
        "Logo, cabe ao cidadão hipossuficiente organizar laudos sérios com sua equipe médica e buscar assistência jurídica adequada para garantir o fornecimento de sua terapia essencial."
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
          className="mb-20 md:mb-28 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Blog Jurídico</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white max-w-4xl leading-[1.1] text-balance">
            Inteligência jurídica & <span className="font-serif italic text-gold-500 font-light">atualizações de mercado.</span>
          </h1>
          <p className="text-cashmere-500/70 text-sm max-w-2xl mt-6 leading-relaxed font-light font-sans text-balance">
            Acompanhe análises e artigos completos produzidos pela nossa banca multidisciplinar sobre decisões judiciais, conselhos de classe, planejamento sucessório e empresarial.
          </p>
        </motion.div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-brand-850 border border-white/[0.03] hover:border-gold-500/20 overflow-hidden flex flex-col hover:bg-brand-800/40 transition-all duration-700 rounded-xl shadow-lg cursor-pointer h-full"
              onClick={() => setActivePost(post)}
            >
              <div className="aspect-[16/10] relative overflow-hidden border-b border-white/[0.04] bg-brand-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 object-center"
                />
                <div className="absolute top-4 left-4 bg-gold-500 text-brand-900 px-3 py-1 text-[9px] font-semibold tracking-wider uppercase shadow-lg z-10">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-cashmere-500/40 text-[9px] uppercase tracking-wider mb-2">
                    <div className="flex items-center gap-1.5 font-sans">
                      <User size={12} strokeWidth={1.5} className="text-gold-500/70" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-sans shrink-0">
                      <Calendar size={12} strokeWidth={1.5} className="text-gold-500/70" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-medium text-white mb-2 group-hover:text-gold-500 transition-colors duration-500 leading-snug line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-cashmere-500/70 text-xs leading-relaxed font-light font-sans text-justify line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-500 mt-6 pt-4 border-t border-white/5 w-full justify-between">
                  <span>Ler Artigo Completo</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Leitor de Artigos Premium em Modal Lateral (AnimatePresence) */}
      <AnimatePresence>
        {activePost && (
          <>
            {/* Overlay Escuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="fixed inset-0 bg-[#000] z-40 cursor-pointer"
            />

            {/* Painel de Leitura */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[540px] md:w-[680px] bg-brand-900 border-l border-white/5 z-50 overflow-y-auto shadow-2xl p-6 md:p-12 flex flex-col justify-between"
            >
              
              {/* Cabeçalho superior: Fechar */}
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-8">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gold-500/80 bg-gold-500/5 px-3 py-1 border border-gold-500/10 flex items-center gap-1.5 font-sans">
                  <Tag size={10} />
                  {activePost.category}
                </span>
                <button 
                  onClick={() => setActivePost(null)}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-gold-500 flex items-center justify-center text-cashmere-450 hover:text-gold-500 transition-all duration-300 active:scale-95"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Corpo da Leitura */}
              <div className="flex-1 space-y-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-cashmere-500/40 text-[9px] uppercase tracking-wider">
                  <div className="flex items-center gap-1.5 font-sans">
                    <User size={12} strokeWidth={1.5} className="text-gold-500" />
                    <span>Publicado por: {activePost.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-sans">
                    <Calendar size={12} strokeWidth={1.5} className="text-gold-500" />
                    <span>{activePost.date}</span>
                  </div>
                </div>

                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-display font-light text-white leading-tight">
                  {activePost.title}
                </h2>

                {/* Imagem do Artigo Expandida */}
                <div className="w-full aspect-[16/9] overflow-hidden border border-white/5 rounded-lg bg-brand-950">
                  <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover object-center" />
                </div>

                {/* Parágrafos do Conteúdo */}
                <div className="space-y-5 pt-4 text-cashmere-300 font-sans text-justify text-sm leading-relaxed font-light">
                  {activePost.content.map((paragraph, idx) => (
                    <p key={idx} className="whitespace-pre-line">
                      {paragraph.includes("•") || paragraph.includes("i)") ? paragraph : paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Rodapé CTA de Contato */}
              <div className="mt-12 pt-6 border-t border-white/5 bg-brand-850 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-[9px] uppercase tracking-widest text-gold-500 font-semibold font-sans">Atendimento Especializado</span>
                  <h4 className="text-white text-sm font-display font-medium">Dúvidas sobre esta matéria jurídica?</h4>
                </div>
                <a
                  href={`https://wa.me/558321065680?text=${encodeURIComponent(`Olá, Santana Advogados. Estava lendo o artigo '${activePost.title}' e gostaria de agendar uma consulta sobre essa matéria.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gold-500 text-brand-900 font-semibold uppercase text-[9px] tracking-[0.2em] hover:bg-gold-400 transition-all duration-300 flex items-center gap-2 shrink-0 shadow-lg font-sans text-center"
                >
                  <MessageSquare size={13} className="fill-current" />
                  Agendar com Especialista
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

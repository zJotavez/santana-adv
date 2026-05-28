import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, Sparkles, Phone } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
  whatsappLink?: string;
  whatsappLabel?: string;
}

export function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState<"greet" | "case" | "chat">("greet");
  const [userName, setUserName] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicializar o chat com uma mensagem de boas-vindas acolhedora
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: "Seja muito bem-vindo à **Santana Advogados Associados**. Sou o **Santana AI**, seu assistente jurídico virtual. Para darmos início ao atendimento, com quem tenho a honra de falar?",
          timestamp: new Date()
        }
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const centralNumber = "558321065680";

  // Mapeamento de Especialidades para Advogados do Escritório Santana
  const specialtyTriage = (specialtyKey: string, customName?: string) => {
    setIsTyping(true);
    const activeName = customName || userName || "prezado(a)";

    setTimeout(() => {
      let botResponse = "";
      let waLink = "";
      let waLabel = "";

      switch (specialtyKey) {
        case "empresarial":
          botResponse = `Compreendo a importância estratégica, prezado(a) **${activeName}**. Suas demandas de **Direito Empresarial, Societário & Imobiliário** serão conduzidas pelo nosso sócio-diretor, **Dr. Jaksson Santana de Jesus (OAB/PB 19.538)**. Sob rigor absoluto, ele desenhará a melhor estratégia. Deseja iniciar um contato direto via WhatsApp?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dr. Jaksson Santana. Gostaria de agendar uma consulta jurídica especializada em Direito Empresarial com o suporte da Santana AI.`)}`;
          waLabel = "Falar com Dr. Jaksson Santana";
          break;
        case "tributario":
          botResponse = `Entendo a sua necessidade, prezado(a) **${activeName}**. Suas demandas de **Planejamento Tributário & Consultoria Fiscal** serão avaliadas pelo **Dr. Jaksson Santana (OAB/PB 19.538)**. Deseja iniciar uma conversa de agendamento no WhatsApp?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dr. Jaksson Santana. Preciso de suporte em Direito Tributário / Consultoria Fiscal.`)}`;
          waLabel = "Falar com Dr. Jaksson Santana";
          break;
        case "bancario":
          botResponse = `Perfeitamente, prezado(a) **${activeName}**. A análise de contratos bancários e mitigação de juros abusivos exige precisão. O **Dr. Jaksson Santana (OAB/PB 19.538)** coordena essa frente em nossa banca. Deseja contatá-lo via WhatsApp para agendamento?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dr. Jaksson Santana. Gostaria de uma análise do meu contrato bancário / revisão de juros.`)}`;
          waLabel = "Falar com Dr. Jaksson Santana";
          break;
        case "civil":
          botResponse = `Compreendido, prezado(a) **${activeName}**. Questões de **Direito Civil e Defesa do Consumidor** exigem know-how boutique. O **Dr. Julihermes de Sá Bezerra (OAB/PB 20.345)** é nosso especialista dedicado a essa frente. Vamos iniciar um contato com ele via WhatsApp agora?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dr. Julihermes de Sá. Gostaria de tirar dúvidas sobre Direito Civil / Relações de Consumidor.`)}`;
          waLabel = "Falar com Dr. Julihermes";
          break;
        case "trabalhista":
          botResponse = `Compreendido, prezado(a) **${activeName}**. Para consultoria preventiva de empregadores, contencioso trabalhista ou contratos de emprego, a **Dra. Jadisma Figueiredo (OAB/PB 29.953)** é nossa especialista dedicada. Gostaria de iniciar o contato via WhatsApp?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dra. Jadisma Figueiredo. Gostaria de suporte estratégico sobre demandas de emprego / trabalhistas.`)}`;
          waLabel = "Falar com Dra. Jadisma";
          break;
        case "familia":
          botResponse = `Compreendo a sensibilidade do caso, prezado(a) **${activeName}**. Inventários, divórcios e partilhas exigem atendimento humanizado e **absoluto sigilo**. O **Dr. Ronnie Menezes (OAB/PB 24.035)** ou a **Dra. Yonara Kelly (OAB/PB 20.368)** coordenam essas frentes. Deseja abrir um canal seguro de agendamento no WhatsApp?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dra. Yonara Kelly / Dr. Ronnie. Gostaria de agendar um atendimento sigiloso sobre Direito de Família / Inventário.`)}`;
          waLabel = "Falar com o Especialista";
          break;
        case "previdenciario":
          botResponse = `Entendo a relevância, prezado(a) **${activeName}**. Planejamento Previdenciário e concessão de **Aposentadorias e Benefícios do INSS** são frentes capitaneadas pelo **Dr. Marcelo Vieira da Silva (OAB/PB 22.100)**, **Dra. Cristiane Queiroz (OAB/PB 12.270)** e **Dra. Gerlania Dantas (OAB/PB 20.317)**. Gostaria de falar com nossa divisão previdenciária?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá. Gostaria de agendar uma consulta sobre Aposentadoria / Planejamento Previdenciário.`)}`;
          waLabel = "Falar com Previdenciário";
          break;
        case "criminal":
          botResponse = `Urgência compreendida, prezado(a) **${activeName}**. Suas demandas na área de **Direito Criminal & Ciências Criminais** serão assessoradas pela **Dra. Yonara Kelly Alves de Brito (OAB/PB 20.368)** ou pelo **Dr. Ronnie Menezes (OAB/PB 24.035)**. Deseja ser transferido(a) para o WhatsApp agora?`;
          waLink = `https://wa.me/${centralNumber}?text=${encodeURIComponent(`Olá, Dra. Yonara Kelly / Dr. Ronnie. Preciso de assessoria jurídica urgente na área Criminal.`)}`;
          waLabel = "Falar com a Banca Santana";
          break;
        default:
          botResponse = `Compreendo, prezado(a) **${activeName}**. Como banca multidisciplinar, atuamos com absoluto rigor cível, empresarial e público. Qual das especialidades melhor atende à sua necessidade jurídica atual?`;
          break;
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: botResponse,
          timestamp: new Date(),
          whatsappLink: waLink || undefined,
          whatsappLabel: waLabel || undefined
        }
      ]);
    }, 1000);
  };

  // Motor de palavras-chave NLP Conversacional do Escritório Santana
  const processInputText = (text: string) => {
    const query = text.toLowerCase();
    const activeName = userName || "prezado(a)";

    if (query.includes("banco") || query.includes("bancario") || query.includes("bancário") || query.includes("juros") || query.includes("abusivo") || query.includes("abusivos") || query.includes("leilao") || query.includes("leilão") || query.includes("dívida") || query.includes("divida") || query.includes("financiamento")) {
      specialtyTriage("bancario", activeName);
    } else if (query.includes("empresa") || query.includes("empresarial") || query.includes("societario") || query.includes("societário") || query.includes("compliance") || query.includes("startup") || query.includes("cotistas") || query.includes("contrato mercanti") || query.includes("franquia") || query.includes("regularização") || query.includes("regularizacao") || query.includes("imóvel") || query.includes("imovel") || query.includes("imobiliário") || query.includes("imobiliaria") || query.includes("vizinhança")) {
      specialtyTriage("empresarial", activeName);
    } else if (query.includes("contrato") || query.includes("consumidor") || query.includes("revisão") || query.includes("revisao") || query.includes("civil") || query.includes("cdc") || query.includes("danos") || query.includes("indenizacao") || query.includes("processar") || query.includes("vizinho")) {
      specialtyTriage("civil", activeName);
    } else if (query.includes("trabalho") || query.includes("trabalhista") || query.includes("emprego") || query.includes("demissao") || query.includes("clt") || query.includes("demissão") || query.includes("trabalhador") || query.includes("patrao") || query.includes("patrão")) {
      specialtyTriage("trabalhista", activeName);
    } else if (query.includes("familia") || query.includes("família") || query.includes("divorcio") || query.includes("divórcio") || query.includes("partilha") || query.includes("inventario") || query.includes("inventário") || query.includes("herança") || query.includes("guarda") || query.includes("sucessões") || query.includes("sucessao")) {
      specialtyTriage("familia", activeName);
    } else if (query.includes("aposentadoria") || query.includes("previdenciario") || query.includes("previdenciário") || query.includes("beneficio") || query.includes("benefício") || query.includes("inss") || query.includes("auxilio") || query.includes("doença ocupacional") || query.includes("loas") || query.includes("bpc")) {
      specialtyTriage("previdenciario", activeName);
    } else if (query.includes("criminal") || query.includes("delegacia") || query.includes("crime") || query.includes("prisao") || query.includes("prisão") || query.includes("defesa criminal") || query.includes("processo penal")) {
      specialtyTriage("criminal", activeName);
    } else if (query.includes("servidor") || query.includes("publico") || query.includes("público") || query.includes("concurso") || query.includes("tributario") || query.includes("tributário") || query.includes("sindicância") || query.includes("processo administrativo") || query.includes("disciplinar") || query.includes("pad") || query.includes("improbidade") || query.includes("erário")) {
      specialtyTriage("tributario", activeName);
    } else if (query.includes("endereco") || query.includes("endereço") || query.includes("onde") || query.includes("localizacao") || query.includes("localização") || query.includes("fica") || query.includes("joao pessoa") || query.includes("joão pessoa") || query.includes("campina")) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `Nossa sede está localizada no prestigiado Duo Corporate Tower - DCT, no 22º Andar, SL 2201, João Pessoa - PB. CEP: 58028-873. Também atendemos em estrutura híbrida. Deseja abrir a localização no Google Maps?`,
            timestamp: new Date(),
            whatsappLink: "https://www.google.com/maps?ll=-7.156633,-35.372381&z=14&t=m&hl=pt-BR&gl=US&mapclient=embed&q=DCT+Santana+Advogados",
            whatsappLabel: "Abrir Google Maps"
          }
        ]);
      }, 1000);
    } else if (query.includes("ola") || query.includes("olá") || query.includes("oi") || query.includes("bom dia") || query.includes("boa tarde") || query.includes("boa noite") || query.includes("tudo bem")) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `Olá, prezado(a) **${activeName}**. Estou à disposição para triar seu caso com o devido sigilo. Qual das especialidades abaixo melhor atende à sua necessidade jurídica atual?`,
            timestamp: new Date()
          }
        ]);
      }, 1000);
    } else {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `Compreendo, prezado(a) **${activeName}**. Para direcionar seu caso ao especialista de nossa banca multidisciplinar, por favor selecione a área abaixo ou descreva seu caso brevemente.`,
            timestamp: new Date()
          }
        ]);
      }, 1100);
    }
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");

    if (step === "greet") {
      setIsTyping(true);
      setTimeout(() => {
        let name = userText;
        const namePatterns = [
          /meu nome e\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /meu nome é\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /sou o\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /sou a\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /me chamo\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /aqui é o\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i,
          /aqui é a\s+([a-zA-Záàâãéèêíïóôõöúçñ\s]+)/i
        ];
        
        for (const pattern of namePatterns) {
          const match = userText.match(pattern);
          if (match && match[1]) {
            name = match[1].trim();
            break;
          }
        }
        
        const nameParts = name.split(/\s+/);
        const displayName = nameParts.length > 2 ? `${nameParts[0]} ${nameParts[1]}` : name;
        
        setUserName(displayName);
        setStep("case");
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `É uma honra, prezado(a) **${displayName}**. A Santana Advogados Associados atua sob rigor absoluto. Para direcioná-lo(a) ao especialista correto de nossa banca, qual demanda jurídica necessita de nossa intervenção hoje? (Ou selecione uma das opções abaixo)`,
            timestamp: new Date()
          }
        ]);
      }, 1000);
    } else {
      processInputText(userText);
    }
  };

  const handleChipClick = (label: string, key: string) => {
    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: label,
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMsg]);

    const activeName = userName || "Visitante";
    if (!userName) {
      setUserName(activeName);
      setStep("case");
    }
    specialtyTriage(key, activeName);
  };

  const formatMessageText = (text: string) => {
    if (!text.includes("**")) return text;
    
    const parts = text.split("**");
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} className="font-bold text-gold-300 drop-shadow-sm">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Botão Flutuante */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gold-500 hover:bg-gold-400 text-brand-900 rounded-full flex items-center justify-center shadow-2xl relative transition-colors duration-300"
        aria-label="Conversar com o DIAS AI"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center relative"
            >
              <MessageSquare size={24} />
              <Sparkles size={12} className="absolute -top-1.5 -right-2 text-brand-900 fill-current animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-brand-900 animate-pulse" />
        )}
      </motion.button>

      {/* Janela de Chat (Luxury Glassmorphism) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="absolute bottom-16 right-0 w-[340px] sm:w-[380px] h-[520px] bg-brand-900/95 backdrop-blur-lg border border-white/10 shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-brand-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-gold-500/30 relative shrink-0">
                  <img src="/Adv Jaksson.jpg" alt="Dr. Jaksson Santana" className="w-full h-full object-cover object-top" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-brand-800 z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-medium text-white text-sm">SANTANA AI</span>
                  <span className="text-[9px] uppercase tracking-widest text-gold-500 font-semibold font-sans">Triagem Jurídica Conversacional</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-cashmere-500 hover:text-white p-1 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gold-500 text-brand-900 font-medium rounded-tr-none"
                        : "bg-brand-700/60 text-cashmere-300 border border-white/[0.04] rounded-tl-none"
                    }`}
                  >
                    <p className="font-light whitespace-pre-wrap">{formatMessageText(msg.text)}</p>
                    
                    {msg.whatsappLink && (
                      <a
                        href={msg.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3.5 py-2 px-4 bg-green-650 hover:bg-green-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-[10px] uppercase tracking-wider"
                      >
                        <Phone size={12} className="fill-current" />
                        {msg.whatsappLabel}
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-brand-700/40 border border-white/[0.04] rounded-xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold-500/70 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Sugestões Rápidas (Chips Clicáveis) */}
            <div className="px-4 py-2 border-t border-white/5 bg-brand-900/50 flex flex-wrap gap-2 overflow-x-auto max-h-[110px]">
              <button
                onClick={() => handleChipClick("🏢 Empresarial & Imóveis", "empresarial")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                🏢 Empresarial & Imóveis
              </button>
              <button
                onClick={() => handleChipClick("💰 Bancário & Juros", "bancario")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                💰 Bancário & Juros
              </button>
              <button
                onClick={() => handleChipClick("📝 Contratos & Consumidor", "civil")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                📝 Contratos & Consumidor
              </button>
              <button
                onClick={() => handleChipClick("🏠 Família & Divórcios", "familia")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                🏠 Família & Divórcios
              </button>
              <button
                onClick={() => handleChipClick("👴 Previdenciário & INSS", "previdenciario")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                👴 Previdenciário & INSS
              </button>
              <button
                onClick={() => handleChipClick("⚖️ Defesa Criminal & Vítimas", "criminal")}
                className="text-[9px] uppercase tracking-wider font-semibold text-gold-500 bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500 hover:text-brand-900 px-3 py-1.5 rounded-full transition-all duration-300 shrink-0"
              >
                ⚖️ Defesa Criminal & Vítimas
              </button>
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/5 bg-brand-800 flex gap-2 items-center">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={step === "greet" ? "Como se chama?" : "Qual o seu caso jurídico hoje?"}
                className="flex-1 bg-brand-900 border border-white/5 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500/50 transition-colors font-light placeholder:text-white/20"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 rounded-lg bg-gold-500 hover:bg-gold-400 text-brand-900 flex items-center justify-center transition-colors shadow-lg"
              >
                <Send size={14} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

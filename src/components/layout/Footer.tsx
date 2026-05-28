import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-900 pt-20 pb-10 hairline-border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="group mb-6 inline-flex">
              <Logo size={32} textColor="text-white group-hover:text-gold-500" />
            </Link>
            <p className="text-cashmere-500/70 text-xs leading-relaxed font-light">
              Banca estruturada para atender o pequeno e médio empresário e pessoas físicas com orientação franca, segura, eficaz e visão global de negócios.
            </p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@santanaadv" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-cashmere-500/60 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-500" title="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-medium text-white mb-6 uppercase tracking-[0.2em] text-xs">O Escritório</h4>
            <ul className="space-y-3.5">
              <li><Link to="/sobre" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Sobre Nós</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Áreas de Atuação</Link></li>
              <li><Link to="/advogados" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Nossos Advogados</Link></li>
              <li><Link to="/blog" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Blog Jurídico</Link></li>
              <li><Link to="/contato" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Áreas */}
          <div>
            <h4 className="font-display font-medium text-white mb-6 uppercase tracking-[0.2em] text-xs">Especialidades</h4>
            <ul className="space-y-3.5">
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Contencioso Civil & Admin</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Empresarial & Societário</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Imobiliário & Contratos</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Tributário & Previdenciário</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Trabalhista & Emprego</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Família & Inventários</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-medium text-white mb-6 uppercase tracking-[0.2em] text-xs">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps?ll=-7.156633,-35.372381&z=14&t=m&hl=pt-BR&gl=US&mapclient=embed&q=DCT+Santana+Advogados" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cashmere-500/70 text-xs leading-relaxed hover:text-gold-500 transition-colors"
                >
                  R. Emp. Clóvis Rolim, 2051, T Sul, 22ª Andar - SL 2201. João Pessoa - PB. CEP 58028-873
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-500 shrink-0" />
                <a 
                  href="https://wa.me/558321065680" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cashmere-500/70 text-xs hover:text-gold-500 transition-colors"
                >
                  (83) 2106-5680 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-500 shrink-0" />
                <a 
                  href="mailto:escritorio@stna.adv.br" 
                  className="text-cashmere-500/70 text-xs hover:text-gold-500 transition-colors"
                >
                  escritorio@stna.adv.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cashmere-500/40 text-[10px] tracking-wider">
            &copy; {new Date().getFullYear()} SANTANA ADV. CNPJ 46.445.555/0001-48. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-cashmere-500/40 tracking-wider">
            <Link to="/privacidade" className="hover:text-gold-500 transition-colors">POLÍTICA DE PRIVACIDADE</Link>
            <Link to="/termos" className="hover:text-gold-500 transition-colors">TERMOS DE USO</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

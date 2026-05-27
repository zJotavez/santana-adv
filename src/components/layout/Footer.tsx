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
              Defendendo seus direitos com estratégia jurídica sob medida, segurança patrimonial e excelência técnica nos tribunais superiores.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/wellemdias_advocacia/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-cashmere-500/60 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-500">
                <Instagram size={16} />
              </a>
              <a href="https://www.instagram.com/wellemdias_advocacia/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/5 flex items-center justify-center text-cashmere-500/60 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-500">
                <Linkedin size={16} />
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
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Direito Empresarial</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Regularização Imobiliária</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Direito Bancário</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Direito de Família</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Previdenciário & Aposentadoria</Link></li>
              <li><Link to="/atuacao" className="text-cashmere-500/70 hover:text-gold-500 transition-colors text-xs tracking-wide">Defesa Criminal</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-medium text-white mb-6 uppercase tracking-[0.2em] text-xs">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <a 
                  href="https://share.google/OqIFiSvPTdZo2Divq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cashmere-500/70 text-xs leading-relaxed hover:text-gold-500 transition-colors"
                >
                  Av. Floriano Peixoto, 546 - Sala 302, Centro, Campina Grande/PB - CEP: 58400-110
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-500 shrink-0" />
                <a 
                  href="https://wa.me/5583998765432" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cashmere-500/70 text-xs hover:text-gold-500 transition-colors"
                >
                  +55 (83) 99876-5432
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-500 shrink-0" />
                <a 
                  href="mailto:contato@diasadvocacia.adv.br" 
                  className="text-cashmere-500/70 text-xs hover:text-gold-500 transition-colors"
                >
                  contato@diasadvocacia.adv.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cashmere-500/40 text-[10px] tracking-wider">
            &copy; {new Date().getFullYear()} DIAS ADVOCACIA. TODOS OS DIREITOS RESERVADOS.
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

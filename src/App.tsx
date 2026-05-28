/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingAI } from "./components/FloatingAI";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Advogados } from "./pages/Advogados";
import { AreasAtuacao } from "./pages/AreasAtuacao";
import { Blog } from "./pages/Blog";

// Gerenciador de SEO Dinâmico e Reativo
function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    let title = "Santana Advogados Associados | Advocacia Consultiva & Litigiosa";
    let description = "Santana Advogados Associados é uma banca estruturada para atender o pequeno e médio empresário e pessoas físicas em João Pessoa - PB. Excelência desde 1990.";

    switch (location.pathname) {
      case "/":
        title = "Santana Advogados Associados | Advocacia Consultiva & Litigiosa";
        description = "Banca estruturada para atender o pequeno e médio empresário e pessoas físicas que necessitem de orientação franca, segura e eficaz em João Pessoa - PB.";
        break;
      case "/sobre":
        title = "Nossa História & Valores | Santana Advogados Associados";
        description = "Conheça a história da Santana Advogados, fundada em 1990 pelo Dr. José Santana de Jesus, e nosso compromisso com a lisura e qualidade jurídica.";
        break;
      case "/advogados":
        title = "Nossos Advogados | Santana Advogados Associados";
        description = "Conheça nosso corpo jurídico altamente qualificado liderado pelo Diretor Jurídico Dr. Jaksson Santana de Jesus.";
        break;
      case "/atuacao":
        title = "Áreas de Atuação | Santana Advogados Associados";
        description = "Conheça nossas divisões jurídicas: Contencioso Civil & Administrativo, Empresarial, Societário & Imobiliário, Tributário, Previdenciário, Processo Disciplinar e Arbitragem.";
        break;
      case "/blog":
        title = "Artigos & Publicações | Santana Advogados Associados";
        description = "Acompanhe artigos informativos, notícias jurisprudenciais e inteligência jurídica escritas diretamente pela nossa banca de advogados.";
        break;
      case "/contato":
        title = "Fale com um Especialista | Santana Advogados Associados";
        description = "Entre em contato com nossa banca no Duo Corporate Tower - DCT em João Pessoa - PB e agende uma consulta estratégica presencial ou virtual.";
        break;
      default:
        break;
    }

    document.title = title;
    
    // Atualizar meta description dinamicamente
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }
    
    // Atualizar Open Graph para compartilhamentos em tempo real
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // Atualizar Twitter Cards
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", description);

    // Atualizar Link Canonical
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const origin = window.location.origin;
      canonicalLink.setAttribute("href", `${origin}${location.pathname}`);
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <SEOManager />
      <ScrollToTop />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-brand-900 text-slate-200">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/advogados" element={<Advogados />} />
              <Route path="/atuacao" element={<AreasAtuacao />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <FloatingAI />
        </div>
      </SmoothScroll>
    </Router>
  );
}


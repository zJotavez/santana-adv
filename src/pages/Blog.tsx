import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "[Placeholder] - Digite Aqui o Título de Direito Empresarial ou Imobiliário",
      category: "Direito Empresarial",
      date: "27 Mai 2026",
      author: "Dr. Erick Hato",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      excerpt: "[Placeholder] - Insira aqui o resumo ou introdução da notícia sobre Direito Empresarial, governança corporativa ou regularização imobiliária. O Dr. Erick Hato é o autor deste artigo de exemplo."
    },
    {
      id: 2,
      title: "[Placeholder] - Digite Aqui o Título de Direito Bancário ou Consumidor",
      category: "Direito Bancário",
      date: "25 Mai 2026",
      author: "Dr. Vinicius Oliveira",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      excerpt: "[Placeholder] - Insira aqui o resumo ou introdução da notícia sobre Direito Bancário, reequilíbrio de contratos ou juros abusivos. O Dr. Vinicius Oliveira é o autor deste artigo de exemplo."
    },
    {
      id: 3,
      title: "[Placeholder] - Digite Aqui o Título de Direito de Família ou Previdenciário",
      category: "Direito de Família",
      date: "22 Mai 2026",
      author: "Dra. Caroliny Alves",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      excerpt: "[Placeholder] - Insira aqui o resumo ou introdução da notícia sobre planejamento sucessório, divórcios ou concessão de benefícios assistenciais. A Dra. Caroliny Alves é a autora deste artigo de exemplo."
    }
  ];

  return (
    <div className="pt-36 pb-24 min-h-screen bg-brand-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 font-medium tracking-[0.25em] uppercase text-xs">Atualizações</span>
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white max-w-4xl leading-[1.1] text-balance">
            Inteligência e <span className="font-serif italic text-gold-500 font-light">notícias jurídicas.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-transparent border border-white/[0.04] overflow-hidden flex flex-col hover:border-gold-500/20 transition-all duration-700"
            >
              <div className="aspect-[16/10] relative overflow-hidden border-b border-white/[0.04]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-gold-500 text-brand-900 px-3 py-1 text-[9px] font-semibold tracking-wider uppercase shadow-lg">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-cashmere-500/40 text-[10px] uppercase tracking-wider mb-4">
                  <div className="flex items-center gap-1.5 line-clamp-1">
                    <User size={12} strokeWidth={1.5} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Calendar size={12} strokeWidth={1.5} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-gold-500 transition-colors duration-500">
                  {post.title}
                </h3>
                <p className="text-cashmere-500/70 text-xs leading-relaxed font-light mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-500 mt-auto group-hover:translate-x-2 transition-transform duration-500">
                  Ler Artigo
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

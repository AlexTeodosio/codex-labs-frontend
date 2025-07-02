
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh]">
     
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Conectando Talentos,
        </span>
        <br />
        Impulsionando o Futuro.
      </h1>

 
      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mt-6 mb-10">
        A CODEX LABS é o ecossistema definitivo que une empresas visionárias aos melhores freelancers nas áreas de programação, marketing digital e design. Transforme suas ideias em realidade com a ajuda de profissionais qualificados.
      </p>

 
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/sobre" 
          className="bg-transparent border-2 border-slate-600 text-slate-300 font-semibold py-3 px-8 rounded-lg hover:bg-slate-800 hover:border-slate-800 transition-all duration-300"
        >
          Saiba Mais Sobre Nós
        </Link>
        <Link 
          href="/contato"
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 shadow-lg shadow-blue-500/20 transition-all duration-300"
        >
          Entre em Contato
        </Link>
      </div>
    </div>
  );
}
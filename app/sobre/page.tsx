
export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Sobre a <span className="text-blue-400">CODEX LABS</span></h1>
      <p className="text-center text-slate-400 mb-12">Entenda nossa missão, visão e o que nos move.</p>

      <div className="space-y-8">
       
        <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Nossa Missão</h2>
          <p className="text-slate-300 leading-relaxed">
            Nossa missão é democratizar o acesso a talentos de alta qualidade, criando uma ponte sólida e confiável entre freelancers excepcionais e empresas que buscam inovação. Queremos ser o catalisador que transforma projetos em sucessos globais.
          </p>
        </div>

      
        <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Nossa Visão</h2>
          <p className="text-slate-300 leading-relaxed">
            Almejamos ser a maior e mais confiável comunidade de talentos digitais da América Latina, reconhecida por nossa curadoria de profissionais, pela qualidade dos projetos e por fomentar um ambiente de crescimento contínuo e colaboração mútua.
          </p>
        </div>
        
       
        <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
          <h2 className="text-2xl font-semibold text-slate-200 mb-3">Nossos Valores</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li><span className="font-semibold">Qualidade acima de tudo:</span> Compromisso com a excelência em cada entrega.</li>
            <li><span className="font-semibold">Transparência radical:</span> Comunicação clara e honesta em todas as etapas.</li>
            <li><span className="font-semibold">Colaboração e Comunidade:</span> Acreditamos que juntos somos mais fortes.</li>
            <li><span className="font-semibold">Inovação Constante:</span> Estamos sempre buscando novas maneiras de melhorar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
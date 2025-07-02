
'use client'; 

import { useState, FormEvent } from 'react';

export default function ContatoPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFeedback({ type: 'loading', message: 'Enviando...' });

    
    try {
      const response = await fetch('http://localhost:3001/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (response.ok) {
        setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        const result = await response.json();
        setFeedback({ type: 'error', message: result.error || 'Ocorreu um erro. Tente novamente.' });
      }
   } catch (err) { 
  console.error("Erro ao tentar enviar o formulário:", err); 
  setFeedback({ type: 'error', message: 'Falha na comunicação com o servidor. Verifique sua conexão.' });
}
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Fale Conosco</h1>
      <p className="text-center text-slate-400 mb-10">Tem um projeto em mente ou uma dúvida? Preencha o formulário abaixo.</p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900 p-8 rounded-lg border border-slate-800">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-slate-300 mb-2">Nome Completo</label>
          <input
            type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Seu Melhor Email</label>
          <input
            type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-slate-300 mb-2">Sua Mensagem</label>
          <textarea
            id="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required rows={5}
            className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={feedback.type === 'loading'}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 shadow-lg shadow-blue-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {feedback.type === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {feedback.message && (
          <p className={`text-center mt-4 p-3 rounded-md ${
            feedback.type === 'success' ? 'bg-green-500/20 text-green-300' : ''
          } ${
            feedback.type === 'error' ? 'bg-red-500/20 text-red-300' : ''
          }`
        }>
            {feedback.message}
          </p>
        )}
      </form>
    </div>
  );
}
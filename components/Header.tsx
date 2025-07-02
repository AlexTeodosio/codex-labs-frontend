
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-6">
        
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          CODEX LABS
        </Link>

     
        <div className="flex items-center space-x-6">
          <Link href="/sobre" className="text-slate-300 hover:text-white transition-colors">
            SOBRE
          </Link>
          <Link href="/contato" className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-md hover:bg-blue-700 transition-all duration-300">
            CONTATO
          </Link>
        </div>
      </nav>
    </header>
  );
}

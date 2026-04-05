import React from 'react';

// Dados das categorias
const categoriasData = [
  { icon: '🏠', name: 'Domésticos', desc: 'Utilidades, eletrodomésticos, cozinha e limpeza para o lar.' },
  { icon: '🔊', name: 'Som & Música', desc: 'Caixas de som, fones de ouvido e acessórios variados.' },
  { icon: '📱', name: 'Eletrônicos', desc: 'Smartphones, carregadores, cabos e gadgets essenciais.' },
  { icon: '💻', name: 'Informática', desc: 'Notebooks, teclados, mouses e periféricos domésticos.' },
  { icon: '👕', name: 'Vestuário', desc: 'Roupas e calçados para toda a família com estilo.' },
  { icon: '🔧', name: 'Ferramentas', desc: 'Manuais, elétricas e equipamentos para manutenções.' },
  { icon: '🚗', name: 'Automotivo', desc: 'E-commerce especializado em peças para carros e motos.' },
  { icon: '🎮', name: 'Entretenimento', desc: 'Games, brinquedos e lazer para toda a família.' },
];

// Dados das Unidades
const unidadesData = [
  {
    city: 'Araras – SP',
    address: 'Avenida Otto Barreto, 1067 — Distrito Industrial II, Araras – SP',
    instagram: 'https://www.instagram.com/clsoutletararas/',
    handle: '@clsoutletararas',
  },
  {
    city: "Santa Bárbara d'Oeste – SP",
    address: "Rua do Café, 415 — Jardim Pérola, Santa Bárbara d'Oeste – SP",
    instagram: 'https://www.instagram.com/clsoutlet_sbo/',
    handle: '@clsoutlet_sbo',
  },
];

const horariosData = [
  { dia: 'Segunda-feira', hora: '09h – 17h' },
  { dia: 'Terça a Sexta', hora: '09h – 18h' },
  { dia: 'Sábado', hora: '09h – 14h' },
];

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-red-600 selection:text-white relative">
      
      {/* ========================================
        NAVBAR TÁTICA (Fixa no topo)
        ========================================
      */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/95 backdrop-blur-md border-b border-red-800 px-6 py-4 flex justify-between items-center shadow-2xl">
        <div className="text-2xl md:text-3xl font-black uppercase tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          CLS <span className="text-red-600">OUTLET</span>
        </div>
        
        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase text-neutral-300">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#categorias" className="hover:text-white transition-colors">Categorias</a>
          <a href="https://www.instagram.com/clsoutletararas/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Galeria</a>
          <a href="https://www.mercadolivre.com.br/pagina/outletcls#client=SEARCH&component_id=header_logo&tracking_id=c5c49c00-d28e-45c1-9f03-062a6e054195" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Loja Online</a>
          <a href="#unidades" className="hover:text-white transition-colors">Unidades</a>
          
          {/* Botão WhatsApp */}
          <a 
            href="https://chat.whatsapp.com/IJtugbfKVQd3V9pT4wKK30?mode=gi_t" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-500 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(232,0,29,0.4)]"
          >
            WHATSAPP
          </a>
        </div>
      </nav>

      {/* ========================================
        HERO SECTION - O Impacto Inicial
        ========================================
      */}
      <header className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden border-b-2 border-red-700 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/foto_fachada.jpg" 
            alt="Fachada da CLS Outlet Araras" 
            className="w-full h-full object-cover object-center brightness-[0.3] saturate-[1.2]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-neutral-950/80 to-neutral-950 z-0"></div>
        </div>
        
        <div className="z-10 max-w-4xl w-full flex flex-col items-center gap-6">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase">
            CLS <span className="text-red-600">OUTLET</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-200 font-light max-w-2xl">
            Do eletrônico ao automotivo. O maior estoque de oportunidades do interior paulista com <strong className='text-white'>preços agressivos</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6">
            <a 
              href="https://www.mercadolivre.com.br/pagina/outletcls#client=SEARCH&component_id=header_logo&tracking_id=c5c49c00-d28e-45c1-9f03-062a6e054195" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(250,204,21,0.3)] text-center"
            >
              Comprar no Mercado Livre
            </a>
            <a 
              href="#unidades" 
              className="px-8 py-4 bg-neutral-800/80 backdrop-blur-sm border-2 border-red-700 text-red-500 font-bold rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 text-center"
            >
              Visitar Lojas Físicas
            </a>
          </div>
        </div>
      </header>

      {/* ========================================
        SOBRE SESSÃO - Confiança e História
        ========================================
      */}
      <section id="sobre" className="py-24 px-6 md:px-12 bg-neutral-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 border-2 border-red-700 rounded-lg translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/foto_entrada.jpg" 
              alt="Entrada CLS Outlet Araras" 
              className="w-full rounded-lg shadow-2xl brightness-90 saturate-[1.1]" 
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white font-black px-6 py-4 rounded-md shadow-[0_10px_30px_rgba(232,0,29,0.5)] rotate-[3deg] scale-105">
              <span className="block text-4xl leading-none">2022</span>
              <span className="block text-xs uppercase tracking-widest opacity-80 mt-1">Fundação</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 order-1 md:order-2">
            <p className="text-red-500 uppercase font-semibold tracking-widest text-sm">Quem somos</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">
              Uma história de <span className="text-red-600">valor</span> e qualidade
            </h2>
            <div className="w-20 h-1 bg-red-700 mt-2 mb-4"></div>
            
            <div className="text-neutral-300 space-y-4 leading-relaxed">
              <p>Fundada em <strong className='text-white'>2022</strong>, a CLS Outlet nasceu com um propósito claro: levar produtos de qualidade a preços que realmente cabem no bolso do consumidor do interior paulista. Conquistamos a confiança de milhares de clientes e expandimos para duas unidades físicas — em <strong className='text-white'>Araras</strong> e <strong className='text-white'>Santa Bárbara d'Oeste</strong>.</p>
              <p>Trabalhamos com estoque rotativo e ofertas relâmpago de outlets industriais, então cada visita é uma nova experiência. Nossa equipe é treinada para indicar sempre a melhor opção para sua necessidade.</p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-neutral-200">
              <li className="flex items-start gap-3"><span className="text-red-600">✅</span> Produtos novos e revisados</li>
              <li className="flex items-start gap-3"><span className="text-red-600">🏷️</span> Preços abaixo do varejo</li>
              <li className="flex items-start gap-3"><span className="text-red-600">🔄</span> Estoque rotativo constante</li>
              <li className="flex items-start gap-3"><span className="text-red-600">🚀</span> Vendas online e envio ágil</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================
        GRID DE CATEGORIAS
        ========================================
      */}
      <section id="categorias" className="py-24 px-6 md:px-12 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-red-500 uppercase font-semibold tracking-widest text-sm mb-1">O que você encontra aqui</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mt-2">
              Nossas <span className="text-red-600">categorias</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categoriasData.map((cat, index) => (
              <div key={index} className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 hover:border-red-600 transition-all duration-300 group hover:shadow-2xl flex flex-col items-center text-center">
                <span className="block text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{cat.name}</h3>
                <p className="text-neutral-400 mt-2 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
        SESSÃO YOUTUBE E CARDS - MOTOS ELÉTRICAS
        ========================================
      */}
      <section id="motos-eletricas" className="py-24 px-6 md:px-12 bg-neutral-900 border-t border-red-900">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 text-center">
          
          <div className="max-w-3xl">
            <p className="text-red-500 uppercase font-semibold tracking-widest text-sm">Mobilidade Sustentável</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mt-2">
              A Revolução das <span className="text-red-600">Motos Elétricas</span>
            </h2>
            <p className="text-neutral-300 mt-6 text-lg leading-relaxed">
              Na CLS Outlet, o futuro já chegou. Apresentamos nossa nova linha de motos elétricas: a união perfeita entre <strong>tecnologia, economia extrema e design arrojado</strong>. Diga adeus aos postos de combustível e à manutenção cara. Assista ao nosso review e descubra por que essa é a sua próxima grande aquisição.
            </p>
          </div>

          {/* Cards de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full text-left">
            <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 border-b-4 border-b-red-600 hover:-translate-y-2 transition-transform duration-300">
              <span className="text-3xl mb-4 block">⚡</span>
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">Zero Combustível</h3>
              <p className="text-sm text-neutral-400">Recarregue diretamente na tomada da sua casa. O custo por quilômetro rodado é infinitamente menor que o da gasolina.</p>
            </div>
            <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 border-b-4 border-b-red-600 hover:-translate-y-2 transition-transform duration-300">
              <span className="text-3xl mb-4 block">🔧</span>
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">Manutenção Mínima</h3>
              <p className="text-sm text-neutral-400">Sem óleo, sem velas, sem filtros complexos. A mecânica simplificada garante menos idas à oficina e mais dinheiro no bolso.</p>
            </div>
            <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 border-b-4 border-b-red-600 hover:-translate-y-2 transition-transform duration-300">
              <span className="text-3xl mb-4 block">🍃</span>
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">100% Ecológica</h3>
              <p className="text-sm text-neutral-400">Zero emissão de CO2 e zero poluição sonora. Um veículo silencioso que respeita o meio ambiente e a cidade.</p>
            </div>
            <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 border-b-4 border-b-red-600 hover:-translate-y-2 transition-transform duration-300">
              <span className="text-3xl mb-4 block">🚀</span>
              <h3 className="text-white font-bold uppercase tracking-wide mb-2">Mobilidade Ágil</h3>
              <p className="text-sm text-neutral-400">Design leve e torque instantâneo. A solução definitiva para escapar do trânsito diário com estilo e praticidade.</p>
            </div>
          </div>

          {/* Container do Vídeo do YouTube */}
          <div className="w-full max-w-4xl aspect-video bg-neutral-950 rounded-xl border-4 border-neutral-800 shadow-[0_0_40px_rgba(232,0,29,0.15)] overflow-hidden">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" // Substitua pelo link real quando tiver o vídeo
              title="Apresentação Motos Elétricas CLS Outlet"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-frame; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          
        </div>
      </section>

      {/* ========================================
        UNIDADES E ONDE ESTAMOS
        ========================================
      */}
      <section id="unidades" className="py-24 px-6 md:px-12 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase font-semibold tracking-widest text-sm">Onde estamos</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mt-2">
              Nossas <span className="text-red-600">unidades</span>
            </h2>
            <p className="text-neutral-400 mt-4 max-w-xl leading-relaxed mx-auto">
              Duas lojas físicas com amplo espaço, fácil acesso e estacionamento disponível. Venha nos visitar e economizar de verdade!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {unidadesData.map((u, index) => (
              <div key={index} className="bg-neutral-900 p-10 rounded-xl border border-neutral-700 flex flex-col gap-6 group hover:border-red-800 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <h3 className="text-2xl font-black text-red-500 uppercase tracking-wider flex items-center gap-3">
                   📍 {u.city}
                </h3>
                
                <div className="text-neutral-300 space-y-4 text-sm leading-relaxed">
                  <p><strong className='text-white'>Endereço:</strong> {u.address}</p>
                  <p><strong className='text-white'>Instagram:</strong> <a href={u.instagram} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">{u.handle}</a></p>
                </div>

                <div className="mt-4 bg-neutral-950 p-6 rounded-md border border-neutral-800 text-sm">
                  <h4 className="font-semibold text-neutral-400 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">⏰ Horário de Funcionamento</h4>
                  {horariosData.map(h => (
                    <div key={h.dia} className="flex justify-between py-1.5 border-b border-neutral-800 last:border-0">
                      <span>{h.dia}</span>
                      <span className="text-red-500 font-bold">{h.hora}</span>
                    </div>
                  ))}
                  <p className="text-xs text-red-800 italic mt-3 leading-tight">
                    * Os portões fecham 30 minutos antes do encerramento.
                  </p>
                </div>

                <a 
                  href={u.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 w-full px-6 py-3 text-center bg-gradient-to-r from-purple-800 via-red-600 to-yellow-500 text-white font-bold rounded-lg uppercase text-xs tracking-widest hover:opacity-90 transition-all"
                >
                  Seguir @clsoutlet
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
        BOTÃO WHATSAPP FLUTUANTE (Foco Mobile/Conversão)
        ========================================
      */}
      <a 
        href="https://chat.whatsapp.com/IJtugbfKVQd3V9pT4wKK30?mode=gi_t"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.5)] hover:bg-green-400 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          fill="currentColor" 
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* RODAPÉ TÁTICO */}
      <footer className="py-12 px-6 bg-neutral-900 border-t-2 border-red-700 text-center text-neutral-500 text-sm">
        <p>&copy; {new Date().getFullYear()} CLS OUTLET. Todos os direitos reservados. Fundação 2022.</p>
        <p className='mt-1 text-neutral-700'>Construído com base no Elite Standard.</p>
      </footer>

    </div>
  );
}

export default App;
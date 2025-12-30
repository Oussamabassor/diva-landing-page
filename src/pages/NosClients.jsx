import { useScrollAnimation } from '../hooks/useScrollAnimation';

function NosClients() {
  const titleRef = useScrollAnimation('animate-fade-in-up');
  const descRef = useScrollAnimation('animate-fade-in-up');

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16">
        {/* Glassmorphic background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/40 dark:bg-teal-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-40 backdrop-blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/30 dark:bg-teal-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 backdrop-blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-100/20 dark:bg-teal-500/8 rounded-full mix-blend-multiply filter blur-3xl opacity-20 backdrop-blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <div className="space-y-8">
            <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <span className="bg-gradient-to-r from-teal-600 via-teal-700 to-slate-900 dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 bg-clip-text text-transparent">
                Nos Clients
              </span>
            </h1>
            
            <p ref={descRef} className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Nous collaborons principalement avec des intégrateurs et distributeurs <span className="font-semibold text-teal-600 dark:text-teal-400">Divalto Infinity</span>  et <span className="font-semibold text-teal-600 dark:text-teal-400">Divalto Weavy</span>, en sous-traitance sur le développement ERP et CRM.<br /><br />
              Nous accompagnons également des clients directs sur des projets web et mobile sur mesure, en fournissant des solutions performantes, adaptées et fiables.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NosClients;

import { useScrollAnimation } from '../hooks/useScrollAnimation';

function NosServices() {
  const servicesRef = useScrollAnimation('animate-fade-in-up');

  const services = [
    {
      id: 1,
      title: "Développement Divalto ERP",
      description: "Nous proposons un développement spécialisé sur l'ERP Divalto, en sous-traitance pour les intégrateurs et éditeurs.",
      features: [
        "Développer des fonctionnalités sur mesure",
        "Adapter l'ERP aux besoins spécifiques",
        "Optimiser les processus métiers",
        "Garantir la qualité et la maintenabilité"
      ]
    },
    {
      id: 2,
      title: "Développement CRM Divalto Weavy",
      description: "Experts en CRM Divalto Weavy, nous intervenons pour développer des solutions adaptées.",
      features: [
        "Développer des modules personnalisés",
        "Intégrer des fonctionnalités avancées",
        "Adapter le CRM aux processus internes",
        "Assurer un développement fiable"
      ]
    },
    {
      id: 3,
      title: "Applications Web sur mesure",
      description: "Nous concevons et développons des applications web personnalisées, adaptées aux besoins métiers.",
      features: [
        "Sites web interactifs et plateformes",
        "Communication avec les ERP via API",
        "Applications métier complètes",
        "Solutions sécurisées et évolutives"
      ]
    },
    {
      id: 4,
      title: "Applications Mobiles sur mesure",
      description: "Nous réalisons des applications mobiles pour iOS et Android avec une expérience utilisateur optimale.",
      features: [
        "Expérience utilisateur optimale",
        "Performances fiables et adaptées",
        "Intégration fluide avec vos systèmes",
        "Évolution et mise à jour faciles"
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
        {/* Glassmorphic background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/40 dark:bg-teal-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-40 backdrop-blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/30 dark:bg-teal-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 backdrop-blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-100/20 dark:bg-teal-500/8 rounded-full mix-blend-multiply filter blur-3xl opacity-20 backdrop-blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white text-center animate-fade-in-up mb-16" style={{animationDelay: '0s'}}>
            Nos Services
          </h1>

          {/* Services Grid */}
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {services.map((service) => (
              <div key={service.id} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-teal-100/50 dark:border-teal-900/50 hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Header with Badge */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex-1">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 text-white font-bold rounded-full flex-shrink-0 text-sm ml-2">
                    {service.id}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-5 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-1 flex-shrink-0"></span>
                      <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Image Placeholder - Smaller for Logos/Pictures */}
                <div className="relative">
                  <div className="w-full h-24 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-lg border border-dashed border-teal-300 dark:border-teal-700 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="text-3xl">📸</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
                        Image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NosServices;

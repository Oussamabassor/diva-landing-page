function NosServices() {
  const services = [
    {
      id: 1,
      title: "Développement Divalto ERP",
      description: "Nous proposons un développement spécialisé sur l'ERP Divalto, en sous-traitance pour les intégrateurs et éditeurs. Nos équipes maîtrisent parfaitement les environnements techniques et métiers de Divalto, permettant de :",
      features: [
        "Développer des fonctionnalités sur mesure",
        "Adapter l'ERP aux besoins spécifiques des clients",
        "Optimiser les processus métiers",
        "Garantir la qualité et la maintenabilité du code",
        "Suivre des évolutions (Saas, Divalto One, API …)"
      ]
    },
    {
      id: 2,
      title: "Développement CRM Divalto Weavy",
      description: "Experts en CRM Divalto Weavy, nous intervenons pour :",
      features: [
        "Développer des modules personnalisés",
        "Intégrer des fonctionnalités avancées selon les besoins des utilisateurs",
        "Adapter le CRM aux processus internes des entreprises",
        "Assurer un développement fiable et conforme aux standards du produit"
      ]
    },
    {
      id: 3,
      title: "Applications Web sur mesure",
      description: "Nous concevons et développons des applications web personnalisées, adaptées aux besoins métiers :",
      features: [
        "Sites web interactifs et plateformes internes",
        "Communication avec les ERP via des API",
        "Applications métier pour la gestion de données et de processus",
        "Interfaces intuitives et ergonomiques pour les utilisateurs",
        "Solutions sécurisées et évolutives, faciles à maintenir"
      ]
    },
    {
      id: 4,
      title: "Applications Mobiles sur mesure",
      description: "Nous réalisons des applications mobiles sur mesure, pour iOS et Android, en garantissant :",
      features: [
        "Une expérience utilisateur optimale",
        "Des performances fiables et adaptées aux contraintes techniques",
        "Une intégration fluide avec vos systèmes existants (ERP, CRM, bases de données)",
        "La possibilité d'évolution et de mise à jour en fonction des besoins futurs"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white animate-fade-in-up" style={{animationDelay: '0s'}}>
            Nos Services
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Content - alternating order on larger screens */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-10 border border-teal-100/50 dark:border-teal-900/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      {/* Service Number Badge */}
                      <div className="inline-block mb-4">
                        <span className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold px-4 py-2 rounded-full text-sm">
                          Service {service.id}
                        </span>
                      </div>

                      {/* Service Title */}
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h2>

                      {/* Service Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Placeholder - alternating position */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative">
                      {/* Placeholder Box for Image */}
                      <div className="relative w-full aspect-square bg-gradient-to-br from-teal-100 to-blue-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl overflow-hidden border-2 border-dashed border-teal-300 dark:border-teal-700 flex items-center justify-center min-h-80">
                        <div className="text-center">
                          <div className="text-5xl mb-4">🖼️</div>
                          <p className="text-gray-600 dark:text-gray-400 font-semibold">
                            Service Image {service.id}
                          </p>
                          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                            Replace with actual image
                          </p>
                        </div>
                      </div>

                      {/* Decorative accent */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-600 dark:to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Intéressé par nos services ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez-nous pour discuter de vos besoins et trouver la solution idéale pour votre projet.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-600 font-semibold px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Nous Contacter
          </a>
        </div>
      </section>
    </div>
  );
}

export default NosServices;

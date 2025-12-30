function QuiSommes() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16">
        {/* Glassmorphic background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/40 dark:bg-teal-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-40 backdrop-blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/30 dark:bg-teal-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 backdrop-blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-100/20 dark:bg-teal-500/8 rounded-full mix-blend-multiply filter blur-3xl opacity-20 backdrop-blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white animate-fade-in-up" style={{animationDelay: '0s'}}>
            Qui Sommes Nous
          </h1>
          
          {/* About Content */}
          <div className="mt-12 max-w-4xl mx-auto space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {/* Intro Paragraph */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Créée en <span className="font-semibold text-teal-600 dark:text-teal-400">2022</span>, notre société s'appuie sur <span className="font-semibold text-teal-600 dark:text-teal-400">plus de 12 ans d'expérience</span> dans le développement informatique, acquise par notre fondateur au sein de grandes structures en tant que salarié. Forts de cette expertise, nous avons constitué une équipe spécialisée dans le développement <span className="font-semibold">Divalto Infinity</span> et <span className="font-semibold">Divalto Weavy</span>, ainsi que dans les applications web et mobiles sur mesure.
            </p>

            {/* Presence Paragraph */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Présents à la fois en <span className="font-semibold text-teal-600 dark:text-teal-400">France</span> et au <span className="font-semibold text-teal-600 dark:text-teal-400">Maroc</span>, nous accompagnons nos clients et partenaires sur des projets variés, en veillant à offrir des solutions parfaitement adaptées à leurs besoins. Nos offres sont conçues pour être flexibles et équitables, avec des tarifs modulés en fonction de la complexité et de l'envergure de chaque tâche.
            </p>

            {/* Mission Paragraph */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 border border-teal-200/50 dark:border-teal-900/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                Notre objectif est simple : apporter un <span className="text-teal-600 dark:text-teal-400">développement de qualité</span>, <span className="text-teal-600 dark:text-teal-400">fiable et sur mesure</span>, tout en garantissant une <span className="text-teal-600 dark:text-teal-400">collaboration fluide et transparente</span> avec nos partenaires et clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuiSommes;

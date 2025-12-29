import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Home() {
  const titleRef = useScrollAnimation('animate-fade-in-up');
  const ctaRef = useScrollAnimation('animate-fade-in-up');
  const featuresRef = useScrollAnimation('animate-fade-in-up');

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Glassmorphic background circles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large top-right circle */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/40 dark:bg-teal-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 backdrop-blur-3xl"></div>
          {/* Large bottom-left circle */}
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/30 dark:bg-slate-700/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 backdrop-blur-3xl"></div>
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-100/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 backdrop-blur-3xl"></div>
          {/* Additional accent circles */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <div className="space-y-8">
            <div className="inline-block animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-teal-100/80 dark:bg-teal-900/40 backdrop-blur-xl text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold border border-teal-200/50 dark:border-teal-700/50">
                ✨ Bienvenue chez Diva Easy
              </div>
            </div>
            
            <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <span className="bg-gradient-to-r from-teal-600 via-teal-700 to-slate-900 dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 bg-clip-text text-transparent">
                Diva Easy
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Votre Vie, Simplifiée</span>
            </h1>
            
            <p ref={ctaRef} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Découvrez la solution ultime pour gérer vos tâches quotidiennes avec élégance et facilité. Transformez votre façon de travailler et de vivre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm border border-teal-400/20"
              >
                Commencer
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/qui-sommes-nous"
                className="border-2 border-teal-500 text-teal-600 dark:text-teal-400 dark:border-teal-400 px-8 py-4 rounded-xl font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-all duration-300 backdrop-blur-sm"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        {/* Glassmorphic background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-100/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-slate-200/20 dark:bg-slate-700/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 -left-40 w-72 h-72 bg-teal-100/15 dark:bg-teal-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={featuresRef} className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Pourquoi Choisir <span className="bg-gradient-to-r from-teal-600 to-slate-900 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent">Diva Easy</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Des fonctionnalités puissantes pensées pour simplifier votre vie et augmenter votre productivité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="group relative animate-fade-in-up h-full" style={{animationDelay: '0.1s'}}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl p-8 rounded-2xl border border-teal-100/60 group-hover:border-teal-200 transition-all duration-500 h-full flex flex-col hover:shadow-md hover:shadow-teal-500/5 dark:bg-slate-800/95 dark:border-teal-900/60 dark:hover:border-teal-700 dark:hover:shadow-md dark:hover:shadow-teal-400/5">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300 dark:from-slate-700 dark:to-slate-600">
                  <Zap className="w-8 h-8 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ultra Rapide</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm flex-grow">
                  Découvrez des performances éclair qui suivent votre rythme et boostent votre productivité.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative animate-fade-in-up h-full" style={{animationDelay: '0.15s'}}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl p-8 rounded-2xl border border-teal-100/60 group-hover:border-teal-200 transition-all duration-500 h-full flex flex-col hover:shadow-xl hover:shadow-teal-500/10 dark:bg-slate-800/95 dark:border-teal-900/60 dark:hover:border-teal-700 dark:hover:shadow-md dark:hover:shadow-teal-400/5">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300 dark:from-slate-700 dark:to-slate-600">
                  <Shield className="w-8 h-8 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sécurisé & Fiable</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm flex-grow">
                  Vos données sont protégées avec une sécurité de niveau entreprise et chiffrement de pointe.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative animate-fade-in-up h-full" style={{animationDelay: '0.2s'}}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl p-8 rounded-2xl border border-teal-100/60 group-hover:border-teal-200 transition-all duration-500 h-full flex flex-col hover:shadow-xl hover:shadow-teal-500/10 dark:bg-slate-800/95 dark:border-teal-900/60 dark:hover:border-teal-700 dark:hover:shadow-md dark:hover:shadow-teal-400/5">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300 dark:from-slate-700 dark:to-slate-600">
                  <Users className="w-8 h-8 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Collaboration</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm flex-grow">
                  Travaillez ensemble en temps réel avec vos collègues, peu importe la distance.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="group relative animate-fade-in-up h-full" style={{animationDelay: '0.25s'}}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-xl p-8 rounded-2xl border border-teal-100/60 group-hover:border-teal-200 transition-all duration-500 h-full flex flex-col hover:shadow-xl hover:shadow-teal-500/10 dark:bg-slate-800/95 dark:border-teal-900/60 dark:hover:border-teal-700 dark:hover:shadow-md dark:hover:shadow-teal-400/5">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-teal-500/20 transition-all duration-300 dark:from-slate-700 dark:to-slate-600">
                  <Smartphone className="w-8 h-8 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mobile Ready</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm flex-grow">
                  Accédez à votre travail de n'importe où sur tous vos appareils, n'importe quand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Prêt à Transformer Votre Vie?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Rejoignez des milliers d'utilisateurs qui ont déjà découvert la différence Diva Easy.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-teal-500 to-slate-900 text-white px-10 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Commencez Votre Voyage Aujourd'hui
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

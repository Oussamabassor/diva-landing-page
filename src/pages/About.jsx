import { CheckCircle, Target, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            À Propos de <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Diva Easy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Nous avons pour mission de simplifier votre vie numérique et de vous permettre d'atteindre vos objectifs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-4">
                Diva Easy a été fondée avec une conviction simple: la technologie doit simplifier la vie, non la compliquer. Notre équipe de développeurs et de designers passionnés s'est réunie pour créer une solution qui place l'expérience utilisateur au premier plan.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Depuis nos humbles débuts en 2023, nous avons grandi pour devenir une plateforme de confiance utilisée par des milliers d'utilisateurs dans le monde entier. Nous nous engageons à l'innovation continue et à l'écoute de notre communauté.
              </p>
              <p className="text-lg text-gray-600">
                Chaque fonctionnalité que nous construisons, chaque mise à jour que nous publions, est motivée par notre engagement à simplifier votre vie.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
                  100K+
                </div>
                <p className="text-gray-600">Utilisateurs Heureux dans le Monde</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Notre Mission & Valeurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Notre Mission</h3>
              <p className="text-gray-600">
                Autonomiser les individus et les équipes avec des outils qui simplifient leur travail et améliorent leur productivité.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous repoussons constamment les limites et explorons de nouvelles possibilités pour rester en tête du secteur.
              </p>
            </div>

            {/* Trust */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Heart className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confiance</h3>
              <p className="text-gray-600">
                Votre confiance est notre atout le plus précieux. Nous nous engageons à la transparence et à l'intégrité.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Nous aspirons à l'excellence dans chaque aspect de notre produit et service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Rencontrez Notre Équipe
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Des personnes talentueuses unies par la passion de créer des expériences exceptionnelles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Sophie Martin</h3>
              <p className="text-blue-600 font-medium mb-2">PDG & Fondatrice</p>
              <p className="text-gray-600">
                Leader visionnaire avec 10+ ans d'expérience technologique et une passion pour le design centré sur l'utilisateur.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Luc Durand</h3>
              <p className="text-blue-600 font-medium mb-2">CTO</p>
              <p className="text-gray-600">
                Innovateur technologique dirigeant notre équipe d'ingénierie pour construire des solutions évolutives.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Marie Laurent</h3>
              <p className="text-blue-600 font-medium mb-2">Directrice du Design</p>
              <p className="text-gray-600">
                Experte en design thinking dédiée à la création d'interfaces belles et intuitives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Rejoignez Notre Voyage
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Faites partie de quelque chose d'extraordinaire. Découvrez la différence Diva Easy aujourd'hui.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Nous Contacter
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;

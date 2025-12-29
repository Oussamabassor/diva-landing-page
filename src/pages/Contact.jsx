import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfoRef = useScrollAnimation('animate-fade-in-up');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-white via-teal-50 to-white pt-32 pb-20 relative overflow-hidden">
        {/* Glassmorphic animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float backdrop-blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow backdrop-blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-8">
            <div className="inline-block animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-teal-100/80 text-teal-700 rounded-full text-sm font-semibold backdrop-blur-sm border border-teal-200/50">
                📧 Contactez-Nous
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold text-gray-900 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              Parlons <span className="bg-gradient-to-r from-teal-600 to-slate-900 bg-clip-text text-transparent">Ensemble</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Nous aimerions vous entendre. Envoyez-nous un message et nous vous répondrons dès que possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Glassmorphic background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-teal-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float backdrop-blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow backdrop-blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div ref={contactInfoRef} className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-10">Informations</h2>

              {/* Email */}
              <div className="group relative mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-teal-100 hover:border-teal-300 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 font-medium">
                    <a href="mailto:info@divaeasy.com" className="hover:text-teal-600 transition-colors">
                      info@divaeasy.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
                </div>
              </div>

              {/* Phone */}
              <div className="group relative mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-teal-100 hover:border-teal-300 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-600 font-medium">
                    <a href="tel:+33123456789" className="hover:text-teal-600 transition-colors">
                      +33 1 23 45 67 89
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Lun-Ven, 9h - 18h CET</p>
                </div>
              </div>

              {/* Location */}
              <div className="group relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-xl border border-teal-100 hover:border-teal-300 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Bureau</h3>
                  <p className="text-gray-600">
                    123 Rue Facile<br />
                    Paris, 75000<br />
                    France
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-12 flex flex-col items-center justify-center min-h-96 shadow-lg animate-fade-in-up">
                  <div className="bg-white p-4 rounded-full mb-4 shadow-lg">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Merci!</h3>
                  <p className="text-gray-600 text-center text-lg">
                    Votre message a été envoyé avec succès. Nous vous répondrons bientôt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                    <label htmlFor="name" className="block text-gray-900 font-bold mb-3">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-teal-200 bg-teal-50/50 backdrop-blur-sm rounded-xl focus:border-teal-500 focus:bg-white focus:outline-none transition-all duration-200"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  {/* Email */}
                  <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <label htmlFor="email" className="block text-gray-900 font-bold mb-3">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-teal-200 bg-teal-50/50 backdrop-blur-sm rounded-xl focus:border-teal-500 focus:bg-white focus:outline-none transition-all duration-200"
                      placeholder="jean@exemple.com"
                    />
                  </div>

                  {/* Subject */}
                  <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    <label htmlFor="subject" className="block text-gray-900 font-bold mb-3">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-teal-200 bg-teal-50/50 backdrop-blur-sm rounded-xl focus:border-teal-500 focus:bg-white focus:outline-none transition-all duration-200"
                      placeholder="Comment pouvons-nous vous aider?"
                    />
                  </div>

                  {/* Message */}
                  <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <label htmlFor="message" className="block text-gray-900 font-bold mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-6 py-4 border-2 border-teal-200 bg-teal-50/50 backdrop-blur-sm rounded-xl focus:border-teal-500 focus:bg-white focus:outline-none transition-all duration-200 resize-none"
                      placeholder="Votre message ici..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-lg animate-fade-in-up" style={{animationDelay: '0.5s'}}
                  >
                    <Send className="w-6 h-6" />
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-slate-50 relative overflow-hidden">
        {/* Glassmorphic background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-20 w-80 h-80 bg-teal-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float backdrop-blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-slate-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow backdrop-blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vous ne trouvez pas ce que vous cherchez? Consultez notre section FAQ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <div className="group relative animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Comment commencer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  C'est facile! Il suffit de vous inscrire et vous aurez un accès immédiat. Nous fournissons des matériaux complets pour vous aider à démarrer rapidement.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="group relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Mes données sont-elles sécurisées?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Oui, absolument. Nous utilisons des protocoles de cryptage de niveau entreprise. Votre confidentialité et votre sécurité sont nos priorités principales.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="group relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Quel type de support offrez-vous?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous offrons un support 24/7 par email et téléphone. Notre équipe d'assistance est toujours prête à vous aider pour toute question.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="group relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Puis-je changer de plan?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bien sûr! Vous pouvez changer votre plan à tout moment. Les modifications prennent effet lors de votre prochain cycle. Pas de frais cachés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

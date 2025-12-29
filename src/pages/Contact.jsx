import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Nous <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Contacter</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Nous aimerions vous entendre. Envoyez-nous un message et nous vous répondrons dès que possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              {/* Email */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="w-8 h-8 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                </div>
                <p className="text-gray-600">
                  <a href="mailto:info@divaeasy.com" className="hover:text-blue-600 transition-colors">
                    info@divaeasy.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-2">Nous répondrons dans les 24 heures</p>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-2">
                  <Phone className="w-8 h-8 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                </div>
                <p className="text-gray-600">
                  <a href="tel:+33123456789" className="hover:text-blue-600 transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-2">Lun-Ven, 9h - 18h CET</p>
              </div>

              {/* Location */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-2">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Bureau</h3>
                </div>
                <p className="text-gray-600">
                  123 Rue Facile<br />
                  Paris, 75000<br />
                  France
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-12 flex flex-col items-center justify-center min-h-96">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Merci!</h3>
                  <p className="text-gray-600 text-center mb-4">
                    Votre message a été envoyé avec succès. Nous vous répondrons bientôt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white">
                  {/* Name */}
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="jean@exemple.com"
                    />
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-900 font-semibold mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Comment pouvons-nous vous aider?"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Votre message ici..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Questions Fréquemment Posées
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Vous ne trouvez pas ce que vous cherchez? Consultez notre section FAQ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Comment commencer?
              </h3>
              <p className="text-gray-600">
                C'est facile! Il suffit de vous inscrire sur notre plateforme et vous aurez un accès immédiat à toutes nos fonctionnalités. Nous fournissons des matériaux d'accélération complets pour vous aider à démarrer rapidement.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Mes données sont-elles sécurisées?
              </h3>
              <p className="text-gray-600">
                Oui, absolument. Nous utilisons des protocoles de cryptage et de sécurité de niveau entreprise pour protéger vos données. Votre confidentialité et votre sécurité sont nos priorités principales.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quel type de support offrez-vous?
              </h3>
              <p className="text-gray-600">
                Nous offrons un support client 24/7 par email et téléphone. Notre équipe d'assistance dédiée est toujours prête à vous aider pour toute question ou préoccupation.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Puis-je changer de plan?
              </h3>
              <p className="text-gray-600">
                Bien sûr! Vous pouvez mettre à niveau ou réduire votre plan à tout moment. Les modifications prendront effet lors de votre prochain cycle de facturation. Pas de frais cachés ni de pénalités.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

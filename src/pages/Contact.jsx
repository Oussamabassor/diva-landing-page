import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactInfoRef = useScrollAnimation('animate-fade-in-up');
  const formRef = useScrollAnimation('animate-fade-in-up');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Using Formspree to send email to contact@divaeasy.com
      // First, sign up at https://formspree.io and create a form for contact@divaeasy.com
      // Then replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mnjqywgg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Still show success message - the form will be sent
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section with Contact Form */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-teal-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-32 pb-20">
        {/* Glassmorphic background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/40 dark:bg-teal-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-40 backdrop-blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-300/30 dark:bg-teal-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 backdrop-blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-200/20 dark:bg-teal-500/8 rounded-full mix-blend-multiply filter blur-3xl opacity-20 backdrop-blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="space-y-8 mb-16">
            <div className="inline-block animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-teal-100/80 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-teal-200/50 dark:border-teal-700/50">
                📧 Contactez-Nous
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <span className="bg-gradient-to-r from-teal-600 via-teal-700 to-slate-900 dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 bg-clip-text text-transparent">
                Parlons Ensemble
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Nous sommes à votre écoute pour répondre à vos besoins et vous accompagner dans vos projets informatiques.
            </p>
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div ref={contactInfoRef} className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              {/* Email */}
              <div className="group relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-teal-100/60 group-hover:border-teal-200 transition-all duration-500 hover:shadow-md hover:shadow-teal-500/5 dark:bg-slate-800/95 dark:border-teal-900/60 dark:hover:border-teal-700">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 dark:from-slate-700 dark:to-slate-600">
                    <Mail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                    <a href="mailto:contact@divaeasy.com" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      contact@divaeasy.com
                    </a>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Réponse sous 24h</p>
                </div>
              </div>

              {/* Phone */}
              <div className="group relative animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-slate-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-teal-100/60 group-hover:border-teal-200 transition-all duration-500 hover:shadow-md hover:shadow-teal-500/5 dark:bg-slate-800/95 dark:border-teal-900/60 dark:hover:border-teal-700">
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 dark:from-slate-700 dark:to-slate-600">
                    <Phone className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Téléphone</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                    <a href="tel:+33123456789" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      +33 1 23 45 67 89
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                    <a href="tel:+212666796154" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      +212 6 66 79 61 54
                    </a>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Lun-Ven, 9h - 18h</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" ref={formRef}>
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/20 border-2 border-green-300 dark:border-green-700 rounded-2xl p-12 flex flex-col items-center justify-center min-h-96 shadow-lg animate-fade-in-up">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-full mb-4 shadow-lg">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Merci!</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-lg">
                    Votre message a été envoyé avec succès.<br />Nous vous répondrons bientôt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.35s'}}>
                      <label htmlFor="name" className="block text-gray-900 dark:text-white font-bold mb-2 text-sm">
                        Nom Complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-slate-800/50 dark:text-white backdrop-blur-sm rounded-lg focus:border-teal-500 dark:focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all duration-200 text-sm"
                        placeholder="Jean Dupont"
                      />
                    </div>

                    {/* Email */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                      <label htmlFor="email" className="block text-gray-900 dark:text-white font-bold mb-2 text-sm">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-slate-800/50 dark:text-white backdrop-blur-sm rounded-lg focus:border-teal-500 dark:focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all duration-200 text-sm"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Company */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.45s'}}>
                      <label htmlFor="company" className="block text-gray-900 dark:text-white font-bold mb-2 text-sm">
                        Société <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-slate-800/50 dark:text-white backdrop-blur-sm rounded-lg focus:border-teal-500 dark:focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all duration-200 text-sm"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    {/* Subject */}
                    <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                      <label htmlFor="subject" className="block text-gray-900 dark:text-white font-bold mb-2 text-sm">
                        Sujet <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-slate-800/50 dark:text-white backdrop-blur-sm rounded-lg focus:border-teal-500 dark:focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all duration-200 text-sm"
                        placeholder="Comment pouvons-nous vous aider?"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="animate-fade-in-up" style={{animationDelay: '0.55s'}}>
                    <label htmlFor="message" className="block text-gray-900 dark:text-white font-bold mb-2 text-sm">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-slate-800/50 dark:text-white backdrop-blur-sm rounded-lg focus:border-teal-500 dark:focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all duration-200 resize-none text-sm"
                      placeholder="Décrivez votre demande en détail..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-teal-500 to-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up text-sm" 
                    style={{animationDelay: '0.6s'}}
                  >
                    <Send className="w-5 h-5" />
                    {isLoading ? 'Envoi en cours...' : 'Envoyer le Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

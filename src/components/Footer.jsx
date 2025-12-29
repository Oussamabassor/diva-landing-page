import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white via-teal-50 to-slate-50 border-t border-teal-200/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 flex items-center justify-center">
                <img src={logo} alt="Diva Easy Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 whitespace-nowrap tracking-tight">
                Diva Easy
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Simplifier votre vie numérique, un pas à la fois.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/qui-sommes-nous" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                  Qui Sommes Nous
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-teal-600 transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@divaeasy.com" className="hover:text-teal-600 transition-colors font-medium">
                  info@divaeasy.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:text-teal-600 transition-colors font-medium">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="font-medium">Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Nous Suivre</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-teal-100 text-teal-600 p-3 rounded-lg hover:bg-teal-200 transition-all duration-300 hover:scale-110 transform">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-teal-100 text-teal-600 p-3 rounded-lg hover:bg-teal-200 transition-all duration-300 hover:scale-110 transform">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-teal-100 text-teal-600 p-3 rounded-lg hover:bg-teal-200 transition-all duration-300 hover:scale-110 transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-teal-100 text-teal-600 p-3 rounded-lg hover:bg-teal-200 transition-all duration-300 hover:scale-110 transform">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-200/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm font-medium">
              &copy; 2025 Diva Easy. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-teal-600 text-sm font-medium transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600 text-sm font-medium transition-colors">
                Conditions d'Utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

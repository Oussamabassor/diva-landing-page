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
            Get in <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
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
                <p className="text-sm text-gray-500 mt-2">We'll reply within 24 hours</p>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-2">
                  <Phone className="w-8 h-8 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                </div>
                <p className="text-gray-600">
                  <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9 AM - 6 PM EST</p>
              </div>

              {/* Location */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-2">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                </div>
                <p className="text-gray-600">
                  123 Easy Street<br />
                  Tech City, TC 12345<br />
                  United States
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-12 flex flex-col items-center justify-center min-h-96">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-center mb-4">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white">
                  {/* Name */}
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-900 font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="How can we help?"
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
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Can't find what you're looking for? Check our FAQ section.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How can I get started?
              </h3>
              <p className="text-gray-600">
                Getting started is easy! Simply sign up on our platform, and you'll have immediate access to all our features. We provide comprehensive onboarding materials to help you get up and running quickly.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                Yes, absolutely. We use enterprise-grade encryption and security protocols to protect your data. Your privacy and security are our top priorities.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What kind of support do you offer?
              </h3>
              <p className="text-gray-600">
                We offer 24/7 customer support via email and phone. Our dedicated support team is always ready to help you with any questions or concerns.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-gray-600">
                Of course! You can upgrade or downgrade your plan at any time. Changes will take effect in your next billing cycle. No hidden charges or penalties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

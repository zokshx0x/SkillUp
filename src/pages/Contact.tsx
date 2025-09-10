import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Show success message (you could add a toast here)
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@skillup.com',
      description: 'Send us your questions anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Learning Street, Knowledge City, KC 12345',
      description: 'Our headquarters',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="hero-gradient py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            {t('contactSubtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                Get in Touch
              </h2>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 rtl:space-x-reverse"
                  >
                    <div className="w-12 h-12 bg-primary rounded-radius-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {info.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-secondary/50 rounded-radius-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Why Choose SkillUp?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Expert instructors with industry experience</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Interactive learning with hands-on projects</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>Flexible learning at your own pace</span>
                  </li>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span>24/7 support and community access</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="course-card p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="btn-hero w-full inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t('sendMessage')}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="animate-scale-in">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  How do I access my courses?
                </h3>
                <p className="text-muted-foreground">
                  Once you enroll in a course, you'll have lifetime access through your dashboard. 
                  You can learn at your own pace and revisit content anytime.
                </p>
              </div>
              
              <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Do you offer certificates?
                </h3>
                <p className="text-muted-foreground">
                  Yes! Upon successful completion of a course, you'll receive a certificate 
                  that you can add to your LinkedIn profile or resume.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Can I get a refund?
                </h3>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee. If you're not satisfied with 
                  your course, you can request a full refund within 30 days.
                </p>
              </div>
              
              <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Is there student support?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! Our support team is available 24/7 to help with any questions. 
                  You also have access to our active student community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
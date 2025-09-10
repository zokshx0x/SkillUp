import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: 'Passion for Learning',
      description: 'We believe learning should be engaging, accessible, and transformative for everyone.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive community where learners help each other grow and succeed.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality courses that meet industry standards.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making education accessible across cultures and languages worldwide.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Courses' },
    { number: '50K+', label: 'Students' },
    { number: '100+', label: 'Instructors' },
    { number: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="hero-gradient py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Empowering learners worldwide through accessible, high-quality education
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('aboutStory')}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>{t('aboutStoryText')}</p>
                <p>
                  Since our founding, we've grown into a global community of learners, educators, 
                  and industry experts working together to break down barriers to education. 
                  Our platform serves students from over 100 countries, offering courses in 
                  multiple languages with culturally diverse perspectives.
                </p>
                <p>
                  We're not just another online learning platform - we're a movement dedicated 
                  to democratizing education and creating opportunities for personal and 
                  professional growth regardless of background or location.
                </p>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-secondary/50 rounded-radius-lg p-8">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-radius-lg flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {t('mission')}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('missionText')}
              </p>
            </div>

            {/* Vision */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-radius-lg flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {t('vision')}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient section-padding">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join Our Learning Community
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Be part of a global community committed to continuous learning and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses" className="btn-hero">
                Explore Courses
              </a>
              <a href="/contact" className="btn-secondary-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
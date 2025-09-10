import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import webDevImage from '../assets/web-development-course.jpg';
import designImage from '../assets/ui-ux-design-course.jpg';
import businessImage from '../assets/business-skills-course.jpg';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const featuredCourses = [
    {
      id: 1,
      title: t('webDevelopment'),
      description: t('webDevDesc'),
      image: webDevImage,
      category: t('webDevCategory'),
      lessons: 24,
    },
    {
      id: 2,
      title: t('design'),
      description: t('designDesc'),
      image: designImage,
      category: t('designCategory'),
      lessons: 18,
    },
    {
      id: 3,
      title: t('business'),
      description: t('businessDesc'),
      image: businessImage,
      category: t('businessCategory'),
      lessons: 16,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <Link to="/courses" className="btn-hero inline-flex items-center space-x-2 rtl:space-x-reverse">
              <span>{t('startLearning')}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''} transition-transform group-hover:translate-x-1`} />
            </Link>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Courses Available</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">50K+</h3>
              <p className="text-muted-foreground">Active Students</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">95%</h3>
              <p className="text-muted-foreground">Completion Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('featuredCourses')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular courses designed to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div 
                key={course.id} 
                className="course-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-secondary rounded-t-radius-lg overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {course.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {course.lessons} {t('lessons')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  <Link 
                    to={`/course/${course.id}`}
                    className="btn-secondary-outline w-full text-center inline-block"
                  >
                    {t('viewCourse')}
                  </Link>
                </div>
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
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of learners who are already advancing their careers with SkillUp
            </p>
            <Link to="/courses" className="btn-hero">
              {t('startLearning')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
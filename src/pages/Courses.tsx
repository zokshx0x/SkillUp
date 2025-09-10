import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Clock, Star } from 'lucide-react';
import webDevImage from '../assets/web-development-course.jpg';
import designImage from '../assets/ui-ux-design-course.jpg';
import businessImage from '../assets/business-skills-course.jpg';
import nodejsImage from '../assets/nodejs-course.jpg';
import mobileDesignImage from '../assets/mobile-design-course.jpg';
import marketingImage from '../assets/digital-marketing-course.jpg';

const Courses: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web-dev', name: t('webDevCategory') },
    { id: 'design', name: t('designCategory') },
    { id: 'business', name: t('businessCategory') },
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete React Development Course',
      description: 'Master React from basics to advanced concepts',
      category: 'web-dev',
      lessons: 45,
      duration: '12 hours',
      rating: 4.8,
      students: 1250,
      image: webDevImage,
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      description: 'Learn design principles and user experience',
      category: 'design',
      lessons: 32,
      duration: '8 hours',
      rating: 4.9,
      students: 890,
      image: designImage,
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      description: 'Build effective marketing campaigns',
      category: 'business',
      lessons: 28,
      duration: '10 hours',
      rating: 4.7,
      students: 2100,
      image: marketingImage,
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      description: 'Build scalable server-side applications',
      category: 'web-dev',
      lessons: 38,
      duration: '15 hours',
      rating: 4.8,
      students: 756,
      image: nodejsImage,
    },
    {
      id: 5,
      title: 'Mobile App Design',
      description: 'Design beautiful mobile interfaces',
      category: 'design',
      lessons: 25,
      duration: '6 hours',
      rating: 4.6,
      students: 543,
      image: mobileDesignImage,
    },
    {
      id: 6,
      title: 'Entrepreneurship Essentials',
      description: 'Start and grow your own business',
      category: 'business',
      lessons: 22,
      duration: '8 hours',
      rating: 4.9,
      students: 1800,
      image: businessImage,
    },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="hero-gradient py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            {t('allCourses')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            Explore our comprehensive collection of courses designed to help you master new skills
          </p>
        </div>
      </section>

      {/* Courses Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-radius-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary-dark'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
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
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-foreground">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {course.students} students
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {course.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons} {t('lessons')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
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
    </div>
  );
};

export default Courses;
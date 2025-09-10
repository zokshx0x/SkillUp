import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Clock, Users, Star, Play, ArrowLeft } from 'lucide-react';
import webDevImage from '../assets/web-development-course.jpg';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, isRTL } = useLanguage();

  // Mock course data - in a real app, this would come from an API
  const course = {
    id: parseInt(id || '1'),
    title: 'Complete React Development Course',
    description: 'Master React from basics to advanced concepts. This comprehensive course covers everything you need to know to become a proficient React developer.',
    longDescription: `
      This comprehensive React course is designed for developers who want to master modern React development. 
      You'll start with the fundamentals and progressively learn advanced concepts including hooks, context, 
      state management, and performance optimization.
      
      Throughout the course, you'll build real-world projects that demonstrate practical applications of React concepts.
      By the end, you'll have the skills and confidence to build complex, scalable React applications.
    `,
    category: 'Web Development',
    lessons: 45,
    duration: '12 hours',
    rating: 4.8,
    students: 1250,
    instructor: 'John Smith',
    price: '$99',
    image: webDevImage,
    skills: [
      'React Fundamentals',
      'React Hooks',
      'State Management',
      'Component Architecture',
      'React Router',
      'API Integration',
      'Testing React Apps',
      'Performance Optimization',
    ],
    curriculum: [
      {
        module: 'Introduction to React',
        lessons: [
          'What is React?',
          'Setting up Development Environment',
          'Your First React Component',
          'JSX Fundamentals',
        ]
      },
      {
        module: 'React Components',
        lessons: [
          'Functional vs Class Components',
          'Props and State',
          'Event Handling',
          'Conditional Rendering',
        ]
      },
      {
        module: 'React Hooks',
        lessons: [
          'useState Hook',
          'useEffect Hook',
          'Custom Hooks',
          'Advanced Hooks',
        ]
      },
      {
        module: 'Advanced React',
        lessons: [
          'Context API',
          'React Router',
          'Performance Optimization',
          'Testing',
        ]
      },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Course Header */}
      <section className="hero-gradient py-16">
        <div className="container-custom">
          <div className="mb-6">
            <Link 
              to="/courses" 
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              <span>Back to Courses</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {course.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8 text-white/90">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Users className="w-5 h-5" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.lessons} {t('lessons')}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              <button className="btn-hero inline-flex items-center space-x-2 rtl:space-x-reverse">
                <Play className="w-5 h-5" />
                <span>{t('startCourse')}</span>
              </button>
            </div>
            
            <div className="animate-slide-up">
              <div className="aspect-video bg-white/10 rounded-radius-lg overflow-hidden backdrop-blur-sm relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Course Overview */}
              <div className="mb-12 animate-slide-up">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {t('courseOverview')}
                </h2>
                <div className="prose max-w-none text-muted-foreground leading-relaxed">
                  <p className="mb-4">{course.longDescription}</p>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {t('whatYouWillLearn')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-secondary rounded-radius"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-secondary-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {t('courseContent')}
                </h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border border-border rounded-radius-lg overflow-hidden">
                      <div className="bg-secondary p-4">
                        <h3 className="text-lg font-semibold text-secondary-foreground">
                          {module.module}
                        </h3>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li 
                              key={lessonIndex} 
                              className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground"
                            >
                              <Play className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="course-card p-6 animate-scale-in">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {course.price}
                    </div>
                    <p className="text-muted-foreground">One-time payment</p>
                  </div>
                  
                  <button className="btn-hero w-full mb-6">
                    {t('startCourse')}
                  </button>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Instructor:</span>
                      <span className="font-medium text-foreground">{course.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium text-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Lessons:</span>
                      <span className="font-medium text-foreground">{course.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Students:</span>
                      <span className="font-medium text-foreground">{course.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Rating:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium text-foreground">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
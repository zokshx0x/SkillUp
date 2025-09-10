import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    home: 'Home',
    courses: 'Courses',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Learn Skills Anytime, Anywhere',
    heroSubtitle: 'Master new skills with our comprehensive online courses. Join thousands of learners worldwide.',
    startLearning: 'Start Learning',
    
    // Featured Courses
    featuredCourses: 'Featured Courses',
    webDevelopment: 'Web Development',
    webDevDesc: 'Learn modern web development with React, Node.js, and more',
    design: 'UI/UX Design',
    designDesc: 'Master design principles and create beautiful user interfaces',
    business: 'Business Skills',
    businessDesc: 'Develop essential business and entrepreneurship skills',
    viewCourse: 'View Course',
    startCourse: 'Start Course',
    
    // Categories
    webDevCategory: 'Web Development',
    designCategory: 'Design',
    businessCategory: 'Business',
    
    // Course Details
    lessons: 'lessons',
    courseDescription: 'Course Description',
    
    // About Page
    aboutTitle: 'About SkillUp',
    aboutStory: 'Our Story',
    aboutStoryText: 'SkillUp was founded with a simple mission: to make quality education accessible to everyone, everywhere. We believe that learning should be flexible, engaging, and tailored to your needs.',
    mission: 'Our Mission',
    missionText: 'To democratize education by providing high-quality, accessible online courses that empower individuals to achieve their personal and professional goals.',
    vision: 'Our Vision',
    visionText: 'To become the leading global platform for online learning, fostering a community of lifelong learners who can adapt and thrive in an ever-changing world.',
    
    // Contact Page
    contactTitle: 'Contact Us',
    contactSubtitle: 'Have questions? We\'d love to hear from you.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Course List
    allCourses: 'All Courses',
    filterByCategory: 'Filter by Category',
    
    // Course Detail Page
    courseOverview: 'Course Overview',
    whatYouWillLearn: 'What You Will Learn',
    courseContent: 'Course Content',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    courses: 'الدورات',
    about: 'عن المنصة',
    contact: 'تواصل معنا',
    
    // Hero Section
    heroTitle: 'تعلم المهارات في أي وقت ومكان',
    heroSubtitle: 'أتقن مهارات جديدة من خلال دوراتنا الشاملة عبر الإنترنت. انضم إلى آلاف المتعلمين حول العالم.',
    startLearning: 'ابدأ التعلم',
    
    // Featured Courses
    featuredCourses: 'الدورات المميزة',
    webDevelopment: 'تطوير المواقع',
    webDevDesc: 'تعلم تطوير المواقع الحديثة باستخدام React و Node.js والمزيد',
    design: 'تصميم واجهات المستخدم',
    designDesc: 'أتقن مبادئ التصميم وإنشاء واجهات مستخدم جميلة',
    business: 'المهارات التجارية',
    businessDesc: 'طور المهارات التجارية الأساسية وريادة الأعمال',
    viewCourse: 'عرض الدورة',
    startCourse: 'بدء الدورة',
    
    // Categories
    webDevCategory: 'تطوير المواقع',
    designCategory: 'التصميم',
    businessCategory: 'الأعمال',
    
    // Course Details
    lessons: 'درس',
    courseDescription: 'وصف الدورة',
    
    // About Page
    aboutTitle: 'عن منصة SkillUp',
    aboutStory: 'قصتنا',
    aboutStoryText: 'تأسست منصة SkillUp برسالة بسيطة: جعل التعليم الجيد متاحاً للجميع في كل مكان. نؤمن أن التعلم يجب أن يكون مرناً وممتعاً ومناسباً لاحتياجاتك.',
    mission: 'رسالتنا',
    missionText: 'إضفاء الطابع الديمقراطي على التعليم من خلال توفير دورات عالية الجودة ومتاحة عبر الإنترنت تمكن الأفراد من تحقيق أهدافهم الشخصية والمهنية.',
    vision: 'رؤيتنا',
    visionText: 'أن نصبح المنصة العالمية الرائدة للتعلم عبر الإنترنت، ونعزز مجتمعاً من المتعلمين مدى الحياة الذين يمكنهم التكيف والازدهار في عالم متغير باستمرار.',
    
    // Contact Page
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'لديك أسئلة؟ نحن نحب أن نسمع منك.',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    
    // Course List
    allCourses: 'جميع الدورات',
    filterByCategory: 'تصفية حسب الفئة',
    
    // Course Detail Page
    courseOverview: 'نظرة عامة على الدورة',
    whatYouWillLearn: 'ما ستتعلمه',
    courseContent: 'محتوى الدورة',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    // Apply RTL/LTR class to body
    document.body.className = isRTL ? 'rtl' : 'ltr';
    
    // Update HTML direction
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-md bg-card/95">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">SkillUp</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/courses" 
              className={`nav-link ${isActive('/courses') ? 'active' : ''}`}
            >
              {t('courses')}
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              {t('about')}
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              {t('contact')}
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="lang-switcher flex items-center space-x-2 rtl:space-x-reverse"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import Header from './Header';
import { Code, Heart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-t border-border/50">
        <div className="container-custom py-8">
          <div className="text-center space-y-4">
            {/* Developer Credit */}
            <div className="flex items-center justify-center gap-2 text-lg font-semibold">
              <Code className="w-5 h-5 text-primary" />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                مبرمج أحمد عامر
              </span>
              <Code className="w-5 h-5 text-primary" />
            </div>
            
            {/* Demo Notice */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500" />
              <span>موقع تجريبي لعرض الأعمال</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-20"></div>
              <div className="w-2 h-2 rounded-full bg-primary/50"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-20"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
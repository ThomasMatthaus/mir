'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Home, Building, Phone, Users, Star, TrendingUp, FileText, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/', icon: Home },
    { name: 'Каталог', href: '/catalog', icon: Building },
    { name: 'О компании', href: '/about', icon: Users },
    { name: 'Отзывы', href: '/reviews', icon: Star },
    { name: 'Ипотека', href: '/mortgage', icon: TrendingUp },
    { name: 'Блог', href: '/blog', icon: FileText },
    { name: 'Контакты', href: '/contacts', icon: Phone },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/photo_5237934002017532916_y.jpg" 
              alt="Мир Недвижимости" 
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-foreground leading-tight">
                Мир Недвижимости
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block leading-tight">
                Агентство недвижимости
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-3 xl:px-4 py-2 xl:py-3 rounded-lg text-sm xl:text-base font-medium transition-colors touch-target focus-visible',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  <Icon className="w-4 h-4 xl:w-5 xl:h-5 flex-shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon" 
            className="lg:hidden touch-target focus-visible"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/98 backdrop-blur-sm">
            <nav className="py-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center space-x-3 px-4 py-4 mx-2 rounded-lg text-base font-medium transition-colors touch-target focus-visible',
                      pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    )}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
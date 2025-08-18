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
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/photo_5237934002017532916_y.jpg" 
              alt="Мир Недвижимости" 
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Мир Недвижимости</h1>
              <p className="text-sm text-muted-foreground">Агентство недвижимости</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      pathname === item.href
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    )}
                  >
                    <Icon className="w-5 h-5" />
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
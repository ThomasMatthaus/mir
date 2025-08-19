import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Award, ArrowRight, Search, Star, TrendingUp, Shield } from 'lucide-react';
import Header from '@/components/Header';
import PropertySearch from '@/components/PropertySearch';
import HotDeals from '@/components/HotDeals';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
          <div className="container text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-2">
              МИР НЕДВИЖИМОСТИ
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              — ваш надежный партнер в сфере недвижимости в Сочи! 
              Мы специализируемся на комплексном решении жилищных вопросов с 2024 года.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4">
              <Link href="/contacts">
                <Button size="lg" className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 touch-target focus-visible">
                  Получить консультацию
                  <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </Link>
              <Link href="/catalog">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 touch-target focus-visible">
                  Смотреть каталог
                </Button>
              </Link>
            </div>
            
            {/* Property Search */}
            <div className="max-w-4xl mx-auto px-2">
              <PropertySearch />
            </div>
          </div>
        </section>

        {/* Hot Deals Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
                Горячие предложения дня
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground px-4">
                Специальные цены и эксклюзивные объекты
              </p>
            </div>
            <HotDeals />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-tight">Объектов в каталоге</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">200+</div>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-tight">Довольных клиентов</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">1</div>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-tight">Год на рынке</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-tight">Поддержка клиентов</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-card/50">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 px-4">
              Наши услуги
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Building className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Продажа</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Квартиры, дома, коммерческая недвижимость
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Search className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Аренда</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Долгосрочная и краткосрочная аренда жилья
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Инвестиции</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Анализ объектов и управление арендным бизнесом
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Ипотека</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Сотрудничество с банками и консультации
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 px-4">
              Готовы найти свой дом?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Свяжитесь с нами сегодня, и мы поможем вам сделать первый шаг к новому дому
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href="/catalog">
                <Button size="lg" className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 touch-target focus-visible">
                  Смотреть каталог
                </Button>
              </Link>
              <Link href="/contacts">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 touch-target focus-visible">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
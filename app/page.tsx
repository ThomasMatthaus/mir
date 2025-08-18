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
        <section className="py-20 lg:py-32">
          <div className="container text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              МИР НЕДВИЖИМОСТИ
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              — ваш надежный партнер в сфере недвижимости в Сочи! 
              Мы специализируемся на комплексном решении жилищных вопросов с 2024 года.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contacts">
                <Button size="lg" className="text-xl px-12 py-8">
                  Получить консультацию
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/catalog">
                <Button variant="outline" size="lg" className="text-xl px-12 py-8">
                  Смотреть каталог
                </Button>
              </Link>
            </div>
            
            {/* Property Search */}
            <div className="max-w-4xl mx-auto">
              <PropertySearch />
            </div>
          </div>
        </section>

        {/* Hot Deals Section */}
        <section className="py-20 bg-card/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Горячие предложения дня
              </h2>
              <p className="text-xl text-muted-foreground">
                Специальные цены и эксклюзивные объекты
              </p>
            </div>
            <HotDeals />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-lg text-muted-foreground">Объектов в каталоге</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">200+</div>
                <p className="text-lg text-muted-foreground">Довольных клиентов</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">1</div>
                <p className="text-lg text-muted-foreground">Год на рынке</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
                <p className="text-lg text-muted-foreground">Поддержка клиентов</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-card/50">
          <div className="container">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
              Наши услуги
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-8">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Продажа</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Квартиры, дома, коммерческая недвижимость
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Аренда</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Долгосрочная и краткосрочная аренда жилья
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Инвестиции</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Анализ объектов и управление арендным бизнесом
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-8">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Ипотека</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Сотрудничество с банками и консультации
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Готовы найти свой дом?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Свяжитесь с нами сегодня, и мы поможем вам сделать первый шаг к новому дому
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog">
                <Button size="lg" className="text-xl px-12 py-8">
                  Смотреть каталог
                </Button>
              </Link>
              <Link href="/contacts">
                <Button variant="outline" size="lg" className="text-xl px-12 py-8">
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
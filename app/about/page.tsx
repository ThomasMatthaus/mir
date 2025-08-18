import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Award, Target, Heart, Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              О компании
            </h1>
            <p className="text-xl text-muted-foreground">
              Мир Недвижимости — ваш надежный партнер в сфере недвижимости
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Наша история</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Компания "Мир Недвижимости" была основана в 2024 году с целью предоставления 
                  профессиональных услуг в сфере недвижимости в Сочи и прилегающих районах.
                </p>
                <p>
                  За короткое время работы мы зарекомендовали себя как надежный партнер, 
                  помогающий клиентам найти идеальное жилье или выгодно продать недвижимость.
                </p>
                <p>
                  Наша команда состоит из опытных специалистов, которые глубоко понимают 
                  особенности местного рынка недвижимости и всегда готовы предложить 
                  оптимальные решения для каждого клиента.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Офис компании"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">500+</h3>
                <p className="text-muted-foreground">Объектов в каталоге</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">200+</h3>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1</h3>
                <p className="text-muted-foreground">Год успешной работы</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4.9</h3>
                <p className="text-muted-foreground">Средний рейтинг</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Наша миссия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Помочь каждому клиенту найти идеальное жилье или выгодно продать недвижимость, 
                  предоставляя профессиональные консультации и полное сопровождение сделок.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Наши ценности</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Честность, профессионализм и индивидуальный подход к каждому клиенту. 
                  Мы строим долгосрочные отношения, основанные на доверии и взаимном уважении.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Наши достижения</h3>
                <p className="text-muted-foreground leading-relaxed">
                  За первый год работы мы успешно провели более 150 сделок, получили высокие 
                  оценки клиентов и стали одним из ведущих агентств в регионе.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, User, Calendar, Quote } from 'lucide-react';
import Link from 'next/link';

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      date: '20 января 2025',
      service: 'Покупка квартиры',
      text: 'Отличная работа! Помогли найти идеальную квартиру в центре Сочи. Весь процесс прошел быстро и без проблем. Особенно хочу отметить профессионализм менеджера - всегда на связи, отвечал на все вопросы.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      rating: 5,
      date: '18 января 2025',
      service: 'Продажа дома',
      text: 'Продавал дом через это агентство. Очень довольен результатом! Нашли покупателя за 2 недели, помогли с оформлением всех документов. Цена была справедливой, сделка прошла честно.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 5,
      date: '15 января 2025',
      service: 'Ипотека',
      text: 'Спасибо за помощь с ипотекой! Думала, что это будет сложно, но специалисты все объяснили и помогли выбрать лучшие условия. Получила одобрение в трех банках и выбрала самое выгодное предложение.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      rating: 4,
      date: '12 января 2025',
      service: 'Аренда квартиры',
      text: 'Искал квартиру в аренду для семьи. Показали несколько хороших вариантов, помогли с выбором. Единственный минус - хотелось бы больше вариантов в нужном районе, но в целом все отлично.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 5,
      name: 'Ольга Морозова',
      rating: 5,
      date: '10 января 2025',
      service: 'Покупка квартиры',
      text: 'Покупала первую квартиру, очень волновалась. Менеджеры были терпеливыми, объяснили все нюансы, помогли с проверкой документов. Теперь у меня есть свой дом! Рекомендую всем.',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 6,
      name: 'Александр Новиков',
      rating: 5,
      date: '8 января 2025',
      service: 'Инвестиции',
      text: 'Обратился за консультацией по инвестициям в недвижимость. Получил подробный анализ рынка и рекомендации по выбору объектов. Купил две квартиры для сдачи в аренду - уже окупаются!',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Отзывы клиентов
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {renderStars(Math.round(averageRating))}
                </div>
                <span className="text-xl font-semibold">{averageRating.toFixed(1)}</span>
              </div>
              <span className="text-xl text-muted-foreground">
                на основе {reviews.length} отзывов
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{review.name}</h3>
                        <Badge variant="secondary" className="text-sm">
                          {review.service}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-6 h-6 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground leading-relaxed pl-2">
                      {review.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">4.8</div>
                <p className="text-muted-foreground">Средняя оценка</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Положительных отзывов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Успешных сделок</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Хотите оставить свой отзыв?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Поделитесь своим опытом работы с нашим агентством
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacts">
                  <Button size="lg" variant="secondary" className="text-xl px-12 py-8">
                    <User className="w-6 h-6 mr-3" />
                    Связаться с нами
                  </Button>
                </Link>
                <Link href="/catalog">
                  <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Посмотреть каталог
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
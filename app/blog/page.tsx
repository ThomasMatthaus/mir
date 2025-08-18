import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Как выбрать квартиру в Сочи: полное руководство',
      excerpt: 'Подробный гид по выбору недвижимости в курортном городе. Рассматриваем все важные аспекты: от расположения до инфраструктуры.',
      date: '15 января 2025',
      author: 'Мир Недвижимости',
      category: 'Покупка',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Инвестиции в недвижимость Сочи: тренды 2025 года',
      excerpt: 'Анализ рынка недвижимости и перспективные направления для инвестиций. Какие районы показывают наибольший рост.',
      date: '12 января 2025',
      author: 'Мир Недвижимости',
      category: 'Инвестиции',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Ипотека на недвижимость в Сочи: условия и программы',
      excerpt: 'Обзор актуальных ипотечных программ для покупки жилья в Сочи. Сравнение условий разных банков.',
      date: '10 января 2025',
      author: 'Мир Недвижимости',
      category: 'Ипотека',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Аренда жилья в Сочи: советы для арендодателей',
      excerpt: 'Как правильно сдавать недвижимость в аренду. Юридические аспекты, ценообразование и поиск надежных арендаторов.',
      date: '8 января 2025',
      author: 'Мир Недвижимости',
      category: 'Аренда',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Новостройки Сочи: что выбрать в 2025 году',
      excerpt: 'Обзор новых жилых комплексов в Сочи. Анализ предложений застройщиков и рекомендации по выбору.',
      date: '5 января 2025',
      author: 'Мир Недвижимости',
      category: 'Новостройки',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Документы для покупки недвижимости: чек-лист',
      excerpt: 'Полный список документов, необходимых для безопасной покупки недвижимости. Что проверить перед сделкой.',
      date: '3 января 2025',
      author: 'Мир Недвижимости',
      category: 'Документы',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Блог о недвижимости
            </h1>
            <p className="text-xl text-muted-foreground">
              Полезные статьи и советы от экспертов рынка недвижимости
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-sm font-medium">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
                    Читать далее
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Хотите получать новые статьи на почту?
            </p>
            <Link href="/contacts">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors">
                Подписаться на обновления
              </button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
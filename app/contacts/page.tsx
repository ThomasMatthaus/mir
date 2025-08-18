import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Адрес офиса</h3>
                      <p className="text-lg text-muted-foreground">
                        г. Сочи<br />
                        ул. Войкова, 28/2, микрорайон Центральный<br />
                        этаж 3
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                      <p className="text-lg text-muted-foreground mb-2">
                        <a href="tel:+78123456789" className="hover:text-primary transition-colors">
                          
                          +7 (965) 480-25-28
                        </a>
                      </p>
                      <p className="text-base text-muted-foreground">
                        Звонки принимаются ежедневно
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email</h3>
                      <p className="text-lg text-muted-foreground">
                        <a href="mailto:info@mir-nedvizhimosti.ru" className="hover:text-primary transition-colors">
                          info@mir-nedvizhimosti.ru
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                      <div className="text-lg text-muted-foreground space-y-1">
                        <p>Понедельник - Пятница: 9:00 - 18:00</p>
                        <p>Суббота - Воскресенье: 10:00 - 17:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Наш офис на карте</h3>
                  <div className="space-y-6">
                    <div className="bg-muted rounded-lg p-8 text-center">
                      <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg text-muted-foreground mb-6">
                        Карта будет загружена
                      </p>
                      <a 
                        href="https://yandex.ru/maps/-/CHhmmQ1g" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                      </a>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-base text-muted-foreground">
                        Удобное расположение в центре города<br />
                        Парковка для клиентов
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
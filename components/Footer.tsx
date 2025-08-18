import Link from 'next/link';
import { Building, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/photo_5237934002017532916_y.jpg" 
                alt="Мир Недвижимости" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">Мир Недвижимости</h3>
                <p className="text-sm text-muted-foreground">Агентство недвижимости</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Профессиональные услуги по покупке и продаже недвижимости в Сочи. 
              Поможем найти дом вашей мечты.
            </p>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a href="tel:+79654802528" className="text-muted-foreground hover:text-foreground transition-colors">
                  +7 (965) 480-25-28
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <a href="mailto:info@mir-nedvizhimosti.ru" className="text-muted-foreground hover:text-foreground transition-colors">
                  info@mir-nedvizhimosti.ru
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  г. Сочи, ул. Войкова, 28/2
                </span>
              </li>
            </ul>
          </div>

          {/* Режим работы */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб-Вс: 10:00 - 17:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Мир Недвижимости. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
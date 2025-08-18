import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, Percent, Clock, Shield, CheckCircle, Phone } from 'lucide-react';
import Link from 'next/link';

export default function MortgagePage() {
  const mortgagePrograms = [
    {
      bank: 'Сбербанк',
      rate: '16.5%',
      minPayment: '15%',
      maxAmount: '12 млн ₽',
      term: 'до 30 лет',
      features: ['Льготная ставка для зарплатных клиентов', 'Возможность досрочного погашения', 'Онлайн-заявка']
    },
    {
      bank: 'ВТБ',
      rate: '16.8%',
      minPayment: '20%',
      maxAmount: '15 млн ₽',
      term: 'до 25 лет',
      features: ['Ипотека без справки о доходах', 'Быстрое рассмотрение заявки', 'Страхование в подарок']
    },
    {
      bank: 'Газпромбанк',
      rate: '17.2%',
      minPayment: '15%',
      maxAmount: '10 млн ₽',
      term: 'до 30 лет',
      features: ['Специальные условия для новостроек', 'Возможность рефинансирования', 'Гибкий график платежей']
    },
    {
      bank: 'Альфа-Банк',
      rate: '16.9%',
      minPayment: '10%',
      maxAmount: '20 млн ₽',
      term: 'до 25 лет',
      features: ['Минимальный первоначальный взнос', 'Ипотека для IT-специалистов', 'Кэшбэк за покупки']
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Консультация',
      description: 'Обсуждаем ваши потребности и возможности, подбираем оптимальную программу'
    },
    {
      number: 2,
      title: 'Подготовка документов',
      description: 'Помогаем собрать необходимые документы для подачи заявки в банк'
    },
    {
      number: 3,
      title: 'Подача заявки',
      description: 'Подаем заявку в несколько банков для получения лучших условий'
    },
    {
      number: 4,
      title: 'Одобрение',
      description: 'Получаем одобрение банка и выбираем наиболее выгодное предложение'
    },
    {
      number: 5,
      title: 'Оформление сделки',
      description: 'Сопровождаем процесс оформления ипотеки и покупки недвижимости'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Ипотечное кредитование
            </h1>
            <p className="text-xl text-muted-foreground">
              Поможем получить ипотеку на выгодных условиях для покупки недвижимости в Сочи
            </p>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Почему выбирают нас?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Лучшие условия</h3>
                    <p className="text-muted-foreground">
                      Работаем с ведущими банками и находим наиболее выгодные предложения для каждого клиента
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Быстрое оформление</h3>
                    <p className="text-muted-foreground">
                      Помогаем подготовить документы и ускоряем процесс рассмотрения заявки
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Полное сопровождение</h3>
                    <p className="text-muted-foreground">
                      Ведем сделку от подачи заявки до получения ключей от новой квартиры
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ипотечное консультирование"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mortgage Programs */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Актуальные ипотечные программы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mortgagePrograms.map((program, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{program.bank}</CardTitle>
                      <Badge variant="secondary" className="text-lg font-bold">
                        от {program.rate}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Первый взнос</p>
                        <p className="font-semibold">{program.minPayment}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Макс. сумма</p>
                        <p className="font-semibold">{program.maxAmount}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Срок</p>
                        <p className="font-semibold">{program.term}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="font-medium text-sm">Особенности:</p>
                      <ul className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Как мы работаем</h2>
            <div className="grid md:grid-cols-5 gap-6">
              {steps.map((step) => (
                <Card key={step.number} className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Готовы оформить ипотеку?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Получите бесплатную консультацию и расчет ипотеки уже сегодня
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacts">
                  <Button size="lg" variant="secondary" className="text-xl px-12 py-8">
                    <Phone className="w-6 h-6 mr-3" />
                    Получить консультацию
                  </Button>
                </Link>
                <Link href="/catalog">
                  <Button size="lg" variant="outline" className="text-xl px-12 py-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Выбрать недвижимость
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
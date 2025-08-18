'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, RussianRuble as Ruble, Home, Calendar } from 'lucide-react';
import { getPropertyById } from '@/lib/properties';

export default function PropertyPage() {
  const params = useParams();
  const [showForm, setShowForm] = useState(false);
  
  const property = getPropertyById(params.id as string);

  if (!property) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-12">
          <div className="container text-center">
            <h1 className="text-3xl font-bold mb-4">Объект не найден</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Запрашиваемый объект недвижимости не существует
            </p>
            <Link href="/catalog">
              <Button size="lg" className="text-lg px-8 py-6">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Вернуться в каталог
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      apartment: 'Квартира',
      house: 'Дом',
      room: 'Комната'
    };
    return labels[type as keyof typeof labels] || type;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <>
      <div className="min-h-screen">
        <Header />
        
        <main className="py-12">
          <div className="container max-w-6xl">
            <div className="mb-8">
              <Link href="/catalog">
                <Button variant="ghost" size="lg" className="text-lg px-6 py-6 mb-6">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Вернуться в каталог
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-base font-medium px-4 py-2">
                      {getTypeLabel(property.type)}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    {property.title}
                  </h1>
                  
                  <div className="flex items-center text-primary mb-6">
                    <Ruble className="w-6 h-6 mr-2" />
                    <span className="text-3xl lg:text-4xl font-bold">
                      {formatPrice(property.price)} ₽
                    </span>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center text-lg">
                      <MapPin className="w-5 h-5 mr-3 text-muted-foreground" />
                      <span className="font-medium">Район:</span>
                      <span className="ml-2 text-muted-foreground">{property.district}</span>
                    </div>
                    
                    <div className="flex items-center text-lg">
                      <Home className="w-5 h-5 mr-3 text-muted-foreground" />
                      <span className="font-medium">Тип:</span>
                      <span className="ml-2 text-muted-foreground">{getTypeLabel(property.type)}</span>
                    </div>
                    
                    <div className="flex items-center text-lg">
                      <Calendar className="w-5 h-5 mr-3 text-muted-foreground" />
                      <span className="font-medium">Добавлено:</span>
                      <span className="ml-2 text-muted-foreground">{formatDate(property.createdAt)}</span>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Описание</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={() => setShowForm(true)}
                    size="lg"
                    className="w-full text-xl py-8"
                  >
                    Оставить заявку на этот объект
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />

      <ApplicationForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        propertyTitle={property.title}
      />
    </>
  );
}
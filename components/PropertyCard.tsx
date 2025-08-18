'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, RussianRuble as Ruble, Home, Waves } from 'lucide-react';
import { Property } from '@/types/property';
import ApplicationForm from './ApplicationForm';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [showForm, setShowForm] = useState(false);

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

  const getCategoryLabel = (category: string) => {
    const labels = {
      economy: 'Эконом',
      business: 'Бизнес',
      elite: 'Элитный',
      penthouse: 'Пентхаус',
      studio: 'Студия',
      newbuilding: 'Новостройка',
      commercial: 'Коммерция',
      land: 'Участок'
    };
    return labels[category as keyof typeof labels] || category;
  };
  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <Link href={`/property/${property.id}`}>
        <div className="relative h-64">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="text-sm font-medium">
              {getCategoryLabel(property.category)}
            </Badge>
            {property.status && (
              <Badge variant={property.status === 'urgent' ? 'destructive' : 'default'} className="text-sm font-medium">
                {property.status === 'hit' && 'Хит'}
                {property.status === 'urgent' && 'Срочно'}
                {property.status === 'special' && 'Акция'}
              </Badge>
            )}
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">{property.title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-base">{property.district}</span>
            </div>
            
            {property.area && (
              <div className="flex items-center text-muted-foreground">
                <Home className="w-4 h-4 mr-2" />
                <span className="text-base">{property.area} м²</span>
                {property.floor && (
                  <span className="text-base ml-2">• {property.floor}/{property.totalFloors} эт.</span>
                )}
              </div>
            )}
            
            {property.distanceToSea && (
              <div className="flex items-center text-muted-foreground">
                <Waves className="w-4 h-4 mr-2" />
                <span className="text-base">{property.distanceToSea} м до моря</span>
              </div>
            )}
          </div>
          
          <p className="text-muted-foreground mb-4 line-clamp-3 text-base leading-relaxed">
            {property.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-primary">
              <Ruble className="w-5 h-5 mr-1" />
              <span className="text-2xl font-bold">{formatPrice(property.price)}</span>
            </div>
          </div>
        </CardContent>
        </Link>
        
        <CardFooter className="p-6 pt-0">
          <Button 
            onClick={() => setShowForm(true)}
            className="w-full text-lg py-6"
            size="lg"
          >
            Оставить заявку
          </Button>
        </CardFooter>
      </Card>

      <ApplicationForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        propertyTitle={property.title}
      />
    </>
  );
}
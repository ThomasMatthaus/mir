'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, RussianRuble as Ruble, Flame } from 'lucide-react';
import { getProperties } from '@/lib/properties';
import { Property } from '@/types/property';

export default function HotDeals() {
  const [hotProperties, setHotProperties] = useState<Property[]>([]);

  useEffect(() => {
    const properties = getProperties();
    const hot = properties
      .filter(p => p.status === 'hit' || p.status === 'urgent' || p.status === 'special')
      .slice(0, 3);
    setHotProperties(hot);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const getStatusLabel = (status?: string) => {
    const labels = {
      hit: 'Хит продаж',
      urgent: 'Срочная продажа',
      special: 'Спецпредложение'
    };
    return labels[status as keyof typeof labels] || '';
  };

  const getStatusVariant = (status?: string) => {
    const variants = {
      hit: 'default',
      urgent: 'destructive',
      special: 'secondary'
    };
    return variants[status as keyof typeof variants] || 'default';
  };

  if (hotProperties.length === 0) {
    return (
      <div className="text-center py-12">
        <Flame className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <p className="text-lg text-muted-foreground">Горячие предложения загружаются...</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {hotProperties.map((property) => (
        <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant={getStatusVariant(property.status) as any} className="text-sm font-medium">
                <Flame className="w-3 h-3 mr-1" />
                {getStatusLabel(property.status)}
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 line-clamp-2">{property.title}</h3>
            
            <div className="flex items-center text-muted-foreground mb-3">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-base">{property.district}</span>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-primary">
                <Ruble className="w-5 h-5 mr-1" />
                <span className="text-2xl font-bold">{formatPrice(property.price)}</span>
              </div>
            </div>
            
            <Link href={`/property/${property.id}`}>
              <Button className="w-full text-lg py-6" size="lg">
                Подробнее
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
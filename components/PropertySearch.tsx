'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function PropertySearch() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    type: '',
    district: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleSearch = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    router.push(`/catalog?${params.toString()}`);
  };

  const districts = [
    'Центральный', 'Адлер', 'Красная Поляна', 'Хоста', 
    'Лазаревское', 'Дагомыс', 'Мацеста'
  ];

  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Select value={filters.type} onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Тип недвижимости" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Квартиры</SelectItem>
              <SelectItem value="house">Дома</SelectItem>
              <SelectItem value="commercial">Коммерция</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.district} onValueChange={(value) => setFilters(prev => ({ ...prev, district: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Район" />
            </SelectTrigger>
            <SelectContent>
              {districts.map((district) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="number"
            placeholder="Цена от (₽)"
            value={filters.minPrice}
            onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
          />

          <Input
            type="number"
            placeholder="Цена до (₽)"
            value={filters.maxPrice}
            onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
          />
        </div>

        <Button onClick={handleSearch} size="lg" className="w-full text-lg py-6">
          <Search className="w-5 h-5 mr-2" />
          Найти недвижимость
        </Button>
      </CardContent>
    </Card>
  );
}
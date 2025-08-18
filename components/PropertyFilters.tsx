'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface PropertyFiltersProps {
  filters: {
    type: string;
    category: string;
    district: string;
    minPrice: string;
    maxPrice: string;
    minArea: string;
    maxArea: string;
    maxDistanceToSea: string;
  };
  onFiltersChange: (filters: any) => void;
  districts: string[];
}

export default function PropertyFilters({ filters, onFiltersChange, districts }: PropertyFiltersProps) {
  const handleFilterChange = (key: string, value: string) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      type: '',
      district: '',
      minPrice: '',
      maxPrice: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-card p-6 rounded-lg border space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Фильтры</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-2" />
            Очистить
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label className="text-base">Тип недвижимости</Label>
          <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
            <SelectTrigger className="text-base py-6">
              <SelectValue placeholder="Все типы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              <SelectItem value="apartment">Квартира</SelectItem>
              <SelectItem value="house">Дом</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-base">Категория</Label>
          <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
            <SelectTrigger className="text-base py-6">
              <SelectValue placeholder="Все категории" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              <SelectItem value="economy">Эконом-класс</SelectItem>
              <SelectItem value="business">Бизнес-класс</SelectItem>
              <SelectItem value="elite">Элитные</SelectItem>
              <SelectItem value="penthouse">Пентхаусы</SelectItem>
              <SelectItem value="studio">Студии</SelectItem>
              <SelectItem value="newbuilding">Новостройки</SelectItem>
              <SelectItem value="commercial">Коммерция</SelectItem>
              <SelectItem value="land">Участки</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-base">Район</Label>
          <Select value={filters.district} onValueChange={(value) => handleFilterChange('district', value)}>
            <SelectTrigger className="text-base py-6">
              <SelectValue placeholder="Все районы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все районы</SelectItem>
              {districts.map((district) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-base">Расстояние до моря (м)</Label>
          <Input
            type="number"
            placeholder="Максимум"
            value={filters.maxDistanceToSea}
            onChange={(e) => handleFilterChange('maxDistanceToSea', e.target.value)}
            className="text-base py-6"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="space-y-2">
          <Label className="text-base">Цена от (₽)</Label>
          <Input
            type="number"
            placeholder="0"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className="text-base py-6"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base">Цена до (₽)</Label>
          <Input
            type="number"
            placeholder="Без ограничений"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="text-base py-6"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base">Площадь от (м²)</Label>
          <Input
            type="number"
            placeholder="0"
            value={filters.minArea}
            onChange={(e) => handleFilterChange('minArea', e.target.value)}
            className="text-base py-6"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base">Площадь до (м²)</Label>
          <Input
            type="number"
            placeholder="Без ограничений"
            value={filters.maxArea}
            onChange={(e) => handleFilterChange('maxArea', e.target.value)}
            className="text-base py-6"
          />
        </div>
      </div>
    </div>
  );
}
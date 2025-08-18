'use client';

import { useState, useMemo, useEffect } from 'react';
import Header from '@/components/Header';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters from '@/components/PropertyFilters';
import Footer from '@/components/Footer';
import { getProperties, getDistricts, filterProperties } from '@/lib/properties';

export default function CatalogPage() {
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    district: '',
    minPrice: '',
    maxPrice: '',
    minArea: '',
    maxArea: '',
    maxDistanceToSea: ''
  });
  const [properties, setProperties] = useState([]);

  const districts = getDistricts();
  
  useEffect(() => {
    setProperties(getProperties());
  }, []);
  
  const filteredProperties = useMemo(() => {
    return filterProperties(properties, filters);
  }, [properties, filters]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Каталог недвижимости
            </h1>
            <p className="text-xl text-muted-foreground">
              Найдено объектов: {filteredProperties.length}
            </p>
          </div>

          <div className="mb-8">
            <PropertyFilters
              filters={filters}
              onFiltersChange={setFilters}
              districts={districts}
            />
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold mb-4">Объекты не найдены</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
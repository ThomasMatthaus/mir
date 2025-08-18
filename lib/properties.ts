import { Property } from '@/types/property';

// Ключ для localStorage
const PROPERTIES_STORAGE_KEY = 'real_estate_properties';

// Начальные данные для демонстрации
const initialProperties: Property[] = [
  {
    id: '1',
    title: '1-комн. квартира у моря, 35 м²',
    description: 'Уютная квартира в центре Сочи с видом на море. Современный ремонт, полностью меблирована. Идеально для проживания или сдачи в аренду. Развитая инфраструктура, рядом магазины и кафе.',
    price: 9000000,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    district: 'Центральный',
    type: 'apartment',
    category: 'business',
    area: 35,
    floor: 5,
    totalFloors: 12,
    distanceToSea: 200,
    status: 'hit',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Элитная 2-комн. квартира, 62 м²',
    description: 'Просторная двухкомнатная квартира в престижном районе. Панорамные окна, качественная отделка, встроенная техника. Закрытая территория с охраной.',
    price: 11999000,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    district: 'Адлер',
    type: 'apartment',
    category: 'elite',
    area: 62,
    floor: 8,
    totalFloors: 15,
    distanceToSea: 500,
    status: 'special',
    createdAt: new Date('2024-01-10')
  },
  {
    id: '3',
    title: 'Студия эконом-класса, 25 м²',
    description: 'Компактная студия для молодой семьи или инвестиций. Свежий ремонт, все необходимое для комфортного проживания. Хорошая транспортная доступность.',
    price: 2800000,
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    district: 'Василеостровский',
    type: 'apartment',
    category: 'studio',
    area: 25,
    floor: 3,
    totalFloors: 9,
    distanceToSea: 1200,
    createdAt: new Date('2024-01-08')
  },
  {
    id: '4',
    title: 'Новостройка 3-комн., 85 м²',
    description: 'Квартира в новом жилом комплексе с современной планировкой. Просторные комнаты, два санузла, большая кухня-гостиная. Детская площадка во дворе.',
    price: 6200000,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    district: 'Красная Поляна',
    type: 'apartment',
    category: 'newbuilding',
    area: 85,
    floor: 12,
    totalFloors: 20,
    distanceToSea: 2000,
    createdAt: new Date('2024-01-05')
  },
  {
    id: '5',
    title: 'Загородный дом с участком, 150 м²',
    description: 'Двухэтажный дом в тихом районе с собственным участком 6 соток. Камин, терраса, гараж. Идеально для семьи с детьми. Чистый воздух, красивые виды.',
    price: 15500000,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    district: 'Хоста',
    type: 'house',
    category: 'business',
    area: 150,
    distanceToSea: 3000,
    createdAt: new Date('2024-01-03')
  },
  {
    id: '6',
    title: 'Пентхаус с террасой, 120 м²',
    description: 'Роскошный пентхаус на последнем этаже с панорамным видом на море и горы. Собственная терраса 40 м², джакузи, премиальная отделка.',
    price: 25000000,
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    district: 'Центральный',
    type: 'apartment',
    category: 'penthouse',
    area: 120,
    floor: 25,
    totalFloors: 25,
    distanceToSea: 100,
    status: 'urgent',
    createdAt: new Date('2024-01-01')
  },
  {
    id: '7',
    title: 'Коммерческое помещение, 200 м²',
    description: 'Помещение под офис или магазин в центре города. Отдельный вход, парковка, высокие потолки. Отличная проходимость, рядом остановки транспорта.',
    price: 18000000,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    district: 'Центральный',
    type: 'apartment',
    category: 'commercial',
    area: 200,
    floor: 1,
    totalFloors: 5,
    distanceToSea: 800,
    createdAt: new Date('2024-01-12')
  },
  {
    id: '8',
    title: 'Участок под строительство, 10 соток',
    description: 'Ровный участок с коммуникациями в перспективном районе. Разрешение на строительство, хороший подъезд. Тихое место с красивыми видами.',
    price: 5500000,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    district: 'Лазаревское',
    type: 'house',
    category: 'land',
    area: 1000,
    distanceToSea: 1500,
    createdAt: new Date('2024-01-20')
  }
];

// Инициализация localStorage при первом запуске
function initializeStorage(): Property[] {
  if (typeof window === 'undefined') return initialProperties;
  
  const stored = localStorage.getItem(PROPERTIES_STORAGE_KEY);
  if (!stored) {
    const serializedData = JSON.stringify(initialProperties.map(p => ({
      ...p,
      createdAt: p.createdAt.toISOString()
    })));
    localStorage.setItem(PROPERTIES_STORAGE_KEY, serializedData);
    return initialProperties;
  }
  
  try {
    const parsed = JSON.parse(stored);
    return parsed.map((p: any) => ({
      ...p,
      createdAt: new Date(p.createdAt)
    }));
  } catch {
    return initialProperties;
  }
}

// Сохранение в localStorage
function saveToStorage(properties: Property[]): void {
  if (typeof window === 'undefined') return;
  
  const serializedData = JSON.stringify(properties.map(p => ({
    ...p,
    createdAt: p.createdAt.toISOString()
  })));
  localStorage.setItem(PROPERTIES_STORAGE_KEY, serializedData);
}

export function getProperties(): Property[] {
  return initializeStorage();
}

export function getPropertyById(id: string): Property | undefined {
  const properties = getProperties();
  return properties.find(p => p.id === id);
}

export function addProperty(property: Omit<Property, 'id' | 'createdAt'>): Property {
  const properties = getProperties();
  const newProperty: Property = {
    ...property,
    id: Date.now().toString(),
    createdAt: new Date()
  };
  
  const updatedProperties = [...properties, newProperty];
  saveToStorage(updatedProperties);
  return newProperty;
}

export function updateProperty(id: string, updates: Partial<Omit<Property, 'id' | 'createdAt'>>): Property | null {
  const properties = getProperties();
  const index = properties.findIndex(p => p.id === id);
  
  if (index === -1) return null;
  
  const updatedProperty = { ...properties[index], ...updates };
  properties[index] = updatedProperty;
  saveToStorage(properties);
  return updatedProperty;
}

export function deleteProperty(id: string): boolean {
  const properties = getProperties();
  const filteredProperties = properties.filter(p => p.id !== id);
  
  if (filteredProperties.length === properties.length) return false;
  
  saveToStorage(filteredProperties);
  return true;
}

export function getDistricts(): string[] {
  const properties = getProperties();
  const districts = [...new Set(properties.map(p => p.district))];
  return districts.sort();
}

export function filterProperties(
  properties: Property[],
  filters: {
    type: string;
    category: string;
    district: string;
    minPrice: string;
    maxPrice: string;
    minArea: string;
    maxArea: string;
    maxDistanceToSea: string;
  }
): Property[] {
  return properties.filter(property => {
    if (filters.type && filters.type !== 'all' && property.type !== filters.type) return false;
    if (filters.category && filters.category !== 'all' && property.category !== filters.category) return false;
    if (filters.district && filters.district !== 'all' && property.district !== filters.district) return false;
    if (filters.minPrice && property.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) return false;
    if (filters.minArea && property.area && property.area < parseInt(filters.minArea)) return false;
    if (filters.maxArea && property.area && property.area > parseInt(filters.maxArea)) return false;
    if (filters.maxDistanceToSea && property.distanceToSea && property.distanceToSea > parseInt(filters.maxDistanceToSea)) return false;
    return true;
  });
}
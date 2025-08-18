export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  district: string;
  type: 'apartment' | 'house' | 'room';
  category: 'economy' | 'business' | 'elite' | 'penthouse' | 'studio' | 'newbuilding' | 'commercial' | 'land';
  area?: number;
  floor?: number;
  totalFloors?: number;
  distanceToSea?: number;
  status?: 'hit' | 'urgent' | 'special';
  isRental?: boolean;
  createdAt: Date;
}
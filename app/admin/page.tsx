'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Plus, Building, Edit, Trash2, Search, LogOut, Eye, MapPin, RussianRuble as Ruble } from 'lucide-react';
import { getProperties, addProperty, updateProperty, deleteProperty, getDistricts, filterProperties } from '@/lib/properties';
import { Property } from '@/types/property';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [properties, setProperties] = useState<Property[]>([]);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    district: '',
    minPrice: '',
    maxPrice: ''
  });
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    district: '',
    type: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    // Проверяем авторизацию при загрузке
    const authStatus = localStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadProperties();
    }
  }, []);

  const loadProperties = () => {
    setProperties(getProperties());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      loadProperties();
      toast({
        title: "Вход выполнен",
        description: "Добро пожаловать в админ-панель!",
      });
    } else {
      toast({
        title: "Ошибка входа",
        description: "Неверный логин или пароль",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
    setLoginData({ username: '', password: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingProperty) {
        updateProperty(editingProperty.id, {
          title: formData.title,
          description: formData.description,
          price: parseInt(formData.price),
          image: formData.image,
          district: formData.district,
          type: formData.type as 'apartment' | 'house' | 'room'
        });
        toast({
          title: "Объект обновлен!",
          description: "Изменения успешно сохранены.",
        });
        setEditingProperty(null);
      } else {
        addProperty({
          title: formData.title,
          description: formData.description,
          price: parseInt(formData.price),
          image: formData.image,
          district: formData.district,
          type: formData.type as 'apartment' | 'house' | 'room'
        });
        toast({
          title: "Объект добавлен!",
          description: "Новый объект недвижимости успешно добавлен в каталог.",
        });
        setShowAddForm(false);
      }

      setFormData({
        title: '',
        description: '',
        price: '',
        image: '',
        district: '',
        type: ''
      });
      loadProperties();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить объект",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setFormData({
      title: property.title,
      description: property.description,
      price: property.price.toString(),
      image: property.image,
      district: property.district,
      type: property.type
    });
    setShowAddForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот объект?')) {
      if (deleteProperty(id)) {
        toast({
          title: "Объект удален",
          description: "Объект успешно удален из каталога.",
        });
        loadProperties();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      district: '',
      minPrice: '',
      maxPrice: ''
    });
  };

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

  const districts = getDistricts();
  const filteredProperties = filterProperties(properties, filters);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Вход в админ-панель</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-base">Логин</Label>
                <Input
                  id="username"
                  value={loginData.username}
                  onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                  required
                  className="text-base py-6"
                  placeholder="admin"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-base">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  required
                  className="text-base py-6"
                  placeholder="admin123"
                />
              </div>
              
              <Button type="submit" className="w-full text-lg py-6">
                Войти
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-12">
        <div className="container max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                Админ-панель
              </h1>
              <p className="text-xl text-muted-foreground">
                Управление каталогом недвижимости
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="lg"
              className="text-lg px-6 py-6"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Выйти
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Plus className="w-5 h-5 mr-2" />
                    {editingProperty ? 'Редактировать объект' : 'Добавить объект'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-sm">Заголовок *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="text-sm"
                        placeholder="Название объекта"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price" className="text-sm">Цена (₽) *</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="text-sm"
                        placeholder="5000000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-sm">Описание *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="text-sm min-h-[80px]"
                        placeholder="Описание объекта"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="image" className="text-sm">Ссылка на фото *</Label>
                      <Input
                        id="image"
                        name="image"
                        type="url"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        className="text-sm"
                        placeholder="https://example.com/photo.jpg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm">Тип недвижимости *</Label>
                      <Select 
                        value={formData.type} 
                        onValueChange={(value) => handleSelectChange('type', value)}
                        required
                      >
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">Квартира</SelectItem>
                          <SelectItem value="house">Дом</SelectItem>
                          <SelectItem value="room">Комната</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="district" className="text-sm">Район *</Label>
                      <Input
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                        className="text-sm"
                        placeholder="Название района"
                      />
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 text-sm"
                      >
                        <Building className="w-4 h-4 mr-2" />
                        {isSubmitting ? 'Сохранение...' : (editingProperty ? 'Обновить' : 'Добавить')}
                      </Button>
                      {editingProperty && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setEditingProperty(null);
                            setFormData({
                              title: '',
                              description: '',
                              price: '',
                              image: '',
                              district: '',
                              type: ''
                            });
                          }}
                          className="text-sm"
                        >
                          Отмена
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Search className="w-5 h-5 mr-2" />
                    Фильтры поиска
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm">Тип</Label>
                      <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder="Все типы" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Все типы</SelectItem>
                          <SelectItem value="apartment">Квартира</SelectItem>
                          <SelectItem value="house">Дом</SelectItem>
                          <SelectItem value="room">Комната</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm">Район</Label>
                      <Select value={filters.district} onValueChange={(value) => handleFilterChange('district', value)}>
                        <SelectTrigger className="text-sm">
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
                      <Label className="text-sm">Цена от (₽)</Label>
                      <Input
                        type="number"
                        placeholder="0"
                        value={filters.minPrice}
                        onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                        className="text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm">Цена до (₽)</Label>
                      <Input
                        type="number"
                        placeholder="Без ограничений"
                        value={filters.maxPrice}
                        onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                        className="text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-muted-foreground">
                      Найдено объектов: {filteredProperties.length}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-sm"
                    >
                      Очистить фильтры
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {filteredProperties.map((property) => (
                  <Card key={property.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-32 h-24 flex-shrink-0">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
                            <Badge variant="secondary" className="ml-2">
                              {getTypeLabel(property.type)}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{property.district}</span>
                          </div>
                          
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {property.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-primary">
                              <Ruble className="w-4 h-4 mr-1" />
                              <span className="text-lg font-bold">{formatPrice(property.price)} ₽</span>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => router.push(`/property/${property.id}`)}
                                className="text-sm"
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                Просмотр
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleEdit(property)}
                                className="text-sm"
                              >
                                <Edit className="w-4 h-4 mr-1" />
                                Изменить
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(property.id)}
                                className="text-sm text-destructive hover:text-destructive"
                              >
                                <Trash2 className="w-4 h-4 mr-1" />
                                Удалить
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {filteredProperties.length === 0 && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Building className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Объекты не найдены</h3>
                      <p className="text-muted-foreground">
                        Попробуйте изменить параметры поиска или добавьте новый объект
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
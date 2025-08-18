'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
}

export default function ApplicationForm({ isOpen, onClose, propertyTitle }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setFormData({ name: '', phone: '', comment: '' });
    setIsSubmitting(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Оставить заявку</DialogTitle>
          <p className="text-muted-foreground">{propertyTitle}</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base">Ваше имя *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-base py-6"
              placeholder="Введите ваше имя"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base">Телефон *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="text-base py-6"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="comment" className="text-base">Комментарий</Label>
            <Textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className="text-base min-h-[100px]"
              placeholder="Дополнительная информация или вопросы"
            />
          </div>
          
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 text-base py-6"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 text-base py-6"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
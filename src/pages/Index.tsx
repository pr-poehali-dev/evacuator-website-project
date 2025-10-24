import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [galleryImages, setGalleryImages] = useState<string[]>([
    "https://cdn.poehali.dev/projects/bfc76e09-7f04-4cea-bfa0-929c241f31d1/files/2a2de732-dc0a-4e1e-8204-00c4d254142f.jpg",
    "https://cdn.poehali.dev/projects/bfc76e09-7f04-4cea-bfa0-929c241f31d1/files/34255767-edea-4334-aae8-038bd24a8591.jpg",
    "https://cdn.poehali.dev/projects/bfc76e09-7f04-4cea-bfa0-929c241f31d1/files/9b58e97a-b7ae-4571-a2b1-fb4ed23fd6d3.jpg"
  ]);

  const handleCallClick = () => {
    window.location.href = "tel:+79515000566";
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setGalleryImages(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setGalleryImages(prev => prev.filter((_, i) => i !== index));
  };

  const services = [
    {
      icon: "Truck",
      title: "Легковые автомобили",
      description: "Быстрая и безопасная эвакуация легковых автомобилей любых марок"
    },
    {
      icon: "CarFront",
      title: "Внедорожники и кроссоверы",
      description: "Эвакуация крупногабаритных автомобилей с полным приводом"
    },
    {
      icon: "Wrench",
      title: "Помощь на дороге",
      description: "Запуск двигателя, замена колеса, подвоз топлива"
    },
    {
      icon: "Clock",
      title: "Круглосуточно",
      description: "Работаем 24/7 без выходных и праздников"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Truck" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl text-foreground">ЭВАКУАТОР 24/7</h1>
                <p className="text-xs text-muted-foreground">Быстро. Надёжно. Безопасно.</p>
              </div>
            </div>
            <Button onClick={handleCallClick} size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full">
                <span className="text-sm font-bold text-primary">⚡ Приедем за 15-30 минут</span>
              </div>
              <h2 className="font-heading font-black text-5xl lg:text-6xl leading-tight text-foreground">
                Эвакуатор в Чертково и области
              </h2>
              <p className="text-xl text-muted-foreground">
                Профессиональная служба эвакуации автомобилей. Работаем круглосуточно, приезжаем быстро, гарантируем безопасную транспортировку.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={handleCallClick} size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14 px-8 shadow-xl">
                  <Icon name="Phone" className="mr-2" size={24} />
                  +7 (951) 500-05-66
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg h-14 px-8">
                  <Icon name="MapPin" className="mr-2" size={24} />
                  Где мы находимся
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src="https://cdn.poehali.dev/projects/bfc76e09-7f04-4cea-bfa0-929c241f31d1/files/2a2de732-dc0a-4e1e-8204-00c4d254142f.jpg"
                alt="Эвакуатор"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по эвакуации и помощи на дороге
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/bfc76e09-7f04-4cea-bfa0-929c241f31d1/files/34255767-edea-4334-aae8-038bd24a8591.jpg"
                alt="Помощь на дороге"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/bfc76e09-7f04-4cea-bfa0-929c241f31d1/files/9b58e97a-b7ae-4571-a2b1-fb4ed23fd6d3.jpg"
                alt="Эвакуация автомобиля"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground mb-4">
              Наш автопарк
            </h2>
            <p className="text-xl text-muted-foreground">
              Современная техника для безопасной эвакуации
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="border-2 border-dashed border-primary/30 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <label htmlFor="file-upload" className="cursor-pointer block">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Upload" className="text-primary" size={32} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground mb-2">
                        Загрузите фотографии вашего эвакуатора
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Нажмите или перетащите изображения сюда
                      </p>
                    </div>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img 
                  src={image}
                  alt={`Эвакуатор фото ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-4 right-4 w-10 h-10 bg-destructive/90 hover:bg-destructive rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon name="X" className="text-white" size={20} />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground mb-4">
                О нас
              </h2>
            </div>
            <Card className="border-2">
              <CardContent className="p-8 lg:p-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-heading font-black text-primary mb-2">24/7</div>
                    <p className="text-muted-foreground">Работаем круглосуточно</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-heading font-black text-primary mb-2">15 мин</div>
                    <p className="text-muted-foreground">Среднее время приезда</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-heading font-black text-primary mb-2">100%</div>
                    <p className="text-muted-foreground">Гарантия безопасности</p>
                  </div>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Мы — профессиональная служба эвакуации в Чертковском районе Ростовской области. 
                    Наша команда работает круглосуточно, чтобы оказать вам помощь в любой ситуации на дороге.
                  </p>
                  <p>
                    Современное оборудование, опытные водители и индивидуальный подход к каждому клиенту — 
                    вот что отличает нашу службу. Мы гарантируем бережную транспортировку вашего автомобиля 
                    и оперативное прибытие на место.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-foreground mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Телефон</h3>
                      <a href="tel:+79515000566" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                        +7 (951) 500-05-66
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">Звоните круглосуточно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-foreground" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                      <a href="mailto:reutinaekaterina456@mail.ru" className="text-lg text-primary hover:text-primary/80 transition-colors break-all">
                        reutinaekaterina456@mail.ru
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Адрес</h3>
                      <p className="text-muted-foreground">
                        Ростовская область<br />
                        Чертковский район<br />
                        село Алексеево-Лозовское<br />
                        улица Дачная, 14
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-6">Отправить заявку</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите вашу ситуацию" 
                      className="min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Truck" className="text-white" size={24} />
                </div>
                <span className="font-heading font-bold text-xl">ЭВАКУАТОР 24/7</span>
              </div>
              <p className="text-white/70">Профессиональная эвакуация автомобилей в Чертково и области</p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>+7 (951) 500-05-66</p>
                <p className="break-all">reutinaekaterina456@mail.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">График работы</h4>
              <p className="text-white/70">Круглосуточно, без выходных</p>
              <p className="text-primary font-bold mt-2">24/7</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 Эвакуатор 24/7. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
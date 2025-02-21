import Map from '../ui/Map';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Наши контакты</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="contact-info space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p>ул. Примерная, 123</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p>+7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>info@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Часы работы</h3>
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 16:00</p>
              <p>Вс: Выходной</p>
            </div>
          </div>
          <div className="map-container relative z-0">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
} 
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/car-wash/images/logo/logo-white.png"
              alt="Car Spa Logo"
              width={100}
              height={35}
              className="mb-4"
            />
            <p className="text-gray-300">
              Premium Car Care Service
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-300">Email: info@carspa.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <p className="text-gray-300">Mon-Fri: 9:00 AM - 8:00 PM</p>
            <p className="text-gray-300">Sat-Sun: 10:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
export default function ServicePage({ params }: { params: { service: string } }) {
  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-playfair mb-6">
        {params.service.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')}
      </h1>
      {/* Добавьте остальное содержимое страницы */}
    </div>
  );
} 
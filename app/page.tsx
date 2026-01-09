import Image from 'next/image'

// Datos de ejemplo para la Fase 1
const plantas = [
  {
    id: 1,
    nombre: "Orquídea Phalaenopsis",
    precio: "45.00",
    descripcion: "Elegante planta de interior, ideal para decoración y regalo.",
    imagen: "https://images.unsplash.com/photo-1534885320221-bc0433ec3045?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    nombre: "Suculenta Echeveria",
    precio: "12.00",
    descripcion: "Planta de sol directo, requiere muy poco riego y cuidado.",
    imagen: "https://images.unsplash.com/photo-1509423350716-97f9360b4e59?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    nombre: "Palmera de Salón",
    precio: "35.00",
    descripcion: "Excelente purificadora de aire para espacios interiores.",
    imagen: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 4,
    nombre: "Lirio de la Paz",
    precio: "25.00",
    descripcion: "Resistente y hermosa, perfecta para principiantes.",
    imagen: "https://images.unsplash.com/photo-1597055181300-e3633a207519?auto=format&fit=crop&q=80&w=500",
  }
];

export default function Home() {
  // REEMPLAZA ESTO: Pon el número de tu papá sin el signo + (ejemplo: 51900800700)
  const telefono = "TU_NUMERO_AQUÍ";

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section / Banner */}
      <header className="bg-emerald-900 text-white py-20 px-6 text-center shadow-inner">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 italic">Chayllawasi</h1>
        <div className="w-24 h-1 bg-emerald-400 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl opacity-90 font-light max-w-2xl mx-auto">
          Plantas ornamentales y exóticas seleccionadas con amor para transformar tu hogar.
        </p>
      </header>

      {/* Catálogo de Productos */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-stone-800">Nuestro Catálogo</h2>
            <p className="text-stone-500">Haz clic en "Pedir" para consultarnos por WhatsApp</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plantas.map((planta) => (
            <div
              key={planta.id}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100 flex flex-col"
            >
              {/* Contenedor de Imagen */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={planta.imagen}
                  alt={planta.nombre}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-emerald-800 shadow-sm">
                  ${planta.precio}
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{planta.nombre}</h3>
                <p className="text-stone-600 text-sm mb-6 flex-grow leading-relaxed">
                  {planta.descripcion}
                </p>

                <a
                  href={`https://wa.me/${telefono}?text=Hola! Me interesa la planta ${planta.nombre} que vi en la web Chayllawasi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white text-center py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412s-1.238 6.164-3.484 8.412c-2.246 2.248-5.232 3.487-8.412 3.487-.001 0-.001 0-.002 0-2.001 0-3.961-.497-5.717-1.442l-6.72 1.764zm6.26-15.116c-.223-.496-.459-.506-.671-.515-.174-.007-.373-.007-.571-.007-.199 0-.522.074-.794.372-.273.297-1.043 1.016-1.043 2.479 0 1.462 1.067 2.875 1.216 3.073.149.198 2.099 3.205 5.085 4.495.71.307 1.264.49 1.696.627.712.227 1.36.195 1.871.118.571-.085 1.759-.719 2.007-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347-.298-.149-1.758-.868-2.031-.967-.272-.099-.471-.148-.67.15-.199.297-.769.966-.942 1.164-.173.199-.347.223-.645.074-.298-.149-1.257-.463-2.394-1.477-.885-.788-1.482-1.762-1.656-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.148-.671-1.613-.919-2.21z" />
                  </svg>
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Pie de página */}
      <footer className="bg-emerald-950 text-emerald-200 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif italic mb-4">Chayllawasi</h3>
          <p className="mb-6 opacity-70 italic">"Llevando la naturaleza de otros mundos a tu hogar"</p>
          <div className="flex justify-center gap-6 mb-8 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <div className="border-t border-emerald-800 pt-8 text-xs opacity-50">
            <p>© {new Date().getFullYear()} Chayllawasi. Todos los derechos reservados.</p>
            <p className="mt-2">Desarrollado con ❤️ para papá</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
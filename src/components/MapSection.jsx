// src/components/MapSection.jsx
const MapSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lokasi Kami</h2>
        <p className="text-gray-600 mb-6">
          Silakan kunjungi kami di titik lokasi berikut.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
            title="Google Maps Lokasi"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full border-none"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;

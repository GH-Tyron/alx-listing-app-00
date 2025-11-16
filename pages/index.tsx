import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

const filters = [
  "Top Villa",
  "Luxury",
  "Self Checkin",
  "Beachfront",
  "Mountain View",
  "Pet Friendly",
];

const HomePage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-6 flex gap-3 overflow-x-auto">
        {filters.map((label) => (
          <span
            key={label}
            className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white cursor-pointer whitespace-nowrap"
          >
            {label}
          </span>
        ))}
      </section>

      {/* LISTING SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {PROPERTYLISTINGSAMPLE.map((property, i) => (
          <div key={i} className="border rounded-lg shadow-sm overflow-hidden">
            
            {/* Image */}
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover"
            />

            {/* Body */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.name}</h3>

              <p className="text-gray-600 mt-1">${property.price}/night</p>

              <p className="text-yellow-600 mt-1">⭐ {property.rating}</p>
            </div>

          </div>
        ))}

      </section>
    </>
  );
};

export default HomePage;

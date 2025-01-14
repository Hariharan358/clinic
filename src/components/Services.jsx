import React from 'react';

const services = [
  {
    name: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
    price: 'Starting from $100'
  },
  {
    name: 'Cosmetic Dentistry',
    description: 'Improve your smile with treatments like teeth whitening, veneers, and bonding.',
    price: 'Starting from $200'
  },
  {
    name: 'Orthodontics',
    description: 'Straighten your teeth with braces or clear aligners.',
    price: 'Starting from $3000'
  },
  {
    name: 'Oral Surgery',
    description: 'Surgical procedures including tooth extractions and dental implants.',
    price: 'Starting from $500'
  }
];

function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-blue-600 font-semibold">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;


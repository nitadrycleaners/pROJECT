import React from 'react';
import { Shirt, Car, Clock, Shield, Zap, Leaf } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Shirt,
      name: 'Laundry Service',
      description: 'Professional cleaning for delicate fabrics',
      price: 'From 130 rupee',
      features: ['Stain removal', 'Press included', '48hr turnaround']
    },
    {
      icon: Car,
      name: 'Delivery Service',
      description: 'pick-up, wash, and dry your everyday clothes',
      price: 'From 110 rupees per kg',
      features: ['Eco-friendly detergent', 'Fabric softener', '24 hours available']
    },
    {
      icon: Shield,
      name: 'Alterations',
      description: 'Expert tailoring and garment repairs',
      price: 'From 50 rupees',
      features: ['Hemming', 'Resizing', 'Repairs']
    },
    {
      icon: Zap,
      name: 'Express Service',
      description: 'Same-day cleaning for urgent needs',
      price: '150 rupees per kg',
      features: ['6-hour service', 'Available daily', 'Priority handling']
    },
  ];

  const features = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most items ready within 24-48 hours'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Environmentally safe cleaning processes'
    },
    {
      icon: Shield,
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction or we clean again for free'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services & Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From everyday laundry to specialty garments, we provide comprehensive cleaning services 
            with transparent pricing and exceptional quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Work</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="normalclothes.jpg"
                alt="Clean pressed shirts"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="clothes.jpg.jpg"
                alt="Professional cleaning"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="blanket.jpg"
                alt="Folded laundry"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="everyset.jpg"
                alt="Quality garments"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Customers' },
    { icon: Clock, number: '15+', label: 'Years Experience' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: MapPin, number: '3', label: 'Locations' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Dry Cleaning Partner Since 2022
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At nitadrycleaners, we've been providing exceptional dry cleaning services to our community 
                for over a years. Our commitment to quality, attention to detail, and customer 
                satisfaction has made us the preferred choice for thousands of satisfied customers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We use state-of-the-art equipment and eco-friendly cleaning solutions to ensure your 
                garments receive the best possible care while protecting the environment.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center p-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="washclean.jpg"
                alt="Our professional team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Owner highlight */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border max-w-xs">
              <div className="flex items-start space-x-3">
                <img
                  src="/src/images/ronit.jpeg"
                  alt="Owner"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">Ronit Bhujel</p>
                  <p className="text-sm text-gray-600">MD & Master Cleaner</p>
                  <p className="text-xs text-gray-500 mt-1">"Quality is our promise"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
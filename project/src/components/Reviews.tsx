import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Subash Chaudhary',
      rating: 5,
      text: 'Excellent Servies with Free delivery . I like the way they solve any kind of problems',
      image: '#',
      service: 'College Uniform Cleaning'
    },
    {
      name: 'Som Rimal',
      rating: 5,
      text: 'धेरै राम्रो छ। छिटो छरितो र बिश्वशनिय।',
      image: '#',
      service: 'Business Suits'
    },
    {
      name: 'Kamala Shreshtha',
      rating: 5,
      text: 'Neat and clean is nitu dry cleaner😍 Friendly service 😍',
      image: '#',
      service: 'Pickup & Delivery'
    },
    {
      name: 'Dipesh Basnet',
      rating: 5,
      text: 'Im absolutely thrilled with the service at Nita Dry Cleaners! They did an amazing job on my dress, removing a tough stain that had been bothering me for weeks. The staff is friendly, efficient, and the prices are very reasonable. Ive found my new go-to dry cleaners! Highly recommend',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
      service: 'Stain Removal'
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
          
          {/* Overall Rating */}
          <div className="mt-8 flex justify-center items-center space-x-4">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">Based on reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border"
            >
              {/* Quote Icon */}
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <Quote className="h-5 w-5 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 mb-6 line-clamp-4">{review.text}</p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience our exceptional service for yourself?
          </p>
          <a
            href="tel:+9779761799032"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            Schedule Your Service Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
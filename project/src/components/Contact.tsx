import React from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Truck } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(977) 976-1799032', 'Mon-Sat: 7AM-7PM'],
      action: 'tel:+9779761799032',
      actionText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['nitadrycleaners@gmail.com', 'We respond within 2 hours'],
      action: 'mailto:nitadrycleaners@gmail.com',
      actionText: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Satungal', 'Thankot, Kathmandu'],
      action:"https://maps.app.goo.gl/B4qnweX9Yk8FT1pE9",
      actionText: 'Get Directions'
    }
  ];

  const hours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 6:00 PM' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience premium dry cleaning? Contact us today to schedule your service 
            or ask any questions you might have.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  <a
                    href={info.action}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
                  >
                    {info.actionText}
                  </a>
                </div>
              );
            })}
          </div>
          

          {/* Hours & Services */}
          <div className="space-y-6">
            {/* Hours */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="font-medium text-gray-900">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Services */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">Quick Services</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Same-day cleaning available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Free pickup & delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">24/7 phone support</span>
                </div>
              </div>
              <a
                href="tel:+9779761799032"
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 inline-block mt-4 w-full text-center"
              >
                Schedule Pickup
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Emergency Cleaning Service</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Need urgent cleaning for a special event or emergency? We offer 24/7 emergency service 
            for those unexpected situations.
          </p>
          <a
            href="tel:+9779761799032"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Call Emergency Line</span>
          </a>
        </div>
      </div>
      {/* Google Map Embed */}
<div className="mt-16">
  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Location</h3>
  <div className="rounded-xl overflow-hidden shadow-lg w-full h-[450px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.4605786245882!2d85.24958482380372!3d27.68883159468914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb23002568026b%3A0x6942a5bf254c3e8b!2sNita%20Dry%20Cleaners%20and%20laundry!5e0!3m2!1sen!2snp!4v1752486693522!5m2!1sen!2snp"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

    </section>
  );
};

export default Contact;
'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Business Executive',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Exceptional service and luxurious accommodations. The attention to detail and personalized care made our stay truly memorable. The spa treatments were outstanding!',
      location: 'New York, USA'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      position: 'Family Traveler',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Perfect family destination! The kids loved the pool and the family room was spacious and comfortable. The staff went above and beyond to make our vacation special.',
      location: 'Mumbai, India'
    },
    {
      id: 3,
      name: 'Emily Chen',
      position: 'Wedding Guest',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Attended a wedding here and was blown away by the elegance and sophistication. The banquet hall was beautifully decorated and the catering was exquisite.',
      location: 'Singapore'
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      position: 'Conference Attendee',
      image: 'https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Outstanding conference facilities with state-of-the-art technology. The business center was well-equipped and the staff provided excellent support throughout our event.',
      location: 'Barcelona, Spain'
    },
    {
      id: 5,
      name: 'Priya Sharma',
      position: 'Luxury Traveler',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The presidential suite exceeded all expectations. Breathtaking views, impeccable service, and attention to every detail. A truly luxurious experience!',
      location: 'Delhi, India'
    },
    {
      id: 6,
      name: 'David Thompson',
      position: 'Honeymoon Couple',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Romantic and intimate atmosphere perfect for our honeymoon. The couples massage and private dinner on the terrace were unforgettable moments.',
      location: 'London, UK'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied guests who have experienced the Lotus Hotel difference
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Display */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl transition-opacity duration-500 ease-in-out">
            <div className="flex items-center mb-6">
              <Quote className="text-amber-600 mr-3" size={32} />
              <div className="flex">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed italic text-lg md:text-xl">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-slate-600">{testimonials[currentIndex].position}</p>
                  <p className="text-sm text-amber-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-amber-600 scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
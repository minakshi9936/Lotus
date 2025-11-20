'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
  id: 1,
  name: 'Arjun Verma',
  position: 'Solo Traveler',
  image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
  rating: 5,
  text: 'Amazing hospitality! The rooms were spotless, and the staff was extremely polite. Loved the peaceful ambiance and quick room service.',
  location: 'Jaipur, India'
},
{
  id: 2,
  name: 'Neha Patel',
  position: 'Weekend Visitor',
  image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
  rating: 5,
  text: 'A perfect weekend getaway! From the delicious food to the cozy rooms, everything was top-notch. Highly recommended for families and couples.',
  location: 'Ahmedabad, India'
},
{
  id: 3,
  name: 'Vikram Singh',
  position: 'Corporate Guest',
  image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400',
  rating: 5,
  text: 'Excellent place for a business stay. The conference facilities were modern, and the staff ensured everything ran smoothly throughout our meetings.',
  location: 'Bangalore, India'
},
{
  id: 4,
  name: 'Aditi Kapoor',
  position: 'Event Organizer',
  image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  rating: 5,
  text: 'Hosted a corporate event here and was impressed by the management and service. The hall setup, catering, and coordination were flawless.',
  location: 'Chandigarh, India'
},
{
  id: 5,
  name: 'Rohan Mehta',
  position: 'Couple Traveler',
  image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
  rating: 5,
  text: 'Lovely experience! The ambiance, food, and hospitality made our trip memorable. A special thanks for arranging a surprise candlelight dinner.',
  location: 'Surat, India'
},
{
  id: 6,
  name: 'Sneha Reddy',
  position: 'Family Guest',
  image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  rating: 5,
  text: 'Great stay for families. My kids enjoyed the pool and play area a lot. The staff was patient, courteous, and always ready to help.',
  location: 'Hyderabad, India'
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
          i < rating ? 'text-green-400 fill-green-400' : 'text-slate-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-green-100">
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
              <Quote className="text-green-600 mr-3" size={32} />
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
                  <p className="text-sm text-green-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full bg-slate-100 hover:bg-green-100 text-slate-600 hover:text-green-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full bg-slate-100 hover:bg-green-100 text-slate-600 hover:text-green-600 transition-colors"
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
                    ? 'bg-green-600 scale-125'
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
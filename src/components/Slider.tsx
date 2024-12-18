import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200",
    title: "20% OFF Beauty Products",
    description: "Discover L'Oréal Paris Collection",
  },
  {
    image: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&q=80&w=1200",
    title: "New Arrivals",
    description: "Shop the Latest Fashion Trends",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const next = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);

  return (
    <div className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-yellow-500/50" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl mb-8">{slide.description}</p>
              <Link to='/products' className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full backdrop-blur-sm hover:bg-white/50"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full backdrop-blur-sm hover:bg-white/50"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Slider;
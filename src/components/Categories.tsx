import React from 'react';
import { Gift, Sun, Shirt, Star } from 'lucide-react';

const categories = [
  {
    name: 'New Year',
    icon: Star,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Gifts',
    icon: Gift,
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'Winter Wardrobe',
    icon: Shirt,
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    name: 'Summer Collection',
    icon: Sun,
    gradient: 'from-green-400 to-blue-500',
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group cursor-pointer"
          >
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${category.gradient} p-6 h-48 transition-transform group-hover:scale-105`}>
              <category.icon className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              <div className="absolute bottom-4 right-4 bg-white/20 rounded-full p-2">
                <Star className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">Our Story</a></li>
              <li><a href="#" className="hover:text-purple-400">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-400">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400">Shipping Info</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400">Returns Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-purple-400" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-purple-400" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-purple-400" />
              <Youtube className="h-6 w-6 cursor-pointer hover:text-purple-400" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
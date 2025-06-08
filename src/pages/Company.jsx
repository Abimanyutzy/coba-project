import React from 'react';
import { Calendar, Users, Award, Target } from 'lucide-react';

const Company = () => {
  return (
    <section className="min-h-screen p-6 md:p-10 text-white bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
        <p className="text-lg mb-8">
          REKAYASA MAS is a trusted wood pallet specialist delivering high quality wood packaging solutions.
        </p>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
            <Calendar className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="text-xl font-semibold">Years Experience</h3>
              <p className="text-gray-300">Established Since</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
            <Users className="w-8 h-8 text-green-400" />
            <div>
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p className="text-gray-300">Professional Staff</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
            <Award className="w-8 h-8 text-yellow-400" />
            <div>
              <h3 className="text-xl font-semibold">Quality Assured</h3>
              <p className="text-gray-300">Certified Products</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg">
            <Target className="w-8 h-8 text-red-400" />
            <div>
              <h3 className="text-xl font-semibold">Customer Focus</h3>
              <p className="text-gray-300">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
        
        {/* Additional Company Information */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To provide innovative and sustainable wood packaging solutions that meet the highest quality standards, 
              ensuring our clients receive reliable products that support their business operations efficiently.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become the leading wood pallet manufacturer in the region, recognized for our commitment to quality, 
              sustainability, and customer satisfaction while contributing to environmental conservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
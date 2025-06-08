import React from 'react';

const Shop = () => {
  return (
    <section className="min-h-screen p-6 md:p-10 text-white bg-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <p className="text-lg mb-8">
          Browse our premium wood pallet products tailored for various logistics and shipping needs.
        </p>
        
        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Standard Pallets</h3>
            <p className="text-gray-300 mb-4">
              High-quality standard wooden pallets suitable for general logistics and warehouse storage.
            </p>
            <div className="text-sm text-gray-400">
              <p>• Dimensions: Various sizes available</p>
              <p>• Material: Premium hardwood</p>
              <p>• Load capacity: Up to 1500kg</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Export Pallets</h3>
            <p className="text-gray-300 mb-4">
              ISPM-15 certified pallets designed for international shipping and export requirements.
            </p>
            <div className="text-sm text-gray-400">
              <p>• ISPM-15 Heat treated</p>
              <p>• Export certified</p>
              <p>• Fumigation available</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Custom Pallets</h3>
            <p className="text-gray-300 mb-4">
              Customized wooden pallets built to your specific requirements and dimensions.
            </p>
            <div className="text-sm text-gray-400">
              <p>• Custom dimensions</p>
              <p>• Special load requirements</p>
              <p>• Industry-specific designs</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Heavy Duty Pallets</h3>
            <p className="text-gray-300 mb-4">
              Reinforced pallets designed for heavy-duty applications and industrial use.
            </p>
            <div className="text-sm text-gray-400">
              <p>• Extra reinforcement</p>
              <p>• Load capacity: Up to 3000kg</p>
              <p>• Industrial grade</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Eco-Friendly Pallets</h3>
            <p className="text-gray-300 mb-4">
              Sustainable wooden pallets made from recycled and certified sustainable wood sources.
            </p>
            <div className="text-sm text-gray-400">
              <p>• Recycled materials</p>
              <p>• FSC certified wood</p>
              <p>• Environmentally friendly</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-600 transition-colors">
            <h3 className="text-xl font-semibold mb-3">Specialty Products</h3>
            <p className="text-gray-300 mb-4">
              Wooden crates, boxes, and other specialized wood packaging solutions.
            </p>
            <div className="text-sm text-gray-400">
              <p>• Wooden crates</p>
              <p>• Storage boxes</p>
              <p>• Custom packaging</p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Need Custom Solutions?</h3>
          <p className="text-gray-300 mb-6">
            Contact our team to discuss your specific requirements and get a personalized quote.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
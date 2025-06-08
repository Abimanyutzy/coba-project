import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Manufacturing Industry - PT ABC",
      category: "Heavy Duty Pallets",
      description: "Delivered 500 heavy-duty pallets for automotive parts storage and transportation.",
      specs: ["Load capacity: 2500kg", "Custom dimensions: 120x100cm", "Heat treated ISPM-15"],
      year: "2024"
    },
    {
      id: 2,
      title: "Export Company - CV XYZ",
      category: "Export Pallets",
      description: "Supplied ISPM-15 certified pallets for international shipping to European markets.",
      specs: ["ISPM-15 certified", "Standard size: 120x80cm", "1000 units delivered"],
      year: "2024"
    },
    {
      id: 3,
      title: "Logistics Hub - PT Logistik Prima",
      category: "Standard Pallets",
      description: "Regular supply of standard pallets for warehouse operations and distribution center.",
      specs: ["Monthly supply: 200 units", "Standard dimensions", "Durable hardwood"],
      year: "2023-2024"
    },
    {
      id: 4,
      title: "Food Industry - PT Makanan Sehat",
      category: "Food Grade Pallets",
      description: "Food-safe wooden pallets for food processing and storage facilities.",
      specs: ["Food grade certified", "Smooth finish", "No chemical treatment"],
      year: "2024"
    },
    {
      id: 5,
      title: "Pharmaceutical - PT Farmasi Indo",
      category: "Clean Room Pallets",
      description: "High-quality pallets meeting pharmaceutical industry cleanliness standards.",
      specs: ["Clean room compatible", "Precision manufacturing", "Quality assured"],
      year: "2024"
    },
    {
      id: 6,
      title: "Agriculture - Koperasi Tani Maju",
      category: "Custom Agricultural Pallets",
      description: "Specialized pallets designed for agricultural product storage and transport.",
      specs: ["Ventilation design", "Weather resistant", "Custom size: 100x80cm"],
      year: "2023"
    }
  ];

  return (
    <section className="min-h-screen p-6 md:p-10 text-white bg-gray-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Works</h2>
        <p className="text-lg mb-8">
          Explore our portfolio showcasing successfully delivered wood pallet solutions.
        </p>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-650 transition-colors">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <p className="text-sm text-gray-400">Project Image</p>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">{project.category}</span>
                  <span className="text-xs text-gray-400">{project.year}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                {/* Specifications */}
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-gray-200">Specifications:</h4>
                  {project.specs.map((spec, index) => (
                    <p key={index} className="text-xs text-gray-400">• {spec}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Statistics Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center bg-gray-700 rounded-lg p-6">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">50+</h3>
            <p className="text-gray-300">Completed Projects</p>
          </div>
          
          <div className="text-center bg-gray-700 rounded-lg p-6">
            <h3 className="text-3xl font-bold text-green-400 mb-2">25+</h3>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          
          <div className="text-center bg-gray-700 rounded-lg p-6">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">10K+</h3>
            <p className="text-gray-300">Pallets Delivered</p>
          </div>
          
          <div className="text-center bg-gray-700 rounded-lg p-6">
            <h3 className="text-3xl font-bold text-red-400 mb-2">100%</h3>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>
        
        {/* Testimonial Section */}
        <div className="mt-12 bg-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 italic mb-4">
                "REKAYASA MAS consistently delivers high-quality pallets that meet our strict export requirements. Their ISPM-15 certification process is reliable and efficient."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Budi Santoso</p>
                  <p className="text-sm text-gray-400">Export Manager, CV XYZ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 italic mb-4">
                "The custom pallets provided by REKAYASA MAS perfectly fit our manufacturing needs. Professional service and on-time delivery every time."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Sari Wijaya</p>
                  <p className="text-sm text-gray-400">Operations Director, PT ABC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
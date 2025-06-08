import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Instagram, X } from "lucide-react";

// Simple Button component to replace shadcn/ui import
const Button = ({ children, onClick, className, size, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('/bg-pallet.jpg')" }}>
      
      {/* Top Left Menu Button */}
      <div className="absolute top-6 left-6 z-50">
        <Button 
          onClick={toggleSidebar}
          className="bg-[#8B6F47] hover:bg-[#7A5F3F] text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2"
        >
          <Menu className="w-5 h-5" />
          <span className="text-sm font-medium">Menu</span>
        </Button>
      </div>

      {/* Center Logo/Branding */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-40 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#D4A574] mb-1 tracking-wider">
          REKAYASA MAS
        </h1>
        <div className="border border-[#D4A574] px-4 py-1 rounded">
          <p className="text-xs text-[#D4A574] font-medium tracking-widest">
            WOOD PALLET SPECIALIST
          </p>
        </div>
      </div>

      {/* Top Right Buttons */}
      <div className="absolute top-6 right-6 flex items-center space-x-3 z-40">
        <Button 
          className="bg-[#8B6F47] hover:bg-[#7A5F3F] text-white rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-all duration-200"
          aria-label="Contact Us"
        >
          CONTACT US
        </Button>
        
        <Button
          className="bg-[#8B6F47] hover:bg-[#7A5F3F] text-white p-3 rounded-full shadow-lg transition-all duration-200"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </Button>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm 
        text-white flex flex-col p-8 z-50 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Close button */}
        <div className="flex justify-end mb-8">
          <Button 
            onClick={toggleSidebar}
            className="bg-transparent hover:bg-[rgba(255,255,255,0.1)] p-2 rounded-full"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Company Branding in Sidebar */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-[#D4A574] leading-tight mb-4">
            REKAYASA MAS
          </h1>
          <div className="border-t border-[#D4A574] w-full mb-4" />
          <p className="text-sm text-[#D4A574] font-medium tracking-wide">
            WOOD PALLET SPECIALIST
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-6">
          {[
            { path: '/', label: 'Home' },
            { path: '/company', label: 'Company' },
            { path: '/shop', label: 'Shop' },
            { path: '/portfolio', label: 'Portfolio' }
          ].map(({ path, label }) => (
            <Link 
              key={path}
              to={path} 
              className={`
                text-xl font-medium px-4 py-3 rounded-md transition-all duration-200 border-l-4
                ${isActivePage(path) 
                  ? 'text-[#D4A574] border-[#D4A574] bg-[rgba(212,165,116,0.1)]' 
                  : 'text-white border-transparent hover:text-[#D4A574] hover:border-[#D4A574] hover:bg-[rgba(255,255,255,0.05)]'
                }
              `}
              onClick={toggleSidebar}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact Info in Sidebar */}
        <div className="mt-auto pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-2">Hubungi Kami:</p>
          <p className="text-[#D4A574] font-medium">+62 123 456 789</p>
          <p className="text-[#D4A574] font-medium">info@rekayasamas.com</p>
        </div>
      </div>

      {/* Center Content - DISCOVER HERE Button */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="text-center">
          <Button 
            className="bg-transparent border-b-2 border-white text-white hover:border-[#D4A574] hover:text-[#D4A574] transition-all duration-300 pb-2 text-sm font-medium tracking-wider"
            onClick={() => {
              // Add smooth scroll or navigation logic here
              console.log("Discover here clicked");
            }}
          >
            DISCOVER HERE
          </Button>
        </div>
      </div>

      {/* Page Content */}
      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
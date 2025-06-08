import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Menu, Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
      
      {/* Mobile Menu Button */}
      <div className="absolute top-4 left-4 z-50 md:hidden">
        <Button 
          onClick={toggleSidebar}
          className="bg-[rgba(0,0,0,0.7)] text-white hover:bg-[rgba(0,0,0,0.9)] p-2"
          size="sm"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm 
        text-white flex flex-col items-start p-6 space-y-6 z-50 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:relative md:z-auto
      `}>
        {/* Header with Menu Icon */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <div className="bg-[#7a553a] p-2 rounded-full shadow-lg">
              <Menu className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-lg font-medium">Menu</span>
          </div>
          
          {/* Close button for mobile */}
          <Button 
            onClick={toggleSidebar}
            className="md:hidden bg-transparent hover:bg-[rgba(255,255,255,0.1)] p-1"
            size="sm"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Company Branding */}
        <div className="w-full">
          <h1 className="text-2xl font-bold text-amber-400 leading-tight">
            REKAYASA MAS
          </h1>
          <div className="border-t border-amber-400 w-full mt-2 mb-3" />
          <p className="text-xs text-amber-300 font-medium tracking-wide">
            WOOD PALLET SPECIALIST
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-3 mt-8 w-full">
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
                text-lg font-semibold px-3 py-2 rounded-md transition-all duration-200
                ${isActivePage(path) 
                  ? 'text-amber-400 bg-[rgba(255,255,255,0.1)]' 
                  : 'text-white hover:text-amber-400 hover:bg-[rgba(255,255,255,0.05)]'
                }
              `}
              onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Top Right Buttons */}
      <div className="absolute top-6 right-6 flex items-center space-x-3 z-30">
        <Button 
          className="bg-[#5a3e2b] text-white hover:bg-[#7a553a] active:bg-[#4a2e1b] rounded-full px-6 py-2 text-sm font-semibold shadow-lg transition-all duration-200 hover:shadow-xl"
          aria-label="Contact Us"
        >
          CONTACT US
        </Button>
        
        <Button
          className="bg-[#5a3e2b] text-white hover:bg-[#7a553a] active:bg-[#4a2e1b] p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </Button>
      </div>

      {/* Page Content */}
      <div className={`
        absolute top-0 right-0 bottom-0 overflow-y-auto transition-all duration-300
        ${isSidebarOpen ? 'left-64' : 'left-0'} 
        md:left-64
      `}>
        <div className="p-6 md:p-8 min-h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
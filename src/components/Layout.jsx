import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/company", label: "Company" },
    { to: "/shop", label: "Shop" },
    { to: "/portfolio", label: "Portfolio" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center text-white" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjRjVGNUY1Ii8+CjxyZWN0IHg9IjEwMCIgeT0iMjAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRERBNTc0IiBvcGFjaXR5PSIwLjgiLz4KPHJlY3QgeD0iMzAwIiB5PSIzMDAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMTAwIiBmaWxsPSIjQjg5MzVBIiBvcGFjaXR5PSIwLjciLz4KPHJlY3QgeD0iNTAwIiB5PSI0MDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjOEI2RjQ3IiBvcGFjaXR5PSIwLjYiLz4KPC9zdmc+')" 
      }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-4 bg-transparent">
        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="bg-[#8B6F47] hover:bg-[#7A5F3F] text-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2"
        >
          <Menu className="w-5 h-5" />
          <span className="text-sm font-medium">Menu</span>
        </button>

        {/* Center Logo/Branding */}
        <div className="text-center">
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
        <div className="flex items-center space-x-3">
          <button className="bg-[#8B6F47] hover:bg-[#7A5F3F] text-white rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-all duration-200">
            CONTACT US
          </button>
          <button className="bg-[#8B6F47] hover:bg-[#7A5F3F] text-white p-3 rounded-full shadow-lg transition-all duration-200">
            <Instagram className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 h-full w-80 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm text-white flex flex-col p-8 transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setMenuOpen(false)}
                className="bg-transparent hover:bg-[rgba(255,255,255,0.1)] p-2 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
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
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    text-xl font-medium px-4 py-3 rounded-md transition-all duration-200 border-l-4 text-left
                    ${isActive(link.to) 
                      ? 'text-[#D4A574] border-[#D4A574] bg-[rgba(212,165,116,0.1)]' 
                      : 'text-white border-transparent hover:text-[#D4A574] hover:border-[#D4A574] hover:bg-[rgba(255,255,255,0.05)]'
                    }
                  `}
                >
                  {link.label}
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

          {/* Klik area luar menutup sidebar */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}

      {/* Content area */}
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
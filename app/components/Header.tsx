// app/components/Header.tsx
import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            Anti Mampet
          </Link>
          
          <button 
            className="md:hidden text-2xl p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-primary">Beranda</Link>
            <Link to="/#layanan" className="font-medium hover:text-primary">Layanan</Link>
            <Link to="/#area" className="font-medium hover:text-primary">Area Layanan</Link>
            <Link to="/#harga" className="font-medium hover:text-primary">Harga</Link>
            <Link to="/#faq" className="font-medium hover:text-primary">FAQ</Link>
            <a 
              href="https://wa.me/6285759621854" 
              className="btn-whatsapp px-4 py-2 rounded-full"
            >
              <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
              Hubungi Kami
            </a>
          </nav>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="px-4 py-2 hover:bg-gray-100">Beranda</Link>
              <Link to="/#layanan" className="px-4 py-2 hover:bg-gray-100">Layanan</Link>
              <Link to="/#area" className="px-4 py-2 hover:bg-gray-100">Area Layanan</Link>
              <Link to="/#harga" className="px-4 py-2 hover:bg-gray-100">Harga</Link>
              <Link to="/#faq" className="px-4 py-2 hover:bg-gray-100">FAQ</Link>
              <a 
                href="https://wa.me/6285759621854" 
                className="flex items-center px-4 py-2 text-white bg-[#25D366] rounded-md"
              >
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
                Hubungi Kami
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
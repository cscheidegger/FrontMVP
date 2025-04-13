
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = window.innerWidth < 768;
  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/categories' },
    { name: 'Serviços', path: '/services' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Orçamento', path: '/quote' },
    { name: 'Contato', path: '/contact' },
    { name: 'Demo API', path: '/demo-api' },
  ];

  // Verifica se é uma página de admin
  const isAdminPage = location.pathname.startsWith('/admin');
  
  // Se for uma página de admin, não mostra a navbar
  if (isAdminPage) return null;

  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl">Proteus.lab</span>
          </Link>

          {/* Links de navegação para desktop */}
          {!isMobile && (
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 py-1 rounded-md hover:text-blue-200 ${
                    location.pathname === link.path ? 'text-blue-300 font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          {/* Carrinho e Menu Mobile */}
          <div className="flex items-center">
            <Link to="/cart" className="p-2 relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-blue-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <Link to="/admin/login" className="p-2 ml-2 hidden md:block">
              <User className="h-6 w-6" />
            </Link>
            
            {isMobile && (
              <Button variant="ghost" className="ml-2 p-1" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>

        {/* Menu mobile */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md hover:bg-slate-700 ${
                  location.pathname === link.path ? 'bg-slate-700 font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin/login"
              className="block px-3 py-2 rounded-md hover:bg-slate-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Área Administrativa
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, ShoppingBag, User, Settings } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className={`bg-gray-800 text-white h-screen p-5 ${isOpen ? "w-64" : "w-16"} transition-all duration-300`}>
        <button onClick={() => setIsOpen(!isOpen)} className="mb-6 text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-2 hover:text-blue-400">
            <Home size={24} />
            {isOpen && <span>Home</span>}
          </Link>
          <Link href="/products" className="flex items-center space-x-2 hover:text-blue-400">
            <ShoppingBag size={24} />
            {isOpen && <span>Products</span>}
          </Link>
          <Link href="/profile" className="flex items-center space-x-2 hover:text-blue-400">
            <User size={24} />
            {isOpen && <span>Profile</span>}
          </Link>
          <Link href="/setting" className="flex items-center space-x-2 hover:text-blue-400">
            <Settings size={24} />
            {isOpen && <span>Settings</span>}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

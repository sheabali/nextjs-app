"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className={pathname == "/" ? " text-blue-600 underline font-semibold" :"text-2xl font-bold text-black"}>
          CarShop
        </Link>
        <div className="hidden text-black md:flex space-x-6">
          <Link href="/productss" className={pathname == "/productss" ? " text-blue-600 underline font-semibold" :"text-base font-bold text-black"}>Products</Link>
          
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

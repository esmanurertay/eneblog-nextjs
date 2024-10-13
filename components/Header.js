import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="shadow-sm my-4">
      <div className="container mx-auto flex justify-between items-center py-4 max-w-7xl">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center"> 
          <Image src="/assets/images/logo.png" width={40} height={30} alt="Logo" />
          <span className="text-3xl font-bold ml-2">ENE UI</span>
        </div>

        {/* Navigation */}
        <nav className="space-x-8 text-xl">
          <Link href="/" className="hover:text-red-500">Homepage</Link>
          <Link href="/about" className="hover:text-red-500">About Us</Link>
          <Link href="/features" className="hover:text-red-500">Features</Link>
          <Link href="/contact" className="hover:text-red-500">Contact Us</Link>
        </nav>

        {/* Icons */}
        <div className="space-x-4">
          <CiSearch size={32} className="inline-block text-xl cursor-pointer hover:text-gray-500" />
        </div>
      </div>
    </header>
  );
}

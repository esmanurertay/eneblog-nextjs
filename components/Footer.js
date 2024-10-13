"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Sosyal medya ikonları
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" text-black mx-auto max-w-7xl py-10 bottom-0">
      <div className="container mx-auto px-4 border-t-2">
        {/* Üst Bölüm */}
        <div className="flex  mt-10 flex-wrap justify-between items-start mb-8">
          
          {/* Logo ve Abonelik Formu */}
          <div className=" md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Image 
                src="/assets/images/logo.png" 
                alt="Logo" 
                width={50} 
                height={50} 
                className="mr-3"
              />
              <span className="text-black font-bold text-3xl">ENE UI</span>
            </div>
            <p className="mb-4">En son makalelerimizden haberdar olun! </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="E-posta adresinizi girin" 
                className="px-4 py-2 w-52 rounded-l-lg border focus:outline-none"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r-lg">
                Abone Ol
              </button>
            </form>
          </div>
          
          {/* Bağlantılar Bölümü */}
          <div className="w-full md:w-2/3 flex justify-between">
            {/* Hakkımızda */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-black text-lg font-semibold mb-4">Hakkımızda</h3>
              <ul>
                <li className="mb-2">
                  <Link href="/about" className="hover:text-red-500">Biz Kimiz?</Link>
                </li>
                <li className="mb-2">
                  <Link href="/team" className="hover:text-red-500">Yazarlarımız</Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact" className="hover:text-red-500">İletişim</Link>
                </li>
              </ul>
            </div>

            {/* Kategoriler */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-black text-lg font-semibold mb-4">Kategoriler</h3>
              <ul>
                <li className="mb-2">
                  <Link href="/tech" className="hover:text-red-500">Teknoloji</Link>
                </li>
                <li className="mb-2">
                  <Link href="/design" className="hover:text-red-500">Tasarım</Link>
                </li>
                <li className="mb-2">
                  <Link href="/lifestyle" className="hover:text-red-500">Yaşam Tarzı</Link>
                </li>
                <li className="mb-2">
                  <Link href="/travel" className="hover:text-red-500">Seyahat</Link>
                </li>
              </ul>
            </div>

            {/* Yardım ve Destek */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-black text-lg font-semibold mb-4">Yardım ve Destek</h3>
              <ul>
                <li className="mb-2">
                  <Link href="/faq" className="hover:text-red-500">Sıkça Sorulan Sorular</Link>
                </li>
                <li className="mb-2">
                  <Link href="/support" className="hover:text-red-500">Destek</Link>
                </li>
                <li className="mb-2">
                  <Link href="/privacy" className="hover:text-red-500">Gizlilik Politikası</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alt Bölüm */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Esma Nur Ertay. Tüm hakları saklıdır.</p>
            
            {/* Sosyal Medya İkonları */}
            <div className="flex space-x-6 mt-4 md:mt-0 ">
              <Link href="https://facebook.com" target="_blank" className="hover:text-red-500 transition-transform duration-300 transform hover:-translate-y-2 hover:scale-110">
                <FaFacebookF size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-red-500 transition-transform duration-300 transform hover:-translate-y-2 hover:scale-110">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/esmanurertayy/" target="_blank" className="hover:text-red-500 transition-transform duration-300 transform hover:-translate-y-2 hover:scale-110">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://tr.linkedin.com/in/esmanurertay" target="_blank" className="hover:text-red-500 transition-transform duration-300 transform hover:-translate-y-2 hover:scale-110">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

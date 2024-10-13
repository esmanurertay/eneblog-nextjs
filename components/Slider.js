"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import slides from '../public/slides.json';
import { GoShareAndroid } from "react-icons/go";
import Image from 'next/image';

export default function Slider() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      const response = await fetch('/slides.json');
      const data = await response.json();
      setSlides(data);
    };

    fetchSlides();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full mx-auto">
      <motion.div
        className="overflow-hidden rounded-2xl shadow-lg"
        key={currentSlide}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-96 object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-2xl max-w-md h-[70%] left-[-10%] top-[15%] shadow-lg border bg-white text-black bg-opacity-70 flex flex-col justify-center items-start p-4"
        key={currentSlide}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
          <p className="mb-4">{slides[currentSlide].content}</p>
        </div>
        <div className="flex flex-row w-full items-center justify-between p-4">
          <div className="flex items-center">
            {/* Avatar Resmi */}
            <Image
              src="/assets/images/avatar-1.png"
              alt="Avatar"
              className="w-10 h-10 rounded-full mr-2"
              width={24}
              height={24}
            />
            <div className="avatar and role">
              <p className="font-semibold">{slides[currentSlide].author}</p>
              <p>{slides[currentSlide].role}</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <GoShareAndroid size={24} />
          </div>
        </div>
      </motion.div>

      {/* Önceki ve Sonraki Butonlar */}
      <div className="absolute top-[95%] -left-[10%] transform  -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-white rounded-full w-10 h-10 flex items-center justify-center border border-pink-500 m-2 text-red-500"
        >
          &#10094; {/* Sol ok */}
        </button>
      </div>
      <div className="absolute top-[95%] -left-[2%] transform  -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-red-400 text-white rounded-full w-10 h-10 flex items-center justify-center border m-2"
        >
          &#10095; {/* Sağ ok */}
        </button>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image"; // next/image bileşenini import edin
import Link from "next/link"; // Link bileşenini import edin

export default function Topics() {
  const topics = [
    { id: 1, title: "Hayvanlar Alemi..", subtitle: "13.10.2024", image: "/assets/images/topic1.png" },
    { id: 2, title: "Yazılım Dünyası..", subtitle: "13.10.2024", image: "/assets/images/topic2.png" },
    { id: 3, title: "Spor Yaparken Dikkat..",  subtitle: "13.10.2024", image: "/assets/images/topic3.png" },
    { id: 4, title: "Hayvanlar Alemi..",subtitle: "13.10.2024", image: "/assets/images/topic1.png" },
    { id: 5, title: "Yazılım Dünyası..",  subtitle: "13.10.2024", image: "/assets/images/topic2.png" },
    { id: 6, title: "Spor Yaparken Dikkat..",  subtitle: "13.10.2024", image: "/assets/images/topic3.png" },
  ];

  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      {/* Başlık */}
      <h1 className="text-2xl font-bold text-left text-gray-800 mb-8">TOP TRENDING TOPICS</h1>

      {/* Trending Topics Rectangles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/topics/${topic.id}`} passHref>
            <div
              className="bg-white rounded-lg shadow-lg flex flex-col items-center cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-xl" // Hover efektleri eklendi
              style={{ borderRadius: "10px", height: "200px" }} // Kutu yüksekliğini 200px olarak ayarladık
            >
              <Image
                src={topic.image} // Resim kaynağı
                alt={topic.title} // Resim için alternatif metin
                width={160}
                height={100} 
                className="object-cover rounded-t-lg" // Resim stil ayarları
              />
              <div className="pt-2 flex flex-col items-center">
                <h2 className="text-sm font-semibold text-gray-800 mb-2 w-full">{topic.title}</h2>
                <p className="text-gray-600  w-full">{topic.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

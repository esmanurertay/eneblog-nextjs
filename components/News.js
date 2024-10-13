import Image from 'next/image';

export default function NewsSection() {
  const newsList = [
    {
      id: 1,
      title: 'Budget Issues Force The Our To Be Concreted',
      category: 'Nature | Mekan Keşfi',
      date: '12.10.2024',
      image: '/assets/images/news-big.png', // Büyük resim
      isTopRated: true,
    },
    {
      id: 2,
      title: 'Budget Issues Force The OurConcreted',
      category: 'Nature | Mekan Keşfi',
      date: '12.10.2024',
      image: '/assets/images/news-small.png',
      isTopRated: false,
    },
    {
      id: 3,
      title: 'Budget Issues Force The Our Concreted',
      category: 'Nature | Mekan Keşfi',
      date: '12.10.2024',
      image: '/assets/images/news-small.png',
      isTopRated: false,
    },
    {
      id: 4,
      title: 'Budget Issues Force The Our Concreted',
      category: 'Nature  |  Mekan Keşfi  ',
      date: '| 12.10.2024',
      image: '/assets/images/news-small.png',
      isTopRated: false,
    },
  ];

  return (
    <section className=" h-[35%] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">NEWS</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Büyük haber kartı */}
        <div className="lg:flex-1 relative rounded-lg overflow-hidden shadow-lg">
          {/* Resim katmanı - Opacity sadece arka plana uygulanıyor */}
          <div className="absolute inset-0 z-0">
            <Image
              src={newsList[0].image}
              alt={newsList[0].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg opacity-50"
            />
          </div>
          
          <div className="absolute top-0 right-0 p-4 z-10">
            {newsList[0].isTopRated && (
              <span className="bg-red-600 text-white text-sm px-3 py-3 rounded-full">
                Top Rated
              </span>
            )}
          </div>
          
          {/* Metin katmanı - Absolute positioning ile alt hizalama */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white bg-opacity-20 text-black z-10 shadow-lg">
            <h3 className="text-2xl font-bold">{newsList[0].title}</h3>
            <p className="text-lg py-2">{newsList[0].category} {newsList[0].date}</p>
          
          </div>
        </div>

        {/* Küçük haber kartları */}
        <div className="lg:w-[33%] flex flex-col justify-between space-y-4">
          {newsList.slice(1).map((news) => (
            <div
              key={news.id}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
            >
              <div className="relative h-24 flex items-center w-52"> {/* Boyutları büyütüyoruz */}
                <Image
                  src={news.image}
                  alt={news.title}
                  width={100}
                  height={100}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-base font-bold">{news.title}</h3>
                <p className="text-sm text-gray-500">{news.category}</p>
                <p className="text-xs text-gray-400">{news.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

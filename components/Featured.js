import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'Home Temizlikte Yapılan Hatalar',
    date: '12.10.2024',
    category: 'Home',
    image: '/assets/images/img-1.png',
  },
  {
    id: 2,
    title: 'Home Temizlikte Yapılan Hatalar',
    date: '12.10.2024',
    category: 'Home',
    image: '/assets/images/img-2.png',
  },
  {
    id: 3,
    title: 'Sağlık Temizlikte Yapılan Hatalar',
    date: '12.10.2024',
    category: 'Sağlık',
    image: '/assets/images/img-3.png',
  },
  {
    id: 4,
    title: 'Home Temizlikte Yapılan Hatalar',
    date: '12.10.2024',
    category: 'Home',
    image: '/assets/images/img-2.png',
  },
];

export default function FeaturedBlog() {
  return (
    <div className="py-5 my-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container ve içerikleri ortalayıp, boşlukları ayarladım */}
        <div className="flex justify-center gap-7">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex items-center space-x-4 p-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg" // Hover efektleri eklendi
            >
              {/* Resim solda */}
              <div className="relative rounded-full overflow-hidden w-16 h-16">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>

              {/* Metin sağda */}
              <div>
                <h3 className="text-md font-semibold">{blog.category}</h3>
                <p className="text-black opacity-70 text-sm font-light">{blog.title}</p>
                <span className="text-gray-400 text-xs">{blog.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
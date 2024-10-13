"use client";

export default function AboutPage() {
  return (
    <div className="max-w-5xl container mx-auto px-4 py-10">
      {/* Başlık */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Hakkımızda</h1>

      {/* Tanıtım Metni */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Biz, yenilikçi çözümler sunan bir ekip olarak, müşteri memnuniyetini ön planda tutarak dijital dünyada fark yaratmayı hedefliyoruz. Amacımız, teknolojiyi kullanarak hayatı kolaylaştırmak ve işletmelerin büyümesine yardımcı olmaktır.
      </p>

      {/* Vizyon ve Misyon */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Vizyonumuz</h2>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Teknoloji alanında lider bir firma olarak, inovasyonu ve müşteri memnuniyetini öncelikli hedefimiz haline getirmeyi amaçlıyoruz.
      </p>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Misyonumuz</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Müşterilerimize en iyi hizmeti sunarak onların iş süreçlerini daha verimli hale getirmek ve sektördeki gelişmeleri takip ederek sürekli yenilik yapmaktır.
      </p>

      {/* Ekibimiz */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ekibimiz</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Ekip Üyesi 1 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <img
            src="/assets/images/team1.jpg" // Ekip üyesinin resmini buraya ekleyin
            alt="Ali Yılmaz"
            className="w-24 h-24 rounded-full mb-2 border-4 border-gray-300 shadow-md"
          />
          <h3 className="text-xl font-semibold text-gray-800">Ali Yılmaz</h3>
          <p className="text-gray-600">Yazılım Geliştirici</p>
        </div>
        {/* Ekip Üyesi 2 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <img
            src="/assets/images/team2.jpg" // Ekip üyesinin resmini buraya ekleyin
            alt="Ayşe Demir"
            className="w-24 h-24 rounded-full mb-2 border-4 border-gray-300 shadow-md"
          />
          <h3 className="text-xl font-semibold text-gray-800">Ayşe Demir</h3>
          <p className="text-gray-600">Proje Yöneticisi</p>
        </div>
        {/* Ekip Üyesi 3 */}
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
          <img
            src="/assets/images/team3.jpg" // Ekip üyesinin resmini buraya ekleyin
            alt="Mehmet Can"
            className="w-24 h-24 rounded-full mb-2 border-4 border-gray-300 shadow-md"
          />
          <h3 className="text-xl font-semibold text-gray-800">Mehmet Can</h3>
          <p className="text-gray-600">Grafik Tasarımcı</p>
        </div>
      </div>

      {/* İletişim Bilgileri */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">İletişim</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Bizimle iletişime geçmek için lütfen{" "}
        <a href="mailto:info@example.com" className="text-blue-500 underline hover:text-blue-700">info@example.com</a> adresine yazın veya telefonla bize ulaşın: <strong>(123) 456-7890</strong>.
      </p>
    </div>
  );
}

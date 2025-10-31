import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center fade-in">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Arkadaşların Seni Ne Kadar Tanıyor?
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Kendi eğlenceli testlerini oluştur, arkadaşlarına gönder ve ne kadar iyi tanıdıklarını gör!
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <Link
          to="/create"
          className="btn btn-primary text-lg px-8 py-3"
        >
          Test Oluştur
        </Link>
        
        <div className="relative mt-4 sm:mt-0">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">veya</span>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-0">
          <p className="text-sm text-gray-500 mb-2">Bir test kodun var mı?</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Test kodu gir"
              className="input-field rounded-r-none"
            />
            <button className="btn btn-secondary rounded-l-none">
              Katıl
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nasıl Çalışır?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mb-4 mx-auto">
              1
            </div>
            <h3 className="font-medium text-lg mb-2">Test Oluştur</h3>
            <p className="text-gray-600">Kendi sorularını ve cevaplarını ekleyerek testini oluştur.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mb-4 mx-auto">
              2
            </div>
            <h3 className="font-medium text-lg mb-2">Paylaş</h3>
            <p className="text-gray-600">Arkadaşlarına özel bağlantıyı gönder.</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mb-4 mx-auto">
              3
            </div>
            <h3 className="font-medium text-lg mb-2">Sonuçları Gör</h3>
            <p className="text-gray-600">Arkadaşlarının cevaplarını ve puanlarını gör.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

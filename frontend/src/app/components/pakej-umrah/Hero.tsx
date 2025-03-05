export default function PakejUmrahHeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/mecca/bg.jpg')" }}
    >
      {/* Opacity overlay */}
      <div className="absolute inset-0 bg-[#2B2B2B] opacity-50 flex items-center justify-center">
        <p className="text-lg md:text-5xl font-semibold text-[#e3d08f] text-center">
          “ IA BUKAN SAHAJA SEBUAH PERJALAN <br />
          IANYA SATU PANGGILAN ”
        </p>
      </div>

      {/* بسم الله Section at the Bottom */}
      <div className="absolute bottom-10 left-0 w-full flex items-center justify-center space-x-4">
        <div className="w-24 h-1 bg-white"></div>
        <p className="text-4xl font-semibold">بسم الله</p>
        <div className="w-24 h-1 bg-white"></div>
      </div>
    </div>
  );
}

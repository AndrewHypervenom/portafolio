export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Fondo base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-[#0A0F1C] dark:via-[#121829] dark:to-[#1A1F2E] transition-colors duration-300">
        {/* Formas animadas modo claro */}
        <div className="dark:opacity-0 transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Formas animadas modo oscuro */}
        <div className="opacity-0 dark:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}
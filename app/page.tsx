import LoginForm from './components/login-form';
import MatrixRain from './components/MatrixRain'; // Import the MatrixRain component

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col relative">
      {/* Matrix Rain Overlay */}
      <MatrixRain />

      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(17, 24, 39, 1), rgba(0, 0, 0, 1))",
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="flex flex-col items-center p-4">
  <div className="flex items-center space-x-2 mb-4">
    <span className="text-3xl font-bold font-mono">Mot10n</span>
  </div>

  <div className="hidden md:flex space-x-4 font-mono text-xl border-2 border-transparent rounded-3xl px-10 py-3">
    <a href="#" className="p-2 text-white hover:text-gray-300 border-transparent hover:border-white rounded-xl hover:bg-gray-800 transition-all">Home</a>
    <a href="#" className="p-2 text-white hover:text-gray-300 border-transparent hover:border-white rounded-xl hover:bg-gray-800 transition-all">About</a>
    <a href="#" className="p-2 text-white hover:text-gray-300 border-transparent hover:border-white rounded-xl hover:bg-gray-800 transition-all">Contact</a>
  </div>        
</nav>


        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center px-4">
          <LoginForm />
        </main>
      </div>
    </div>
  );
}

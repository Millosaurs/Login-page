'use client'

import Auth from './auth';
import FreelancerProfile from './pages/freelancer';
import LandingPage from './landing/page';
import MatrixRain from './stuff/MatrixRain'; // Import the MatrixRain component
import DockNav from './stuff/dock';

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
  
       
</nav>


        {/* Main Content */}
        <main>
        <h1>Hi</h1>
        </main>
      </div>
    </div>
  );
}

// MADE BY MILLOSAURS; AKA SHARAN SHRIVATSAV :)
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Briefcase, Eye, Check, Github, Twitter, Linkedin } from 'lucide-react'
import MatrixRain from '../stuff/MatrixRain'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-black font-mono">
      {/* Matrix Rain Overlay */}
      <MatrixRain/>

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
          {/* Add navigation items here if needed */}
        </nav>

        {/* Main Content */}
        <main className="relative z-20">
          {/* Header */}
          <header className="container mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-white">Mot<span className="text-blue-400">10</span>n</Link>
              <div className="space-x-4">
                <Link href="/auth" className="text-gray-300 hover:text-white">Log in</Link>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  <Link href="/auth">Sign up</Link>
                </Button>
              </div>
            </nav>
          </header>

          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Freelancing in <span className="text-blue-400">Mot10n</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Experience seamless connections between freelancers and clients. 
              Our platform is designed to keep your projects moving forward with ease and precision.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <Link href="/auth">Get Started</Link><ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <HoverCard>
                  <HoverCardTrigger>Learn More</HoverCardTrigger>
                  <HoverCardContent>
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <p className="text-sm">Donnno (^///^)</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </Button>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-24 bg-transprent">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-16 text-center text-white">Key Features</h2>
              
              {/* Feature 1: Smart Matching */}
              <div className="flex flex-col lg:flex-row items-center mb-24 shadow-[0_0_30px_rgba(255,255,255,0.1)] rounded-lg p-8 bg-black bg-opacity-50 backdrop-blur-lg">
                <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                  <h3 className="text-3xl font-bold mb-6 flex items-center">
                    Smart Matching <Search className="ml-4 h-8 w-8" />
                  </h3>
                  <p className="text-xl mb-8 text-gray-300">
                    Our AI-powered matching system seamlessly connects freelancers with the perfect clients and projects, ensuring optimal collaboration.
                  </p>
                  <ul className="space-y-4">
                    {['Skill-based recommendations', 'Project compatibility analysis', 'Real-time availability matching'].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-6 w-6 text-green-400 mr-4" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg opacity-20 blur-xl"></div>
                    <div className="relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                      <Image
                        src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg"
                        alt="Smart Matching Interface"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: Seamless Workflow */}
              <div className="flex flex-col lg:flex-row-reverse items-center mb-24 shadow-[0_0_30px_rgba(255,255,255,0.1)] rounded-lg p-8 bg-black bg-opacity-50 backdrop-blur-lg">
                <div className="lg:w-1/2 lg:pl-12 mb-12 lg:mb-0">
                  <h3 className="text-3xl font-bold mb-6 flex items-center">
                    Seamless Workflow <Briefcase className="ml-4 h-8 w-8" />
                  </h3>
                  <p className="text-xl mb-8 text-gray-300">
                    Keep your projects in motion with our integrated tools designed for smooth collaboration between freelancers and clients.
                  </p>
                  <ul className="space-y-4">
                    {['Integrated time tracking', 'Milestone management', 'Automated invoicing'].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-6 w-6 text-green-400 mr-4" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg opacity-20 blur-xl"></div>
                    <div className="relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                      <Image
                        src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg"
                        alt="Seamless Workflow Interface"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3: Distraction-free Environment */}
              <div className="flex flex-col lg:flex-row items-center shadow-[0_0_30px_rgba(255,255,255,0.1)] rounded-lg p-8 bg-black bg-opacity-50 backdrop-blur-lg">
                <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                  <h3 className="text-3xl font-bold mb-6 flex items-center">
                    Distraction-free Environment <Eye className="ml-4 h-8 w-8" />
                  </h3>
                  <p className="text-xl mb-8 text-gray-300">
                    Focus on what matters most with our clean, minimalist interface designed to enhance productivity and creativity for both freelancers and clients.
                  </p>
                  <ul className="space-y-4">
                    {['Customizable workspace', 'Focus mode', 'Productivity analytics'].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-6 w-6 text-green-400 mr-4" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg opacity-20 blur-xl"></div>
                    <div className="relative bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                      <Image
                        src="https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg"
                        alt="Distraction-free Environment"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-bg-transprent py-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience Mot10n?</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Join our community of freelancers and clients, and experience the seamless connection that keeps your projects moving forward.
              </p>
              <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-3 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <Link href="/auth">Get Started Now</Link> <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-2 md:col-span-1">
                  <Link href="/" className="text-2xl font-bold text-white">Mot<span className="text-blue-400">10</span>n</Link>
                  <p className="text-gray-400 mt-4 mb-4">Seamlessly connecting freelancers and clients, keeping projects in motion.</p>
                  <div className="flex space-x-4">
                    <Link href="#" aria-label="GitHub"><Github className="h-6 w-6 text-gray-400 hover:text-white" /></Link>
                    <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-gray-400 hover:text-white" /></Link>
                    <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-gray-400 hover:text-white" /></Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">For Freelancers</h3>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-400 hover:text-white">Find Projects</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Create Profile</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Resources</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Success Stories</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">For Clients</h3>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-400 hover:text-white">Post a Job</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Find Talent</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Enterprise Solutions</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Success Stories</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">How It Works</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Security</Link></li>
                    <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Mot10n. All rights reserved.</p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-all duration-300">
                    <Link href="/auth">Sign Up</Link>
                  </Button>
                  <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    <Link href="/auth">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}

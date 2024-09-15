'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

// Header Component
const Header = () => (
  <header className="container px-6 py-8 mb-56">
    <nav className="flex justify-center items-center">
      <Link href="/" className="text-5xl font-bold text-white hover:text-blue-400 transition-colors">
        Mot<span className="text-blue-400">10</span>n
      </Link>
    </nav>
  </header>
)

// Sign Up Component
const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const validatePasswords = () => {
    if (password !== cpassword) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validatePasswords()) return

    console.log('Sign Up form submitted', { name, email, password })
  }

  return (
    <div className="w-full max-w-md mt-8"> {/* Added margin-top here */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-mono">
        Let's Begin...
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block font-mono text-sm">Username</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Username"
            required
            className="w-full px-3 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:border-white focus:ring-white font-mono"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block font-mono text-sm">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:border-white focus:ring-white font-mono"
          />
        </div>
        <div className="space-y-2 relative">
          <label htmlFor="password" className="block font-mono text-sm">Password</label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-3 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:border-white focus:ring-white font-mono pr-10"
          />
          <div
            className="absolute bottom-1 py-2 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
        <div className="space-y-2 relative">
          <label htmlFor="cpassword" className="block font-mono text-sm">Confirm Password</label>
          <input
            id="cpassword"
            type={showPassword ? 'text' : 'password'}
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            placeholder="Re-Enter your password"
            required
            className="w-full px-3 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:border-white focus:ring-white font-mono pr-10"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-mono"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

// Sign In Component
const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign In form submitted', { email, password })
  }

  return (
    <div className="w-full max-w-md mt-8"> {/* Added margin-top here */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-mono">
        Welcome Back
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block font-mono text-sm">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:border-white focus:ring-white font-mono"
          />
        </div>
        <div className="space-y-2 relative">
          <label htmlFor="password" className="block font-mono text-sm">Password</label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-3 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:border-white focus:ring-white font-mono pr-10"
          />
          <div
            className="absolute bottom-1 py-2 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-mono"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}

// Main Component to Switch Between Sign In and Sign Up
export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true)

  return (
    <div className="w-full max-w-md mx-auto py-10 font-mono">
      <Header />
      {/* The key prop ensures smooth transition by treating each component uniquely */}
      <div className={`transition-opacity duration-700 ease-in-out ${isSignUp ? 'opacity-100' : 'opacity-0'}`}>
        {isSignUp && <SignInForm />}
      </div>

      <div className={`transition-opacity duration-700 ease-in-out ${!isSignUp ? 'opacity-100' : 'opacity-0'}`}>
        {!isSignUp && <SignUpForm />}
      </div>

      <div className="mt-6 text-center"> {/* Adjusted margin-top here */}
        {isSignUp ? (
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <button
              className="text-white hover:underline"
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </button>
          </p>
        ) : (
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <button
              className="text-white hover:underline"
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </p>
        )}
      </div>
    </div>
  )
}

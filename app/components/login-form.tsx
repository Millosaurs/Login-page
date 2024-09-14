'use client'

import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted', { email, password })
  }

  return (
    <div className="w-full max-w-md">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-mono">
        Welcome back
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
            className="w-full px-3 py-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:border-white focus:ring-white font-mono pr-10"  // Add padding to the right for the icon
          />
          {/* Eye icon to toggle password visibility */}
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
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="radio" className="form-checkbox bg-gray-900 border-gray-700 text-white focus:ring-white" />
            <span className="ml-2 text-sm font-mono">Remember me</span>
          </label>
          <a href="#" className="text-sm text-gray-400 hover:text-white font-mono">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-mono"
        >
          Sign In
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-400 font-mono">
        Don&apos;t have an account?{" "}
        <a href="#" className="text-white hover:underline font-mono">Sign up</a>
      </p>
    </div>
  )
}

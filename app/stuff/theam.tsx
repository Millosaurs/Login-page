'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return (
    <Image
  src=""
  width={80}  // Increased width
  height={80} // Increased height
  sizes="80x80"
  alt="Loading Light/Dark Toggle"
  priority={false}
  title="Loading Light/Dark Toggle"
/>

  )

  return (
    <>
      {resolvedTheme === 'dark' ? (
        <div
          onClick={() => setTheme('light')}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Switch to light mode"
        >
          <FiSun />
        </div>
      ) : (
        <div
          onClick={() => setTheme('dark')}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Switch to dark mode"
        >
          <FiMoon />
        </div>
      )}
    </>
  )
}

// MADE BY MILLOSAURS; AKA SHARAN SHRIVATSAV :)

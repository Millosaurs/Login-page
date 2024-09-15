'use client';

import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to full window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "01"; // Binary matrix effect
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      // Draw semi-transparent black background to fade previous text
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set matrix color to white
      ctx.fillStyle = '#FFF';
      ctx.font = `${fontSize}px monospace`;

      // Loop through drops array and draw text at each drop position
      drops.forEach((y, index) => {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        const x = index * fontSize;

        // Draw the text at the current drop position
        ctx.fillText(text, x, y * fontSize);

        // If drop is out of the canvas or randomly reset the drop
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[index] = 0;
        }

        // Increment the y-coordinate for each drop
        drops[index]++;
      });
    };

    // Run the draw function every 50 milliseconds
    const interval = setInterval(draw, 50);

    // Adjust canvas size on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-rain-canvas absolute inset-0 z-10 pointer-events-none opacity-20"
    />
  );
};

export default MatrixRain;

// MADE BY MILLOSAURS; AKA SHARAN SHRIVATSAV :)

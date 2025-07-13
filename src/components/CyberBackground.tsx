import { useEffect, useRef } from 'react';

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Grid parameters - adjust based on screen size
    const GRID_SIZE = window.innerWidth < 768 ? 20 : 30;
    let gridAngle = 0;

    // Circular scan line
    let scanRadius = 0;
    const maxRadius = Math.sqrt(canvas.width ** 2 + canvas.height ** 2);

    // Animation
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated grid - reduce complexity on mobile
      ctx.strokeStyle = 'rgba(128, 255, 0, 0.1)';
      ctx.lineWidth = window.innerWidth < 768 ? 0.5 : 1;
      
      // Horizontal lines - reduced density on mobile
      const yStep = window.innerWidth < 768 ? GRID_SIZE * 1.5 : GRID_SIZE;
      for (let y = 0; y < canvas.height; y += yStep) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += window.innerWidth < 768 ? 10 : 5) {
          const offset = Math.sin((x + gridAngle) * 0.02) * (window.innerWidth < 768 ? 3 : 5);
          ctx.lineTo(x, y + offset);
        }
        ctx.stroke();
      }

      // Vertical lines - reduced density on mobile
      const xStep = window.innerWidth < 768 ? GRID_SIZE * 1.5 : GRID_SIZE;
      for (let x = 0; x < canvas.width; x += xStep) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += window.innerWidth < 768 ? 10 : 5) {
          const offset = Math.sin((y + gridAngle) * 0.02) * (window.innerWidth < 768 ? 3 : 5);
          ctx.lineTo(x + offset, y);
        }
        ctx.stroke();
      }

      // Draw circular scan line - adjust size for mobile
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, scanRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(128, 255, 0, 0.5)';
      ctx.lineWidth = window.innerWidth < 768 ? 1 : 2;
      ctx.stroke();

      // Update parameters - slower animations on mobile
      gridAngle += window.innerWidth < 768 ? 0.3 : 0.5;
      scanRadius = (scanRadius + (window.innerWidth < 768 ? 1 : 2)) % maxRadius;

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Base gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Animated canvas overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 opacity-50"
      />
      
      {/* Noise texture overlay - reduced opacity on mobile */}
      <div className="fixed inset-0 z-0 opacity-10 md:opacity-20 pointer-events-none bg-noise" />

      {/* Vignette effect - adjusted for mobile */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, 
            transparent 0%, 
            rgba(0,0,0,${window.innerWidth < 768 ? '0.5' : '0.7'}) 100%)`
        }}
      />

      {/* Scan lines - reduced opacity on mobile */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 md:opacity-10 scan-lines" />
    </>
  );
};

export default CyberBackground; 
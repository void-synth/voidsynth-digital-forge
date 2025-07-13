import { useEffect, useState } from 'react';

const CyberHUD = () => {
  const [time, setTime] = useState(new Date());
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update time
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setCoordinates({
        x: Math.round((e.clientX / window.innerWidth) * 100),
        y: Math.round((e.clientY / window.innerHeight) * 100)
      });
    };

    // Check for mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Corner elements - hidden on mobile */}
      <div className="hidden md:block">
        <div className="hud-corner top-left" />
        <div className="hud-corner top-right" />
        <div className="hud-corner bottom-left" />
        <div className="hud-corner bottom-right" />
      </div>

      {/* Top HUD - adjusted for mobile */}
      <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 w-full md:w-auto">
        <div className="neon-text text-xs md:text-sm font-mono text-center px-4 md:px-0">
          SYSTEM OPERATIONAL
        </div>
      </div>

      {/* Left HUD - hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-8 -translate-y-1/2 space-y-2">
        <div className="text-[#00ff00] font-mono text-sm">
          <div>X: {coordinates.x}</div>
          <div>Y: {coordinates.y}</div>
        </div>
      </div>

      {/* Right HUD - adjusted for mobile */}
      <div className="absolute top-4 right-4 md:top-1/2 md:right-8 md:-translate-y-1/2 text-right">
        <div className="text-[#00ff00] font-mono text-xs md:text-sm">
          {time.toLocaleTimeString()}
        </div>
      </div>

      {/* Bottom HUD - adjusted for mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-full md:w-auto">
        <div className="text-[#00ff00] font-mono text-center px-4 md:px-0">
          <div className="glitch text-sm md:text-base" data-text="VOID SYNTH">VOID SYNTH</div>
          <div className="text-xs md:text-sm">DIGITAL FORGE</div>
        </div>
      </div>

      {/* Mobile-specific elements */}
      {isMobile && (
        <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-4">
          <div className="text-[#00ff00] font-mono text-xs bg-black/50 px-3 py-1 rounded-full">
            TAP TO INTERACT
          </div>
        </div>
      )}

      {/* Scan line animation - reduced on mobile */}
      <div className="absolute inset-0 scan-lines opacity-5 md:opacity-10" />

      {/* Matrix rain effect - reduced on mobile */}
      <div className="absolute inset-0 matrix-bg opacity-3 md:opacity-5">
        {Array.from({ length: isMobile ? 25 : 50 }).map((_, i) => (
          <div
            key={i}
            className="matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              fontSize: isMobile ? '10px' : '14px'
            }}
          >
            {Array.from({ length: isMobile ? 10 : 20 }).map(() =>
              String.fromCharCode(0x30A0 + Math.random() * 96)
            )}
          </div>
        ))}
      </div>

      {/* Hologram effect - reduced on mobile */}
      <div className="absolute inset-0 hologram opacity-5 md:opacity-10" />
    </div>
  );
};

export default CyberHUD; 
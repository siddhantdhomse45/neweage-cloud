import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trailingPos, setTrailingPos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsMoving(true); // Set movement flag
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    let animationFrame;

    const followCursor = () => {
      setTrailingPos((prev) => {
        const dx = cursorPos.x - prev.x;
        const dy = cursorPos.y - prev.y;
        
      
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          return {
            x: prev.x + dx * 0.1,
            y: prev.y + dy * 0.1,
          };
        } else {
          setIsMoving(false); 
          return prev;
        }
      });

      if (isMoving) {
        animationFrame = requestAnimationFrame(followCursor);
      }
    };

    if (isMoving) {
      animationFrame = requestAnimationFrame(followCursor);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPos, isMoving]);

  return (
    <>
    
      <div
        className="cursor-circle inner"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />
  
      <div
        className="cursor-circle outer"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      />
    </>
  );
}

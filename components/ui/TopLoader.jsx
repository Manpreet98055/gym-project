'use client'
import { useEffect, useState } from "react";

export default function TopLoader({ loading }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (loading) {
      setWidth(30);
      const timer = setTimeout(() => setWidth(80), 300);
      return () => clearTimeout(timer);
    } else {
      setWidth(100);
      const reset = setTimeout(() => setWidth(0), 300);
      return () => clearTimeout(reset);
    }
  }, [loading]);

  if (!loading && width === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999]">
      <div
        className="h-full bg-[#1A1363] transition-all duration-300"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

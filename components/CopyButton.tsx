"use client";
import { useState } from "react";

export default function CopyButton({
  title,
  onCopy,
}: {
  title: string;
  onCopy: () => void;
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = async () => {
    try {
      onCopy();
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 1000);
    } catch (err) {
      alert("Failed to copy");
    }
  };

  return (
    <div onClick={handleClick} className="block w-full cursor-pointer">
      <div className="relative w-full group select-none">
        {/* Default image */}
        <img
          src="/default.png"
          alt=""
          className="w-full block"
          draggable={false}
        />

        {/* Hover overlay */}
        <img
          src="/hover.png"
          alt=""
          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
          draggable={false}
        />

        {/* Click overlay */}
        {isClicked && (
          <img
            src="/finished.png"
            alt=""
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            draggable={false}
          />
        )}

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <span className="font-minecraft text-white text-xl leading-none text-center -translate-y-2">
            {isClicked ? "✅" : "📋"}
          </span>
        </div>
      </div>
    </div>
  );
}
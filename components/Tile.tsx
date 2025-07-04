"use client";
import { useState } from "react";

export default function Tile({
    name,
    image,
    wiki,
}: {
    name?: string;
    image?: string;
    wiki?: string;
}) {
    const [clicked, setClicked] = useState(false);
    // learn grouping & image as background
    return (
        <div
            className="font-minecraft shadow-lg relative w-full aspect-square group cursor-pointer"
            onClick={() => setClicked(!clicked)}
        >
            {/* Base image */}
            <img
                src={"/default.png"}
                alt={name}
                className="w-full h-full object-cover"
                draggable={false}
            />

            {/* Hover image */}
            <img
                src="/hover.png"
                alt=""
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                draggable={false}
            />

            {/* Clicked image */}
            {clicked && (
                <img
                    src="/finished.png"
                    alt=""
                    className="w-full h-full object-cover absolute top-0 left-0 z-20"
                    draggable={false}
                />
            )}

            {/* Overlay text */}
            <div className="absolute inset-0 z-30 flex items-center justify-center">
                <img
                    src={image}
                    alt=""
                    className={`w-14 sm:w-16 h-auto transition-all duration-200 ${clicked ? "grayscale" : ""}`}
                    draggable={false}
                />

            </div>
        </div>
    );
}

// <p className="none text-xs sm:text-base text-white text-center">{name}</p>
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Button({
    title,
    href,
    onClick,
}: {
    title: string;
    href?: string;
    onClick?: () => void;
}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        onClick?.();
    };

    const ButtonContent = (
        <div className="relative w-full group cursor-pointer">
            {/* Default image */}
            <img
                src="/menu_default.png"
                alt=""
                className="w-full block"
                draggable={false}
            />

            {/* Hover overlay */}
            <img
                src="/menu_hover.png"
                alt=""
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
                draggable={false}
            />

            {/* Click overlay */}
            {isClicked && (
                <img
                    src="/menu_finished.png"
                    alt=""
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                    draggable={false}
                />
            )}

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <span className="font-minecraft text-white text-xl leading-none text-center translate-y-1">
                    {title}
                </span>
            </div>
        </div>
    );

    return href ? (
        <Link href={href} onClick={handleClick} className="block w-full">
            {ButtonContent}
        </Link>
    ) : (
        <div onClick={handleClick} className="w-full">{ButtonContent}</div>
    );
}

"use client";
import { useRouter } from "next/navigation";

export default function GoHomeButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    return (
        <div onClick={handleClick} className="block w-full cursor-pointer">
            <div className="relative w-full group select-none">
                <img src="/default.png" alt="" className="w-full block" draggable={false} />
                <img
                    src="/hover.png"
                    alt=""
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none"
                    draggable={false}
                />
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <span className="font-minecraft text-white text-xl leading-none text-center -translate-y-2">
                        🏠
                    </span>
                </div>
            </div>
        </div>
    );
}
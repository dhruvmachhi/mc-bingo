"use client";
import Tile from "@/components/Tile";
import CopyButton from "@/components/CopyButton";
import { useEffect } from "react";
import { useStore } from "@/store";
import PasteItemsButton from "@/components/PasteButton";
import GoHomeButton from "@/components/HomeButton";

export default function Chart() {
    const items = useStore((state) => state.items);
    const generateItems = useStore((state) => state.generateItems);
    const getSeedJSON = useStore((state) => state.getSeedJSON);

    useEffect(() => {
        if (items.length === 0) {
            generateItems();
        }
    }, [items.length]);

    return (
        <main className="flex justify-center flex-col items-center p-4">
            <img src="title.png" alt="" className="w-sm mb-2" />
            <div className="mb-3 w-48 flex gap-4">
                <CopyButton
                    title="Copy Chart as JSON"
                    onCopy={() => navigator.clipboard.writeText(getSeedJSON())}
                />
                <PasteItemsButton />
                <GoHomeButton />
            </div>
            <div className="grid grid-cols-5 w-full max-w-xl justify-center gap-2">
                {items.map((item, i) => (
                    <Tile key={i} name={item.name} image={item.image} />
                ))}
            </div>
        </main>
    );
}

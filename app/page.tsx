"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";

export default function Home() {
  const router = useRouter();
  const { setItems } = useStore();

  function handleRandomChartClick() {
    setItems([]);
    router.push("/chart");
  }

  function handleSeededChartClick() {
    const input = prompt("Paste item JSON array:");
    try {
      const parsed = JSON.parse(input ?? "");
      if (Array.isArray(parsed) && parsed.every((v) => typeof v === "string")) {
        setItems(parsed);
        router.push("/chart");
      } else {
        alert("Invalid input. Please enter a JSON array of strings.");
      }
    } catch {
      alert("Invalid JSON.");
    }
  }

  return (
    <main className="flex justify-center flex-col items-center p-4">
      <img src="/title.png" alt="" className="w-full max-w-sm mb-4" />
      <div className="w-full max-w-2xl flex flex-col gap-5">
        <Button title="Generated Random Chart" onClick={handleRandomChartClick} />
        <Button title="Generated Seeded Chart" onClick={handleSeededChartClick} />
      </div>
    </main>
  );
}

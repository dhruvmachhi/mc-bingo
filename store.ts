import { create } from "zustand";
import data from "@/image_list.json";

interface Item {
  name: string;
  image: string;
  finished: boolean;
}

interface StoreState {
  seed: string;
  items: Item[];
  setSeed: (s: string) => void;
  setItems: (names: string[]) => void;
  toggleItem: (name: string) => void;
  generateItems: () => void;
  reset: () => void;
  getSeedJSON: () => string;
}

export const useStore = create<StoreState>((set, get) => ({
  seed: "",
  items: [],

  setSeed: (s) => set({ seed: s }),

  setItems: (names) => {
    const fileMap = Object.fromEntries(data.map((i) => [i.name, i.file]));
    const newItems = names.map((name) => ({
      name,
      image: `/items/${fileMap[name] ?? "default.png"}`,
      finished: false,
    }));
    set({ items: newItems });
  },

  toggleItem: (name) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.name === name ? { ...item, finished: !item.finished } : item
      ),
    })),

  generateItems: () => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    const items = shuffled.slice(0, 25).map((item) => ({
      name: item.name,
      image: `/items/${item.file}`,
      finished: false,
    }));
    set({ items });
  },

  reset: () => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    const items = shuffled.slice(0, 25).map((item) => ({
      name: item.name,
      image: `/items/${item.file}`,
      finished: false,
    }));
    set({ items });
  },

  getSeedJSON: () => {
    const items = get().items.map((item) => item.name);
    return JSON.stringify(items, null, 2);
  },
}));

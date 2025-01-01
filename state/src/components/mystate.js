import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: "counter-storage",
      // storage: localStorage, //
      serialize: (state) => JSON.stringify(state), // Ensure the state is serialized
      deserialize: (str) => JSON.parse(str), // Deserialize when reading from localStorage
    }
  )
);

export default useStore;

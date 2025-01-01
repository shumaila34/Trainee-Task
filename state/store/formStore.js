import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFormStore = create(
  persist(
    (set) => ({
      formData: {
        name: "",
        email: "",
      },
      setFormData: (newData) =>
        set((state) => ({
          formData: { ...state.formData, ...newData },
        })),
      clearFormData: () => set({ formData: { name: "", email: "" } }),
    }),
    {
      name: "form-storage",
    }
  )
);

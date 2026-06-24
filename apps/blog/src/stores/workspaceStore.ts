import { create } from "zustand"

interface WorkspaceState {
  category: string
  setCategory: (category: string) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  category: "RESEARCH",
  setCategory: (category) => set({ category }),
}))

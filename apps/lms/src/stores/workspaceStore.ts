import { create } from "zustand"

interface WorkspaceState {
  mode: string
  setMode: (mode: string) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  mode: "RED_TEAMING",
  setMode: (mode) => set({ mode }),
}))

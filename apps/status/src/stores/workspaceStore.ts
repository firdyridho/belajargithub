import { create } from "zustand"

interface WorkspaceState {
  state: string
  setState: (state: string) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  state: "OPERATIONAL",
  setState: (state) => set({ state }),
}))

import { create } from "zustand"

interface WorkspaceState {
  role: string
  setRole: (role: string) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  role: "WHITE_TEAMING",
  setRole: (role) => set({ role }),
}))

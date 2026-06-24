import { create } from "zustand"

interface WorkspaceState {
  status: string
  setStatus: (status: string) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  status: "DRAFT",
  setStatus: (status) => set({ status }),
}))

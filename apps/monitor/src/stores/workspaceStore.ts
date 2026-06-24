import { create } from "zustand"

interface WorkspaceState {
  severity: string
  setSeverity: (severity: string) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  severity: "INFO",
  setSeverity: (severity) => set({ severity }),
}))

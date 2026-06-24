import { create } from "zustand"

interface WorkspaceState {
  guild: string
  setGuild: (guild: string) => void
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  guild: "WHITE_TEAMING",
  setGuild: (guild) => set({ guild }),
}))

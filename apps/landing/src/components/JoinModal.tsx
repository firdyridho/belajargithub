import { ShieldCheck, X } from "lucide-react"
import { useJoinForm } from "../hooks/useJoinForm"
import { useWorkspaceStore } from "../stores/workspaceStore"
import { WorkspaceBadge } from "./WorkspaceBadge"

interface JoinModalProps {
  isOpen: boolean
  onClose: () => void
}

const guilds = [
  { value: "RED_TEAMING", label: "Red Team", color: "bg-red-team border-red-team text-white" },
  { value: "BLUE_TEAMING", label: "Blue Team", color: "bg-blue-team border-blue-team text-white" },
  { value: "YELLOW_TEAMING", label: "Yellow Team", color: "bg-yellow-team border-yellow-team text-black" },
  { value: "WHITE_TEAMING", label: "White Team", color: "bg-white-team border-outline text-white dark:text-black" }
]

export function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const { guild, setGuild } = useWorkspaceStore()
  const { register, handleSubmit, errors, lastSubmission } = useJoinForm()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        role="presentation"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md rounded-xl border border-outline-variant bg-surface p-6 shadow-xl dark:shadow-black/40 z-10">
        {/* Close Button */}
        <button
          aria-label="Close modal"
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-full hover:bg-surface-container-high transition-colors"
          onClick={onClose}
          type="button"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="font-h3 text-h3 text-on-surface leading-tight">Join the Society</h2>
            <p className="text-xs text-on-surface-variant font-label-caps uppercase tracking-widest mt-0.5">
              Secure Clearance Access
            </p>
          </div>
        </div>

        {/* Current Workspace Division Badge */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-sm text-on-surface-variant font-body-md">Selected Path:</span>
          <WorkspaceBadge value={guild} />
        </div>

        {/* Guild Selection Grid */}
        <div className="mb-6">
          <label className="block text-xs font-label-caps text-on-surface-variant mb-2">
            SELECT OPERATIONAL DIVISION
          </label>
          <div className="grid grid-cols-2 gap-2">
            {guilds.map((item) => {
              const isSelected = guild === item.value
              return (
                <button
                  className={`border border-outline-variant rounded p-3 text-left transition-all duration-200 hover:shadow-sm ${
                    isSelected
                      ? `${item.color} font-bold border-transparent`
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                  key={item.value}
                  onClick={() => setGuild(item.value)}
                  type="button"
                >
                  <span className="block text-xs font-label-caps uppercase opacity-70">
                    {item.value.replace("_TEAMING", "")}
                  </span>
                  <span className="text-sm font-bold">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Email Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-label-caps text-on-surface-variant mb-2">
              SECURE EMAIL ADDRESS
            </label>
            <input
              autoComplete="email"
              className="w-full rounded border border-outline-variant bg-surface-container-low p-3 font-mono-code text-mono-code text-on-surface focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="operator@tiss.or.id"
              {...register("email")}
            />
            {errors.email ? (
              <p className="mt-1.5 text-xs font-bold text-red-team">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <button
            className="w-full bg-primary text-on-primary font-label-caps text-label-caps px-4 py-3 rounded hover:bg-on-primary-fixed-variant transition-colors dark:shadow-[0_0_15px_rgba(30,111,217,0.3)] font-bold"
            type="submit"
          >
            Register Interest
          </button>
        </form>

        {/* Success Banner */}
        {lastSubmission ? (
          <div className="mt-6 rounded border border-status-ok/30 bg-status-ok/10 p-4 text-center">
            <p className="text-sm font-bold text-status-ok flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              Clearance Requested
            </p>
            <p className="text-xs text-on-surface-variant font-mono-code mt-1 break-all">
              {lastSubmission.email}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

import { KeyRound } from "lucide-react"
import { WorkspaceBadge } from "./components/WorkspaceBadge"
import { useAdminForm } from "./hooks/useAdminForm"
import { formatRouteLabel } from "./lib/formatRouteLabel"
import { useWorkspaceStore } from "./stores/workspaceStore"

const routes = ["/", "/users", "/rbac", "/audit-logs", "/settings/api-keys"]

export default function App() {
  const route = routes.includes(window.location.pathname) ? window.location.pathname : "/"
  const { role, setRole } = useWorkspaceStore()
  const { register, handleSubmit, errors, lastSubmission } = useAdminForm()

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-null-teaming">
      <nav className="border-b-[3px] border-black bg-white px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <strong className="mr-auto text-xl">TISS Admin</strong>
          {routes.map((item) => (
            <a className="text-sm font-bold uppercase hover:text-red-teaming" href={item} key={item}>
              {formatRouteLabel(item)}
            </a>
          ))}
        </div>
      </nav>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#1A1A1A]">
          <WorkspaceBadge value={role} />
          <h1 className="mt-4 text-4xl font-black">{formatRouteLabel(route)}</h1>
          <p className="mt-4 text-lg">Admin console untuk WHITE_TEAMING dengan users, RBAC, audit logs, dan API keys.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["WHITE_TEAMING", "ELEVATED_WHITE_TEAMING", "SYSTEM_ACCOUNT"].map((value) => (
              <button className="border-[3px] border-black px-4 py-3 font-black" key={value} onClick={() => setRole(value)} type="button">
                {value}
              </button>
            ))}
          </div>
        </div>
        <form className="border-[3px] border-black bg-white p-6" onSubmit={handleSubmit}>
          <KeyRound aria-hidden className="h-8 w-8 text-white-teaming" />
          <h2 className="mt-3 text-xl font-black">RBAC Mutation</h2>
          <input className="mt-4 w-full border-[3px] border-black p-3" {...register("email")} />
          {errors.email ? <p className="mt-2 text-sm font-bold text-red-teaming">{errors.email.message}</p> : null}
          <button className="mt-4 border-[3px] border-black bg-null-teaming px-4 py-2 font-black text-white" type="submit">
            Queue Change
          </button>
          {lastSubmission ? <p className="mt-4 text-sm font-bold">{lastSubmission.email}</p> : null}
        </form>
      </section>
    </main>
  )
}

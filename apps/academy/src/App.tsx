import { useSecurityForm } from "./hooks/useSecurityForm"
import { formatRouteLabel } from "./lib/formatRouteLabel"
import { useWorkspaceStore } from "./stores/workspaceStore"

const routes = [
  "/",
  "/dashboard",
  "/curriculum",
  "/curriculum/week-01",
  "/quiz/intro-security",
  "/assignments",
  "/leaderboard",
]

function resolveRoute(pathname: string) {
  if (pathname.startsWith("/curriculum/")) return "/curriculum/week-01"
  if (pathname.startsWith("/quiz/")) return "/quiz/intro-security"
  return routes.includes(pathname) ? pathname : "/"
}

export default function App() {
  const activeRoute = resolveRoute(window.location.pathname)
  const { guild, setGuild } = useWorkspaceStore()
  const { register, handleSubmit, errors, lastSubmission } = useSecurityForm()

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-null-teaming">
      <nav className="border-b-[3px] border-black bg-white px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <strong className="mr-auto text-xl">TISS Academy</strong>
          {routes.map((route) => (
            <a className="text-sm font-bold uppercase hover:text-red-teaming" href={route} key={route}>
              {formatRouteLabel(route)}
            </a>
          ))}
        </div>
      </nav>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1.6fr_0.9fr]">
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#1A1A1A]">
          <p className="mb-3 text-sm font-black uppercase text-red-teaming">{guild}</p>
          <h1 className="text-4xl font-black">{formatRouteLabel(activeRoute)}</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Jalur akademi NULL_TEAMING dengan dashboard, kurikulum mingguan, kuis, assignments,
            dan leaderboard sesuai akses PRD.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["NULL_TEAMING", "RED_TEAMING", "BLUE_TEAMING"].map((value) => (
              <button
                className="border-[3px] border-black bg-[#FAFAF7] px-4 py-3 text-left font-black"
                key={value}
                onClick={() => setGuild(value)}
                type="button"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <form
          className="border-[3px] border-black bg-white p-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-black">Access Probe</h2>
          <input className="mt-4 w-full border-[3px] border-black p-3" {...register("email")} />
          {errors.email ? <p className="mt-2 text-sm font-bold text-red-teaming">{errors.email.message}</p> : null}
          <button className="mt-4 border-[3px] border-black bg-null-teaming px-4 py-2 font-black text-white" type="submit">
            Verify
          </button>
          {lastSubmission ? <p className="mt-4 text-sm font-bold">{lastSubmission.email}</p> : null}
        </form>
      </section>
    </main>
  )
}

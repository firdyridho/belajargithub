import { ShieldCheck } from "lucide-react"
import { WorkspaceBadge } from "./components/WorkspaceBadge"
import { useJoinForm } from "./hooks/useJoinForm"
import { formatRouteLabel } from "./lib/formatRouteLabel"
import { useWorkspaceStore } from "./stores/workspaceStore"

const routes = ["/", "/about", "/organigram", "/contact"]

export default function App() {
  const route = routes.includes(window.location.pathname) ? window.location.pathname : "/"
  const { guild, setGuild } = useWorkspaceStore()
  const { register, handleSubmit, errors, lastSubmission } = useJoinForm()

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-null-teaming">
      <nav className="border-b-[3px] border-black bg-white px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <strong className="mr-auto text-xl">TISS</strong>
          {routes.map((item) => (
            <a className="text-sm font-bold uppercase hover:text-red-teaming" href={item} key={item}>
              {formatRouteLabel(item)}
            </a>
          ))}
        </div>
      </nav>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#1A1A1A]">
          <WorkspaceBadge value={guild} />
          <h1 className="mt-4 text-5xl font-black">Tirtayasa Information Security Society</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Ekosistem digital TISS untuk publikasi, akademi, LMS, CMS, administrasi, dan SSO
            terpusat.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["RED_TEAMING", "BLUE_TEAMING", "YELLOW_TEAMING", "WHITE_TEAMING"].map((value) => (
              <button className="border-[3px] border-black px-4 py-3 font-black" key={value} onClick={() => setGuild(value)} type="button">
                {value}
              </button>
            ))}
          </div>
        </div>
        <form className="border-[3px] border-black bg-white p-6" onSubmit={handleSubmit}>
          <ShieldCheck aria-hidden className="h-8 w-8 text-red-teaming" />
          <h2 className="mt-3 text-xl font-black">{formatRouteLabel(route)} Access</h2>
          <input className="mt-4 w-full border-[3px] border-black p-3" {...register("email")} />
          {errors.email ? <p className="mt-2 text-sm font-bold text-red-teaming">{errors.email.message}</p> : null}
          <button className="mt-4 border-[3px] border-black bg-null-teaming px-4 py-2 font-black text-white" type="submit">
            Register Interest
          </button>
          {lastSubmission ? <p className="mt-4 text-sm font-bold">{lastSubmission.email}</p> : null}
        </form>
      </section>
    </main>
  )
}

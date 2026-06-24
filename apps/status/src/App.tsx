import { RadioTower } from "lucide-react"
import { WorkspaceBadge } from "./components/WorkspaceBadge"
import { useIncidentForm } from "./hooks/useIncidentForm"
import { formatRouteLabel } from "./lib/formatRouteLabel"
import { useWorkspaceStore } from "./stores/workspaceStore"

const routes = ["/", "/incidents", "/rca", "/uptime"]

export default function App() {
  const route = routes.includes(window.location.pathname) ? window.location.pathname : "/"
  const { state, setState } = useWorkspaceStore()
  const { register, handleSubmit, errors, lastSubmission } = useIncidentForm()

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-null-teaming">
      <nav className="border-b-[3px] border-black bg-white px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <strong className="mr-auto text-xl">TISS Status</strong>
          {routes.map((item) => (
            <a className="text-sm font-bold uppercase hover:text-red-teaming" href={item} key={item}>
              {formatRouteLabel(item)}
            </a>
          ))}
        </div>
      </nav>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#1A1A1A]">
          <WorkspaceBadge value={state} />
          <h1 className="mt-4 text-4xl font-black">{formatRouteLabel(route)}</h1>
          <p className="mt-4 text-lg">Status publik dan RCA incident untuk GREEN Guild workflow.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["OPERATIONAL", "DEGRADED", "OUTAGE"].map((value) => (
              <button className="border-[3px] border-black px-4 py-3 text-left font-black" key={value} onClick={() => setState(value)} type="button">
                {value}
              </button>
            ))}
          </div>
        </div>
        <form className="border-[3px] border-black bg-white p-6" onSubmit={handleSubmit}>
          <RadioTower aria-hidden className="h-8 w-8 text-red-teaming" />
          <h2 className="mt-3 text-xl font-black">Incident Signal</h2>
          <input className="mt-4 w-full border-[3px] border-black p-3" {...register("title")} />
          {errors.title ? <p className="mt-2 text-sm font-bold text-red-teaming">{errors.title.message}</p> : null}
          <button className="mt-4 border-[3px] border-black bg-null-teaming px-4 py-2 font-black text-white" type="submit">
            Publish
          </button>
          {lastSubmission ? <p className="mt-4 text-sm font-bold">{lastSubmission.title}</p> : null}
        </form>
      </section>
    </main>
  )
}

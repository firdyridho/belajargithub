import { Activity } from "lucide-react"
import { WorkspaceBadge } from "./components/WorkspaceBadge"
import { useMetricForm } from "./hooks/useMetricForm"
import { formatRouteLabel } from "./lib/formatRouteLabel"
import { useWorkspaceStore } from "./stores/workspaceStore"

const routes = ["/", "/metrics", "/alerts", "/audit-stream"]

export default function App() {
  const route = routes.includes(window.location.pathname) ? window.location.pathname : "/"
  const { severity, setSeverity } = useWorkspaceStore()
  const { register, handleSubmit, errors, lastSubmission } = useMetricForm()

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-null-teaming">
      <nav className="border-b-[3px] border-black bg-white px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <strong className="mr-auto text-xl">TISS Monitor</strong>
          {routes.map((item) => (
            <a className="text-sm font-bold uppercase hover:text-red-teaming" href={item} key={item}>
              {formatRouteLabel(item)}
            </a>
          ))}
        </div>
      </nav>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1.5fr_0.8fr]">
        <div className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#1A1A1A]">
          <WorkspaceBadge value={severity} />
          <h1 className="mt-4 text-4xl font-black">{formatRouteLabel(route)}</h1>
          <p className="mt-4 text-lg">Monitoring untuk RED, BLUE, dan YELLOW_TEAMING.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["INFO", "WARNING", "CRITICAL"].map((value) => (
              <button className="border-[3px] border-black px-4 py-3 text-left font-black" key={value} onClick={() => setSeverity(value)} type="button">
                {value}
              </button>
            ))}
          </div>
        </div>
        <form className="border-[3px] border-black bg-white p-6" onSubmit={handleSubmit}>
          <Activity aria-hidden className="h-8 w-8 text-blue-teaming" />
          <h2 className="mt-3 text-xl font-black">Metric Probe</h2>
          <input className="mt-4 w-full border-[3px] border-black p-3" {...register("metric")} />
          {errors.metric ? <p className="mt-2 text-sm font-bold text-red-teaming">{errors.metric.message}</p> : null}
          <button className="mt-4 border-[3px] border-black bg-null-teaming px-4 py-2 font-black text-white" type="submit">
            Track
          </button>
          {lastSubmission ? <p className="mt-4 text-sm font-bold">{lastSubmission.metric}</p> : null}
        </form>
      </section>
    </main>
  )
}

import { Newspaper } from "lucide-react"
import { WorkspaceBadge } from "./components/WorkspaceBadge"
import { useFilterForm } from "./hooks/useFilterForm"
import { formatRouteLabel } from "./lib/formatRouteLabel"
import { useWorkspaceStore } from "./stores/workspaceStore"

const routes = ["/", "/research", "/ctf-writeups", "/articles/prd-234"]

function resolveRoute(pathname: string) {
  if (pathname.startsWith("/articles/")) return "/articles/prd-234"
  return routes.includes(pathname) ? pathname : "/"
}

export default function App() {
  const route = resolveRoute(window.location.pathname)
  const { category, setCategory } = useWorkspaceStore()
  const { register, handleSubmit, errors, lastSubmission } = useFilterForm()

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-null-teaming">
      <nav className="border-b-[3px] border-black bg-white px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <strong className="mr-auto text-xl">TISS Blog</strong>
          {routes.map((item) => (
            <a className="text-sm font-bold uppercase hover:text-red-teaming" href={item} key={item}>
              {formatRouteLabel(item)}
            </a>
          ))}
        </div>
      </nav>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[1.5fr_0.8fr]">
        <article className="border-[3px] border-black bg-white p-6 shadow-[8px_8px_0_#1A1A1A]">
          <WorkspaceBadge value={category} />
          <h1 className="mt-4 text-4xl font-black">{formatRouteLabel(route)}</h1>
          <p className="mt-4 text-lg">
            Publikasi riset, writeup CTF, dan artikel TISS yang terhubung ke CMS pusat.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["RESEARCH", "CTF_WRITEUP", "INCIDENT_REVIEW"].map((value) => (
              <button className="border-[3px] border-black px-4 py-3 text-left font-black" key={value} onClick={() => setCategory(value)} type="button">
                {value}
              </button>
            ))}
          </div>
        </article>
        <form className="border-[3px] border-black bg-white p-6" onSubmit={handleSubmit}>
          <Newspaper aria-hidden className="h-8 w-8 text-blue-teaming" />
          <h2 className="mt-3 text-xl font-black">Search Signal</h2>
          <input className="mt-4 w-full border-[3px] border-black p-3" {...register("query")} />
          {errors.query ? <p className="mt-2 text-sm font-bold text-red-teaming">{errors.query.message}</p> : null}
          <button className="mt-4 border-[3px] border-black bg-null-teaming px-4 py-2 font-black text-white" type="submit">
            Filter
          </button>
          {lastSubmission ? <p className="mt-4 text-sm font-bold">{lastSubmission.query}</p> : null}
        </form>
      </section>
    </main>
  )
}

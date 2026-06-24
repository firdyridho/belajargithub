export function formatRouteLabel(route: string): string {
  if (route === "/") return "Overview"
  return route.replace(/^\//, "").replace(/\//g, " / ").replace(/-/g, " ")
}

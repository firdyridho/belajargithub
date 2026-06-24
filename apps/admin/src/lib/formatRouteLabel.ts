export function formatRouteLabel(route: string): string {
  if (route === "/") return "Dashboard"
  return route.replace(/^\//, "").replace(/\//g, " / ").replace(/-/g, " ")
}

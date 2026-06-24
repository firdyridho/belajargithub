export function formatRouteLabel(route: string): string {
  if (route === "/") return "Home"
  return route.replace(/^\//, "").replace(/\//g, " / ").replace(/-/g, " ")
}

export function formatRouteLabel(route: string): string {
  if (route === "/") return "Latest"
  return route.replace(/^\//, "").replace(/\//g, " / ").replace(/-/g, " ")
}

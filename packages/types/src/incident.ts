export type IncidentSeverity = "operational" | "degraded" | "outage"

export interface Incident {
  id: string
  title: string
  severity: IncidentSeverity
  affectedServices: string[]
  startedAt: string
  resolvedAt?: string
  isResolved: boolean
}

export interface RCAReport {
  id: string
  incidentId: string
  summary: string
  rootCause: string
  timeline: string
  preventionMeasures: string
  authorId: string
  createdAt: string
}

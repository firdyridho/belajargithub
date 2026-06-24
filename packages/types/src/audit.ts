export interface AuditLog {
  id: string
  actorId: string
  actorName: string
  action: string
  targetResource: string
  targetId: string
  ipAddress: string
  userAgent: string
  metadata: Record<string, unknown>
  createdAt: string
}

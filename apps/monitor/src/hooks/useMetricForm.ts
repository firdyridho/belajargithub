import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  metric: z.string().min(3).default("api_latency"),
})

type FormValue = z.infer<typeof schema>

export function useMetricForm() {
  const [lastSubmission, setLastSubmission] = useState<FormValue | null>(null)
  const form = useForm<FormValue>({
    resolver: zodResolver(schema),
    defaultValues: { metric: "api_latency" },
  })

  return {
    ...form,
    errors: form.formState.errors,
    lastSubmission,
    handleSubmit: form.handleSubmit(setLastSubmission),
  }
}

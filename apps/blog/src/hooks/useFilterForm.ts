import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  query: z.string().min(2).default("malware analysis"),
})

type FormValue = z.infer<typeof schema>

export function useFilterForm() {
  const [lastSubmission, setLastSubmission] = useState<FormValue | null>(null)
  const form = useForm<FormValue>({
    resolver: zodResolver(schema),
    defaultValues: { query: "malware analysis" },
  })

  return {
    ...form,
    errors: form.formState.errors,
    lastSubmission,
    handleSubmit: form.handleSubmit(setLastSubmission),
  }
}

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  title: z.string().min(4).default("Threat report"),
})

type FormValue = z.infer<typeof schema>

export function useContentForm() {
  const [lastSubmission, setLastSubmission] = useState<FormValue | null>(null)
  const form = useForm<FormValue>({
    resolver: zodResolver(schema),
    defaultValues: { title: "Threat report" },
  })

  return {
    ...form,
    errors: form.formState.errors,
    lastSubmission,
    handleSubmit: form.handleSubmit(setLastSubmission),
  }
}

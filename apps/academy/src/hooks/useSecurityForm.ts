import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  email: z.string().email().default("member@tiss.or.id"),
})

type FormValue = z.infer<typeof schema>

export function useSecurityForm() {
  const [lastSubmission, setLastSubmission] = useState<FormValue | null>(null)
  const form = useForm<FormValue>({
    resolver: zodResolver(schema),
    defaultValues: { email: "member@tiss.or.id" },
  })

  return {
    ...form,
    errors: form.formState.errors,
    lastSubmission,
    handleSubmit: form.handleSubmit((value) => setLastSubmission(value)),
  }
}

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  email: z.string().email().default("hello@tiss.or.id"),
})

type FormValue = z.infer<typeof schema>

export function useJoinForm() {
  const [lastSubmission, setLastSubmission] = useState<FormValue | null>(null)
  const form = useForm<FormValue>({
    resolver: zodResolver(schema),
    defaultValues: { email: "hello@tiss.or.id" },
  })

  return {
    ...form,
    errors: form.formState.errors,
    lastSubmission,
    handleSubmit: form.handleSubmit(setLastSubmission),
  }
}

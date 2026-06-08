import { z } from 'zod'


export const signupPayloadSchema = z.object({
    firstName: z.string().min(2).max(45),
    lastName: z.string().nullable().optional(),
    email: z.email(),
    password: z.string().min(6).max(100)
})


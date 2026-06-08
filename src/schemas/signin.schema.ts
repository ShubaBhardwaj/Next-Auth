import { z } from "zod";

export const signinPayloadSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
})
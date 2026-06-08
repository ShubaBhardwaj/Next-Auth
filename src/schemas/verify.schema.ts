import { z } from "zod";

export const verifyPayloadSchema = z.object({
    verificationCode: z.string().length(6, "Verification code must be exactly 6 characters long")
})
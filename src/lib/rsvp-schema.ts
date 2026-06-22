import { z } from "zod";

export const rsvpSchema = z.object({
  slug: z.string().min(1).max(100).trim(),
  guestName: z.string().min(1, "Nama wajib diisi.").max(100).trim(),
  attendance: z.enum(["HADIR", "TIDAK_HADIR", "RAGU"], {
    errorMap: () => ({ message: "Pilih salah satu kehadiran." }),
  }),
  guestCount: z.number().int().min(0).max(10),
  message: z.string().max(500).trim().default(""),
  website: z.string().max(200).optional(), // honeypot — must be empty
});

export type RSVPFormValues = z.infer<typeof rsvpSchema>;

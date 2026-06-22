import { z } from "zod";

export const rsvpSchema = z
  .object({
    slug: z
      .string()
      .min(1)
      .max(100)
      .transform((s) => s.trim()),
    guestName: z
      .string()
      .min(1, "Nama wajib diisi")
      .max(100, "Nama maksimal 100 karakter")
      .transform((s) => s.trim()),
    attendance: z.enum(["HADIR", "TIDAK_HADIR", "RAGU"], {
      required_error: "Pilih kehadiran",
    }),
    guestCount: z.coerce
      .number()
      .int("Jumlah tamu harus bilangan bulat")
      .min(0, "Jumlah tamu minimal 0")
      .max(10, "Jumlah tamu maksimal 10"),
    message: z
      .string()
      .max(500, "Pesan maksimal 500 karakter")
      .optional()
      .transform((s) => (s ?? "").trim()),
    website: z
      .string()
      .max(0)
      .optional()
      .transform((s) => s ?? ""),
  })
  .refine(
    (data) => {
      if (data.attendance === "TIDAK_HADIR") {
        return data.guestCount === 0;
      }
      return true;
    },
    {
      message: "Jumlah tamu harus 0 jika tidak hadir",
      path: ["guestCount"],
    },
  );

export type RSVPFormData = z.infer<typeof rsvpSchema>;

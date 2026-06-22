"use client";

import { Button } from "@/components/ui/Button";
import { rsvpSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

type FormInput = z.input<typeof rsvpSchema>;

interface Props {
  slug: string;
  maxGuestCount: number;
}

export default function RSVPForm({ slug, maxGuestCount }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(rsvpSchema) as never,
    defaultValues: {
      slug,
      guestName: "",
      attendance: "HADIR",
      guestCount: 1,
      message: "",
      website: "",
    },
  });

  const attendance = watch("attendance");

  const onSubmit = async (data: FormInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, slug }),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Terima kasih! RSVP Anda telah terkirim.");
        setSubmitted(true);
      } else {
        toast.error(result.error || "Gagal mengirim RSVP");
      }
    } catch {
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="rsvp" className="bg-ivory px-6 py-20">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 mx-auto">
            <Send className="h-8 w-8 text-gold" />
          </div>
          <h2 className="mb-4 font-display text-3xl font-bold text-burgundy">
            Terima Kasih!
          </h2>
          <p className="text-burgundy/70">
            RSVP Anda telah kami terima. Sampai jumpa di hari bahagia!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-md">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-burgundy">
          Konfirmasi Kehadiran
        </h2>
        <p className="mb-8 text-center text-sm text-burgundy/60">
          Mohon konfirmasi kehadiran Anda sebelum acara.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Leave this empty</label>
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="guestName"
              className="mb-2 block text-sm font-medium text-burgundy"
            >
              Nama Lengkap *
            </label>
            <input
              id="guestName"
              type="text"
              maxLength={100}
              {...register("guestName")}
              className="w-full rounded-lg border border-burgundy/20 bg-white px-4 py-3 text-burgundy placeholder:text-burgundy/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              placeholder="Masukkan nama Anda"
            />
            {errors.guestName && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.guestName.message}
              </p>
            )}
          </div>

          {/* Attendance */}
          <div>
            <span className="mb-2 block text-sm font-medium text-burgundy">
              Kehadiran *
            </span>
            <div className="flex flex-wrap gap-4">
              {[
                { value: "HADIR", label: "Hadir" },
                { value: "TIDAK_HADIR", label: "Tidak Hadir" },
                { value: "RAGU", label: "Masih Ragu" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...register("attendance")}
                    className="h-4 w-4 border-burgundy/20 text-gold focus:ring-gold"
                  />
                  <span className="text-sm text-burgundy">{option.label}</span>
                </label>
              ))}
            </div>
            {errors.attendance && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.attendance.message}
              </p>
            )}
          </div>

          {/* Guest Count */}
          {attendance === "HADIR" && (
            <div>
              <label
                htmlFor="guestCount"
                className="mb-2 block text-sm font-medium text-burgundy"
              >
                Jumlah Tamu (termasuk Anda)
              </label>
              <input
                id="guestCount"
                type="number"
                min={1}
                max={maxGuestCount}
                {...register("guestCount", { valueAsNumber: true })}
                className="w-full rounded-lg border border-burgundy/20 bg-white px-4 py-3 text-burgundy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
              {errors.guestCount && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.guestCount.message}
                </p>
              )}
              <p className="mt-1 text-xs text-burgundy/40">
                Maksimal {maxGuestCount} tamu
              </p>
            </div>
          )}

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-burgundy"
            >
              Pesan & Ucapan
            </label>
            <textarea
              id="message"
              maxLength={500}
              rows={4}
              {...register("message")}
              className="w-full resize-none rounded-lg border border-burgundy/20 bg-white px-4 py-3 text-burgundy placeholder:text-burgundy/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              placeholder="Tulis pesan atau ucapan Anda..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Mengirim...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Kirim RSVP
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

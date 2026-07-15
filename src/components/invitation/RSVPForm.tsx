"use client";

import { Button } from "@/components/ui/Button";
import { rsvpSchema } from "@/lib/rsvp-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronLeft, ChevronRight, Loader2, Send, Smile, Users, MessageSquare } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

type FormInput = z.input<typeof rsvpSchema>;
const TOTAL_STEPS = 4;

export default function RSVPForm({ slug, maxGuestCount }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const formRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
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
  const guestCount = watch("guestCount");

  const nextStep = useCallback(async () => {
    const ok = await trigger();
    if (ok) {
      setDirection(1);
      setCurrentStep((s) => s + 1);
    }
  }, [trigger]);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setCurrentStep((s) => Math.max(1, s - 1));
  }, []);

  const [currentStep, setCurrentStep] = useState(1);

  const goToStep = useCallback((step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
  }, [currentStep]);

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
      <section id="rsvp" className="relative bg-ivory px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />
        <motion.div
          className="relative z-10 mx-auto max-w-md text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Check className="h-10 w-10 text-gold" />
          </motion.div>
          <h2 className="mb-4 font-display text-3xl font-bold text-burgundy">
            Terima Kasih!
          </h2>
          <p className="text-burgundy/70 leading-relaxed">
            RSVP Anda telah kami terima. Sampai jumpa di hari bahagia!
          </p>
          {/* Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-gold"
              style={{ left: `${20 + i * 12}%`, top: `${30 + (i % 3) * 10}%` }}
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
            />
          ))}
        </motion.div>
      </section>
    );
  }

  const stepVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="rsvp" className="relative bg-ivory px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold/5 blur-3xl rounded-full" />

      <div className="relative z-10 mx-auto max-w-md">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Konfirmasi Kehadiran</h2>
            <div className="ornament-line mt-4"><div className="deco-dot" /></div>
            <p className="section-subtitle mt-4">Mohon konfirmasi kehadiran Anda</p>
          </div>
        </ScrollReveal>

        {/* Step indicators */}
        <div className="mb-10 flex items-center justify-center gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goToStep(step)}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  step === currentStep
                    ? "bg-gold text-burgundy shadow-gold-sm scale-110"
                    : step < currentStep
                    ? "bg-burgundy text-ivory"
                    : "bg-burgundy/10 text-burgundy/40 border border-burgundy/20"
                }`}
              >
                {step < currentStep ? <Check className="h-3.5 w-3.5" /> : step}
              </button>
              {step < TOTAL_STEPS && (
                <div className={`h-px w-8 transition-colors duration-300 ${
                  step < currentStep ? "bg-burgundy" : "bg-burgundy/10"
                }`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
          </div>

          <div ref={formRef} className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <label className="mb-2 block text-sm font-medium text-burgundy">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <Smile className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-burgundy/30" />
                    <input
                      {...register("guestName")}
                      className="w-full rounded-xl border-2 border-burgundy/15 bg-white py-4 pl-11 pr-4 text-burgundy placeholder:text-burgundy/25 focus:border-gold focus:outline-none focus:ring-0 transition-colors"
                      placeholder="Masukkan nama Anda"
                      autoFocus
                    />
                  </div>
                  {errors.guestName && (
                    <p className="mt-2 text-sm text-red-500">{errors.guestName.message}</p>
                  )}
                  <Button type="button" onClick={nextStep} className="mt-6 w-full">
                    Lanjut <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-4 block text-sm font-medium text-burgundy">Kehadiran *</p>
                  <div className="space-y-3">
                    {[
                      { value: "HADIR", label: "Hadir", icon: Check, color: "from-green-400 to-green-500" },
                      { value: "TIDAK_HADIR", label: "Tidak Hadir", icon: ChevronRight, color: "from-burgundy/60 to-burgundy/80" },
                      { value: "RAGU", label: "Masih Ragu", icon: Smile, color: "from-gold/60 to-gold/80" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => { setValue("attendance", opt.value as "HADIR" | "TIDAK_HADIR" | "RAGU"); if (opt.value !== "HADIR") setValue("guestCount", 0); }}
                        className={`w-full rounded-xl border-2 p-4 flex items-center gap-4 transition-all duration-200 ${
                          attendance === opt.value
                            ? "border-gold bg-gold/5 shadow-gold-sm"
                            : "border-burgundy/15 bg-white hover:border-burgundy/30"
                        }`}
                      >
                        <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${opt.color} flex items-center justify-center`}>
                          <opt.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium text-burgundy">{opt.label}</span>
                        {attendance === opt.value && (
                          <Check className="ml-auto h-5 w-5 text-gold" />
                        )}
                      </button>
                    ))}
                  </div>
                  {errors.attendance && (
                    <p className="mt-2 text-sm text-red-500">{errors.attendance.message}</p>
                  )}
                  <div className="mt-6 flex gap-3">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                      <ChevronLeft className="mr-1 h-4 w-4" /> Kembali
                    </Button>
                    <Button type="button" onClick={nextStep} className="flex-1">
                      Lanjut <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-4 block text-sm font-medium text-burgundy">
                    Jumlah Tamu {attendance === "HADIR" ? "(termasuk Anda)" : ""}
                  </p>
                  {attendance === "HADIR" ? (
                    <div className="flex items-center justify-center gap-6">
                      <button
                        type="button"
                        onClick={() => setValue("guestCount", Math.max(1, guestCount - 1))}
                        className="h-12 w-12 rounded-full bg-burgundy/10 text-burgundy text-2xl font-bold hover:bg-burgundy/20 transition"
                      >
                        −
                      </button>
                      <span className="font-display text-5xl font-bold text-burgundy w-16 text-center">
                        {guestCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => setValue("guestCount", Math.min(maxGuestCount, guestCount + 1))}
                        className="h-12 w-12 rounded-full bg-burgundy/10 text-burgundy text-2xl font-bold hover:bg-burgundy/20 transition"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3 text-burgundy/60">
                      <Users className="h-6 w-6" />
                      <p className="text-sm">Tidak membawa tamu</p>
                    </div>
                  )}
                  {attendance === "HADIR" && (
                    <p className="mt-3 text-center text-xs text-burgundy/40">Maksimal {maxGuestCount} tamu</p>
                  )}
                  <div className="mt-8 flex gap-3">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                      <ChevronLeft className="mr-1 h-4 w-4" /> Kembali
                    </Button>
                    <Button type="button" onClick={nextStep} className="flex-1">
                      Lanjut <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <label className="mb-2 block text-sm font-medium text-burgundy">
                    Pesan & Ucapan
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-burgundy/30" />
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full resize-none rounded-xl border-2 border-burgundy/15 bg-white py-4 pl-11 pr-4 text-burgundy placeholder:text-burgundy/25 focus:border-gold focus:outline-none focus:ring-0 transition-colors"
                      placeholder="Tulis pesan atau ucapan Anda..."
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                  )}
                  <div className="mt-6 flex gap-3">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                      <ChevronLeft className="mr-1 h-4 w-4" /> Kembali
                    </Button>
                    <Button type="submit" className="flex-1" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengirim...</>
                      ) : (
                        <><Send className="mr-2 h-4 w-4" /> Kirim RSVP</>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
}

interface Props {
  slug: string;
  maxGuestCount: number;
}

import ScrollReveal from "@/components/animation/ScrollReveal";

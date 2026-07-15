"use client";

import { BankAccount, GiftConfig } from "@/types/invitation";
import { Check, Copy, Gift } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";

interface Props {
  gift: GiftConfig;
}

function AccountCard({ acc }: { acc: BankAccount }) {
  const [copied, setCopied] = useState(false);

  const copyAccount = async () => {
    await navigator.clipboard.writeText(acc.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <StaggerItem>
      <div className="group flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur-md border border-white/50 p-5 shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/5 group-hover:bg-gold/15 transition-colors">
            <Gift className="h-5 w-5 text-gold" />
          </div>
          <div>
            <p className="font-display font-bold text-burgundy">{acc.bankName}</p>
            <p className="font-mono text-sm text-burgundy/70 tracking-wide">{acc.accountNumber}</p>
            <p className="text-xs text-burgundy/40 mt-0.5">a.n. {acc.accountName}</p>
          </div>
        </div>
        <motion.button
          type="button"
          onClick={copyAccount}
          className="flex items-center gap-1.5 rounded-full bg-burgundy px-4 py-2 text-xs font-medium text-ivory transition hover:bg-burgundy/80"
          whileTap={{ scale: 0.95 }}
          aria-label={`Salin nomor rekening ${acc.bankName}`}
        >
          {copied ? (
            <><Check className="h-3 w-3" /> Tersalin</>
          ) : (
            <><Copy className="h-3 w-3" /> Salin</>
          )}
        </motion.button>
      </div>
    </StaggerItem>
  );
}

export default function GiftSection({ gift }: Props) {
  if (!gift.enabled || !gift.bankAccounts?.length) return null;

  return (
    <section id="gift" className="relative bg-white px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            {/* Animated gift icon */}
            <motion.div
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Gift className="h-8 w-8 text-gold" />
            </motion.div>
            <h2 className="section-title">Amplop Digital</h2>
            <p className="section-subtitle mt-3">
              Kehadiran Anda adalah hadiah terbaik. Jika berkenan memberi tanda kasih:
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="space-y-4" stagger={0.1}>
          {gift.bankAccounts!.map((acc) => (
            <AccountCard key={acc.bankName} acc={acc} />
          ))}
        </StaggerChildren>

        {gift.shippingAddress && (
          <ScrollReveal delay={0.3}>
            <div className="mt-8 rounded-2xl border border-gold/15 bg-ivory p-5 text-center">
              <Gift className="mx-auto mb-2 h-5 w-5 text-gold/60" />
              <p className="text-sm text-burgundy/70">{gift.shippingAddress}</p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

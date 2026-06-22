"use client";

import { BankAccount, GiftConfig } from "@/types/invitation";
import { Check, Copy, Gift } from "lucide-react";
import { useState } from "react";

interface Props {
  gift: GiftConfig;
}

export default function GiftSection({ gift }: Props) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  if (!gift.enabled || !gift.bankAccounts?.length) return null;

  const copyAccount = async (acc: BankAccount, idx: number) => {
    await navigator.clipboard.writeText(acc.accountNumber);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2_000);
  };

  return (
    <section id="gift" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-burgundy">
          Amplop Digital
        </h2>
        <p className="mb-12 text-center text-sm text-burgundy/60">
          Kehadiran Anda adalah hadiah terbaik. Jika berkenan memberi tanda
          kasih:
        </p>
        <div className="space-y-4">
          {gift.bankAccounts!.map((acc, i) => (
            <div
              key={acc.bankName}
              className="flex items-center justify-between rounded-lg border border-gold/20 bg-ivory p-4"
            >
              <div>
                <p className="font-display font-bold text-burgundy">
                  {acc.bankName}
                </p>
                <p className="font-mono text-sm text-burgundy/70">
                  {acc.accountNumber}
                </p>
                <p className="text-xs text-burgundy/50">
                  a.n. {acc.accountName}
                </p>
              </div>
              <button
                type="button"
                onClick={() => copyAccount(acc, i)}
                className="flex items-center gap-1 rounded-full bg-burgundy px-4 py-2 text-xs font-medium text-ivory transition hover:bg-burgundy/80"
                aria-label={`Salin nomor rekening ${acc.bankName}`}
              >
                {copiedIdx === i ? (
                  <>
                    <Check className="h-3 w-3" /> Tersalin
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" /> Salin
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
        {gift.shippingAddress && (
          <div className="mt-8 rounded-lg border border-gold/20 bg-ivory p-4 text-center">
            <Gift className="mx-auto mb-2 h-6 w-6 text-gold" />
            <p className="text-sm text-burgundy/70">{gift.shippingAddress}</p>
          </div>
        )}
      </div>
    </section>
  );
}

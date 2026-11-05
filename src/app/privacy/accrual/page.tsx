import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Accrual Privacy Policy — Syntheticae",
  description: "Privacy policy for Accrual, private financial intelligence by Syntheticae.",
};

export default function AccrualPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#edeae4] py-20 px-6 sm:px-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <Link
          href="/#apps"
          className="inline-flex items-center gap-2 text-sm text-[#edeae4]/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Syntheticae</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/10 text-white/80 border border-white/15">
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white">
            Accrual<span className="text-[#e8742a]">.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#edeae4]/70 font-serif-italic">
            Where numbers become foresight.
          </p>
        </div>

        <div className="w-full h-px bg-white/10 my-8" />

        <div className="space-y-6 text-[#edeae4]/80 text-base sm:text-lg font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white">Overview</h2>
            <p>
              Accrual is an offline-first private financial intelligence application engineered with local AES-256 encryption. Voice input, receipt OCR, bank-statement parsing, and NFC e-money balance reads are processed on-device for your personal ledger.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white">Data Collection &amp; Sovereign Storage</h2>
            <p>
              Accrual does not sell, broker, or transmit your transaction history or financial balances to third-party ad networks. All simulations, FIRE calculations, and cashflow charts execute locally on your hardware.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white">Contact</h2>
            <p>
              For questions regarding Accrual, reach the studio on Instagram at{" "}
              <a
                href="https://instagram.com/synthetic.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-[#e8742a] transition-colors"
              >
                @synthetic.ae
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

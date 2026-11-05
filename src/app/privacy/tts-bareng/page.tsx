import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "TTS Bareng Privacy Policy — Syntheticae",
  description: "Kebijakan privasi untuk TTS Bareng, permainan teka-teki silang multipemain oleh Syntheticae.",
};

export default function TTSBarengPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#edeae4] py-20 px-6 sm:px-12">
      <div className="max-w-2xl mx-auto space-y-8">
        <Link
          href="/#apps"
          className="inline-flex items-center gap-2 text-sm text-[#edeae4]/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Syntheticae</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/10 text-white/80 border border-white/15">
            <Shield className="w-3.5 h-3.5" />
            <span>Kebijakan Privasi</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white">
            TTS Bareng<span className="text-rose-500">.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#edeae4]/70 font-serif-italic">
            Kata-kata, dimainkan bareng.
          </p>
        </div>

        <div className="w-full h-px bg-white/10 my-8" />

        <div className="space-y-6 text-[#edeae4]/80 text-base sm:text-lg font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white">Ringkasan</h2>
            <p>
              TTS Bareng adalah permainan teka-teki silang multipemain modern yang bekerja secara offline-first dengan 220 bab, 2.652 kata baku KBBI, papan ko-op langsung, Arena 1v1, dan Daily Rush.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white">Data Akun &amp; Permainan</h2>
            <p>
              Data permainan solo disimpan langsung secara lokal pada perangkat Anda. Untuk fitur multipemain (papan ko-op, pertarungan Arena 1v1, dan papan peringkat nasional), data skor dan nama panggilan dikelola melalui koneksi terenkripsi Supabase. Kami tidak membagikan data pribadi Anda kepada pihak ketiga pengiklan mana pun.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white">Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan mengenai privasi di TTS Bareng, silakan hubungi studio melalui Instagram di{" "}
              <a
                href="https://instagram.com/synthetic.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-rose-400 transition-colors"
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

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "pin">("phone");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [pinIndex, setPinIndex] = useState(0);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 6) setStep("pin");
  };

  const handlePinDigit = (digit: string) => {
    if (pinIndex >= 6) return;
    const newPin = [...pin];
    newPin[pinIndex] = digit;
    setPin(newPin);
    setPinIndex(pinIndex + 1);

    if (pinIndex === 5) {
      setTimeout(() => router.push("/dashboard"), 600);
    }
  };

  const handlePinDelete = () => {
    if (pinIndex <= 0) return;
    const newPin = [...pin];
    newPin[pinIndex - 1] = "";
    setPin(newPin);
    setPinIndex(pinIndex - 1);
  };

  if (step === "pin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="w-full max-w-sm space-y-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] flex items-center justify-center text-white font-bold text-sm">L</div>
            <span className="text-lg font-semibold text-foreground">Liqid</span>
          </Link>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Entrez votre code PIN</h1>
            <p className="text-sm text-text-secondary">{phone}</p>
          </div>

          <div className="flex justify-center gap-3">
            {pin.map((d, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full border-2 transition-all ${
                  d ? "bg-accent border-accent" : "border-card-border"
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-[260px] mx-auto pt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <button
                key={n}
                onClick={() => handlePinDigit(String(n))}
                className="w-16 h-16 rounded-full bg-card-bg border border-card-border text-foreground text-xl font-medium hover:bg-[#f0f1f5] transition-colors"
              >
                {n}
              </button>
            ))}
            <div />
            <button
              onClick={() => handlePinDigit("0")}
              className="w-16 h-16 rounded-full bg-card-bg border border-card-border text-foreground text-xl font-medium hover:bg-[#f0f1f5] transition-colors"
            >
              0
            </button>
            <button
              onClick={handlePinDelete}
              className="w-16 h-16 rounded-full bg-card-bg border border-card-border text-text-secondary hover:bg-[#f0f1f5] transition-colors flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z" />
                <path d="M18 9l-6 6M12 9l6 6" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-text-tertiary mt-8">
            <Link href="/" className="text-accent hover:underline">Retour</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] flex items-center justify-center text-white font-bold text-sm">L</div>
            <span className="text-lg font-semibold text-foreground">Liqid</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Connexion</h1>
          <p className="text-sm text-text-secondary mt-2">Entrez votre numéro de téléphone</p>
        </div>

        <form onSubmit={handlePhoneSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-text-secondary mb-2">Téléphone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+224 6X XX XX XX"
              className="w-full px-4 py-3.5 rounded-xl bg-card-bg border border-card-border text-foreground placeholder-text-tertiary focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={phone.length < 6}
            className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-hover disabled:bg-card-border disabled:text-text-tertiary text-white font-medium transition-colors"
          >
            Suivant
          </button>

          <p className="text-center text-sm text-text-tertiary">
            Pas encore de compte ?{" "}
            <a href="#download" className="text-accent hover:underline">Créer un compte</a>
          </p>
        </form>
      </div>
    </div>
  );
}

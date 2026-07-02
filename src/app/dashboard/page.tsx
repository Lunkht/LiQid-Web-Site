import Link from "next/link";

const QUICK_ACTIONS = [
  { label: "Envoyer", icon: "↑", color: "from-[#ff6b35] to-[#ff8c42]" },
  { label: "Recevoir", icon: "↓", color: "from-[#22c55e] to-[#16a34a]" },
  { label: "Échanger", icon: "⇄", color: "from-[#3b82f6] to-[#2563eb]" },
  { label: "Recharger", icon: "+", color: "from-[#a855f7] to-[#7c3aed]" },
];

const TRANSACTIONS = [
  { name: "Netflix", date: "24 juin · 14:32", amount: "-15,99 €", type: "debit" },
  { name: "Amazon", date: "23 juin · 09:15", amount: "-89,90 €", type: "debit" },
  { name: "Virement reçu", date: "22 juin · 16:45", amount: "+500,00 €", type: "credit" },
  { name: "Uber", date: "21 juin · 22:30", amount: "-12,50 €", type: "debit" },
  { name: "Spotify", date: "21 juin · 00:00", amount: "-9,99 €", type: "debit" },
];

const CRYPTO = [
  { name: "Bitcoin", symbol: "BTC", price: "42 150 €", change: "+2.4%", up: true },
  { name: "Ethereum", symbol: "ETH", price: "2 850 €", change: "-1.2%", up: false },
  { name: "Solana", symbol: "SOL", price: "145 €", change: "+5.8%", up: true },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-card-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] flex items-center justify-center text-white font-bold">L</div>
            <div>
              <p className="text-xs text-text-tertiary">Bonjour,</p>
              <p className="text-sm font-medium text-foreground">Lunkht</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-text-secondary hover:text-foreground transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>
            <Link href="/" className="text-xs text-text-tertiary hover:text-text-secondary transition-colors">Déconnexion</Link>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* Balance */}
        <div className="space-y-1">
          <p className="text-xs text-text-tertiary uppercase tracking-wider">Solde total</p>
          <p className="text-5xl font-light text-foreground">00 €</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-success">+0,00 €</span>
            <span className="text-text-tertiary">aujourd&apos;hui</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4">
          {QUICK_ACTIONS.map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-card-bg border border-card-border hover:border-card-border/80 transition-colors min-w-[80px]"
            >
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center text-white text-lg`}>
                {action.icon}
              </div>
              <span className="text-xs text-text-secondary">{action.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Transactions */}
          <div className="lg:col-span-2 rounded-2xl border border-card-border bg-card-bg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-semibold text-foreground">Transactions récentes</h2>
              <button className="text-xs text-accent hover:underline">Tout voir</button>
            </div>
            <div className="space-y-4">
              {TRANSACTIONS.map((tx) => (
                <div key={tx.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm ${
                      tx.type === "credit" ? "bg-success/10 text-success" : "bg-[#f0f1f5] text-text-secondary"
                    }`}>
                      {tx.type === "credit" ? "↓" : "↑"}
                    </div>
                    <div>
                      <p className="text-sm text-foreground">{tx.name}</p>
                      <p className="text-xs text-text-tertiary">{tx.date}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-medium ${
                    tx.type === "credit" ? "text-success" : "text-foreground"
                  }`}>{tx.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Crypto Widget */}
          <div className="rounded-2xl border border-card-border bg-card-bg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-semibold text-foreground">Crypto</h2>
              <span className="text-xs text-text-tertiary">Portefeuille</span>
            </div>
            <div className="space-y-4">
              {CRYPTO.map((asset) => (
                <div key={asset.symbol} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground">{asset.name}</p>
                    <p className="text-xs text-text-tertiary">{asset.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground">{asset.price}</p>
                    <p className={`text-xs ${asset.up ? "text-success" : "text-[#ef4444]"}`}>
                      {asset.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-2">
              <button className="flex-1 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-medium transition-colors">Acheter</button>
              <button className="flex-1 py-2.5 rounded-xl border border-card-border text-foreground text-xs font-medium hover:bg-[#f0f1f5] transition-colors">Vendre</button>
            </div>
          </div>
        </div>

        {/* Cards Preview */}
        <div className="rounded-2xl border border-card-border bg-card-bg p-6">
          <h2 className="text-base font-semibold text-foreground mb-4">Mes cartes</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[
              { name: "Standard", number: "•••• 4721", scheme: "visa", color: "from-zinc-700 to-zinc-900" },
              { name: "Premium", number: "•••• 8902", scheme: "mastercard", color: "from-[#ff6b35]/80 to-[#ff8c42]/60" },
            ].map((card) => (
              <div
                key={card.number}
                className={`shrink-0 w-64 h-40 rounded-2xl bg-gradient-to-br ${card.color} p-5 flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="absolute top-3 right-4">
                  <svg width="30" height="20" viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="white" fillOpacity="0.2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/60">{card.name}</p>
                  <p className="text-lg text-white tracking-widest mt-2">{card.number}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-white/60">LUNKHT</p>
                  <p className="text-xs text-white/60">09/28</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

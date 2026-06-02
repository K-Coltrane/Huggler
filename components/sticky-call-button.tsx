"use client"

import { Phone } from "lucide-react"

export function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <a
        href="tel:+17077683190"
        className="flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 font-semibold text-lg shadow-lg hover:bg-primary/90 transition-colors"
      >
        <Phone className="w-5 h-5" />
        Call Now: (707) 768-3190
      </a>
    </div>
  )
}

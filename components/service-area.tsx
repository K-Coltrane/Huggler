import { MapPin } from "lucide-react"

const areas = [
  { name: "Fortuna", description: "Our home base" },
  { name: "Eureka", description: "Humboldt's largest city" },
  { name: "Arcata", description: "University town" },
  { name: "McKinleyville", description: "Growing community" },
  { name: "Ferndale", description: "Victorian village" },
  { name: "Rio Dell", description: "Eel River valley" },
]

export function ServiceArea() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-3">Service Area</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Proudly Serving Humboldt County
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
            Based in Fortuna, we provide construction services throughout the greater Humboldt County area.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {areas.map((area) => (
            <div 
              key={area.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 text-center hover:bg-primary-foreground/15 transition-colors"
            >
              <MapPin className="w-6 h-6 mx-auto mb-2 text-primary-foreground/80" />
              <p className="font-bold text-lg">{area.name}</p>
              <p className="text-sm text-primary-foreground/70 mt-1">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary-foreground/80">
            {"Don't see your area? We may still be able to help! "}
            <a href="tel:+17077683190" className="font-semibold text-primary-foreground hover:underline">
              Give us a call
            </a>
            {" to discuss your project."}
          </p>
        </div>
      </div>
    </section>
  )
}

import { Home, Building2, Hammer, HardHat, Wrench, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Home Building",
    description: "Custom home construction from foundation to finish, built to your specifications."
  },
  {
    icon: Hammer,
    title: "Remodeling",
    description: "Kitchen, bathroom, and whole-home renovations that transform your space."
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Professional commercial building services for businesses of all sizes."
  },
  {
    icon: HardHat,
    title: "Concrete Work",
    description: "Driveways, foundations, patios, and all types of concrete projects."
  },
  {
    icon: Wrench,
    title: "Repairs & Maintenance",
    description: "Expert repair services to keep your property in top condition."
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Licensed electrical work for residential and commercial properties."
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From new construction to repairs, we handle projects of all sizes with the same dedication to quality craftsmanship.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group bg-card hover:bg-card/80 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

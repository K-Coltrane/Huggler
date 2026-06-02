import { CheckCircle } from "lucide-react"

const highlights = [
  "Locally owned and operated since 1996",
  "Fully licensed and insured contractor",
  "Residential and commercial expertise",
  "Quality craftsmanship on every project",
  "Transparent pricing with no hidden fees",
  "Outstanding customer service"
]

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                alt="Construction team working together on site"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-4xl font-bold">28+</p>
              <p className="text-sm opacity-90">Years of<br />Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              Building Excellence Since 1996
            </h2>
            
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Huggler Construction has been proudly serving Humboldt County since 1996. Founded by Dick Huggler, our company has grown from a small local operation to one of the most trusted general contractors in the region.
              </p>
              <p>
                We specialize in residential and small commercial construction projects, bringing the same attention to detail and commitment to quality to every job, regardless of size.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <p className="text-muted-foreground italic text-lg leading-relaxed">
                &ldquo;We treat every project like it&apos;s our own home. That&apos;s the Huggler difference.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">DH</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dick Huggler</p>
                  <p className="text-sm text-muted-foreground">Owner & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

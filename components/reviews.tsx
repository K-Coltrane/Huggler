import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Sarah M.",
    location: "Fortuna, CA",
    rating: 5,
    text: "Huggler Construction did an amazing job on our kitchen remodel. Professional, on time, and the quality exceeded our expectations. Highly recommend!",
    project: "Kitchen Remodel"
  },
  {
    name: "Michael R.",
    location: "Eureka, CA",
    rating: 5,
    text: "We hired Huggler to build our custom home and couldn&apos;t be happier. Dick and his team were fantastic to work with throughout the entire process.",
    project: "Custom Home Build"
  },
  {
    name: "Jennifer L.",
    location: "Arcata, CA",
    rating: 5,
    text: "Great experience from start to finish. They communicated clearly, stayed within budget, and delivered quality work. Will definitely use them again.",
    project: "Bathroom Renovation"
  },
  {
    name: "David K.",
    location: "McKinleyville, CA",
    rating: 5,
    text: "Professional, reliable, and skilled craftsmen. Huggler Construction transformed our outdated space into something beautiful. Thank you!",
    project: "Home Addition"
  }
]

export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {"Don't just take our word for it — hear from homeowners who've trusted us with their projects."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>
                
                <p className="text-foreground leading-relaxed mb-6">
                  {review.text}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {review.project}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/search?q=huggler+construction+fortuna+ca+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            See more reviews on Google
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

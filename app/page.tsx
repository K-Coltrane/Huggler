import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { ServiceArea } from "@/components/service-area"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { StickyCallButton } from "@/components/sticky-call-button"

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Reviews />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  )
}

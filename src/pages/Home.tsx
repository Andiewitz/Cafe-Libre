import { Hero } from '@/components/sections/Hero'
import { SignatureCoffees } from '@/components/sections/SignatureCoffees'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { Newsletter } from '@/components/sections/Newsletter'

export function Home() {
  return (
    <>
      <Hero />
      <SignatureCoffees />
      <AboutPreview />
      <Testimonials />
      <Newsletter />
    </>
  )
}

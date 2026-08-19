import { Hero } from '@/components/sections/Hero'
import { SignatureCoffees } from '@/components/sections/SignatureCoffees'
import { Testimonials } from '@/components/sections/Testimonials'
import { Newsletter } from '@/components/sections/Newsletter'

export function Home() {
  return (
    <>
      <Hero />
      <SignatureCoffees />
      <Testimonials />
      <Newsletter />
    </>
  )
}

import { Hero } from '@/components/sections/Hero'
import { SignatureCoffees } from '@/components/sections/SignatureCoffees'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { Newsletter } from '@/components/sections/Newsletter'
import { WaveDivider } from '@/components/common/WaveDivider'

export function Home() {
  return (
    <>
      <Hero />
      <WaveDivider />
      <SignatureCoffees />
      <AboutPreview />
      <Testimonials />
      <Newsletter />
    </>
  )
}

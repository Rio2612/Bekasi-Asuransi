import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import Stats       from '@/components/Stats'
import Products    from '@/components/Products'
import WhyUs       from '@/components/WhyUs'
import CTASection  from '@/components/CTASection'
import Footer      from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <WhyUs />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

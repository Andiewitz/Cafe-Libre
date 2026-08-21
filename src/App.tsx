import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { BackToTop } from '@/components/common/BackToTop'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { Home } from '@/pages/Home'
import { Menu } from '@/pages/Menu'
import { About } from '@/pages/About'
import { Location } from '@/pages/Location'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflowX = 'hidden'
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

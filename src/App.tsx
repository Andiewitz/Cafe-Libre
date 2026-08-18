import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import { ScrollProgress } from '@/components/common/ScrollProgress'
import { BackToTop } from '@/components/common/BackToTop'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { LoadingFallback } from '@/components/common/LoadingFallback'

const Home = lazy(() => import('@/pages/Home').then((mod) => ({ default: mod.Home })))
const Menu = lazy(() => import('@/pages/Menu').then((mod) => ({ default: mod.Menu })))
const About = lazy(() => import('@/pages/About').then((mod) => ({ default: mod.About })))
const Location = lazy(() => import('@/pages/Location').then((mod) => ({ default: mod.Location })))
const Contact = lazy(() => import('@/pages/Contact').then((mod) => ({ default: mod.Contact })))
const NotFound = lazy(() => import('@/pages/NotFound').then((mod) => ({ default: mod.NotFound })))

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
      <ScrollProgress />
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/location" element={<Location />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

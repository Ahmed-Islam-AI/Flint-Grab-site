import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import { Masthead } from './components/Masthead'
import { Spine } from './components/Spine'
import { Hero } from './components/Hero'
import { Footer } from './components/Footer'
import { Problem } from './sections/Problem'
import { ReelSection } from './sections/ReelSection'
import { Segments } from './sections/Segments'
import { Extension } from './sections/Extension'
import { AppTour } from './sections/AppTour'
import { Trust } from './sections/Trust'
import { Pricing } from './sections/Pricing'
import { Download } from './sections/Download'
import { Faq } from './sections/Faq'

function Page() {
  return (
    <>
      <Masthead />
      <Spine />
      <main>
        <Hero />
        <Problem />
        <ReelSection />
        <Segments />
        <Extension />
        <AppTour />
        <Trust />
        <Pricing />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>
)

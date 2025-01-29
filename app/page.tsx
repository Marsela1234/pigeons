import { Header } from '@/components/layout/header'
import { CTA } from '@/components/sections/cta'
import { Features } from '@/components/sections/features'
import { Hero } from '@/components/sections/hero'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <Hero language='en' />
        <Features language='en' />
        <CTA language='en' />
      </main>
    </div>
  )
}

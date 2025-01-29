import { Header } from '@/components/layout/header'
import { Content } from '@/components/sections/content'
import { CTA } from '@/components/sections/cta'
import { Hero } from '@/components/sections/hero'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main>
        <Hero />
        <Content />
        <CTA />
      </main>
    </div>
  )
}

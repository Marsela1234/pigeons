import { Header } from '@/components/layout/header'
import { RegulationsContent } from '@/components/sections/regulations-content'

export default function Regulations() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto'>
          <RegulationsContent language='en' />
        </div>
      </main>
    </div>
  )
}

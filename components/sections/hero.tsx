import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className='relative h-[500px] bg-gray-100'>
      <Image
        src=''
        alt='Fast Pigeons Event'
        fill
        className='object-cover'
        priority
      />
      <div className='absolute inset-0 bg-black/40'>
        <div className='container mx-auto h-full flex flex-col justify-center items-start px-4'>
          <div className='text-white max-w-2xl'>
            <span className='text-xl mb-2 block'>VIP RACE</span>
            <h1 className='text-5xl font-bold mb-6'>Fast Pigeons Rimini</h1>
            <Button variant='secondary' size='lg'>
              REGOLAMENTO E INFORMAZIONI
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

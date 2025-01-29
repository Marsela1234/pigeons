import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  language: 'en' | 'it'
}

export function Hero({ language }: HeroProps) {
  const content = {
    en: {
      subtitle: 'FAST PIGEONS RIMINI',
      title: 'Pigeon Racing Excellence',
      cta: 'VIEW REGULATIONS',
    },
    it: {
      subtitle: 'FAST PIGEONS RIMINI',
      title: 'Eccellenza nelle Gare di Piccioni',
      cta: 'VEDI REGOLAMENTO',
    },
  }

  const t = content[language]

  return (
    <section className='relative h-[600px] bg-gray-100'>
      <Image
        src='https://sjc.microlink.io/kXMVYC72kKZnzZ5Wt6TdZQzsVkAaL5eZQ_XBAKb_sL4dTHu7kP8BYZUxFGDK-d9p4dIGyV09X_MhO3-0jetGsA.jpeg'
        alt='Fast Pigeons Event'
        fill
        className='object-cover'
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/30'>
        <div className='container mx-auto h-full flex flex-col justify-center items-start px-4'>
          <div className='text-white max-w-2xl space-y-6'>
            <span className='text-xl font-semibold bg-primary text-white px-4 py-1 rounded-full inline-block'>
              {t.subtitle}
            </span>
            <h1 className='text-5xl sm:text-6xl font-bold leading-tight'>
              {t.title}
            </h1>
            <p className='text-xl text-gray-200 max-w-lg'>
              Join the most prestigious pigeon racing event in Italy and compete
              for glory.
            </p>
            <Button size='lg' asChild>
              <Link
                href={language === 'en' ? '/regulations' : '/it/regulations'}
              >
                {t.cta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

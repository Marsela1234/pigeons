import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CTAProps {
  language: 'en' | 'it'
}

export function CTA({ language }: CTAProps) {
  const content = {
    en: {
      title: 'Ready to Participate?',
      description:
        'Join the Fast Pigeons Rimini event and be part of this exciting competition.',
      cta: 'Register Now',
    },
    it: {
      title: 'Pronto a Partecipare?',
      description:
        "Unisciti all'evento Fast Pigeons Rimini e fai parte di questa emozionante competizione.",
      cta: 'Registrati Ora',
    },
  }

  const t = content[language]

  return (
    <section className='py-16 bg-primary text-white'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-4'>{t.title}</h2>
        <p className='text-xl mb-8 max-w-2xl mx-auto'>{t.description}</p>
        <Button size='lg' variant='secondary' asChild>
          <Link href={language === 'en' ? '/contact' : '/it/contact'}>
            {t.cta}
          </Link>
        </Button>
      </div>
    </section>
  )
}

import { Header } from '@/components/layout/header'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import Image from 'next/image'

const sponsors = [
  {
    name: 'Sponsor 1',
    logo: '/placeholder.svg?text=Sponsor1',
    description: 'Leading provider of pigeon racing equipment and supplies.',
    website: 'https://example.com',
  },
  {
    name: 'Sponsor 2',
    logo: '/placeholder.svg?text=Sponsor2',
    description: 'Premium pigeon feed and nutrition solutions.',
    website: 'https://example.com',
  },
  {
    name: 'Sponsor 3',
    logo: '/placeholder.svg?text=Sponsor3',
    description: 'Professional pigeon loft systems and technology.',
    website: 'https://example.com',
  },
]

export default function Sponsors() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto space-y-12'>
          <div className='text-center space-y-4'>
            <h1 className='text-3xl font-bold'>Our Sponsors</h1>
            <p className='text-muted-foreground'>
              We are proud to partner with leading companies in the pigeon
              racing industry
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className='flex flex-col items-center space-y-4 p-6 rounded-lg border bg-card text-card-foreground shadow-sm'
              >
                <Image
                  src={sponsor.logo || '/placeholder.svg'}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className='object-contain'
                />
                <h2 className='text-xl font-semibold'>{sponsor.name}</h2>
                <p className='text-center text-muted-foreground'>
                  {sponsor.description}
                </p>
                <Button
                  variant='outline'
                  className='w-full'
                  // onClick={() => window.open(sponsor.website, '_blank')}
                >
                  Visit Website
                </Button>
              </div>
            ))}
          </div>

          <div className='bg-muted p-8 rounded-lg space-y-6'>
            <h2 className='text-2xl font-bold text-center'>Become a Sponsor</h2>
            <p className='text-center text-muted-foreground max-w-2xl mx-auto'>
              Join our growing list of sponsors and support the exciting world
              of pigeon racing. Get your brand in front of an engaged
              international audience.
            </p>
            <div className='flex justify-center'>
              <Button className='gap-2'>
                <Mail className='h-4 w-4' />
                Contact for Sponsorship
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

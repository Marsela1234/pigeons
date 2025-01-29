import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Calendar, MapPin } from 'lucide-react'

interface FeaturesProps {
  language: 'en' | 'it'
}

export function Features({ language }: FeaturesProps) {
  const content = {
    en: {
      title: 'Event Highlights',
      features: [
        {
          icon: Award,
          title: '€175,000 Prize Pool',
          description: 'Compete for a substantial prize pool, guaranteed 100%',
        },
        {
          icon: MapPin,
          title: 'Rimini, Italy',
          description:
            'Join us in the beautiful coastal city of Rimini for this prestigious event',
        },
        {
          icon: Calendar,
          title: '2024-2025 Season',
          description:
            'Participate in the upcoming season starting from June 10, 2024',
        },
      ],
    },
    it: {
      title: "Punti Salienti dell'Evento",
      features: [
        {
          icon: Award,
          title: 'Montepremi di €175.000',
          description:
            'Competi per un sostanzioso montepremi, garantito al 100%',
        },
        {
          icon: MapPin,
          title: 'Rimini, Italia',
          description:
            'Unisciti a noi nella bellissima città costiera di Rimini per questo prestigioso evento',
        },
        {
          icon: Calendar,
          title: 'Stagione 2024-2025',
          description:
            'Partecipa alla prossima stagione che inizia dal 10 giugno 2024',
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12'>{t.title}</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {t.features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <feature.icon className='h-6 w-6 text-primary' />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

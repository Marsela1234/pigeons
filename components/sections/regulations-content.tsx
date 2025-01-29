import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, Info, MapPin } from 'lucide-react'

interface RegulationsContentProps {
  language: 'en' | 'it'
}

export function RegulationsContent({ language }: RegulationsContentProps) {
  const content = {
    en: {
      title: 'FAST PIGEONS REGULATIONS 2024-2025 RIMINI-ITALY',
      prizeMoney: '175,000 € PRIZE MONEY',
      warning: 'PARTICIPANTS MUST READ ALL REGULATIONS BEFORE PARTICIPATING',
      association: 'FAST PIGEONS RIMINI',
      address: 'SPORTS ASSOCIATION, VIA PORTO PALOS, 49/A 47922 RIMINI -RN-',
      vat: 'VAT IT 04 414 200 404',
      president: 'PRESIDENT ERVIN LARO',
      newEdition: 'The new 2024-2025 edition starts soon.',
      pigeonEntry: 'PIGEON ENTRY IN LOFT 10/06/24 – 30/09/24',
      contactInfo:
        'For those interested in participating, please contact our agents for their country, or our collaborators.',
      collectionDates: 'PIGEON COLLECTION DATES:',
      participantInfo:
        'EACH PARTICIPANT CAN CONTACT THE AGENT FOR THEIR COUNTRY TO BETTER ORGANIZE',
      countries:
        'GERMANY, NETHERLANDS, BELGIUM 15/06/24 – 20/07/24 – 17/08/24 – 14/09/24',
      otherCountries:
        'FOR OTHER COUNTRIES, THOSE INTERESTED IN PARTICIPATING ARE REQUESTED TO CONTACT FAST PIGEONS AGENTS FOR THEIR COUNTRY.',
      guaranteedPrizes: '175,000 € TOTAL PRIZES GUARANTEED 100%',
    },
    it: {
      title: 'REGOLAMENTO FAST PIGEONS 2024-2025 RIMINI-ITALIA',
      prizeMoney: '175.000 € MONTEPREMI',
      warning:
        'I PARTECIPANTI DEVONO LEGGERE TUTTO IL REGOLAMENTO PRIMA DI PARTECIPARE',
      association: 'FAST PIGEONS RIMINI',
      address: 'ASSOCIAZIONE SPORTIVA, VIA PORTO PALOS, 49/A 47922 RIMINI -RN-',
      vat: 'P.IVA IT 04 414 200 404',
      president: 'PRESIDENTE ERVIN LARO',
      newEdition: 'La nuova edizione 2024-2025 parte a breve.',
      pigeonEntry: 'ENTRATA PICCIONI IN COLOMBAIA 10/06/24 – 30/09/24',
      contactInfo:
        'Per chi fosse interessato a partecipare, è pregato di contattare i nostri agenti per il loro paese, o i nostri collaboratori.',
      collectionDates: 'DATE PER LA RACCOLTA PICCIONI:',
      participantInfo:
        "OGNI PARTECIPANTE PUÒ CONTATTARE L'AGENTE PER IL SUO PAESE PER ORGANIZZARSI AL MEGLIO",
      countries:
        'GERMANIA, OLANDA, BELGIO 15/06/24 – 20/07/24 – 17/08/24 – 14/09/24',
      otherCountries:
        'PER GLI ALTRI PAESI, CHI È INTERESSATO A PARTECIPARE È PREGATO DI CONTATTARE GLI AGENTI DEL FAST PIGEONS PER IL LORO PAESE.',
      guaranteedPrizes: '175.000 € TOTALE PREMI GARANTITI AL 100%',
    },
  }

  const t = content[language]

  return (
    <div className='space-y-8'>
      <div className='text-center space-y-4'>
        <h1 className='text-3xl font-bold'>{t.title}</h1>
        <p className='text-2xl font-semibold text-primary'>{t.prizeMoney}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Info className='h-5 w-5' />
            {language === 'en'
              ? 'Important Information'
              : 'Informazioni Importanti'}
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p className='font-semibold text-red-600'>{t.warning}</p>
          <div>
            <p>{t.association}</p>
            <p>{t.address}</p>
            <p>{t.vat}</p>
            <p>{t.president}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <CalendarDays className='h-5 w-5' />
            {language === 'en' ? 'Event Details' : "Dettagli dell'Evento"}
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p>{t.newEdition}</p>
          <p className='font-semibold'>{t.pigeonEntry}</p>
          <p>{t.contactInfo}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <MapPin className='h-5 w-5' />
            {t.collectionDates}
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <p>{t.participantInfo}</p>
          <p>{t.countries}</p>
          <p>{t.otherCountries}</p>
        </CardContent>
      </Card>

      <div className='text-center'>
        <p className='text-2xl font-semibold text-primary'>
          {t.guaranteedPrizes}
        </p>
      </div>

      <div className='flex justify-center'>
        <Button size='lg'>
          {language === 'en'
            ? 'Download Full Regulations'
            : 'Scarica il Regolamento Completo'}
        </Button>
      </div>
    </div>
  )
}

import { Header } from '@/components/layout/header'

export default function Regulations() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto space-y-8'>
          <div className='text-center space-y-4'>
            <h1 className='text-3xl font-bold'>
              FAST PIGEONS REGULATIONS 2024-2025 RIMINI-ITALY
            </h1>
            <p className='text-2xl font-semibold'>175,000 € PRIZE MONEY</p>
          </div>

          <section className='space-y-6'>
            <h2 className='text-2xl font-bold'>Regulations</h2>
            <p className='font-semibold'>
              PARTICIPANTS MUST READ ALL REGULATIONS BEFORE PARTICIPATING
            </p>

            <div className='space-y-4'>
              <p>FAST PIGEONS RIMINI</p>
              <p>SPORTS ASSOCIATION, VIA PORTO PALOS, 49/A 47922 RIMINI -RN-</p>
              <p>VAT IT 04 414 200 404</p>
              <p>PRESIDENT ERVIN LARO</p>
            </div>

            <div className='space-y-4'>
              <p>
                The new 2024-2025 edition starts soon. PIGEON ENTRY IN LOFT
                10/06/24 – 30/09/24
              </p>
              <p>
                For those interested in participating, please contact our agents
                for their country, or our collaborators.
              </p>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-bold'>PIGEON COLLECTION DATES:</h3>
              <p>
                EACH PARTICIPANT CAN CONTACT THE AGENT FOR THEIR COUNTRY TO
                BETTER ORGANIZE
              </p>
              <p>
                GERMANY, NETHERLANDS, BELGIUM 15/06/24 – 20/07/24 – 17/08/24 –
                14/09/24
              </p>
              <p>
                FOR OTHER COUNTRIES, THOSE INTERESTED IN PARTICIPATING ARE
                REQUESTED TO CONTACT FAST PIGEONS AGENTS FOR THEIR COUNTRY.
              </p>
            </div>

            <div className='space-y-4'>
              <p>FAST PIGEONS REGULATIONS 2024-2025 RIMINI-ITALY</p>
              <p>175,000 € TOTAL PRIZES GUARANTEED 100%</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

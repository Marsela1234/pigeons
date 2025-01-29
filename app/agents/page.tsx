import { Header } from '@/components/layout/header'

const agents = [
  {
    section: 'INTERNATIONAL',
    name: 'Cimpean Sebastian',
    tel: '+39 3401666131',
    email: 'sebastian.cimpean@gmail.com',
  },
  {
    section: 'ITALIA',
    name: 'Ervin Laro',
    tel: '+39 3408100605',
  },
  {
    section: 'ROMANIA',
    name: 'Bibi Stefanescu',
    tel: '+40 723345543',
    email: 'pigeonbyby@yahoo.com',
  },
  {
    section: 'ALBANIA',
    name: 'Elio Zeno',
    tel: '+355 0692903225',
  },
  {
    section: 'GERMANY',
    name: 'Werner A. Waldow',
  },
]

export default function Agents() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='container mx-auto px-4 py-12'>
        <div className='max-w-2xl mx-auto space-y-12'>
          {agents.map((agent) => (
            <section key={agent.name} className='space-y-4'>
              <h2 className='text-2xl font-bold'>{agent.section}</h2>
              <div className='space-y-2'>
                <p className='font-semibold'>{agent.name}</p>
                {agent.tel && (
                  <p>
                    <span className='font-medium'>Tel:</span> {agent.tel}
                  </p>
                )}
                {agent.email && (
                  <p>
                    <span className='font-medium'>E-mail:</span> {agent.email}
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

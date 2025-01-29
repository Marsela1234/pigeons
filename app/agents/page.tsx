import { AgentCard } from '@/components/agent-card'
import { Header } from '@/components/layout/header'
import { agents } from '@/data/agents'

export default function Agents() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto space-y-12'>
          <div className='text-center space-y-4'>
            <h1 className='text-4xl font-bold'>Our Agents</h1>
            <p className='text-xl text-muted-foreground'>
              Contact our international network of agents for Fast Pigeons
              Rimini
            </p>
          </div>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {agents.map((agent) => (
              <AgentCard key={agent.name} {...agent} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

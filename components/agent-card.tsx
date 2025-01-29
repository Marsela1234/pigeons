import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

interface AgentCardProps {
  name: string
  section: string
  tel?: string
  email?: string
  country: string
}

export function AgentCard({
  name,
  section,
  tel,
  email,
  country,
}: AgentCardProps) {
  return (
    <Card className='overflow-hidden'>
      <CardHeader className='pb-2'>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-lg font-semibold'>{name}</CardTitle>
          <Image
            src={`https://flagcdn.com/w40/${country}.png`}
            width={30}
            height={20}
            alt={`Flag of ${section}`}
            className='rounded'
          />
        </div>
        <p className='text-sm text-muted-foreground'>{section}</p>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          {tel && (
            <div className='flex items-center space-x-2'>
              <Phone className='h-4 w-4 text-muted-foreground' />
              <span className='text-sm'>{tel}</span>
            </div>
          )}
          {email && (
            <div className='flex items-center space-x-2'>
              <Mail className='h-4 w-4 text-muted-foreground' />
              <span className='text-sm'>{email}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

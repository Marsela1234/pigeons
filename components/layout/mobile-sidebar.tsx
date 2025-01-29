'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useLanguage } from '@/contexts/language-context'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navigation = {
  en: [
    { name: 'HOME', path: '/' },
    { name: 'REGULATIONS', path: '/regulations' },
    { name: 'AGENTS', path: '/agents' },
    { name: 'SPONSORS', path: '/sponsors' },
    { name: 'CONTACT', path: '/contact' },
  ],
  it: [
    { name: 'HOME', path: '/it' },
    { name: 'REGOLAMENTO', path: '/it/regulations' },
    { name: 'AGENTI', path: '/it/agents' },
    { name: 'SPONSORS', path: '/it/sponsors' },
    { name: 'CONTATTI', path: '/it/contact' },
  ],
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu className='h-6 w-6' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
        <nav className='flex flex-col gap-4'>
          {navigation[language].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`px-2 py-1 rounded-md transition-colors ${
                pathname === item.path
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

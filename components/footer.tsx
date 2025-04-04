import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { Contact, Group, GroupIcon, HeartIcon } from 'lucide-react'
import { Icons } from './icons'
import { FaPeopleCarry } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="border-t w-full h-20">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <p className="text-center">
            Brought to you by the{' '}
            <Link className="underline underline-offset-2" href="https://github.com/centennial-college-oer-lab">
              Centennial College OER Lab
            </Link>
            .
          </p>
        </div>
        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  )
}

export function FooterButtons() {
  return (
    <>
      <Link href="/about" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        About
      </Link>
      <Link href="/contact" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
        <Contact className="h-4 w-4 mr-2 fill-current" />
        Contact
      </Link>
      <Link href="/contact" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
        <FaPeopleCarry className="h-4 w-4 mr-2 fill-current" />
        The Team
      </Link>
      <Link
        href="https://github.com/Centennial-College-OER-Lab/student-site"
        className={buttonVariants({ variant: 'outline', size: 'sm' })}
      >
        <Icons.gitHub className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Source
      </Link>
    </>
  )
}

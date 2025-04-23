import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { FileCheck2, HeartIcon, Users } from 'lucide-react'
import { Icons } from './icons'

export function Footer() {
  return (
    <footer className="border-t w-full p-5">
      <div className="container flex items-center flex-col-reverse md:flex-row sm:justify-between justify-center sm:gap-2 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        {/* <Image src="/logo.png" alt={'logo'} width={300} height={300} quality={90} className="object-cover h-24 w-24" /> */}
        <div className="flex gap-3 max-w-96 flex-col">
          <p className="">
            Content on this site is licensed under{' '}
            <Link className="underline" href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1">
              CC BY-NC-SA 4.0
            </Link>
            , except where otherwise noted. Icons by{' '}
            <Link className="underline" href="https://fontawesome.com/">
              Font Awesome
            </Link>
            .
          </p>
          <div className="flex gap-2 text-secondary-foreground/80">
            <Icons.cc className="h-8 w-8" />
            <Icons.by className="h-8 w-8" />
            <Icons.nc className="h-8 w-8" />
            <Icons.sa className="h-8 w-8" />
          </div>
        </div>
        <div className="gap-2 md:gap-4 flex flex-wrap md:grid md:grid-cols-2">
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
      <Link href="/about#mission" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
        <FileCheck2 className="h-4 w-4 mr-2" />
        Mission
      </Link>
      <Link href="/about#team" className={buttonVariants({ variant: 'outline', size: 'sm' })}>
        <Users className="h-4 w-4 mr-2" />
        Team
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

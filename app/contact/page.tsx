import { Button } from '@/components/ui/button'
import { BookOpen, GraduationCap, Mail, MapPin, Users } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Centennial OER Lab - Contact Us',
}

export default async function ContactPage() {
  return (
    <div className="sm:min-h-[85.5vh] min-h-[85vh] flex flex-col justify-center items-center px-2 sm:py-8 py-12">
      <div className="mb-7 flex flex-col gap-2 max-w-3xl">
        <h1 className="text-3xl font-extrabold">Contact</h1>
        <p className="text-muted-foreground">
          A collaborative space where students create open educational resources, develop innovative projects, and share
          knowledge through documentation and blog posts.
        </p>
      </div>
      <section>
        <div className="rounded-xl border bg-card p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Get Involved</h2>
              <p className="mt-4 text-muted-foreground">
                Interested in joining the OER Lab or collaborating on a project? We&apos;re always looking for
                passionate students to join our team.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
                  <p>oerlab@centennialcollege.ca</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-muted-foreground" />
                  <p>Innovation Hub, Building A, Room A204</p>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="mr-3 h-5 w-5 text-muted-foreground" />
                  <p>Open Hours: Monday-Friday, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/join">
                    <Users className="mr-2 h-4 w-4" />
                    Join Our Team
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="OER Lab workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

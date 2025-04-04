import { buttonVariants } from '@/components/ui/button'
import { page_routes } from '@/lib/routes-config'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, GraduationCap, MoveUpRightIcon, TerminalSquareIcon, Users } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      {/* Our Mission Section */}
      <section className="mb-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We're dedicated to making education more accessible, engaging, and effective through student-led innovation.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-fit">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 text-lg">Create</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Develop high-quality open educational resources that are freely accessible to all students and
                educators.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-fit">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 text-lg">Collaborate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Foster a collaborative environment where students from different programs can work together on
                innovative projects.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto rounded-full bg-primary/10 p-4 w-fit">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 text-lg">Educate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Share knowledge and skills through comprehensive documentation, tutorials, and educational content.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

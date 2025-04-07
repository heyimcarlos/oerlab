import Link from 'next/link'
import { BookOpen, Code, FileText, GraduationCap, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { labMembers } from '@/lib/lab-members'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AboutPage() {
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh]">
      <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 rounded-md">
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-black to-white opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About us</h2>
            <p className="mt-4 text-lg sm:text-xl/8 font-medium text-pretty text-gray-400">
              The Open Educational Resources (OER) Lab at Centennial College is a student-driven initiative focused on
              creating free and accessible educational materials.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                Open Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We create freely accessible educational materials for students and educators.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Code className="mr-2 h-5 w-5 text-primary" />
                Student Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We develop innovative solutions and applications to solve real-world problems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <FileText className="mr-2 h-5 w-5 text-primary" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We create comprehensive guides and documentation for our projects and resources.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                Skill Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We provide opportunities for students to gain practical experience and enhance their skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mb-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We&apos;re dedicated to making education more accessible, engaging, and effective through student-led
            innovation.
          </p>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
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

      <section>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
          <p className="mt-4 text-muted-foreground">
            Our diverse team of talented students brings together expertise from various programs at Centennial College.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {labMembers.map((member, i) => (
            <Card key={i}>
              <CardHeader className="pb-4">
                <div className="flex justify-center">
                  <Avatar key={member.name} className={`inline-block border-2 w-24 h-24 border-background`}>
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg">{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="mt-4 text-center">
                  <Link
                    href={member.website ?? ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    {member.name}
                  </Link>
                </CardTitle>
                <CardDescription className="flex text-center flex-col gap-1">
                  <span>{member.role}</span>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {member.program}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <div className="w-full space-x-2 text-center">
                  <div className="mt-3 flex justify-center items-center gap-2">
                    {member.linkedIn && (
                      <Link href={member.linkedIn}>
                        <Icons.linkedIn className="w-10 h-10 text-gray-400" />
                      </Link>
                    )}
                    {member.github && (
                      <Link href={member.github}>
                        <Icons.gitHub className="w-8 h-8" />
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

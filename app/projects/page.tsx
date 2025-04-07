import { ProjectsMdxFrontmatter, getAll } from '@/lib/markdown'
import { formatDate2, stringToDate } from '@/lib/utils'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Centennial OER Lab - Projects',
}

export default async function ProjectsIndexPage() {
  const projects = (await getAll<ProjectsMdxFrontmatter>('projects')).sort(
    (a, b) => stringToDate(b.date).getTime() - stringToDate(a.date).getTime()
  )
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="mb-7 flex flex-col gap-2">
        {projects.length > 0 ? (
          <>
            <h1 className="text-3xl font-extrabold">The latest projects</h1>
            <p className="text-muted-foreground">All the projects, straight from the team.</p>
          </>
        ) : (
          <h1 className="text-3xl font-extrabold">No projects found...</h1>
        )}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 mb-5">
        {projects.map((project) => (
          <ProjectCard {...project} slug={project.slug} key={project.slug} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ date, title, description, slug, cover }: ProjectsMdxFrontmatter & { slug: string }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="flex flex-col gap-2 items-start border rounded-md py-5 px-3 min-h-[400px]"
    >
      <h3 className="text-md font-semibold -mt-1 pr-7">{title}</h3>
      <div className="w-full">
        <Image
          src={cover}
          alt={title}
          width={400}
          height={300}
          quality={100}
          className="w-full rounded-md object-cover h-[180px] border"
        />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center justify-between w-full mt-auto">
        <p className="text-[13px] text-muted-foreground">Last updated on {formatDate2(date)}</p>
      </div>
    </Link>
  )
}

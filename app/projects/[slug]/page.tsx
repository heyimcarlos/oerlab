import { Typography } from '@/components/typography'
import { buttonVariants } from '@/components/ui/button'
import { getAllStaticPaths, getFile, ProjectsMdxFrontmatter } from '@/lib/markdown'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/utils'
// import Image from 'next/image'
import { Metadata } from 'next'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata | null> {
  const params = await props.params

  const { slug } = params

  const res = await getFile<ProjectsMdxFrontmatter>(slug, 'projects')
  if (!res) return null
  const { frontmatter } = res
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export async function generateStaticParams() {
  const val = await getAllStaticPaths('projects')
  if (!val) return []
  return val.map((it) => ({ slug: it }))
}

export default async function ProjectPage(props: PageProps) {
  const params = await props.params

  const { slug } = params

  const res = await getFile<ProjectsMdxFrontmatter>(slug, 'projects')
  if (!res) notFound()
  return (
    <div className="lg:w-[60%] sm:[95%] md:[75%] mx-auto">
      <Link
        className={buttonVariants({
          variant: 'link',
          className: '!mx-0 !px-0 mb-7 !-ml-1 ',
        })}
        href="/projects"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-1.5" /> Back to projects
      </Link>
      <div className="flex flex-col gap-3 w-full mb-2">
        <p className="text-muted-foreground text-sm">{formatDate(res.frontmatter.date)}</p>
        <h1 className="sm:text-4xl text-3xl font-extrabold">{res.frontmatter.title}</h1>
        {/* <div className="mt-6 flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">Posted by</p>
          <Authors authors={res.frontmatter.authors} />
        </div> */}
      </div>
      <div className="!w-full">
        {/* <div className="w-full mb-7">
          <Image
            src={res.frontmatter.cover}
            alt="cover"
            width={700}
            height={400}
            className="w-full h-[400px] rounded-md border object-cover"
          />
        </div> */}
        <Typography>{res.content}</Typography>
      </div>
    </div>
  )
}

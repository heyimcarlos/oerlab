import { Authors } from '@/components/authors'
import { getBlogForSlug } from '@/lib/markdown'
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Image metadata
export const alt = 'doneeee'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  // Font loading, process.cwd() is Next.js project directory
  const interSemiBold = await readFile(join(process.cwd(), 'assets/Inter-SemiBold.ttf'))

  const res = await getBlogForSlug(params.slug)
  if (!res) return null
  const { frontmatter } = res

  // export type Author = {
  //   avatar?: string
  //   handle: string
  //   username: string
  //   handleUrl: string
  // }

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {frontmatter.title}
        {frontmatter.description}
        {frontmatter.cover}

        <Authors authors={frontmatter.authors} />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      debug: true,
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}

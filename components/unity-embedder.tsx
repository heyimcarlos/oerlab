'use client'

import { cn } from '@/lib/utils'
import { useEffect } from 'react'

type Props = {
  buildPath: string
  buildName: string
} & React.HTMLProps<HTMLDivElement>

export default function UnityEmbed({ buildPath, buildName, className }: Props) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = buildPath + '/Build/' + buildName + '.loader.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className={cn('relative w-full dark:bg-black bg-white', className)}>
      <iframe
        height="100%"
        width="100%"
        className="absolute inset-0 w-full h-full border-none bg-inherit"
        src="/unity/gear-simulator/index.html"
        allowFullScreen
      />
    </div>
  )
}

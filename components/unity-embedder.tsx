'use client'

import { useEffect } from 'react'

type Props = {
  buildPath: string
  buildName: string
}

export default function UnityEmbed(props: Props) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = props.buildPath + '/Build/' + props.buildName + '.loader.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [props.buildName, props.buildPath])

  return (
    <div className="relative w-full h-[550px] dark:bg-black bg-white">
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

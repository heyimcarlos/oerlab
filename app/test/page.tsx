'use client'

import UnityEmbed from '@/components/unity-embedder'

export default function Page() {
  return (
    <div>
      <h1> THIS IS THE TEST PAGE </h1>

      <UnityEmbed buildName="WebGL" buildPath="unity/gear-simulator" />
    </div>
  )
}

// components/LottiePlayer.tsx
'use client'

import Lottie from 'lottie-react';

interface LottiePlayerProps {
  animationData: unknown
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export default function LottieRender({
  animationData,
  loop = true,
  autoplay = true,
  className
}: LottiePlayerProps) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  )
}

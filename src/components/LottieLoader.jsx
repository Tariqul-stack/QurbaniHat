'use client'

import { useEffect, useState } from 'react'

export default function LottieLoader({ message = "Loading...", fullScreen = false }) {
  const [LottieComponent, setLottieComponent] = useState(null)

  useEffect(() => {
    import('@lottiefiles/dotlottie-react').then((mod) => {
      setLottieComponent(() => mod.DotLottieReact)
    })
  }, [])

  const wrapperClass = fullScreen
    ? 'fixed inset-0 z-50 bg-[#FAFAF5] flex flex-col items-center justify-center gap-3'
    : 'min-h-[360px] w-full flex flex-col items-center justify-center gap-3'

  return (
    <div className={wrapperClass}>
      <div className="w-[220px] h-[220px]">
        {LottieComponent ? (
          <LottieComponent
            src="https://lottie.host/0f7f5d40-ccc6-4549-9459-6c7e3b27480f/dOTfcZ2hBd.lottie"
            loop
            autoplay
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E2E8E0] border-t-[#1B6B3A]" />
          </div>
        )}
      </div>
      <p className="text-[0.95rem] font-medium text-[#1B6B3A] animate-pulse">
        {message}
      </p>
      <p className="text-[0.78rem] text-[#9B9B9B]">
        Please wait...
      </p>
    </div>
  )
}

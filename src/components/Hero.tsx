'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="section-mobile h-[844px] relative">
      {/* 배경 동영상 - 전체 화면 */}
      <video
        ref={videoRef}
        autoPlay
loop
muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      

      {/* 어둠 필터 */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* 상단 텍스트 */}
            {/* 실제 콘텐츠 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-8 font-cafe24 text-[14px] leading-relaxed text-white font-normal   ">
        <span className="font-normal size-[18px]">"움직이는 예술, DP 로봇으로 고객의 발걸음을 멈추게 하세요."</span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    "우리는 감각적인 브랜드가 공간의 경험을 혁신하고, 
                    <br />
                    체류 시간을 늘리며, SNS 바이럴을 극대화할 수 있도록
                    <br />
                    맞춤형 키네틱 DP 로봇을 제공합니다."
        </p>
      </div>
      

{/* 스크롤 아이콘 - inset-x-0와 mx-auto를 사용하여 완벽한 중앙을 잡습니다. */}
<div className="absolute bottom-10 inset-x-0 mx-auto w-fit animate-bounce z-10">
  <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1">
    {/* 내부 점 애니메이션 */}
    <div className="h-2 w-1 rounded-full bg-white/50" />
  </div>
</div>
    </section>
  )
}

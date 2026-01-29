'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, PanInfo } from 'framer-motion'

export default function BrandShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  
  const videos = [
    {
      src: '/videos/gallery/video-gentle-monster.mp4',
      alt: '젠틀몬스터 키네틱 아트',
      overlayText: null
    },
    {
      src: '/videos/gallery/video-ader-error.mp4',
      alt: '아더에러 키네틱 아트',
      overlayText: null
    }
  ]

  useEffect(() => {
    // 첫 번째 동영상 자동 재생
    if (videoRefs.current[0]) {
      videoRefs.current[0].play().catch(() => {})
    }
  }, [])

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50
    const container = containerRef.current
    if (!container) return

    if (info.offset.x > threshold && currentIndex > 0) {
      // 오른쪽으로 스와이프 (이전 동영상)
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      container.scrollTo({
        left: newIndex * container.clientWidth,
        behavior: 'smooth'
      })
      // 이전 동영상 재생
      if (videoRefs.current[newIndex]) {
        videoRefs.current[newIndex].play().catch(() => {})
      }
    } else if (info.offset.x < -threshold && currentIndex < videos.length - 1) {
      // 왼쪽으로 스와이프 (다음 동영상)
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      container.scrollTo({
        left: newIndex * container.clientWidth,
        behavior: 'smooth'
      })
      // 다음 동영상 재생
      if (videoRefs.current[newIndex]) {
        videoRefs.current[newIndex].play().catch(() => {})
      }
    }
  }

  const goToSlide = (index: number) => {
    const container = containerRef.current
    if (container) {
      setCurrentIndex(index)
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: 'smooth'
      })
      // 선택한 동영상 재생
      if (videoRefs.current[index]) {
        videoRefs.current[index].play().catch(() => {})
      }
    }
  }

  return (
    <section className="section-mobile min-h-screen relative overflow-hidden">
      {/* 배경 그라디언트 - 어두운 회색에서 밝은 회색으로 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #1a1a1a 0%, #4d4d4d 50%,rgb(12, 12, 12) 100%)'
        }}
      />
      
      {/* 동영상 슬라이더 컨테이너 */}
      <div 
        ref={containerRef}
        className="relative z-10 flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide pt-[60px]"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
        onScroll={(e) => {
          const target = e.target as HTMLDivElement
          const scrollLeft = target.scrollLeft
          const itemWidth = target.clientWidth
          const newIndex = Math.round(scrollLeft / itemWidth)
          if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex)
            // 현재 보이는 동영상 재생
            if (videoRefs.current[newIndex]) {
              videoRefs.current[newIndex].play().catch(() => {})
            }
          }
        }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="relative w-full h-[500px] flex-shrink-0 snap-center px-2"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el
              }}
              autoPlay={index === 0}
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
            >
              <source src={video.src} type="video/mp4" />
            </video>
            
            {/* 오버레이 텍스트 */}
            {video.overlayText && (
              <div className="absolute top-[20px] left-0 right-0 px-3 z-10">
                <p className="text-white text-[12px] font-medium leading-tight text-center">
                  {video.overlayText}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* 인디케이터 점들 */}
      <div className="absolute bottom-[220px] left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-6' : 'bg-white/50 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 하단 텍스트 블록 */}
      <motion.div
        className="absolute bottom-[80px] left-0 w-full px-6 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="font-[var(--font-cafe24)] text-[14px] leading-relaxed text-white">
        현재 젠틀몬스터와 아더에러는 

        <br /> 방문자에게
        
            <span className="text-[#ff6262] text-[16px] font-cafe24"> "경험"</span>을 판매하고 있습니다.
        </p>
      </motion.div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

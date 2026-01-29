'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
// 동영상 파일 경로 - public/videos/gallery/ 폴더에 넣어주세요
const topRowVideos = [
  '/videos/gallery/video-1.mp4',
  '/videos/gallery/video-2.mp4',
  '/videos/gallery/video-3.mp4',
  '/videos/gallery/video-4.mp4',
]

const bottomRowVideos = [
  '/videos/gallery/video-5.mp4',
  '/videos/gallery/video-6.mp4',
  '/videos/gallery/video-7.mp4',
  '/videos/gallery/video-8.mp4',
]

interface MarqueeRowProps {
  videos: string[]
  reverse?: boolean
}



function MarqueeRow({ videos, reverse = false }: MarqueeRowProps) {
  const duplicatedVideos = [...videos, ...videos, ...videos]
  
  return (
    
    <div className="relative overflow-hidden w-full h-[267px]">
      <div 
        className={`flex gap-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {duplicatedVideos.map((src, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-[150px] h-[267px] relative rounded-lg overflow-hidden bg-neutral-900"
          >
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    
    <>
      {/* 첫 번째 섹션 - 글로벌 브랜드가 왜? (기존 코드 유지) */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom,rgb(12, 12, 12) 0%, #666666 50%,rgb(16, 16, 16) 100%)'  }}
        />
        <div className="absolute inset-0 bg-black/30" />
         <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[390px] text-center z-10">

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-[var(--font-cafe24)] text-[14px] leading-relaxed text-white">
          "그리고 국내뿐만 아니라 현재 해외 다양한분야에서도<br />
            <span className="text-[#ff6262] text-[16px] font-cafe24">'키네틱아트'</span>를 활용하고 있습니다."
          </p>
                  
        <div className="absolute top-[130px] left-1/2 -translate-x-1/2 text-white text-[81px] font-medium leading-none">.</div>
        <div className="absolute top-[210px] left-1/2 -translate-x-1/2 text-white text-[46px] font-medium leading-none">.</div>
        <div className="absolute top-[280px] left-1/2 -translate-x-1/2 text-white text-[30px] font-medium leading-none">.</div>
        
        </motion.div>
              <div className="absolute top-[380px] left-0 w-full flex flex-col gap-8">
        <MarqueeRow videos={topRowVideos} />
        </div>
        </div>
</section>
      
      
        <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom,rgb(16, 16, 16) 0%, #666666 50%,rgb(16, 16, 16) 100%)'  }}
        />
        <div className="absolute inset-0 bg-black/30" />
      {/* 비디오 갤러리 섹션 */}
      <div className="absolute top-[0px] left-0 w-full flex flex-col gap-8">

        {/* 중간 여백을 위해 위치 조정 */}
        <div className="h-[20px]" /> 
        <MarqueeRow videos={bottomRowVideos} reverse />
      </div>
      {/* 하단 텍스트 영역 */}
      <motion.div 
          className="absolute bottom-[200px] left-0.8 -translate-x-1/2 w-[390px] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }} // 이미지보다 살짝 늦게 등장
        >
          <p className="font-serif text-[14px] text-white font-normal text-center mt-20">
            "2023년 해외 리테일 <span className="text-[#eb2fde] font-cafe24 text-center">저명 저널 연구</span>에 따르면, <br />
            키네틱아트를 활용한 매장 디자인은 고객 경험과 브랜드 경험을<br /> 동시에 최적화하는 핵심 요소로 발표되었습니다."
          </p>
        </motion.div>
    </section>
</>
    
  )
}
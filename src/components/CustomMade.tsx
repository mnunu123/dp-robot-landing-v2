'use client'

import Image from 'next/image'
import { motion, HTMLMotionProps } from 'framer-motion'

export default function CustomMade() {
  const fadeInUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  }
  return (
    
    <section className="section-mobile min-h-screen relative overflow-hidden bg-black">
      {/* 1. 배경 그라디언트 */}
      <div 
          className="w-full h-full rounded-full opacity-200"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(200,200,200,0.2) 40%, transparent 70%)',
            filter: 'blur(30px)'
          }}
        />
     

      {/* 3. 상단 텍스트 (참고 이미지 위치) */}
      <div className="relative z-30 pt-24 px-8 text-center animate-fade-in">
      <motion.div className="text-center mb-12" {...fadeInUp}>
        <p className="mb-8 font-cafe24 text-[13px] leading-relaxed text-whited">
          "해외 사례 속 그 독보적인 움직임, 그대로 가져오고 싶으셨나요?
        <br />
          상상하시던 디자인과 기능을 그대로"
        </p>
        </motion.div>
      </div>



      {/* 5. 하단 메인 강조 문구 */}
      <div className="absolute bottom-[40%] inset-x-0 z-30 px-6 text-center">
      <motion.div className="text-center mb-12" {...fadeInUp}>
        <p className="mb-8 font-cafe24 text-[20px] leading-relaxed text-white">
          "귀하의 비즈니스 환경에 최적화하여
          <br />
          <span className="text-[#ff6262] text-[20px] font-bold">맞춤 제작</span>합니다."
        </p>
        </motion.div>
      </div>

      {/* 하단 점 패턴 (디테일 추가) */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </section>
  )
}
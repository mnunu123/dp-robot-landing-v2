'use client'

import Image from 'next/image'
import { motion, HTMLMotionProps } from 'framer-motion'

export default function DeadSpace() {
  // 타입을 정의해줍니다
  const fadeInUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  }
  return (
    <>
      {/* 첫 번째 섹션 */}
      <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #000000 78.846%,rgb(26, 26, 26) 100%)' }}
        />
         {/* 중앙 이미지: 나갈 때도 위로 스르륵 사라짐 */}
         <motion.div 
            className="w-full h-[200px] relative mt-20"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            viewport={{ once: false }} // 무한 반복
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/images/dead-space.png"
              alt="정적인 공간"
              fill
              className="object-contain"
              sizes="(max-width: 390px) 100vw, 390px"
            />
          </motion.div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <motion.div className="text-center mb-8 mt-40" {...fadeInUp}>
            <p className="font-serif text-[18px] text-white italic">
              "A stagnant space is a <span className="text-[#ff6262] not-italic font-bold">dead</span> space."
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <p className="font-[var(--font-cafe24)] text-[13px] text-white leading-relaxed">
              "멈춰있는 공간은 <span className="text-[#ff6262]">죽은</span> 공간이다."
            </p>
          </motion.div>
          
         
        </div>
      </section>
    </>
  )
}
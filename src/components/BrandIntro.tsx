'use client'

import Image from 'next/image'
import { motion, HTMLMotionProps } from 'framer-motion'

export default function BrandIntro() {
  const fadeInUp: HTMLMotionProps<"div"> = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  }
  return (
    
    <section className="section-mobile min-h-screen relative">
      {/* 배경 그라디언트 - 브라운에서 블랙 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%,rgb(61, 6, 6) 50%, #000000 100%)'
        }}
      />
      {/* 어둠 필터 */}
      <div className="absolute inset-0 bg-black/30" />
      {/* 점 패턴 오버레이 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      
{/* 1. 젠틀몬스터 섹션 */}
<div className="absolute top-[130px] left-0 w-full h-[245px] z-10 overflow-hidden">
        <div className="relative w-full h-full opacity-80">
          <Image
            src="/images/gentle-monster.png"
            alt="젠틀몬스터 매장"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
           {/* 2. 아더에러 섹션 - 390px 꽉 차게 수정 */}
           <div className="absolute top-[428px] left-0 w-full flex justify-center z-10">
        <div className="relative w-[390px] h-[244px] opacity-90">
          <Image
            src="/images/ader-error.png"
            alt="아더에러 매장"
            fill
            className="object-cover"
            sizes="390px"
          />
        </div>
      </div>
<div className="relative z-10 h-full flex flex-col items-center justify-center px-15">

            <p className="font-serif text-[14px] text-white font-normal text-center mt-20">
              젠틀몬스터와 아더에러를 들어온적 있으신가요?
              <br />

            </p>

        
        {/* 두 번째 텍스트 */}
        <div className="text-center mt-40 mb-16">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <p className="font-serif text-[14px] text-white font-normal text-center mt-20">
            젠틀몬스터의 철학은 
            <br />
            "세상을 놀라게 할 새로움"
            <br />
            <br />
            <br />
            <br />
            아더에러의 철학은 
            <br />
            "오류(Error)에서 성장, 불완전함 재해석"이라고 합니다.
            
          </p>
          </motion.div>
      
        </div>
        {/* 첫 번째 경험 텍스트트: 나갈 때 다시 왼쪽으로 숨음 */}
        <motion.div 
          className="absolute bottom-[-90px] left-1/2 -translate-x-1/2 w-full max-w-[427px] h-[159px]"
          initial={{ opacity: 0, x: -100 }} // 좀 더 멀리서 들어오게 수정
          whileInView={{ opacity: 0.9, x: "-50%" }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mt-40">

<p className="mb-8 font-cafe24 text-[15px] leading-relaxed text-white">
  그들은 각자다른 철학을 <span className="text-[#ff6262]">키네틱아트</span>라는 수단을 통해
  <br />
  자신만의 색상을 표현하고 있습니다.
</p>

</div>
        </motion.div>

        
      </div>
    </section>
    
  )
}

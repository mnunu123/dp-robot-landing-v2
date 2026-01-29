'use client'

import { motion } from 'framer-motion'

export default function BrandChallenge() {
  return (
    <section className="section-mobile min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* SVG 노이즈 필터 정의 */}
      <svg className="absolute w-0 h-0">
        <filter id="grainyNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.7" intercept="0.05" /> {/* 노이즈 강도 조절 (slope, intercept) */}
          </feComponentTransfer>
          <feBlend in="SourceGraphic" in2="BackgroundImage" mode="multiply" />
        </filter>
      </svg>
      {/* 배경 그라디언트 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #533820 0%,rgb(66, 5, 5) 40%, #000000 80%)'
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      {/* 노이즈 오버레이 */}
      <div 
        className="absolute inset-0"
        style={{
          filter: 'url(#grainyNoise)', // SVG 필터 적용
          opacity: 0.15, // 노이즈의 불투명도 조절
          pointerEvents: 'none' // 노이즈 오버레이가 클릭을 방해하지 않도록
        }}
      />
      {/* 메인 콘텐츠 */}
      <div className="relative z-10 w-full px-6 text-center">
        {/* 첫 번째 텍스트 블록 */}
        <motion.div
          className="mb-12 mt-160"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-[var(--font-cafe24)] text-[16px] leading-relaxed text-white">
            "키네틱아트(Kinetic Art)" : 
            
            <br /><span className="text-[#ff6262] text-[14px]">'움직임(Kinesis)'을 본질로 하는 예술'</span> <br /> <br /> <br /> <br /> <br /> 
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-[var(--font-cafe24)] text-[14px] leading-relaxed text-white ">
          "매 시즌 수백만 원을 들여 디스플레이를 바꿔도, 
          <br />
          정작 고객들은 스마트폰만 보며 지나치고 있진 않나요?"
          </p>
        </motion.div>

        {/* 두 번째 텍스트 블록 - '움직임' 애니메이션 추가 */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         <p className="font-[var(--font-cafe24)] text-[14px] leading-relaxed text-white">
         <br /> <br />단순한 고정형 마네킹이나 포스터는 <br />이제 익숙함을 넘어 지루함이 되었습니다.
  <br /><br /><br /><br /><br />
  고객의 시선이 머무는 곳에 <br />브랜드의 철학을 담은{' '}
  <motion.span
    className="inline-block font-bold" // 1. inline-block 추가 (필수!)
    animate={{ 
      y: [0, -3, 0] // 2. 0에서 -10px(위)로 갔다가 다시 0으로
    }}
    transition={{
      duration: 1,    // 1.2초 동안 한 번의 움직임
      repeat: Infinity, // 무한 반복
      ease: "easeInOut"
    }}
  >
    '움직임'
  </motion.span>
  이 필요합니다.
</p>
        </motion.div>

        {/* 세 개의 점 */}
        <motion.div 
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.span 
            className="w-1.5 h-1.5 rounded-full bg-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.span 
            className="w-1.5 h-1.5 rounded-full bg-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.span 
            className="w-1.5 h-1.5 rounded-full bg-white"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'

export default function BrandMessage() {
  return (
    <>
    <section className="section-mobile min-h-screen bg-black relative flex items-center justify-center overflow-hidden">
      {/* 배경 Bokeh 효과들 - 떠다니는 애니메이션 */}
      
      {/* 왼쪽 상단 - 흰색/회색 블러 */}
      <motion.div 
        className="absolute top-[83px] left-[38px] w-[210px] h-[210px]"
        animate={{ 
          x: [0, 10, -5, 0],
          y: [0, -10, 5, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-full h-full rounded-full opacity-200"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(200,200,200,0.2) 40%, transparent 70%)',
            filter: 'blur(30px)'
          }}
        />
      </motion.div>
      
      {/* 오른쪽 상단 - 초록색 블러 */}
      <motion.div 
        className="absolute top-[222px] left-[280px] w-[140px] h-[140px]"
        animate={{ 
          x: [0, -8, 12, 0],
          y: [0, 8, -6, 0],
          scale: [1, 0.9, 1.05, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <div 
          className="w-full h-full rounded-full opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(0,180,100,0.5) 0%, rgba(0,150,80,0.3) 40%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />
      </motion.div>
      
      {/* 왼쪽 중앙 - 청록색/민트 블러 (가장 큰 것) */}
      <motion.div 
        className="absolute top-[541px] left-[48px] w-[280px] h-[300px]"
        animate={{ 
          x: [0, 10, -5, 0],
          y: [0, -10, 5, 0],
          scale: [1, 1.08, 0.92, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <div 
          className="w-full h-full rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(0,200,180,0.5) 0%, rgba(0,150,140,0.3) 35%, transparent 65%)',
            filter: 'blur(40px)'
          }}
        />
      </motion.div>
      
      {/* 오른쪽 하단 - 빨간색 블러 */}
      <motion.div 
        className="absolute top-[698px] left-[280px] w-[166px] h-[164px]"
        animate={{ 
          x: [-20, 10, 8, 0],
          y: [0, 10, -8, 0],
          scale: [1, 1.1, 0.95, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div 
          className="w-full h-full rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(180,50,50,0.6) 0%, rgba(120,30,30,0.3) 40%, transparent 70%)',
            filter: 'blur(30px)'
          }}
        />
      </motion.div>
      
      {/* 메인 메시지 */}
      <motion.div 
        className="absolute top-[345px] left-8 -translate-x-1/2 w-[305px] text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-8 font-cafe24 text-[20px] leading-relaxed text-white">
          "저희는 당신의 브랜드 무드에 맞춰 
          <br />
          움직임을 디자인합니다."
        </p>
      </motion.div>
      
      {/* 점 애니메이션 - 순차적으로 나타남 */}
      <div className="absolute top-[450px] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <motion.span 
          className="text-white text-[62px] font-bold leading-[20px] tracking-[1.86px]"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          animate={{ 
            y: [0, -3, 0]
          }}
          style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
        >
          .
        </motion.span>
        
        <motion.span 
          className="text-white text-[38px] font-bold tracking-[0.76px] mt-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          .
        </motion.span>
        
        <motion.span 
          className="text-white text-[23px] font-bold tracking-[0.46px] mt-6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          .
        </motion.span>
      </div>
      
      
    </section>
    <section className="section-mobile min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom,rgb(12, 12, 12) 0%, #666666 50%,rgb(16, 16, 16) 100%)',
            filter: 'blur(40px)'  }}
        />
        <div className="absolute inset-0 bg-black/30" />
      
        <motion.div 
        className="absolute top-[50px] left-10 -translate-x-1/2 w-[305px] text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-8 font-cafe24 text-[20px] leading-relaxed text-[#ff6262]">
          "가장 많이 물어보시는 3가지"
        </p>
      </motion.div>

      <motion.div 
        className="absolute top-[180px] left-[-1] -translate-x-1/2 w-[390px] text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-8 font-cafe24 text-[16px] leading-relaxed text-white">
          "Q)설치가 복잡한가요?" <br />
          A)아니요, 일반 가전제품처럼 전원만 연결하면 됩니다.
        </p>
      </motion.div>

      <motion.div 
        className="absolute top-[360px] left-[-1]  -translate-x-1/2 w-[390px] text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-8 font-cafe24 text-[16px] leading-relaxed text-white">
        Q)커스텀이 가능한가요?
        <br />
        A)네, 브랜드 컬러와 원하는 동작을 모두 맞춤 제작해 드립니다.
        </p>
      </motion.div>

      <motion.div 
        className="absolute top-[550px] left-[-1]  -translate-x-1/2 w-[390px] text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-8 font-cafe24 text-[16px] leading-relaxed text-white">
        Q)가격이 비싼가요?
        <br />
        A)대형 로봇 랩 운영 비용의 1/10 가격으로,<br />압도적인 효과를 낼 수 있습니다.
        </p>
      </motion.div>

    </section>

    </>
  )
}

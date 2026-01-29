'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'

// SheetDB API 주소
const GOOGLE_SHEET_API_URL = 'https://sheetdb.io/api/v1/sg8bocfmaiizq'

interface FormData {
  name: string
  phone: string
}

interface FormErrors {
  name?: string
  phone?: string
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = '이름은 2자 이상 입력해주세요.'
    }
    const phoneDigits = formData.phone.replace(/\D/g, '')
    if (!phoneDigits) {
      newErrors.phone = '연락처를 입력해주세요.'
    } else if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      newErrors.phone = '올바른 연락처 형식이 아닙니다. (10-11자리)'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              name: formData.name.trim(),
              phone: formData.phone,
              date: new Date().toLocaleString('ko-KR'),
            }
          ]
        }),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '')
    if (digits.length <= 3) return digits
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`
  }

  return (
    <section className="section-mobile min-h-screen bg-white relative py-12">
      <div className="absolute top-[47px] right-[27px] w-[46px] h-[44px]">
        <Image src="/images/star-deco.png" alt="장식" fill className="object-contain" sizes="46px" />
      </div>
      
      <div className="px-5 pt-24">
        <h2 className="font-poppins font-bold text-[30px] text-black leading-[1.3] tracking-[-0.3px] mb-12">
          Application form
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이름 입력 - text-black 추가 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-inter text-[14px] text-black">이름</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="이름을 입력해주세요"
              // text-black을 명시하여 흰 배경에서도 글자가 보이게 수정
              className={`w-full h-[50px] border-b text-black ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-black outline-none transition-all bg-transparent`}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-[12px]">{errors.name}</p>}
          </div>
          
          {/* 연락처 입력 - text-black 추가 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-inter text-[14px] text-black">연락처</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: formatPhoneNumber(e.target.value) }))}
              placeholder="010-0000-0000"
              // text-black을 명시하여 흰 배경에서도 글자가 보이게 수정
              className={`w-full h-[50px] border-b text-black ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-black outline-none transition-all bg-transparent`}
              disabled={isSubmitting}
              maxLength={13}
            />
            {errors.phone && <p className="text-red-500 text-[12px]">{errors.phone}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full h-[56px] bg-black text-white font-inter font-semibold text-[16px] rounded-[10px] transition-all duration-300 mt-8 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
          >
            {isSubmitting ? '전송 중...' : '확인'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <p className="text-green-700 text-[14px]">신청이 완료되었습니다. 곧 연락드리겠습니다!</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-700 text-[14px]">오류가 발생했습니다. 다시 시도해주세요.</p>
            </div>
          )}
        </form>
        
        <p className="text-[11px] text-gray-400 text-center mt-8 leading-relaxed">
          신청하기 버튼을 누르시면 개인정보 수집 및 이용에 동의하는 것으로 간주됩니다.
        </p>
      </div>
    </section>
  )
}
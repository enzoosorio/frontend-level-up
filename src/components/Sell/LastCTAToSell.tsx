import React from 'react'
import { SectionBlank } from '../reusable/SectionBlank'
import Image from 'next/image'
import Link from 'next/link'

export const LastCTAToSell = () => {
  return (
    <SectionBlank>
      <div className="bgImageLastCTA relative flex flex-col items-center md:items-end  justify-center md:justify-center my-8 pt-10 md:pt-0 md:pr-10 w-full text-white min-h-[420px]">
        <Image src="/Sell/images/landscape-segundo-mensaje.webp" alt="lastCTA" width={540} height={200} className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="relative z-20 flex flex-col items-center justify-center gap-6 bg-white/20 backdrop-blur-2xl w-[90%] sm:w-[400px] lg:w-[500px] font-amiko text-black rounded-lg py-7 px-6">
          <p className="text-base lg:text-4xl w-full text-center md:text-right text-pretty uppercase text-white">Lo que ya no usas, alguien más lo está buscando.</p>
          <Link 
          href="/login"
          className='bg-primary-green text-white px-4 py-2 rounded-lg shadow-md hover:shadow-2xl cursor-pointer hover:font-bold transition-all w-[50%] text-center'
          >
          Publicar
          </Link>
        </div>
      </div>
    </SectionBlank>
  )
}

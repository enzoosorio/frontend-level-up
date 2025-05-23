import { SectionBlank } from '../reusable/SectionBlank'
import Link from 'next/link'

export const MessageToPublic = () => {

  return (
   <SectionBlank className='pt-5 mb-10 mt-10'>
        <div className='flex flex-col md:flex-row items-center justify-center '>
            <div className='relative  md:w-[40ch] lg:w-[80ch]  backdrop-blur-md p-4 '>
            <div className='absolute inset-0 w-full h-full -z-20  rounded-tl-lg rounded-tr-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none' />
            <p className=' md:text-base lg:text-2xl font-manrope px-4 text-justify leading-8 lg:leading-11 text-black '>
              <span className='font-bold pr-2'>Hola! Gracias por visitarnos :&#41;.</span>
                En esta página podrás comprar y vender productos 
                de acuerdo a los estándares que  
                <Link href={'/'} className='underline decoration-dotted font-bold px-2 '>
                encontrarás aquí. 
                </Link> 
                Estamos emocionados de poder ofrecer esta solución, ya que representa una ayuda 
                significativa ante varios problemas, según del punto de vista de donde lo veas. 
                Agradecemos tu apoyo y esperamos que disfrutes de tu experiencia en nuestra web.</p>
            </div>
            <div className='relative w-full md:w-[66%] lg:w-[40%] p-4  rounded-bl-lg rounded-br-lg md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-none  '>
              <img src={'/Hero/images/gif-1.webp'} alt='gif-1' className='w-full h-full object-cover object-center' />
            </div>
        </div>
   </SectionBlank>
  )
}

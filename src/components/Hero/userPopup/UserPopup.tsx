import React from 'react'
import { OverlayUserPopup } from './OverlayUserPopup'
import { InputsForUserLogin } from './InputsForUserLogin';

interface UserPopupProps{
  setActive : React.Dispatch<React.SetStateAction<boolean>>;
  active : boolean;
}

const options = ["esa zapatilla", "esa polera", "ese funko", "ese perfume"];
const options2 = ["esa ", "ese"]

export const UserPopup = ({setActive, active} : UserPopupProps) => {


  return (
   <OverlayUserPopup active={active}>
    <div className='min-w-[940px] min-h-[500px] rounded-lg shadow-2xl bg-bg-color flex items-center justify-between gap-12 px-24'>
      <div className='flex flex-col items-center justify-center gap-4 w-full h-full '>
      <h3 className='text-2xl font-bold uppercase'>Inicia sesión</h3>
      {/* <p className='text-lg font-semibold'></p> */}
      <form className='flex flex-col items-center justify-center gap-12 w-[90%] py-12 mx-auto bg-primary-gray/40'>
        <div className='flex flex-col items-center justify-center gap-16'>
        <InputsForUserLogin labelInput='Correo' type='email' name='email' />
        <InputsForUserLogin labelInput='Contraseña' type='password' name='password'/>
        </div>
        <div className='flex flex-row items-center justify-center gap-4 '>
          <div className='px-4 py-2 rounded-lg shadow-lg'>
            Ingresa con Google
          </div>
          <div className='px-4 py-2 rounded-lg shadow-lg'>
            Ingresa con Facebook
          </div>
        </div>
      </form>
      </div>
      <div className='flex flex-col items-center justify-center gap-20 w-full rounded-lg px-4 bg-primary-green text-white min-h-[450px]'>
        <button 
        className='absolute top-2 right-5 border border-black px-4 py-2 cursor-pointer'
        onClick={() => setActive(false)}>
          Cerrar
        </button>
        {/* <CardsPopup/> */}
       <div className='flex items-center justify-center gap-20 w-full h-full'>
        <p className='text-2xl text-justify font-aboreto font-bold uppercase'>Encuentra
          <span> ese producto </span>
           que tanto quieres
        </p>
        <button className='border-2 border-white text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow px-4 py-2 cursor-pointer'>
          Login Comprador
        </button>
       </div>
       <div className='flex items-center justify-center flex-row-reverse gap-4 w-full h-full'>
        <p className='text-2xl text-right font-aboreto font-bold uppercase'>Publica
          <span> esa prenda </span>
           que ya no usas
        </p>
        <button className='bg-white text-primary-green rounded-lg shadow-lg hover:shadow-2xl transition-shadow px-4 py-2 cursor-pointer'>
          Login Vendedor
        </button>
       </div>
      </div>
    </div>
   </OverlayUserPopup>
  )
}

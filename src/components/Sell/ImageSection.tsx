import React from 'react'

export const ImageSection = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-start md:justify-center my-8 pt-10 md:pt-0 md:pl-10 w-full bg-[#333] text-white min-h-[420px]">
        <div className="flex flex-col items-center justify-center gap-6 bg-white w-[80%] sm:w-[400px] lg:w-[500px] font-amiko text-black rounded-lg py-7 px-6">
        <div className="flex flex-col items-start justify-center gap-2">
          <h2 className="text-3xl lg:text-4xl font-bold w-full text-center md:text-left">¡Hola, vendedor!</h2>
          <p className=" text-base lg:text-lg w-full text-center md:text-left text-pretty">Anímate a publicar esos artículos que por algún motivo no los usas más.</p>
        </div>
        <button className="bg-primary-green text-white px-4 py-2 rounded-lg shadow-md hover:shadow-2xl cursor-pointer hover:font-bold transition-all w-[50%]">Publicar</button>
        </div>
    </div>
  )
}

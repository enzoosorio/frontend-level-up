"use client"
import React, { useRef, useState } from 'react'

type InputForUser = React.InputHTMLAttributes<HTMLInputElement> & {
    labelInput: string  
}

export const InputsForUserLogin = ({ type, labelInput, name }: InputForUser) => {
  
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputLength, setInputLength] = useState(0)

  
  return (
    
    <div className='flex flex-col items-start justify-center gap-4'>
    <div className={`blur-[0px] font-poppins text-sm bg-primary-green/20 w-max h-max py-1 px-4 ${isFocused ? "text-transparent" : "text-black"} transition-all rounded-md`}>
    {labelInput}
    </div>
    <div className='relative flex items-center justify-center w-max h-max '>
      <label
      onClick={() => {
        if(isFocused === false) {
            setIsFocused(true)
            if(inputRef.current) {
                inputRef.current.focus()
            }
        }
      }}
        className={`absolute transition-all duration-200 font-poppins ${
          isFocused ? '-top-10 left-4 text-sm text-black cursor-auto' : inputLength > 0 ? 'top-1/2 left-4 text-black/65 cursor-pointer -translate-y-1/2 opacity-0 -z-10' : 'top-1/2 left-4 text-black/65 cursor-pointer -translate-y-1/2'
        }`}
      >
        {labelInput}
      </label>
      <input
      ref={inputRef}
      onChange={(e) => {
        if(e.target.value.length > 0) {
          setInputLength(e.target.value.length)
        }
        if(e.target.value.length === 0) {
          setInputLength(0)
        }
      }}
        type={type}
        onFocus={() => {
            if(isFocused === false) {
                setIsFocused(true)
            }
        }}
        onBlur={() => {
            if(isFocused === true) {
                setIsFocused(false)
            }
        }}
        name={name}
        className={`px-4 py-2 rounded-lg shadow-lg 
            focus:shadow-2xl transition-all bg-white 
            min-w-[90px] focus:outline-2 outline-primary-green`}
      />
    </div>
    </div>
  )
}

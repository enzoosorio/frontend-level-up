    "use client"
    import React, { useEffect, useRef, useState } from 'react'

    type Select = {
        option: string;
        value: string;
    };

    type CustomSelectProps = React.HTMLAttributes<HTMLDivElement> & {
        label: string;
        selectOptions: Select[];
    }

    export const CustomSelect = ({label, selectOptions}: CustomSelectProps) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState<Select | null>(null);
        const containerRef = useRef<HTMLDivElement>(null);

        const handleSelect = (option: Select) => {
            setSelectedOption(option);
        }

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };

        }, [])


    return (
        <div 
        ref={containerRef}
        role='listbox'
        aria-labelledby={label}
        aria-expanded={isOpen}
        aria-activedescendant={selectedOption?.option}
        onClick={() => setIsOpen(!isOpen)}
        className='relative w-full font-manrope h-[20px] cursor-pointer border border-gray-300 rounded-md py-6 flex flex-col items-start justify-start gap-4  mt-4'>
            <label
            htmlFor={label}
            className="absolute top-1/2 -translate-y-1/2 left-[5%] cursor-pointer text-sm font-medium text-gray-700"
        >
            {label}
        </label>
        <div
        role="combobox"
        aria-haspopup="listbox"
        aria-controls={`${label}-listbox`}
        aria-expanded={isOpen}
        aria-labelledby={`${label}-label`}
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }
        }}
        className="absolute top-1/2 -translate-y-1/2 left-[40%] z-[10] cursor-pointer -translate-x-1/2 w-max text-sm font-medium text-gray-700 outline-none border-none h-max"
      >
        <span className="block text-sm text-gray-800">
          {selectedOption?.option || "Selecciona una opción"}
        </span>
      </div>
            <ul className={`absolute top-full bg-white/90 backdrop-blur-lg left-0 right-0 flex flex-col items-start justify-start border border-gray-300 rounded-md w-full ${isOpen ? "max-h-[200px] opacity-100 z-40" : "max-h-0 opacity-0 -z-10"} transition-all duration-300`}>
                {selectOptions.map((option, index) => (
                    <li 
                    key={index} 
                    onClick={() => handleSelect(option)}
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer w-full transition-all duration-100'
                    >{option.option}</li>
                ))}
            </ul>
            <svg
            width="20"
            height="17"
            viewBox="0 0 34 25"
            fill="none"
            className={`absolute top-1/2  -translate-y-1/2 right-10 fill-primary-green ${isOpen ? "rotate-90" : "rotate-0"} transition-transform duration-300`}
        >
            <path
            d="M31.5604 7.06062L18.0604 20.5606C17.7791 20.8418 17.3976 20.9998 16.9999 20.9998C16.6021 20.9998 16.2207 20.8418 15.9394 20.5606L2.43938 7.06062C2.29611 6.92225 2.18184 6.75673 2.10323 6.57373C2.02461 6.39072 1.98323 6.19389 1.9815 5.99472C1.97977 5.79555 2.01772 5.59804 2.09315 5.41369C2.16857 5.22935 2.27995 5.06187 2.42079 4.92103C2.56162 4.78019 2.7291 4.66881 2.91345 4.59339C3.09779 4.51797 3.29531 4.48002 3.49448 4.48175C3.69365 4.48348 3.89048 4.52486 4.07348 4.60347C4.25649 4.68208 4.42201 4.79636 4.56038 4.93962L16.9999 17.3791L29.4394 4.93962C29.5777 4.79636 29.7433 4.68208 29.9263 4.60347C30.1093 4.52486 30.3061 4.48348 30.5053 4.48175C30.7044 4.48002 30.902 4.51797 31.0863 4.59339C31.2707 4.66881 31.4381 4.78019 31.579 4.92103C31.7198 5.06187 31.8312 5.22935 31.9066 5.41369C31.982 5.59804 32.02 5.79555 32.0183 5.99472C32.0165 6.19389 31.9751 6.39072 31.8965 6.57373C31.8179 6.75673 31.7036 6.92225 31.5604 7.06062Z"
            
            />
        </svg>
        </div>
    )
    }

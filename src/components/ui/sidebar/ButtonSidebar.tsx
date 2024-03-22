'use client'
import {motion} from 'framer-motion'
import React, { useEffect } from "react";


interface ButtonSidebarProps {
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>
}
const ButtonSidebar: React.ComponentType<ButtonSidebarProps> = ({setOpen}) => {
    return <button onClick={() => setOpen(prev => !prev)}
                   className='w-[50px] h-[50px] rounded-full fixed bg-transparent border-none cursor-pointer top-[35px] right-[32px]'>
        <svg width='24' height='23' viewBox=' 0 0 23 23 ' >
            <motion.path width='1' strokeWidth='3' stroke='#050815' strokeLinecap='round'
                         variants={{
                             closed: {d: "M 8 2.5 L 19 2.5"},
                             open: {d: "M 3 16.5 L 17 2.5"},
                         }}
            />
            <motion.path strokeWidth='3' stroke='#050815' strokeLinecap='round'
                         d="M 2 9.423 L 20 9.423"
                         variants={{
                             closed: {opacity: 1},
                             open: {opacity: 0},
                         }}
            />
            <motion.path strokeWidth='3' stroke='#050815' strokeLinecap='round'
                         variants={{
                             closed: {d: "M 2 16.346 L 20 16.346"},
                             open: {d: "M 3 2.5 L 17 16.346"},
                         }}
            />
        </svg>
    </button>
}
export default ButtonSidebar
"use client"

import { motion } from 'framer-motion'
import React, {useEffect, useState} from "react";
import LinksSidebar from "./LinksSidebar";
import ButtonSidebar from "./ButtonSidebar";


const variants  = {
    open: {
        clipPath: "circle(1200px at 330px 60px)",
        transition: {
            type: "spring",
            stiffness:  20,
        }
    },
    closed: {
        clipPath: "circle(30px at 330px 60px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    },
}
const Sidebar = () => {
    const [ open, setOpen ] = useState(true)

    useEffect(() => { 
        setTimeout(() => {
            setOpen(false)
        }, 30)
     }, [])

    return <motion.div animate={open ? "open" : "closed"} className='flex flex-col items-center justify-center bg-white color-black'>
        <motion.div variants={variants} className=' fixed top-0 right-0 w-[400px] bottom-0 bg-violet-50 '>
            <LinksSidebar />
        </motion.div>
        <ButtonSidebar setOpen={setOpen}/>
    </motion.div>
}

export default Sidebar
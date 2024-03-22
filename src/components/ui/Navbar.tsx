"use client"
import React from 'react'
import logo from '/public/assets/logo-circular.png'
import Sidebar from "./sidebar/Sidebar";
import {motion, useTransform, useScroll} from 'framer-motion'
import { styles } from "@/styles"
import Link from "next/link"
import Image from "next/image";

const Navbar = ({ initHidden = false }) => {
    const { scrollYProgress } = useScroll()
    const top = initHidden ? useTransform(scrollYProgress, [0, 0.1], [-200, 0]) : 0;
    return (
        <motion.div
            style={{ top }}
            className={`${styles.paddingX} w-full flex items-center py-5 fixed z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <motion.div
                    initial={{
                        opacity:0, scale:0.5,
                    }}
                    animate={{
                        opacity:1, scale:1,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <Link
                        href={'/'}
                        className="flex items-center gap-2"
                        onClick={() => {
                            window.scrollTo(0, 0)
                        }}
                    >
                        <Image src={logo} alt={'logo'} className='w-[8rem] h-[5rem] object-contain'/>
                        <p
                            className='text-white text-[18px] font-bold cursor-pointer flex'
                        >CEU &nbsp;<span className=' sm:block hidden'>| Centro de estudos do Universo</span></p>
                    </Link>
                </motion.div>


                <div className=" flex flex-1 justify-end items-center">
                    <Sidebar />
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar
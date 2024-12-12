'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { SectionWrapper } from '@/hoc'
import image from '/public/images/publicidade/conferencia-brasileira-de-astroturismo.png'
const Publicity = () => {
    return (
        <div className="relative z-0">
            <div className='bg-black rounded-lg flex flex-wrap p-10 justify-center items-center'>
            <Image
                className='w-[15rem] h-auto object-contain'
                alt="astroturismo"
                src={image}
            />
            <div className='text-center flex flex-col gap-8 h-full justify-between'>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-justify indent-4 text-[20px] max-w-3xl leading-[30px]"
            >
                O CEU tem o prazer de apoiar a <u>II Conferência Brasileira de Astroturismo</u>. Participe e descubra mais sobre o fascinante mundo do astroturismo!
            </motion.p>
            <a href="https://www.astroturismoparquesbr.com.br/iicba" target='_blank'>
            <button
                type='submit'
                className='py-3 px-8 outline-none w-fit border-white border-2 text-white font-black tracking-wider shadow-md shadow-primary rounded-xl '
            >
                Saiba mais
            </button>
            </a>
            </div>
            </div>
            
        </div>
    )
}

export default SectionWrapper(Publicity, 'publicidade')
"use client"
import React from "react";
import { motion } from "framer-motion"

import { styles } from '@/styles'
import { EarthCanvas } from '../../canvas'
import { SectionWrapper } from '@/hoc'
import { slideIn} from "@/utils/motion";
import ContactForm from "@/components/page/contact/ContactForm";


const Contact = () => {

    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Fale conosco</p>
                <h3 className={styles.sectionHeadText}>Contato.</h3>
                <ContactForm />
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='x1:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact")
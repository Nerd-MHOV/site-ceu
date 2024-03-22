"use client"
import React, {useEffect, useState} from 'react'
import {motion, useTransform, useScroll} from 'framer-motion'
import {styles} from '@/styles'
import logoH from '/public/assets/logo-ceu.png'
import Image from "next/image";
const Hero = () => {
    const { scrollYProgress } = useScroll();
    const top = useTransform(scrollYProgress, [0, 0.2], [20, 120])
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        // "bg-cupula",
        // "bg-ceu-brotas",
        "bg-cupula-noite",
        // "bg-obs-sara",
        // "bg-stone-range-2",
        // "bg-telescopio-2"
    ];

    const changeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(changeImage, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section
            className="relative w-full h-screen mx-auto"
        >
            <div className={`${images[currentImageIndex]} duration-500 ease-in-out absolute w-full h-full bg-cover
             bg-no-repeat sm:bg-fixed z-0 bg-center`}
            ></div>
            <motion.div
                className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 0.4, delay: 0.6}}
                    className="flex flex-col justfy-center items-center mt-5"
                >
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </motion.div>

                <div>
                    <motion.div
                        initial={{
                            x: '-100%'
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{duration: 0.5, ease: "easeOut"}}
                        className='bg-gradient-to-r from-[#05081640]  to-transparent px-3 rounded-2xl'
                    >
                        <Image src={logoH} alt='logo' className='sm:w-1/2 w-full'/>

                        <motion.div
                            initial={{
                                y: '-100%',
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{duration: 0.5, ease: "easeOut", delay: 0.6}}
                        >

                            <p
                                className={`${styles.heroSubText} mt-2 text-white-100`}
                            >
                                Um dos mais completos centros de ciência
                                <br className="sm:block hidden"/>
                                da América Latina
                            </p>
                        </motion.div>

                    </motion.div>
                </div>

            </motion.div>
            <div className="absolute sm:bottom-10 bottom-20 w-full flex justify-center items-center opacity-70">
                <a href="#about">
                    <div
                        className="w-[30px] h-[48px] rounded-3xl border-4 border-primary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 18, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            className="w-2 h-2 rounded-full bg-primary mb-1"
                        >

                        </motion.div>
                    </div>
                </a>
            </div>


        </section>
    )
}

export default Hero
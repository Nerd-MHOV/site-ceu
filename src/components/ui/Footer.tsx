"use client"
import {motion} from 'framer-motion'
import {styles} from '@/styles'
import {fadeIn, staggerContainer, textVariant} from "@/utils/motion";
import {navLinks} from "@/contants";
import React from "react";

interface FooterCardProps {
    index: number,
    children: React.ReactNode,
    title: string,
    subTitle: string,
}

const FooterCard: React.ComponentType<FooterCardProps> = ({index, children, title, subTitle}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
        <p className="text-white font-black text-[48px]">"</p>
        <div className="mt-1">
            <motion.div
                variants={textVariant()}
                className='mb-5'
            >
                <p className={styles.sectionSubText}>{title}</p>
            </motion.div>
            {children}
            <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                    <p className='mt-1 text-secondary text-[12px]'>{subTitle}</p>
                </div>

            </div>
        </div>
    </motion.div>
)
const Footer = () => {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            className={`relative z-0`}>
            <div className='mt-12 bg-black-100 rounded-[20px]'>
                <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[150px]`}>

                </div>

                <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 max-w-7xl mx-auto`}>
                    <FooterCard
                        index={0}
                        title='Endereço'
                        subTitle='Venha hoje mesmo'
                    >
                        <p
                            className='text-white tracking-wider text-[18px]'
                        >Rua Emílio Dalla Déa Filho,</p>
                        <p className='text-white tracking-wider text-[18px]'><span
                            className='blue-text-gradient'>Bairro:</span> Campos Eliseos,</p>
                        <p className='text-white tracking-wider text-[18px]'>17380-000,</p>
                        <p className='text-white tracking-wider text-[18px]'><span
                            className='blue-text-gradient'>Brotas-SP</span></p>
                    </FooterCard>
                    <FooterCard
                        index={1}
                        title='Contato'
                        subTitle='Tire suas dúvidas'
                    >
                        <span className='blue-text-gradient'>Ligue:</span>
                        <p className='text-white tracking-wider text-[18px]'>(14) 3653 4466</p>
                        <p className='text-white tracking-wider text-[18px] mb-3'>(14) 3653 9999</p>
                        <span className='blue-text-gradient'>Ou Whatsapp:</span>
                        <a href="https://wa.me/5511999043551" target='_blank'>
                            <p className='text-white tracking-wider text-[18px] cursor-pointer'>(11) 99904 3551</p>
                        </a>

                    </FooterCard>
                    <FooterCard
                        index={2}
                        title='Links úteis'
                        subTitle='Nos conheça melhor'
                    >
                        {navLinks.map((link, index) => (
                            <p className='text-white tracking-wider text-[18px] mb-1 cursor-pointer' key={index}><a
                                href={link.link}>{link.title}</a></p>
                        ))}
                    </FooterCard>

                </div>

                <div className='bg-black-200 py-4 px-5'>
                    <div className=" flex gap-8 justify-between max-w-7xl mx-auto">
                        <p className='mt-1 text-secondary text-[15px]'>@2024 Todos os direitos reservados. Centro de
                            Estudos
                            do Universo</p>
                        <p className='mt-1 text-secondary text-[15px]'>Desenvolvido por Matheus Henrique</p>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Footer;
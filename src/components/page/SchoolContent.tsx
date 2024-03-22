'use client'
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "@/utils/motion";
import { styles } from "@/styles";
import React from "react";

import { SectionWrapper } from "@/hoc";
import { GoArrowRight } from "react-icons/go";

const SchoolContent = () => {
    return <>
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Ciência aplicada
                </p>
                <h2
                    className={styles.sectionHeadText}
                >Ao Cotidiano.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                No C.E.U. (Centro de Estudos do Universo), os estudantes são levados a experimentar a ciência na prática e entender seu uso no
                dia-a-dia, com atividades que vão desde oficinas pedagógicas até sessões de planetário digital, onde as
                crianças viajam para além da superfície da Terra. Vão do espaço ao centro do nosso planeta.<br />
                As atividades são conduzidas por professores de diversas áreas do conhecimento formados em renomadas
                Universidades do Brasil.<br />
                Com uma linguagem popular e em um ambiente descontraído, os estudantes têm todo o apoio necessário para
                aprender, sanar as dúvidas e se entender como parte do Universo.
            </motion.p>
            <a href={`/atividades`}
                className='bg-logo-yel p-1 flex m-5 max-w-[300px] text-center items-center pointer-events-auto cursor-pointer  '>
                <p className='text-center font-bold m-auto text-black-200'>Conheça Nossas Atividades!</p>
                <motion.div
                    animate={{
                        x: [0, 6, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    className='px-2 mr-2 text-primary'

                >
                    <GoArrowRight />
                </motion.div>
            </a>
        </>


        <>
            <motion.div variants={textVariant()} className='mt-32'>
                <p className={styles.sectionSubText}>
                    Estrutura que atende
                </p>
                <h2
                    className={styles.sectionHeadText}
                >Ao Aprendizado.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Não há espaço melhor para explorar o Universo que existe abaixo dos nossos pés do que as profundezas da
                Terra… ou do CEU, no nosso caso.<br />
                As atividades são realizadas em ambientes adequados à temática para que o aprendizado seja absorvido
                como
                uma feliz lembrança.<br />
                Também por isso, contamos com uma estrutura que atende ao que pede o aprendizado, saindo da rotina da
                sala
                de aula e oferecendo experiências diferenciadas aos estudantes.
            </motion.p>
            <a href={`/estrutura`}
                className='bg-logo-yel p-1 flex m-5 max-w-[300px] text-center items-center pointer-events-auto cursor-pointer  '>
                <p className='text-center font-bold m-auto text-black-200'>Conheça Nossa Estrutura!</p>
                <motion.div
                    animate={{
                        x: [0, 6, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    className='px-2 mr-2 text-primary'

                >
                    <GoArrowRight />
                </motion.div>
            </a>
        </>


        <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className='bg-black-200 p-10 rounded-3xl md:mx-32 my-36 w-auto'
        >
            <p className="text-white font-black text-[48px]">"</p>

            <div className="mt-1">
                <p
                    className='text-white tracking-wider text-[18px]'
                >Toda pergunta é um grito para compreender o mundo.</p>
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className='text-white font-medium text-[16px]'>
                            <span className='blue-text-gradient'>@</span> Carl Sagan
                        </p>
                        <p className='mt-1 text-secondary text-[12px]'>Cientista planetário e astrônomo</p>
                    </div>

                    <img
                        src={'https://cdn.britannica.com/36/194736-050-CA5BE18B/Carl-Sagan-science-writer-American.jpg'}
                        alt={`by-Carl-Sagan`}
                        className='w-32 h-32 rounded-full object-cover'
                    />
                </div>
            </div>
        </motion.div>
    </>
}

export default SectionWrapper(SchoolContent, "")
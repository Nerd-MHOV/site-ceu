"use client"
import React from 'react'
import {motion} from 'framer-motion'
import {Tilt} from "react-tilt"
import {styles} from "@/styles"
import {services} from "@/contants"
import {fadeIn, textVariant} from "@/utils/motion"
import {SectionWrapper} from "@/hoc";
import Image, {StaticImageData} from "next/image";

interface ServiceCard {
    index: number,
    title: string,
    icon: StaticImageData,
}
const ServiceCard: React.ComponentType<ServiceCard> = ({index, title, icon}) => {
    return (
        <Tilt className="w-full max-w-[20rem] " >
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    // options={{
                    //     max: 45,
                    //     scale: 1,
                    //     speed: 450
                    // }}
                    className="bg-banner-stars bg-cover bg-no-repeat sm:bg-fixed bg-center rounded-[20px] min-h-[300px] py-3 px-3 flex justify-evenly items-center flex-col"
                >
                    <Image src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Introdução
                </p>
                <h2
                    className={styles.sectionHeadText}
                >Quem somos.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                O Centro de Estudos do Universo atua há mais de 20 anos em diversos segmentos educacionais,
                proporcionando atividades que complementam o currículo escolar de forma pragmática, com uma linguagem
                popular e em um ambiente descontraído.

                Ao mesmo tempo, são ofertadas sessões de atendimento ao público, buscando divulgar a astronomia por meio
                da vivência de observar o Universo lá fora usando modernos telescópios e viajar por ele em nosso
                planetário digital.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 flex-row justify-evenly">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");
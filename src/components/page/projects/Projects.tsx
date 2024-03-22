'use client'
import { SectionWrapper } from '@/hoc'
import { activitiesList } from "@/contants"
import SliderProject from "./SliderProject"
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Filter from '@/components/page/projects/Filter'
import { Suspense } from 'react'

const Projects = () => {
    const searchParams = useSearchParams();
    const year = searchParams.get('ano')?.split(",") ?? []
    const material = searchParams.get('materia')?.split(",") ?? []
    let filter = activitiesList;

    if (year.length > 0) filter = filter.filter(item => item.tags.some(tag => year.includes(tag.title)));
    if (material.length > 0) filter = filter.filter(item => item.subjects.some(mat => material.includes(mat.title)));
    return (
        <>
            <motion.div>
                <h1 className={`text-logo-yel font-black md:text-[70px] sm:text-[60px] xs:text-[45px] text-[35px] w-full text-center`}>Atividades</h1>
            </motion.div>
            <Suspense>
                <Filter />
            </Suspense>
            <SliderProject
                items={filter.filter(activity => activity.type === "multimedia")}
                title='Multimídias'
                subTitle='Material Desenvolvido aqui'
                description='Following projects showcases my skills and experience through real-world examples of my work. Each
                    project is briefly described with links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies, and manage projects
                    effectively.'
            />
            <SliderProject
                items={filter.filter(activity => activity.type === "workshop")}
                title='Oficinas'
                subTitle=''
                description='Following projects showcases my skills and experience through real-world examples of my work. Each
                    project is briefly described with links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies, and manage projects
                    effectively.'
            />
            <SliderProject
                items={filter.filter(activity => activity.type === "planetarium")}
                title='Planetarios'
                subTitle=''
                description='Following projects showcases my skills and experience through real-world examples of my work. Each
                    project is briefly described with links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies, and manage projects
                    effectively.'
            />
            <SliderProject
                items={[]}
                title='Observacao'
                subTitle='Atendimento ao publico'
                description='Following projects showcases my skills and experience through real-world examples of my work. Each
                    project is briefly described with links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies, and manage projects
                    effectively.'
            />

        </>
    )
}

export default SectionWrapper(Projects, '')

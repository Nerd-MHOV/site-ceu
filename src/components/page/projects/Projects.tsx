'use client'
import { SectionWrapper } from '@/hoc'
import { activitiesList } from "@/contants"
import SliderProject from "./SliderProject"
import { useSearchParams } from 'next/navigation'
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
            <Suspense>
                <Filter />
            </Suspense>
            <SliderProject
                items={filter.filter(activity => activity.type === "multimedia")}
                title='Multimídias'
                subTitle=''
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
                title='Planetários'
                subTitle=''
                description='Following projects showcases my skills and experience through real-world examples of my work. Each
                    project is briefly described with links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies, and manage projects
                    effectively.'
            />
            <SliderProject
                items={filter.filter(activity => activity.type === "special")}
                title='Especiais'
                subTitle=''
                description='Following projects showcases my skills and experience through real-world examples of my work. Each
                    project is briefly described with links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies, and manage projects
                    effectively.'
            />

        </>
    )
}

export default SectionWrapper(Projects, '')

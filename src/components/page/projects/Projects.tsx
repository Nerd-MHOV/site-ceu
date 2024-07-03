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
                description='São apresentações feitas em nosso auditório por professores especializados na área e com recursos de computação gráfica de alto nível. 
                São desenvolvidos temas de astronomia, astronáutica e geologia e o recurso de apresentações feitas ao vivo permite ao professor adequar o conteúdo a faixa etária '
            />
            <SliderProject
                items={filter.filter(activity => activity.type === "workshop")}
                title='Oficinas'
                subTitle=''
                description='No Centro de Estudo do Universo, convidamos você a participar de nossas oficinas de vivência interativa, onde exploramos os fascinantes mundos da astronomia e da geologia. São projetadas para proporcionar uma experiência educativa e imersiva, permitindo que os participantes mergulhem nas maravilhas do cosmos e nos segredos da Terra.'
            />
            <SliderProject
                items={filter.filter(activity => activity.type === "planetarium")}
                title='Planetários'
                subTitle=''
                description='Oferecemos uma experiência única e imersiva através de nossas sessões de planetário. Aqui, exploramos os mistérios do cosmos e os fascinantes mundos da biologia e geologia. As sessões projetadas em domo (360ºx180º) são criadas por nossa equipe e projetadas para despertar a curiosidade e ampliar o conhecimento dos participantes de todas as idades.'
            />
            <SliderProject
                items={filter.filter(activity => activity.type === "special")}
                title='Atividades Especiais'
                subTitle=''
                description='Venha contemplar o universo fazendo a observação dos astros diretamente com nossos telescópios de alta tecnologia, aqui será possivel a observação de estrelas, planetas, nebulosas e galáxias. <br>
                E em uma apresentação noturna, cheia de efeitos especiais, venha conhecer a história geologica do planeta Terra.'
            />

        </>
    )
}

export default SectionWrapper(Projects, '')

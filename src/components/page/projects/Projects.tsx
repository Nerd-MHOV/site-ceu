'use client'
import { SectionWrapper, SectionWrapperComponent } from '@/hoc'
import { activitiesList } from "@/contants"
import SliderProject from "./SliderProject"
import { useSearchParams } from 'next/navigation'
import Filter from '@/components/page/projects/Filter'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { slideIn } from '@/utils/motion'

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


            <SectionWrapperComponent>
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className='bg-black-200 p-10 rounded-3xl md:mx-32 my-8 w-auto'
                >
                    <p className="text-white font-black text-[48px]">&quot;</p>

                    <div className="mt-1">
                        <p
                            className='text-white tracking-wider text-[18px]'
                        >A ciência é muito mais do que um corpo de conhecimento. É uma maneira de pensar.</p>
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
            </SectionWrapperComponent>
        </>
    )
}

export default SectionWrapper(Projects, '')

'use client'
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {styles} from "@/styles";
import ProjectCard from "./ProjectCard";
import { useSearchParams } from "next/navigation";
import NotFoundActivity from "./NotFoundActivity";

type tagsAndSubjects = {
    title: string,
    color: string,
}
export interface Item {
    id: number,
    title: string,
    image: string,
    description: string,
    subjects: tagsAndSubjects[],
    tags: tagsAndSubjects[],
}
interface SliderProjectProps {
    title: string,
    subTitle: string,
    description: string,
    items: Item[],
    animated?: boolean,
}

const SliderProject: React.ComponentType<SliderProjectProps> = ({ title, subTitle, description, items, animated = true}) => {
    const searchParams = useSearchParams();
    const content = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);


    useEffect(() => {
        if(content.current) 
            setWidth(content.current.scrollWidth - content.current.offsetWidth)
    }, [searchParams])

    return (
        <div className="mt-20">
            <motion.div
                // variants={animated ? textVariant() : () => {}}
            >

                <p className={styles.sectionSubText}>{subTitle}</p>
                <h2 className={styles.sectionHeadText}>{title}.</h2>
            </motion.div>
            <div className='w-full flex'>
                <motion.p
                    // variants={ animated ? fadeIn('', '', 0.1, 1) : () => {} }
                    className='mt-3 text-secondary text-[17px] max-w-3xl  leading-[30px] mb-3'
                >
                    {description}
                </motion.p>
            </div>
            <motion.div
                className='cursor-grab overflow-hidden'
                whileTap={{ cursor: 'grabbing' }}
                ref={content}
            >
                <motion.div
                    className=" mb-5 flex gap-5 max-h-[650px] "
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 0 }}
                    animate={searchParams.size == 0 ? { x: -width } : {}}
                    transition={searchParams.size == 0 ? { duration: items.length * 2, ease: 'linear', repeat: Infinity } : {}}

                >

                    {items.length > 0 ?
                        items.map((item, index) => (
                        <>
                            <ProjectCard
                                    key={index}
                                         index={index}
                                    {...item}
                                />
                        </>
                    ))
                    : <NotFoundActivity type={title} />}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default SliderProject
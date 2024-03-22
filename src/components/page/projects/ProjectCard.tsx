import { motion } from "framer-motion";
import { Item } from "@/components/page/projects/SliderProject";
import React from "react";
import Link from "next/link";
import slugify from "react-slugify";
import { useSearchParams } from "next/navigation";


interface ProjectCardProps extends Item {
    index: number
}
const ProjectCard: React.ComponentType<ProjectCardProps> = ({
    index, title, description, tags, image, subjects
}) => {
    const searchParams = useSearchParams();
    return (
        <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        // variants={animated ? fadeIn('up', 'spring', index * 0.5, 0.75 ) : () => {}}
        >
            <motion.div

                className='bg-black-100 p-5 rounded-2xl w-[320px] h-full pointer-events-none select-none flex flex-col justify-between'
            >
                <motion.div className="relative w-full h-[230px]">
                    <motion.img
                        src={image}
                        alt={title}
                        className='w-full h-full object-cover rouded-2xl'
                    />
                </motion.div>

                <motion.div className="mt-5">
                    <motion.h3
                        className='text-white font-bold text-[24px]'
                    >{title}</motion.h3>
                    <motion.p
                        className='mt-2 text-secondary text-[14px] line-clamp-4'
                    >{description}</motion.p>
                </motion.div>



                <motion.div className="mt-4 flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <motion.p key={tag.title} className={`text-[12px] ${tag.color}`}>
                            #{tag.title}
                        </motion.p>
                    ))}
                </motion.div>
                <Link href={`/atividades/${slugify(title)}?${searchParams.toString()}`} 
                className='bg-logo-yel p-1 flex mt-3 max-w-[120px] text-center items-center pointer-events-auto cursor-pointer  '>
                    <p className='text-center font-bold m-auto text-black-200'>Saiba mais!</p>
                </Link>

            </motion.div>
        </motion.div>
    )

}

export default ProjectCard

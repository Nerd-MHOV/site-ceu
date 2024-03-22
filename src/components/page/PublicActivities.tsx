'use client'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'

import { styles } from "@/styles"
import { publicActivities } from "@/contants"
import { SectionWrapper } from "@/hoc/"
import { textVariant } from "@/utils/motion"
import Image, { StaticImageData } from "next/image"

interface ExperienceCardProps {
    experience: {
        title: string;
        company_name: string;
        icon: StaticImageData;
        iconBg: string;
        date: string;
        points: string[];
    }
}
const ExperienceCard = ({ experience }: ExperienceCardProps) => (
    <VerticalTimelineElement
        visible={true}  // RETIRAR SE FOR USAR O OUTPUT
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <Image
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[95%] h-[95%] object-contain"
                />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-white[24px] font-bold">
                {experience.title}
            </h3>
            <p
                className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}
            >{experience.company_name}</p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider list-none"
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)
const PublicActivities = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Cronograma</p>
                <h2 className={styles.sectionHeadText}>Atividades para o público</h2>
            </motion.div>
            
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {publicActivities.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>


    )
}

export default SectionWrapper(PublicActivities, "work")
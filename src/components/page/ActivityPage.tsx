'use client'
import { Layout } from '../ui';
import { styles } from '@/styles';
import { GoArrowLeft } from "react-icons/go";
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion';
import { Chip, makeStyles } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material'
import { useSearchParams } from 'next/navigation';
import PhotoSlider from '../ui/PhotoSlider';

interface ActivityPageProps {
    activity: {
        id: number;
        type: string;
        title: string;
        images: string[];
        description: string;
        subjects: {
            title: string;
            color: string;
        }[];
        topics: string[];
        tags: {
            title: string;
            color: string;
        }[];
    }
}

// const imageListSlider = [
//     '/images/school/school-1.jpg',
//     '/images/school/school-2.jpg',
//     '/images/school/school-3.jpg',
// ]


const ActivityPage = ({ activity }: ActivityPageProps) => {
    
    const searchParams = useSearchParams();
    return <Layout>
        <ThemeProvider theme={createTheme({
            palette: {
                mode: 'dark',
            }
        })}>
            <div className="relative h-screen w-full">
                <img src={activity.images[0]} alt="" className='w-full h-full object-cover' />
                <div className="bg-gradient-to-t from-primary from-30% to-transparent bottom-0 left-0 absolute w-full text-center ">
                    <h1 className={`${styles.sectionHeadText} m-auto py-10 tracking-widest !text-bold`}>{activity.title}</h1>
                </div>
            </div>

            <div className={`${styles.padding} max-w-7xl mx-auto relative`}>
                <p className={styles.subtitleActivity}>
                    Descrição
                </p>
                <p className="mt-4 text-secondary text-[19px] leading-[30px]">
                    {activity.description}
                </p>

                <motion.div variants={textVariant()}>
                    <h2
                        className={`${styles.subtitleActivity} !mt-16`}
                    >Tópicos</h2>
                </motion.div>

                {activity.topics.map((topic, index) => (
                    <motion.p
                        key={index}
                        variants={fadeIn("", "", 0.1, 1)}
                        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
                    >- {topic};</motion.p>
                ))}

                <motion.div variants={textVariant()}>
                    <h2
                        className={`${styles.subtitleActivity} !mt-16`}
                    // className={`text-white font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[10px] mt-16`}
                    >Matérias</h2>
                </motion.div>

                <div className='flex gap-3 mt-2'>
                    {activity.subjects.map((sub, i) => (
                        <Chip
                            key={i}
                            label={sub.title}
                            onClick={() => { }}
                            variant="filled"
                            color="warning"
                            size="medium"
                        />
                    ))}
                </div>

                <motion.div variants={textVariant()}>
                    <p className={`${styles.subtitleActivity} mt-16`}>
                        Melhor aplicado para essas
                    </p>
                    <h2
                        className={`${styles.subTitleActivitySpacing}`}
                    >Faixas Etárias</h2>
                    
                </motion.div>

                <div className='flex gap-3 mt-2'>
                    {activity.tags.map((year, i) => {
                        if (year.title === "Inglês") return
                        return (
                            <Chip
                                key={i}
                                label={year.title}
                                onClick={() => { }}
                                variant="filled"
                                color="default"
                                size="medium"
                            />
                        )
                    })}
                </div>

                <div className='mt-16'>
                    <PhotoSlider images={activity.images} />
                </div>

                <a href={`/atividades?${searchParams.toString()}`} className='flex flex-row justify-end w-full mt-20 items-center gap-2'>
                    <motion.div
                        animate={{
                            x: [0, 6, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    >
                        <GoArrowLeft />
                    </motion.div>
                    <div className='text-white text-[19px] leading-[30px]'>Atividades</div>
                </a>
            </div>

        </ThemeProvider>
    </Layout>
}

export default ActivityPage
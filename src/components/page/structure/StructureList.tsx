'use client'
import {structure} from '@/contants'
import {motion} from "framer-motion";
import {GoArrowRight} from "react-icons/go";
import {Suspense, useState} from "react";
import { StarsCanvas } from '../../canvas';
import MapStructureCanvas from '../../canvas/MapStructure';

interface StructureCardProps {
    staticImage: string,
    description: string,
    name: string,
    onHover: React.MouseEventHandler<HTMLDivElement>,
}
const StructureCard = ({staticImage, description, name, onHover}: StructureCardProps) => {
    return <>
        <div className='flex lg:flex-row flex-col md:gap-2 gap-0 bg-primary overflow-hidden rounded'
             onMouseEnter={onHover}
             onClick={onHover}>
            <div className='flex lg:max-w-[45%] min-h-[200px] w-full h-full'>
                <img src={`/images/${staticImage}`} alt={`img-${name}`} className='object-cover'/>
            </div>
            <div className='flex flex-col h-full gap-2 p-2'>
                <h3 className='text-white font-black md:text-[20px] sm:text-[18px] xs:text-[16px] text-[15px]'>{name}</h3>
                <p className='text-secondary md:text-[17px] sm:text-[15px] xs:text-[13px] text-[12px]'>{description}</p>
                <div>
                    <a href='/tour' className='flex flex-row justify-end w-full  items-center gap-2 pr-2'>
                        <div className='text-white text-[18px] leading-[30px]'>Tour</div>
                        <motion.div
                            animate={{
                                x: [0, 6, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            className='z-0'
                        >
                            <GoArrowRight/>
                        </motion.div>
                    </a>
                </div>
            </div>
        </div>
    </>
}
const StructureList = () => {
    const [idStructure, setIdStructure] = useState<number | null>(null);

    const selected = structure.find(str => str.id === idStructure)?.name ?? "";


    return <div
        className={`flex md:flex-row flex-col sm:px-16 px-0 sm:py-16 py-10 max-w-screen-2xl mx-auto relative z-0 `}>

        <div
            className="md:flex-1 rounded flex-auto
             bg-primary
             md:bg-gradient-to-tl bg-gradient-to-t from-black-100 from-5% via-blue-800/30  to-primary to-90%
             sticky top-[100px] md:p-0 p-4 md:max-h-screen
             max-h-[400px] w-full overflow-hidden z-[1] relative">
            <StarsCanvas size={"0.005"} className='p-4'/>
            <div className='absolute top-[20%]'>
                <h1 className={`text-logo-yel font-black md:text-[70px] sm:text-[60px] xs:text-[45px] text-[35px] w-full text-center`}>{selected}</h1>
            </div>
            <MapStructureCanvas idStructure={idStructure}/>
        </div>
        <div className="md:flex-1 relative flex-auto bg-black-100 w-full p-5 rounded flex flex-col gap-4">
            {structure.map(struct => (
                <StructureCard {...struct} onHover={() => {
                    setIdStructure(struct.id)
                }} key={struct.id}/>
            ))}
            {structure.map(struct => (
                <StructureCard {...struct} onHover={() => {
                    setIdStructure(struct.id)
                }} key={struct.id}/>
            ))}
            {structure.map(struct => (
                <StructureCard {...struct} onHover={() => {
                    setIdStructure(struct.id)
                }} key={struct.id}/>
            ))}
        </div>
    </div>
}

export default StructureList
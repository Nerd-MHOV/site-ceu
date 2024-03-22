'use client'
import { motion } from 'framer-motion';
const TitlePage = ({title= ""}) =>  <motion.div>
<h1 className={`text-logo-yel font-black md:text-[70px] sm:text-[60px] xs:text-[45px] text-[35px] w-full text-center`}>
    {title}
</h1>
</motion.div>

export default TitlePage
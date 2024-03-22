import { motion } from 'framer-motion'
import {navLinks} from "@/contants";


const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,

    }
}
const LinksSidebar = () => {
    return <motion.div className='absolute w-full h-full flex flex-col items-center justify-center gap-[20px]' variants={variants}>
        {navLinks.map(item => (
            <motion.a variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}} href={`${item.link}`}
                      key={item.id} className='text-2xl  text-primary'>{item.title}</motion.a>
        ))}
    </motion.div>
}
export default LinksSidebar
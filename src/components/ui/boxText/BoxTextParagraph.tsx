import { ReactNode } from "react"
import { fadeIn } from "@/utils/motion"
import { motion } from 'framer-motion'

const BoxTextParagraph: React.FC<{children: ReactNode}> = ({children}) => {
    return <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
        {children}
    </motion.p>
}

export default BoxTextParagraph
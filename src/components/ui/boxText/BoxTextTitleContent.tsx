import { motion } from "framer-motion"
import { textVariant } from "@/utils/motion"
import { ReactNode } from "react"


const BoxTextTitleContent: React.FC<{children: ReactNode}> = ({ children }) => {
    return <motion.div variants={textVariant()}>
        {children}
    </motion.div>

}

export default BoxTextTitleContent
import { motion } from "framer-motion"
import { GoArrowRight } from "react-icons/go"

const BoxTextIconRight = () => {
    return (
        <motion.div
                animate={{
                    x: [0, 6, 0]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
                className='px-2 mr-2 text-primary'

        >
            <GoArrowRight />
        </motion.div>
    )
}


export default BoxTextIconRight
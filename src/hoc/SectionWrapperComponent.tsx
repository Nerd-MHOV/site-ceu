import { motion } from "framer-motion"

import { styles } from "@/styles"

import { staggerContainer } from "@/utils/motion";

interface SectionWrapperComponentProps {
    children: React.ReactNode,
    idName?: string,
}
const SectionWrapperComponent = ({children, idName}: SectionWrapperComponentProps) => (
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        <span className="hash-span" id={idName}>
            &nbsp;
        </span>
        {children}
    </motion.section>
)

export default SectionWrapperComponent
import { styles } from "@/styles"

const BoxTextTitle: React.FC<{text: string}> = ({text}) => {
    return (
    <h2
        className={styles.sectionHeadText}
    >{text}.</h2>
    )
}

export default BoxTextTitle
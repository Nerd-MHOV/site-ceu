import { styles } from "@/styles"

const BoxTextTitle: React.FC<{text: string}> = ({text}) => {
    return (
    <h2
        className={`${styles.sectionHeadText} !whitespace-normal`}
    >{text}</h2>
    )
}

export default BoxTextTitle
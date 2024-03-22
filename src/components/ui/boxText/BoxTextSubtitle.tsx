import { styles } from "@/styles"

const BoxTextSubtitle: React.FC<{text: string}> = ({text}) => {
    return <p className={styles.sectionSubText}>
        {text}
    </p>
}

export default BoxTextSubtitle
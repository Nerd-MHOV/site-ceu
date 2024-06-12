import { styles } from "@/styles"

const BoxTextSubtitle: React.FC<{text: string}> = ({text}) => {
    return <p className={styles.newSubTitle}>
        {text}
    </p>
}

export default BoxTextSubtitle
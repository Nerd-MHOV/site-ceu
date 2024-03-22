import SchoolContent from "@/components/page/SchoolContent";
import { Layout } from "@/components/ui";
import TitlePage from "@/components/ui/TitlePage";
import {motion} from "framer-motion";

const School = () => {
    return <Layout>
        <div className="mt-[120px]">
            <TitlePage title="Escolas & Colégios" />
            <SchoolContent />
        </div>
    </Layout>
}

export default School;
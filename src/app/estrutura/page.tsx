import StructureList from "@/components/page/structure/StructureList"
import { Layout } from "@/components/ui"
import TitlePage from "@/components/ui/TitlePage"

const Structure = () => {
    return <Layout>
        <div className="mt-[120px]">
            <TitlePage title="Estrutura"/>
            <StructureList />
        </div>
    </Layout>
}

export default Structure
import TableActivities from "@/components/page/projects/tableActivities/TableActivities"
import { Layout } from "@/components/ui"
import TitlePage from "@/components/ui/TitlePage"

const ActivitiesTable = () => {
    return (
        <Layout>
          <div className="mt-[120px]">
          <TitlePage title="Tabela de atividades" />

            <TableActivities />
          </div>
        </Layout>
    )
}

export default ActivitiesTable
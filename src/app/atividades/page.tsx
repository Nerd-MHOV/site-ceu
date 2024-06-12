import {Layout} from "@/components/ui";
import {Projects} from '@/components/page';
import { Suspense } from "react";
import TitlePage from "@/components/ui/TitlePage";

const Activities = () =>{
    return <Layout>
        <div className='mt-[120px]'>
            <TitlePage title="Atividades"/>
            <Suspense>
            <Projects />
            </Suspense>
        </div>
    </Layout>
}

export default Activities
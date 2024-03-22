import {Layout} from "@/components/ui";
import {Projects} from '@/components/page';
import { Suspense } from "react";

const Activities = () =>{
    return <Layout>
        <div className='mt-[120px]'>
            <Suspense>
            <Projects />
            </Suspense>
        </div>
    </Layout>
}

export default Activities
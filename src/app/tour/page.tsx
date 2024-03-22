import StructureTuor from "@/components/page/structure/StructureTuor";
import Layout from "@/components/ui/Layout";
import { Suspense } from "react";

const TourPage = () => {

    return (
        <Layout>
            <section className='overflow-hidden'>
                <div className="relative w-full h-[100vh] overflow-hidden">

                    <div className="absolute flex justify-center items-center z-20 w-full h-full pointer-events-none pt-32">
                        {/*<h1>TEXTO POR CIMA</h1>*/}
                    </div>
                    <Suspense>
                    <StructureTuor />
                    </Suspense>

                </div>
            </section>
            <span className="hash-span hidden pointer-events-none" id={"description"}>
                    &nbsp;
                </span>
        </Layout>
    )
}
export default TourPage
'use client'
import { Model } from "@/components/canvas/Ceu"
import { Layout } from "@/components/ui"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from '@/components/ui/Loader'

const TestePage = () => {
    return <Layout>
        <div className="mt-[120px] min-h-screen">
            <Canvas className='!min-h-screen '>
                <ambientLight intensity={1.5} />
                <directionalLight intensity={1.5} />
                <OrbitControls />
                <Suspense fallback={<CanvasLoader />}>
                    <Model />
                </Suspense>
            </Canvas>

        </div>
    </Layout>
}

export default TestePage
'use client'
import { Model } from "@/components/canvas/Ceu"
import { Layout } from "@/components/ui"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import CanvasLoader from '@/components/ui/Loader'
import { positions } from "@mui/system"

const TestePage = () => {
    return <Layout>
        <div className="mt-[120px] min-h-screen">
            <Canvas camera={ {
                position: [0,20,-20],
            } } style={{ height: 800 }} className='min-h-screen h-screen'>
                <ambientLight intensity={1.5} />
                <directionalLight intensity={1.5} />
                <OrbitControls autoRotate />
                <Suspense fallback={<CanvasLoader />}>
                    <Model position={[10,0,-40]}/>
                </Suspense>
            </Canvas>

        </div>
    </Layout>
}

export default TestePage
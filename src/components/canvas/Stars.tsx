"use client"
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'


const Stars = (props: any) => {
    const { size } = props;
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

    useFrame((state, delta) => {
        // @ts-ignore
        ref.current.rotation.x -= delta / 10;
        // @ts-ignore
        ref.current.rotation.y -= delta / 15;
    })
    return (
        <group rotation={[ 0, 0, Math.PI / 4 ]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled { ...props } >
                <PointMaterial
                    transparent
                    color={'#f272c8'}
                    size={size}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

interface StarCanvasProps {
    size?: string,
    className?: string,
}

const StarsCanvas = ({ size = "0.002", className}: StarCanvasProps) => {

    return (
        <div className={`w-full h-full absolute inset-0 z-[-1] ${className}`}>
            <Canvas camera={{ position: [ 0, 0, 1 ] }}>
                <Suspense fallback={null} >
                    <Stars size={size}/>
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas
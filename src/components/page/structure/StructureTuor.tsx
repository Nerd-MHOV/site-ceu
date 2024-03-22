'use client'
import * as THREE from 'three'
import {Vector3} from 'three'
import {Suspense, useState} from 'react'
import {Canvas, useLoader} from '@react-three/fiber'
import {Html, OrbitControls, Preload} from '@react-three/drei'
import {motion} from 'framer-motion'
import Loader from '../../ui/Loader'
import Nipple from 'nipplejs'
import { useSearchParams } from 'next/navigation'
import store, { pointType, positionType } from './StructureObject'

interface DomeProps  {
    points: pointType[],
    texture: THREE.Texture,
    onClick: React.Dispatch<React.SetStateAction<number>>
    rotation?: positionType;
}
function Dome({points, texture, onClick, rotation}: DomeProps) {
    return (
        <group rotation={rotation || [0, 0, 0]}>
            <mesh scale={new Vector3(-1, 1, 1)}>
                <sphereGeometry args={[500, 60, 40]}/>
                <meshBasicMaterial
                    map={texture}
                    side={THREE.BackSide}
                />
            </mesh>
            {points.map((point, i) => (
                <mesh position={point.position} key={`point-${i}`}>
                    <sphereGeometry args={[1.25, 32, 32]}/>
                    <meshBasicMaterial color="#060416"/>
                    <Html center>
                        <div onClick={() => onClick(point.link)} className='cursor-pointer'>
                            <motion.p whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}
                                      className='font-bold text-center'>{point.name}</motion.p>
                        </div>
                    </Html>
                </mesh>
            ))}
        </group>
    )
}

interface PortalsProps {
    room: number | null
}
function Portals({room}: PortalsProps) {
    const [which, set] = useState(room || 0)
    const {...props} = store[which]
    const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url))
    // const map = useTexture(())
    return <Dome onClick={set} {...props} texture={maps[which]}/>
}

function StructureTuor() {
    const queryParameters = useSearchParams();
    const room = Number(queryParameters.get("room")) || null
    return (
        <>
            <Canvas frameloop="demand" camera={

                {
                    position: [0, 0, 0.1],
                    fov: 75,
                }
            }>
                <OrbitControls
                    // ref={orbitControlsRef}
                    enableZoom={false}
                    // enablePan={false}
                    enableDamping
                    dampingFactor={0.2}
                    // autoRotate
                    // autoRotateSpeed={0.9}
                    rotateSpeed={-0.3}
                />
                <Suspense fallback={<Loader/>}>
                    <Portals room={room}/>
                    <Preload all/>
                </Suspense>
            </Canvas>
            {/*<div id='joystick-container' />*/}
        </>
    )
}

export default StructureTuor

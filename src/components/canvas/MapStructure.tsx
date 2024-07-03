'use client'
import { RefObject, Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import CanvasLoader from '../ui/Loader'
import { ACESFilmicToneMapping, AmbientLight, Group, LinearToneMapping, Object3DEventMap, Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

const positionMapStructure = [
    {
        id: 0,
        position: new Vector3(-170, 8, -40),
        rotation: new Vector3(0, -1.49, 0),
    },
    {
        id: 1,
        // position: new Vector3(20, -2, 30),
        // rotation: new Vector3(0, 1, 0),
        position: new Vector3(-160, -2, -40),
        rotation: new Vector3(0, -1.2, 0),
    },
    {
        id: 2,
        // position: new Vector3(20, -2, 30),
        // rotation: new Vector3(0, 1, 0),
        position: new Vector3(-130, 8, -30),
        rotation: new Vector3(0, -0.9, 0),
    },
    {
        id: 3,
        position: new Vector3(100, 2, 10),
        rotation: new Vector3(0, 2.5, 0),
    },
    {
        id: 4,
        position: new Vector3(30, 2, 50),
        rotation: new Vector3(0, 2, 0),
    },
    {
        id: 5,
        position: new Vector3(200, 2, 1),
        rotation: new Vector3(0, 2, 0),
    },
    {
        id: 6,
        position: new Vector3(75, -1, 75),
        rotation: new Vector3(0, 1.05, 0),
    },
    {
        id: 7,
        position: new Vector3(100, -1, 90),
        rotation: new Vector3(0, 0.6, 0),
    },
    {
        id: 8,
        position: new Vector3(150, 2, 10),
        rotation: new Vector3(0, 2.3, 0),
    },
    {
        id: 9,
        position: new Vector3(140, 2, 10),
        rotation: new Vector3(0, 2.2, 0),
    },
    {
        id: 10,
        position: new Vector3(150, 10, 30),
        rotation: new Vector3(0, 2.4, 0),
    },

];

const getCurrentStructure = (idStructure: number | null) => {
    return positionMapStructure.find(pms => pms.id === idStructure);
};


interface MapStructureProps {
    idStructure: number | null,
    camRef: RefObject<Group<Object3DEventMap>>,
    orbitRef: RefObject<OrbitControlsImpl>,
}
const MapStructure = ({ idStructure, camRef, orbitRef }: MapStructureProps) => {
    const structure = useGLTF('/mapceu/teste3/ceu.gltf')

    const map = getCurrentStructure(idStructure)
    const groupRef = useRef<Group<Object3DEventMap>>(null);

    useEffect(() => {
        if (map?.position && camRef?.current) {
            orbitRef.current?.reset();
            const currentPosition = camRef.current.position.clone(); // Clone the current position
            const newPosition = map.position.clone(); // Clone the new position
            const currentRotation = camRef.current.rotation.clone();
            const newRotation = map.rotation.clone()
            gsap.to(currentPosition, {
                x: newPosition.x,
                y: newPosition.y,
                z: newPosition.z,
                duration: 0,
                onUpdate: () => {
                    camRef.current?.position.copy(currentPosition); // Update camera position during animation
                },
            });
            gsap.to(currentRotation, {
                x: newRotation.x,
                y: newRotation.y,
                z: newRotation.z,
                duration: 0,
                onUpdate: () => {
                    camRef.current?.rotation.copy(currentRotation); // Update camera position during animation
                },
            });
            orbitRef.current?.setAzimuthalAngle(orbitRef.current.getAzimuthalAngle() + 0.5);
        }
    }, [idStructure])


    return (
        <group ref={groupRef}>
            <primitive
                object={structure.scene}
                scale={2.5}
                position={[0, -15, 0]}
                rotation={[0, Math.PI, 0]}
            />
        </group>
    )
}

interface MapStructureCanvasProps {
    idStructure: null | number
}
const MapStructureCanvas = ({ idStructure = null }: MapStructureCanvasProps) => {

    const cameraRef = useRef<Group<Object3DEventMap>>(null);
    const orbitRef = useRef<OrbitControlsImpl>(null);
    
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{
                preserveDrawingBuffer: true, toneMappingExposure: 1,
                toneMapping: LinearToneMapping,
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                {/* <Environment  preset='sunset' /> */}
                <ambientLight intensity={1.5} />
                <directionalLight intensity={1.5} />
                <OrbitControls 
                    ref={orbitRef} 
                />
                <group ref={cameraRef} rotation={[0.6, 0.3, 0]} position={[0, -50, 20]} >
                    <MapStructure idStructure={idStructure} orbitRef={orbitRef} camRef={cameraRef} />
                </group>
            </Suspense>
        </Canvas>
    )
}

export default MapStructureCanvas


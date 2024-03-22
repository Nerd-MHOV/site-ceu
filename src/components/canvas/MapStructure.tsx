'use client'
import {RefObject, Suspense, useEffect, useRef} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei";
import gsap from 'gsap'
import CanvasLoader from '../ui/Loader'
import {Group, Object3DEventMap, Vector3} from "three";
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

const positionMapStructure = [
    {
        id: 0,
        position: new Vector3(10, 2, 35),
        rotation: new Vector3(0.05, 0, 0),
    },
    {
        id: 1,
        position: new Vector3(0, -2, 34),
        rotation: new Vector3(0.09, 0, 0),
    },
    {
        id: 2,
        position: new Vector3(-29, 7, -29),
        rotation: new Vector3(0.2, -2, 0),
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
const MapStructure = ({idStructure, camRef, orbitRef}: MapStructureProps) => {
    const structure = useGLTF('/structureMapMesh/scene.gltf')

    const map = getCurrentStructure(idStructure)
    const groupRef = useRef<Group<Object3DEventMap>>(null);


    useEffect(() => {
        if (map?.position && camRef?.current) {
            orbitRef.current?.reset();
            console.log(orbitRef);
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
const MapStructureCanvas = ({idStructure = null}: MapStructureCanvasProps) => {

    const cameraRef = useRef<Group<Object3DEventMap>>(null);
    const orbitRef = useRef<OrbitControlsImpl>(null);


    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls ref={orbitRef}/>
                <group ref={cameraRef} rotation={[0.3, 0, 0]} position={[0, 0, 10]}>
                    <PerspectiveCamera position={[0, 0, 5]} fov={30}/>
                    <MapStructure idStructure={idStructure} orbitRef={orbitRef} camRef={cameraRef}/>
                </group>
            </Suspense>
        </Canvas>
    )
}

export default MapStructureCanvas


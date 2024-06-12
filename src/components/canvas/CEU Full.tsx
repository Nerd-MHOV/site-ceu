import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { nodes, materials } = useGLTF('/mapceu/CEU Full.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[21.037, 4.558, 7.117]} rotation={[-Math.PI / 2, 0, 0]} scale={0.415}>
        <mesh geometry={nodes.Bip001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 3.636, 7.117]} rotation={[-Math.PI / 2, 0, 0]} scale={0.415}>
        <mesh geometry={nodes.Bip001_Footsteps.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 4.558, 7.117]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[20.752, 20.752, 16.602]}>
        <mesh geometry={nodes.Bip001_Pelvis.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 4.653, 7.117]} rotation={[-Math.PI, 0, -1.57]} scale={10.791}>
        <mesh geometry={nodes.Bip001_Spine.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 4.761, 7.117]} rotation={[-Math.PI, 0, -1.57]} scale={10.791}>
        <mesh geometry={nodes.Bip001_Spine1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 4.869, 7.117]} rotation={[-Math.PI, 0, -1.57]} scale={10.791}>
        <mesh geometry={nodes.Bip001_Spine2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 4.977, 7.117]} rotation={[-Math.PI, 0, -1.57]} scale={10.791}>
        <mesh geometry={nodes.Bip001_Spine3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 5.085, 7.117]} rotation={[-Math.PI, 0, -1.57]} scale={[6.226, 10.791, 10.791]}>
        <mesh geometry={nodes.Bip001_Neck.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 5.085, 7.088]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[10.791, 26.978, 20.752]}>
        <mesh geometry={nodes.Bip001_L_Clavicle.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 5.085, 6.98]} rotation={[-3.042, 0.01, 1.67]} scale={24.903}>
        <mesh geometry={nodes.Bip001_L_UpperArm.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.012, 4.838, 6.955]} rotation={[-3.042, 0.01, 1.47]} scale={24.903}>
        <mesh geometry={nodes.Bip001_L_Forearm.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 4.592, 6.931]} rotation={[1.777, -1.47, 0.107]} scale={10.376}>
        <mesh geometry={nodes.Bip001_L_Hand.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.047, 4.489, 6.921]} rotation={[1.769, -1.47, 0.099]} scale={2.594}>
        <mesh geometry={nodes.Bip001_L_Finger0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 5.085, 7.146]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[10.791, 26.978, 20.752]}>
        <mesh geometry={nodes.Bip001_R_Clavicle.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 5.085, 7.254]} rotation={[3.042, -0.01, 1.67]} scale={24.903}>
        <mesh geometry={nodes.Bip001_R_UpperArm.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.012, 4.838, 7.279]} rotation={[3.042, -0.01, 1.47]} scale={24.903}>
        <mesh geometry={nodes.Bip001_R_Forearm.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 4.592, 7.303]} rotation={[-1.777, 1.47, 0.107]} scale={10.376}>
        <mesh geometry={nodes.Bip001_R_Hand.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.047, 4.489, 7.314]} rotation={[-1.769, 1.47, 0.099]} scale={2.594}>
        <mesh geometry={nodes.Bip001_R_Finger0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 5.147, 7.117]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[19.507, 19.507, 18.055]}>
        <mesh geometry={nodes.Bip001_Head.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 4.558, 7.034]} rotation={[0, 0, -1.471]} scale={41.505}>
        <mesh geometry={nodes.Bip001_L_Thigh.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.078, 4.145, 7.034]} rotation={[0, 0, -1.671]} scale={41.505}>
        <mesh geometry={nodes.Bip001_L_Calf.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 3.732, 7.034]} rotation={[0, 0, -Math.PI / 2]} scale={[9.546, 15.357, 7.886]}>
        <mesh geometry={nodes.Bip001_L_Foot.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.16, 3.636, 7.034]} scale={1.245}>
        <mesh geometry={nodes.Bip001_L_Toe0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.172, 3.636, 7.034]} scale={1.245}>
        <mesh geometry={nodes.Bip001_L_Toe01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.184, 3.636, 7.034]} scale={1.245}>
        <mesh geometry={nodes.Bip001_L_Toe02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 4.558, 7.2]} rotation={[0, 0, -1.471]} scale={41.505}>
        <mesh geometry={nodes.Bip001_R_Thigh.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.078, 4.145, 7.2]} rotation={[0, 0, -1.671]} scale={41.505}>
        <mesh geometry={nodes.Bip001_R_Calf.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.037, 3.732, 7.2]} rotation={[0, 0, -Math.PI / 2]} scale={[9.546, 15.357, 7.886]}>
        <mesh geometry={nodes.Bip001_R_Foot.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.16, 3.636, 7.2]} scale={1.245}>
        <mesh geometry={nodes.Bip001_R_Toe0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.172, 3.636, 7.2]} scale={1.245}>
        <mesh geometry={nodes.Bip001_R_Toe01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.184, 3.636, 7.2]} scale={1.245}>
        <mesh geometry={nodes.Bip001_R_Toe02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[28.865, 3.63, 2.359]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.PORT_Sala_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.PORT_Sala_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.PORT_Sala_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[21.584, 3.63, 2.188]} rotation={[-Math.PI / 2, 0, 0.873]}>
        <group scale={0.01}>
          <mesh geometry={nodes.PORT_Bilheteria_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.PORT_Bilheteria_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[12.928, 3.63, 2.048]} rotation={[-Math.PI / 2, 0, Math.PI / 4]}>
        <group scale={0.01}>
          <mesh geometry={nodes.PORT_Diretoria_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.PORT_Diretoria_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[16.006, 3.63, 2.368]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Ext_Floor.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[26.72, 3.61, -1.612]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Obj_PORT_Ext_Floor.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[5.722, 3.63, 2.312]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.PORT_Telemarkt_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.PORT_Telemarkt_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[18.779, 3.63, -2.616]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Soleira_Floor_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[18.779, 3.63, 7.334]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Soleira_Floor_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[18.779, 7.63, 2.429]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Soleira_Floor_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[20.959, 7.076, 2.359]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.PORT_Roof_Borda_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.PORT_Roof_Borda_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[20.959, 7.076, 2.359]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Roof_Int.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[37.042, 7.076, 2.359]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Sala_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[20.97, 2.25, 11.623]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Escada_Principal_Det.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[20.97, 2.334, 11.623]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Escada_Principal_Rampa.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[7.136, -5.235, 34.026]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Lake_Water.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[7.136, 20.661, 34.026]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Lake_Border.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.007, -0.001, 47.75]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Shape_CEU_Ext_Floor_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Shape_CEU_Ext_Floor_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Shape_CEU_Ext_Floor_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-25.761, 0, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.CEU_Full_Wall_APAGAR_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Full_Wall_APAGAR_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Full_Wall_APAGAR_3.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Full_Wall_APAGAR_4.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[4.19, 1.931, 17.8]} rotation={[-Math.PI / 2, 0, -0.716]}>
        <mesh geometry={nodes.Teatro_De_Arena_Barras.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.184, 4.098, 32.177]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Teatro_De_Arena_Control_Room_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.184, 2.244, 32.177]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Teatro_De_Arena_Control_Room_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Teatro_De_Arena_Control_Room_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-11.191, 0, 38.519]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Terreno_CEU.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.726, 0.001, 23.742]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Teatro_De_Arena_Wall_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Teatro_De_Arena_Wall_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Teatro_De_Arena_Wall_3.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Teatro_De_Arena_Wall_4.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Teatro_De_Arena_Wall_5.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-7.108, 0.001, 22.238]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Teatro_De_Arena_Palco.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.726, -0.433, 23.742]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Teatro_De_Arena_Teto.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.554, 5.011, 17.704]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.SHP_Telhado_Zinco_Part_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.985, 4.941, 18.755]} rotation={[0.177, -0.384, 0.067]}>
        <mesh geometry={nodes.SHP_Telhado_Zinco_Part_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.519, 4.644, 20.058]} rotation={[0.271, -0.376, 0.102]}>
        <mesh geometry={nodes.SHP_Telhado_Zinco_Part_03.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[1.783, 1.196, 15.052]} rotation={[Math.PI, -1.182, Math.PI]}>
        <mesh geometry={nodes.Teatro_De_Arena_Escada.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[17.388, 3.63, -12.782]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Escada_Frontal.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[22.716, 5.882, -15.28]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Escada_Frontal_Parapeito.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[22.388, 4.703, 11.014]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Escada_Principal_Full_Handle.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[4.809, 3.63, 2.359]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_All_Int_Floor.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.461, 1.963, 25.796]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Teatro_De_Arena_Int_Floor.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[20.499, 1.655, 15.673]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.New_Ramp.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[2.313, -7.998, 39.03]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Ponte.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[5.204, 0.19, 38.036]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.New_Ramp_Metal.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.605, -7.379, 42.595]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Ponte_Parapeito.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.584, 1.536, 23.073]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Marble_Windows_Teatro_De_Arena.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[31.825, 3.63, 2.359]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Marble_Windows_PORT_Sala.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.021, 0, 26.154]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Teatro_De_Arena_Gas_Chamber_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Teatro_De_Arena_Gas_Chamber_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-10.449, 0.383, 26.311]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Teatro_De_Arena_Gas_Door.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[4.482, 7.415, 2.359]} rotation={[-Math.PI / 2, -0.058, 0]}>
        <mesh geometry={nodes.PORT_Telemarkt_Ext_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[24.945, 7.776, 2.535]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Bilheteria_Ext_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.054, 3.308, 20.756]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-0.215, 4.169, 24.187]} rotation={[Math.PI, -1.182, Math.PI]}>
        <mesh geometry={nodes.Teatro_De_Arena_Full_Hold.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.417, 3.309, 19.379]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.183, 3.568, 22.767]} rotation={[Math.PI, -1.182, Math.PI]}>
        <mesh geometry={nodes.Rectangle079.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.344, 3.308, 22.715]} rotation={[-Math.PI / 2, 0, 2.752]}>
        <mesh geometry={nodes.Rectangle152_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.334, 3.308, 22.691]} rotation={[-Math.PI / 2, 0, -0.389]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.837, 3.308, 19.232]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.788, 3.309, 19.25]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.828, 3.308, 19.208]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.954, 3.309, 19.569]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.364, 3.308, 19.398]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.374, 3.308, 19.422]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.325, 3.309, 19.44]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.481, 3.309, 19.763]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.891, 3.308, 19.592]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.901, 3.308, 19.616]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.852, 3.309, 19.634]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.008, 3.309, 19.957]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.419, 3.308, 19.786]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.428, 3.308, 19.81]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.379, 3.309, 19.828]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.535, 3.309, 20.151]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.946, 3.308, 19.98]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.956, 3.308, 20.004]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.906, 3.309, 20.022]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.063, 3.309, 20.345]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.473, 3.308, 20.174]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.483, 3.308, 20.198]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.433, 3.309, 20.216]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.59, 3.309, 20.539]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8, 3.308, 20.368]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.01, 3.308, 20.392]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_16.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.96, 3.309, 20.41]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.117, 3.309, 20.733]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.527, 3.308, 20.562]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_17.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.537, 3.308, 20.586]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_18.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.487, 3.309, 20.603]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.644, 3.309, 20.926]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_16.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.758, 3.309, 22.543]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_17.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.064, 3.308, 20.78]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_19.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.014, 3.309, 20.797]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_18.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.171, 3.309, 21.12]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_19.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.581, 3.308, 20.949]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_20.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.591, 3.308, 20.974]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_21.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.541, 3.309, 20.991]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_20.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.698, 3.309, 21.314]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_21.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.108, 3.308, 21.143]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_22.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.118, 3.308, 21.168]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_23.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.069, 3.309, 21.185]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_22.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.225, 3.309, 21.508]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_23.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.635, 3.308, 21.337]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_24.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.645, 3.308, 21.361]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_25.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.596, 3.309, 21.379]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_24.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.752, 3.309, 21.702]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_25.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.162, 3.308, 21.531]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_26.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.172, 3.308, 21.555]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_27.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.123, 3.309, 21.573]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_26.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.279, 3.309, 21.896]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_27.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.69, 3.308, 21.725]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_28.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.699, 3.308, 21.749]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_29.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.65, 3.309, 21.767]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_28.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.807, 3.309, 22.09]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_29.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.217, 3.308, 21.919]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_30.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.227, 3.308, 21.943]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_31.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.177, 3.309, 21.961]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_30.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.334, 3.309, 22.284]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_31.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.744, 3.308, 22.113]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_32.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.754, 3.308, 22.137]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_33.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.704, 3.309, 22.155]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_32.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.861, 3.309, 22.478]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_33.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.271, 3.308, 22.307]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_34.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.281, 3.308, 22.331]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_35.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.231, 3.309, 22.349]} rotation={[-1.068, 0.866, -2.196]}>
        <mesh geometry={nodes.Rectangle082_34.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.388, 3.309, 22.672]} rotation={[-2.074, -0.866, 0.945]}>
        <mesh geometry={nodes.Rectangle082_35.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.798, 3.308, 22.501]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Rectangle152_36.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.808, 3.308, 22.525]} rotation={[-Math.PI / 2, 0, 2.752]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle152_37.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.233, 3.843, 26.162]} rotation={[Math.PI, -1.182, 2.585]}>
        <mesh geometry={nodes.Rectangle061.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-0.27, 4.732, 7.469]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Marble_Windows_Telemarkt.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.191, 0, 38.519]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Terreno_CEU_Det.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.007, 0, 47.75]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Garden_Coqueiro_Border.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.584, 3.62, 2.188]} rotation={[-Math.PI / 2, 0, 0.873]}>
        <mesh geometry={nodes.Shape002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[28.865, 6.176, 2.359]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Sala_Int_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[0.956, 6.776, 2.359]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Sala_Int_Roof001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.912, 7.082, -2.575]}>
        <mesh geometry={nodes.PORT_Telemarkt_Ext_Roof_Calha.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.124, 3.63, 2.494]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Rectangle202.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.683, 0, 3.871]} rotation={[-Math.PI / 2, 0, 0.782]}>
        <mesh geometry={nodes.GeoShow_Cave_Entrada_Wall.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-46.468, 0.792, 17.258]} rotation={[Math.PI, -0.782, Math.PI]} scale={[2.49, 2.49, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.GeoShow_Full_Wall_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_3.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_4.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_5.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_6.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_7.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_8.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_9.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_10.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_11.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_12.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_13.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Full_Wall_14.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-45.004, 6.495, 13.166]} rotation={[-Math.PI / 2, 0, 0.782]}>
        <mesh geometry={nodes.GeoShow_Telão_Border.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-52.741, 0, 22.41]} rotation={[-Math.PI / 2, 0, 0.782]}>
        <group scale={0.01}>
          <mesh geometry={nodes.GeoShow_Cave_Box_Sound_02_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Cave_Box_Sound_02_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Cave_Box_Sound_02_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-44.987, 6.495, 13.183]} rotation={[0, 0.782, 0]}>
        <mesh geometry={nodes.GeoShow_Telão_Branco.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-38.212, 3.938, 6.609]} rotation={[-Math.PI / 2, 0, 0.782]}>
        <mesh geometry={nodes.GeoShow_Ar_Cond_Box.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-35.59, 0, 5.378]} rotation={[-Math.PI / 2, 0, 0.782]}>
        <group scale={0.01}>
          <mesh geometry={nodes.GeoShow_Cave_Box_Sound_01_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Cave_Box_Sound_01_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Cave_Box_Sound_01_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-43.354, 4.97, 11.126]} rotation={[0, 0.782, 0]}>
        <mesh geometry={nodes.GeoShow_Strobo_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-47.055, 4.97, 14.801]} rotation={[0, 0.782, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.GeoShow_Strobo_01_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-46.468, 0.792, 17.258]} rotation={[Math.PI, -0.782, Math.PI]} scale={[2.49, 2.49, 1]}>
        <mesh geometry={nodes.GeoShow_Full_Wall_Border.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-46.516, 4.286, 11.644]} rotation={[-1.583, -0.012, 0.782]} scale={[1, 1.007, 1]}>
        <mesh geometry={nodes.GeoShow_Cave_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-44.197, 0, 13.632]} rotation={[-Math.PI / 2, 0, 0.782]}>
        <mesh geometry={nodes.GeoShow_Cave_Parachuva.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-44.197, 0, 13.632]} rotation={[-Math.PI / 2, 0, 0.782]}>
        <group scale={0.01}>
          <mesh geometry={nodes.GeoShow_Cave_Wall_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.GeoShow_Cave_Wall_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[14.905, 3.359, 0]}>
        <mesh geometry={nodes.Rectangle203.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[23.669, 5.715, 2.204]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.PORT_Bilheteria_Metal_Grade.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[10.707, 7.081, 0]}>
        <mesh geometry={nodes.Rectangle204.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[14.88, 5.715, 2.204]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Object006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[16.871, 4.665, 2.184]}>
        <mesh geometry={nodes.PORT_Bilheteria_MetalGate_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[24.843, 4.665, 2.184]}>
        <mesh geometry={nodes.PORT_Bilheteria_Metal_Gate_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.477, 2.241, 24.088]} rotation={[-Math.PI, -1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[11.805, -0.28, 22.452]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Terreno_CEU_Lake_New.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[12.46, -0.124, 15.444]} rotation={[0, -1.38, 0]} scale={[-0.231, 0.166, 0.098]}>
        <mesh geometry={nodes.Aset_nature_rock_L_vepnfcr_LOD001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[9.919, -0.124, 15.004]} rotation={[Math.PI, 1.38, -Math.PI]} scale={[0.202, 0.166, 0.093]}>
        <mesh geometry={nodes.Aset_nature_rock_L_vepnfcr_LOD0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[11.5, -0.259, 16.673]} rotation={[0, -0.176, 0]} scale={[0.518, 0.345, 1.407]}>
        <mesh geometry={nodes.Aset_rock_cliffs_L_uchpbg3fa_LOD0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[11.407, 0.503, 15.714]} rotation={[0, -0.09, 0]} scale={[-0.321, 0.345, 0.563]}>
        <mesh geometry={nodes.Aset_rock_cliffs_L_uchpbg3fa_LOD002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[11.21, 2.39, 14.249]} rotation={[0, 1.483, 0]} scale={[21.324, 24.551, 28.792]}>
        <mesh geometry={nodes.Aset_nature_rock_S_vd5rfdp_LOD0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[11.374, 0.296, 14.649]} rotation={[0.088, 0.097, -0.009]} scale={[2.017, 2.558, 4.184]}>
        <mesh geometry={nodes.Aset_rock_cliffs_L_ubjvbczda_LOD0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[11.456, 0.072, 16.223]} rotation={[0, -0.247, 0]} scale={[0.468, 0.345, 0.669]}>
        <mesh geometry={nodes.Aset_rock_cliffs_L_uchpbg3fa_LOD001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[10.94, 1.645, 12.465]} rotation={[0, 0.097, 0]} scale={[0.165, 0.17, 0.214]}>
        <mesh geometry={nodes.Aset_nature_rock_XL_vjjlbdsqx_LOD0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[26.805, 4.73, 4.905]} rotation={[Math.PI / 2, -1.571, 0]} scale={[0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle285.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[26.788, 4.761, 4.312]} rotation={[0, -1.571, 0]}>
        <mesh geometry={nodes.Rectangle286.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[26.759, 4.782, 4.344]} rotation={[-Math.PI / 2, 0, -1.571]} scale={[-1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_021.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[31.203, 5.77, 5.498]} rotation={[0, 0, Math.PI / 2]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_023.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.925, 4.71, 5.712]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle285_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.943, 4.741, 6.305]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.Rectangle286_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.972, 4.762, 6.273]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[-1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_021_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[22.088, 5.79, 3.917]} rotation={[Math.PI, 0.698, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_023_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[22.013, 4.73, 3.575]} rotation={[0, 0.873, Math.PI / 2]} scale={[-0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle285_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[22.407, 4.761, 3.132]} rotation={[0, 0.873, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle286_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[22.409, 4.782, 3.174]} rotation={[-Math.PI / 2, 0, 0.873]} scale={[1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_021_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[13.569, 5.79, 3.655]} rotation={[Math.PI, 0.738, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_025.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[13.508, 4.73, 3.309]} rotation={[0, 0.833, Math.PI / 2]} scale={[-0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle291.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[13.919, 4.761, 2.883]} rotation={[0, 0.833, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle286_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[13.92, 4.782, 2.925]} rotation={[-Math.PI / 2, 0, 0.833]} scale={[1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_021_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[12.928, 3.63, 2.048]} rotation={[-Math.PI / 2, 0, Math.PI / 4]}>
        <mesh geometry={nodes.Object007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[12.865, 5.235, -1.121]}>
        <mesh geometry={nodes.Plane001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[12.864, 5.235, -1.12]}>
        <mesh geometry={nodes.Object008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[22.305, 4.703, 10.973]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Object013.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-53.023, -0.015, 23.766]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Dino_Floor_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Dino_Floor_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-53.023, -1.515, 23.766]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Dino_Wall.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-58.901, 3.487, 28.299]} rotation={[-1.588, -0.055, -0.299]}>
        <mesh geometry={nodes.Obj_PORT_Telemarkt_Ext_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.453, 0, 34.73]} rotation={[-Math.PI / 2, 0, -0.302]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Dino_Cage_Pilars_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Dino_Cage_Pilars_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-52.952, 3.387, 30.139]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Dino_Roof_Testeira.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-53.023, -0.038, 23.766]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Shape003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-53.023, -0.017, 23.766]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Dino_Garden_Floor.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[26.72, 3.61, -1.612]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Garden_Lateral.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.007, 0.006, 47.748]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Ext_Floor_Border.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-34.134, 0.007, 24.188]} rotation={[-Math.PI / 2, 0, -Math.PI / 4]}>
        <mesh geometry={nodes.GeoShow_Arquibancada.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[31.202, 0, -0.035]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Rectangle296.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-52.036, 3.703, 25.332]} rotation={[-1.588, -0.055, -0.299]}>
        <mesh geometry={nodes.Dino_Roof_Suporte.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2283467.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2257085.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2257095.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2257185.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2257435.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2257685.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2257935.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2258189.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2258443.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2258693.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2258945.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2259199.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2259451.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2259705.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2259959.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260049.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260139.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260229.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260319.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260409.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260499.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260589.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260679.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260769.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260863.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2260953.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261045.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261135.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261225.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261315.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261405.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261495.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261585.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261675.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261765.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261855.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2261945.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2262233.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.213, 0.004, 30.153]} rotation={[-0.614, -0.364, -0.246]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2262423.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.125, -0.186, 29.963]} rotation={[-0.43, -0.401, -0.177]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2262887.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.242, -0.055, 29.717]} rotation={[-0.402, -0.405, -0.166]} scale={[-5.483, 5.483, 5.483]}>
        <mesh geometry={nodes['Agrupar#63_2292723'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.125, -0.186, 29.963]} rotation={[-0.43, -0.401, -0.177]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2263082.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2263507.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2263677.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2265383.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2266171.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2266601.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2264963.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2265313.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2265749.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2266101.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2264605.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2266531.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-56.888, 1.504, 28.455]} rotation={[0, -0.436, -1.484]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2264239.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2266953.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2267123.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.973, 0.126, 29.348]} rotation={[0, -0.436, Math.PI / 6]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2267479.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.973, 0.126, 29.348]} rotation={[0, -0.436, Math.PI / 6]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2269840.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.973, 0.126, 29.348]} rotation={[0, -0.436, Math.PI / 6]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2269768.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.973, 0.126, 29.348]} rotation={[0, -0.436, Math.PI / 6]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2269412.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.973, 0.126, 29.348]} rotation={[0, -0.436, Math.PI / 6]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2268988.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.973, 0.126, 29.348]} rotation={[0, -0.436, Math.PI / 6]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2269342.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.973, 0.126, 29.348]} rotation={[0, -0.436, Math.PI / 6]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2267848.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.973, 0.126, 29.348]} rotation={[0, -0.436, Math.PI / 6]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2268202.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.973, 0.126, 29.348]} rotation={[0, -0.436, Math.PI / 6]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2268554.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2270196.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2270326.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2270854.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2270984.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2271238.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2271492.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2271746.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2272000.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2272252.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2272502.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2272754.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2273006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2273258.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2273510.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2273766.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2274020.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2274270.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2274522.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2274776.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2275028.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2275282.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2275536.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2275790.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2276042.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2276292.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2276544.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2276798.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2277056.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2277314.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2277568.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2277822.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2278076.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2278328.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2278578.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2278828.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2279080.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2279334.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2279586.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2279836.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2280086.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2280216.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2280346.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2280476.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2280606.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2280738.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2280868.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2280998.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2281128.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2281258.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2281388.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2281520.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2281650.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2281780.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2281910.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2282040.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2282170.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2282300.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2282467.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2282711.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2282963.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2283215.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2283978.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2284380.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2284632.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2284884.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2284974.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285064.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285154.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285244.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285334.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285424.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285514.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285604.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285694.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285784.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285874.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2285964.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286054.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286144.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286234.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286326.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286416.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286506.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286644.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286654.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286724.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286964.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2286979.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2287614.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2287930.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2288380.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2288425.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2288786.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2289449.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2289816.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2290382.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2290397.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2290704.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2291026.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2291031.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2291362.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2291684.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.684, -0.246, 29.017]} rotation={[0, -0.436, 0]} scale={[-2.056, 2.056, 2.056]}>
        <mesh geometry={nodes._2292015.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.409, 2.388, 26.657]} rotation={[-1.97, 0.535, -1.226]} scale={[0.166, 0.15, 0.149]}>
        <mesh geometry={nodes.Object002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-54.421, 2.447, 26.652]} rotation={[-1.851, 0.404, -1.239]} scale={[0.166, 0.15, 0.149]}>
        <mesh geometry={nodes.Sharp_fusion_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[9.437, 2.191, 10.106]} scale={0.147}>
        <mesh geometry={nodes.Aset_nature_rock_XL_yd1gfbjab_00_LOD0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[8.803, 0.378, 15.074]} rotation={[0, -Math.PI / 2, 0]} scale={[0.244, 0.288, 0.244]}>
        <mesh geometry={nodes.Aset_nature_rock_XL_vemoefu_00_LOD0.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.948, 4.706, 4.802]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_057.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.948, 4.706, 4.802]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_065.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.948, 5.217, 4.802]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_057.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.961, 5.571, 4.1]} rotation={[Math.PI, 0, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_051.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.948, 4.706, 2.531]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_057_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.948, 4.706, 2.531]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_065_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.948, 5.217, 2.531]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_057_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.961, 5.571, 1.83]} rotation={[Math.PI, 0, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_051_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.948, 5.217, 1.077]} rotation={[0, 1.571, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_068.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.961, 5.571, 0.376]} rotation={[Math.PI, 0, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_062.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.948, 6.306, 1.077]} rotation={[-Math.PI, 1.571, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_077.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.993, 1.958, 26.177]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.993, 1.958, 26.177]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.993, 2.085, 26.177]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.349, 2.438, 26.455]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.477, 2.241, 24.088]} rotation={[-Math.PI, -1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.862, 2.241, 21.725]} rotation={[Math.PI, 0.389, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_010.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.319, 2.241, 20.401]} rotation={[Math.PI, 0.389, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_010_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.268, 2.216, 23.744]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle221.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.268, 1.456, 23.744]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle222.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.268, 0.696, 23.744]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle223.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.509, 2.216, 24.055]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle224.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.509, 1.456, 24.055]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle225.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.509, 0.696, 24.055]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle226.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.01, 1.181, 23.569]} rotation={[0, -0.389, Math.PI / 2]} scale={[-0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle233.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.469, 1.212, 23.81]} rotation={[0, -0.389, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle234.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.509, 1.232, 23.825]} rotation={[-Math.PI / 2, 0, -0.389]} scale={[1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.038, 1.181, 21.422]} rotation={[0, 1.182, Math.PI / 2]} scale={[-0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle233_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.797, 1.212, 20.88]} rotation={[0, 1.182, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle234_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.782, 1.232, 20.92]} rotation={[-Math.PI / 2, 0, 1.182]} scale={[1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_006_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.314, 1.181, 19.657]} rotation={[0, 1.182, -Math.PI / 2]} scale={[0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle233_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.523, 1.212, 20.211]} rotation={[0, 1.182, 0]}>
        <mesh geometry={nodes.Rectangle234_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.484, 1.232, 20.193]} rotation={[-Math.PI / 2, 0, 1.182]} scale={[-1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_006_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.593, 1.958, 24.701]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.593, 1.958, 24.701]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.593, 2.085, 24.701]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.949, 2.438, 24.979]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.745, 1.958, 24.228]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.745, 1.958, 24.228]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.745, 2.085, 24.228]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.101, 2.438, 24.507]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.6, 1.958, 23.058]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.6, 1.958, 23.058]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.6, 2.085, 23.058]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.956, 2.438, 23.336]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.393, 1.958, 25.193]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.393, 1.958, 25.193]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.393, 2.085, 25.193]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.749, 2.438, 25.471]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.531, 2.241, 28.167]} rotation={[-Math.PI, -1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.324, 2.241, 29.071]} rotation={[-Math.PI, -1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_005_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.563, 2.216, 28.134]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle215.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.563, 1.456, 28.134]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle216.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.563, 0.696, 28.134]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle217.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.613, 2.216, 27.703]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle218.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.613, 1.456, 27.703]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle219.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.613, 0.696, 27.703]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle220.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.115, 2.216, 28.728]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle227.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.115, 1.456, 28.728]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle228.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.115, 0.696, 28.728]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle229.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.357, 2.216, 29.039]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle230.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.357, 1.456, 29.039]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle231.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.357, 0.696, 29.039]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle232.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.417, 1.181, 28.733]} rotation={[0, -0.389, -Math.PI / 2]} scale={[0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle233_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.972, 1.212, 28.524]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle234_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.954, 1.232, 28.563]} rotation={[-Math.PI / 2, 0, -0.389]} scale={[-1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_006_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-0.903, 1.958, 29.494]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-0.903, 1.958, 29.494]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-0.903, 2.085, 29.494]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-0.259, 2.438, 29.773]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.773, 1.181, 27.767]} rotation={[0, -0.389, -Math.PI / 2]} scale={[0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle213.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.445, 1.212, 27.51]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle214.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.427, 1.232, 27.549]} rotation={[-Math.PI / 2, 0, -0.389]} scale={[-1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.593, 1.958, 27.161]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.593, 1.958, 27.161]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.593, 2.085, 27.161]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.949, 2.438, 27.439]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.725, 1.958, 28.337]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.725, 1.958, 28.337]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.725, 2.085, 28.337]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.081, 2.438, 28.615]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.793, 1.958, 26.669]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.793, 1.958, 26.669]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.793, 2.085, 26.669]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.149, 2.438, 26.947]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.821, 2.241, 23.885]} rotation={[-Math.PI, 0.389, -Math.PI / 2]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_010_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.365, 2.241, 25.21]} rotation={[-Math.PI, 0.389, -Math.PI / 2]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_010_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.026, 1.181, 25.117]} rotation={[Math.PI, -1.182, Math.PI / 2]} scale={[0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle233_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.818, 1.212, 24.562]} rotation={[Math.PI, -1.182, Math.PI]}>
        <mesh geometry={nodes.Rectangle234_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.856, 1.232, 24.58]} rotation={[-Math.PI / 2, 0, -1.96]} scale={[-1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_006_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.302, 1.181, 23.352]} rotation={[-Math.PI, -1.182, -Math.PI / 2]} scale={[-0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle233_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.543, 1.212, 23.894]} rotation={[-Math.PI, -1.182, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle234_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.558, 1.232, 23.854]} rotation={[-Math.PI / 2, 0, -1.96]} scale={[1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_006_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.193, 1.958, 25.685]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_048_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.193, 1.958, 25.685]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_056_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.193, 2.085, 25.685]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_048_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.549, 2.438, 25.963]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_042_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.078, 2.2, 32.712]} rotation={[Math.PI, -0.997, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Object100.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.066, 2.201, 32.69]} rotation={[Math.PI, -1.042, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Object099.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.412, 1.14, 32.843]} rotation={[-Math.PI, 0.574, -Math.PI / 2]} scale={[-0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle528.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.9, 1.171, 32.506]} rotation={[-Math.PI, 0.574, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle529.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.858, 1.191, 32.499]} rotation={[-Math.PI / 2, 0, 2.567]} scale={[1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_025.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.078, 2.2, 32.712]} rotation={[Math.PI, -0.997, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_026.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.831, 1.14, 30.765]} rotation={[-Math.PI, 0.301, Math.PI / 2]} scale={[0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle532.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.26, 1.171, 30.924]} rotation={[-Math.PI, 0.301, -Math.PI]}>
        <mesh geometry={nodes.Rectangle533.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.281, 1.191, 30.887]} rotation={[-1.571, 0, 2.841]} scale={[-1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_027.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.958, 2.2, 30.456]} rotation={[0, 1.279, Math.PI / 2]}>
        <mesh geometry={nodes.Object104.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.958, 2.2, 30.456]} rotation={[0, 1.279, Math.PI / 2]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_028.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-10.949, 2.201, 30.433]} rotation={[0, 1.234, Math.PI / 2]}>
        <mesh geometry={nodes.Object103.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.537, 1.14, 30.574]} rotation={[-Math.PI, 0.227, -Math.PI / 2]} scale={[-0.946, 1, 1]}>
        <mesh geometry={nodes.Rectangle530.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.11, 1.171, 30.424]} rotation={[-Math.PI, 0.227, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle531.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.073, 1.191, 30.403]} rotation={[-1.571, 0, 2.915]} scale={[1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_026.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.265, 2.2, 30.369]} rotation={[Math.PI, -1.312, 1.571]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_027.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.261, 2.201, 30.345]} rotation={[Math.PI, -1.357, 1.571]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Object101.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.265, 2.2, 30.369]} rotation={[Math.PI, -1.312, 1.571]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Object102.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.952, 5.261, -0.932]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.953, 5.76, -0.932]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_Moldura_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.964, 5.261, -0.932]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[29.981, 5.261, 7.226]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[30.232, 5.261, 7.238]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[29.981, 5.76, 7.227]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_Moldura_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[29.986, 5.77, 7.207]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Rectangle535.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[9.228, 5.76, 7.225]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Rectangle536.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[27.57, 5.261, 7.226]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[27.272, 5.261, 7.238]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[27.57, 5.76, 7.227]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_Moldura_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[27.648, 5.76, 7.225]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Rectangle537.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[9.226, 5.443, 7.226]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[8.777, 5.443, 7.238]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[9.226, 5.942, 7.227]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_Moldura_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[6.832, 5.443, 7.226]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_009.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[6.383, 5.443, 7.238]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_010.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[6.832, 5.942, 7.227]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_Moldura_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[4.005, 5.443, 7.226]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_011.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.557, 5.443, 7.238]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_012.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[4.005, 5.942, 7.227]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_Moldura_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[0.628, 5.443, 7.226]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_013.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[0.18, 5.443, 7.238]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_014.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[0.628, 5.942, 7.227]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Window_Regular_Moldura_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.027, 3.788, 9.846]} rotation={[0, -0.398, 0]}>
        <mesh geometry={nodes.Teatro_De_Arena_Control_Room_Glass.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.549, 3.144, 8.1]} rotation={[-Math.PI, -1.26, -Math.PI / 2]} scale={[-0.803, 0.87, 1]}>
        <mesh geometry={nodes.Rectangle538.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.724, 3.144, 8.588]} rotation={[-Math.PI, -1.264, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle539.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.742, 3.164, 8.549]} rotation={[-Math.PI / 2, 0, -1.877]} scale={[1.171, 1.171, 1]}>
        <mesh geometry={nodes.Wood_Door_Handle_028.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.766, 4.044, 8.669]} rotation={[-Math.PI, 0.307, -Math.PI / 2]}>
        <mesh geometry={nodes.All_Wood_Door_Moldura_029.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.393, -0.075, 74.19]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Rectangle540.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.307, -3.673, 97.972]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.311, 2.31, 2.31]}>
        <mesh geometry={nodes.Rocket_Base_Path.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.836, -3.63, 87.502]} rotation={[-Math.PI / 2, 0, -0.004]} scale={[-2.288, 2.085, 2.109]}>
        <mesh geometry={nodes.StraightStair01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-55.24, 0.751, 74.657]} rotation={[0, Math.PI / 2, 0]} scale={[2.31, 1.883, 2.31]}>
        <group scale={0.01}>
          <mesh geometry={nodes['Casa-Mata_Bancos_1'].geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes['Casa-Mata_Bancos_2'].geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-55.054, 0.75, 74.114]} rotation={[0, Math.PI / 2, 0]} scale={[2.31, 1.883, 2.31]}>
        <mesh geometry={nodes.Line1660.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-47.514, 0.75, 74.097]} rotation={[0, Math.PI / 2, 0]} scale={[2.31, 1.883, 2.31]}>
        <mesh geometry={nodes.Line1661.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.678, 0.127, 76.341]} rotation={[-Math.PI / 2, 0, 0.006]} scale={[1.116, 1.277, 1.116]}>
        <mesh geometry={nodes.PLASTIC_CHAIR_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.477, 0.127, 76.374]} rotation={[-Math.PI / 2, 0, 0.052]} scale={[1.116, 1.277, 1.116]}>
        <mesh geometry={nodes.PLASTIC_CHAIR_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.08, 0.127, 76.334]} rotation={[-Math.PI / 2, 0, -0.1]} scale={[1.116, 1.277, 1.116]}>
        <mesh geometry={nodes.PLASTIC_CHAIR_001_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-51.392, 2.15, 72.85]} rotation={[0, Math.PI / 2, 0]} scale={[2.31, 1.883, 2.31]}>
        <mesh geometry={nodes.CASA_MATA_FRAME.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.434, 2.969, 74.292]} rotation={[-Math.PI / 2, 0, -3.139]} scale={[2.31, 2.31, 1.883]}>
        <mesh geometry={nodes['Casa-Mata_Teto_Tela'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-44.3, 1.702, 76.81]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.CASA_MATA_VIDRO.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.525, 0.974, 76.615]} rotation={[-Math.PI, 0.647, 1.681]} scale={[-100, 100, 100]}>
        <mesh geometry={nodes.Shure_3.geometry} material={materials.steel_base} scale={0.01} />
      </group>
      <group position={[-50.525, 0.974, 76.615]} rotation={[-Math.PI, 0.647, 1.681]} scale={[-100, 100, 100]}>
        <mesh geometry={nodes['default'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.525, 0.974, 76.615]} rotation={[-Math.PI, 0.647, 1.681]} scale={[-100, 100, 100]}>
        <mesh geometry={nodes.shure_label.geometry} material={materials.adskMatshure_label} scale={0.01} />
      </group>
      <group position={[-50.525, 0.974, 76.615]} rotation={[-Math.PI, 0.647, 1.681]} scale={[-100, 100, 100]}>
        <mesh geometry={nodes.Shure_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.525, 0.974, 76.615]} rotation={[-Math.PI, 0.647, 1.681]} scale={[-100, 100, 100]}>
        <mesh geometry={nodes.steel_gray.geometry} material={materials.adskMatsteel_gray} scale={0.01} />
      </group>
      <group position={[-50.525, 0.974, 76.615]} rotation={[-Math.PI, 0.647, 1.681]} scale={[-100, 100, 100]}>
        <mesh geometry={nodes.Shure_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.525, 0.974, 76.615]} rotation={[-Math.PI, 0.647, 1.681]} scale={[-100, 100, 100]}>
        <mesh geometry={nodes.Obj_steel_base.geometry} material={materials.steel_base} scale={0.01} />
      </group>
      <group position={[-50.525, 0.974, 76.615]} rotation={[-Math.PI, 0.647, 1.681]} scale={[-100, 100, 100]}>
        <mesh geometry={nodes.black_micro.geometry} material={materials.adskMatblack_micro} scale={0.01} />
      </group>
      <group position={[-50.371, 0.589, 76.7]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_20.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.304, 0.38, 76.559]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.317, 0.444, 76.608]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_03.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.317, 0.444, 76.598]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_04.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.316, 0.444, 76.639]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_05.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.287, 0.861, 76.531]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <group scale={0.01}>
          <mesh geometry={nodes.arch67_45_08_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.arch67_45_08_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-50.522, 0.851, 76.539]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_09.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.522, 0.851, 76.541]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.223, 0.851, 76.538]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.Obj_arch67_45_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.223, 0.851, 76.54]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.305, 0.922, 76.672]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.304, 0.923, 76.672]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.305, 0.862, 76.541]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.291, 0.856, 76.544]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_16.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.32, 0.861, 76.537]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <group scale={0.01}>
          <mesh geometry={nodes.arch67_45_17_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.arch67_45_17_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-50.362, 0.59, 76.696]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_21.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.305, 0.66, 76.541]} rotation={[0, 0.006, 0]} scale={1.252}>
        <mesh geometry={nodes.Plane13124.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.301, 0.131, 76.667]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.Obj_arch67_45_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.304, 0.382, 76.667]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_19.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.304, 0.382, 76.667]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_52.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.305, 0.382, 76.667]} rotation={[-Math.PI / 2, 0, -3.135]} scale={1.252}>
        <mesh geometry={nodes.arch67_45_06.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.026, 1.178, 76.749]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PLANE_TXT_008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.427, 1.234, 76.819]} rotation={[Math.PI, -0.001, Math.PI]} scale={[1.563, 1.329, 1.329]}>
        <mesh geometry={nodes.Rectangle001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.936, 1.178, 76.749]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PLANE_TXT_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.936, 1.125, 76.585]} rotation={[-0.171, 0.001, 0]} scale={1.329}>
        <mesh geometry={nodes.SWITCH_BUTTON_LEVER.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.936, 1.125, 76.585]} rotation={[-0.171, 0.001, 0]} scale={1.329}>
        <mesh geometry={nodes.SWITCH_BUTTON_SAFETY_TOP.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.068, 1.128, 76.44]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PARAFUSO_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.889, 1.158, 76.619]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PARAFUSO_002_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.068, 1.151, 76.62]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PARAFUSO_002_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.901, 1.186, 76.798]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PARAFUSO_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.026, 1.161, 76.653]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PLANE_TXT_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.936, 1.161, 76.653]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PLANE_TXT_006_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.901, 1.186, 76.797]} rotation={[-1.742, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PORCA_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.43, 1.165, 76.681]} rotation={[-1.74, 0, -2.268]} scale={1.329}>
        <mesh geometry={nodes.PLANE_LISTRADO001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.027, 1.125, 76.585]} rotation={[-0.171, 0.001, 0]} scale={1.329}>
        <mesh geometry={nodes.SWITCH_BUTTON_LEVER_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.027, 1.125, 76.585]} rotation={[-0.171, 0.001, 0]} scale={1.329}>
        <mesh geometry={nodes.SWITCH_BUTTON_SAFETY_TOP_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.428, 1.169, 76.697]} rotation={[-1.74, 0, -3.141]} scale={1.146}>
        <mesh geometry={nodes.BOTÃO_IGNIÇÃO_PLANE.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.428, 1.169, 76.697]} rotation={[-1.74, 0, -3.141]} scale={1.146}>
        <mesh geometry={nodes.BOTÃO_IGNIÇÃO.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.56, 1.169, 76.696]} rotation={[-1.74, 0, -3.141]} scale={1.005}>
        <mesh geometry={nodes.BUTTON_BLACK_NO_USE.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.936, 1.146, 76.544]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PLANE_TXT_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.936, 1.171, 76.706]} rotation={[-1.739, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.GREEN_LIGHT_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.027, 1.146, 76.544]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PLANE_TXT_01_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.026, 1.171, 76.706]} rotation={[-1.739, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.GREEN_LIGHT_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.936, 1.159, 76.636]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PLANE_TXT_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.026, 1.159, 76.636]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PLANE_TXT_003_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.876, 1.157, 76.626]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PLANE_TXT_009.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.889, 1.128, 76.44]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PARAFUSO_002_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.427, 0.127, 76.626]} rotation={[-Math.PI / 2, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.CONSOLE_FOGUETE_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.95, 1.186, 76.799]} rotation={[-1.74, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PARAFUSO_005_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.95, 1.186, 76.798]} rotation={[-1.742, 0, -3.141]} scale={1.329}>
        <mesh geometry={nodes.PORCA_002_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.936, 1.125, 76.585]} rotation={[-0.171, 0.001, 0]} scale={1.329}>
        <mesh geometry={nodes.Safety_Base.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-48.936, 1.125, 76.585]} rotation={[-0.171, 0.001, 0]} scale={1.329}>
        <mesh geometry={nodes['M12x075_nut_(1)'].geometry} material={materials.Material__28} scale={0.01} />
      </group>
      <group position={[-49.027, 1.125, 76.585]} rotation={[-0.171, 0.001, 0]} scale={1.329}>
        <mesh geometry={nodes['M12x075_nut_(1)_1'].geometry} material={materials.Material__28} scale={0.01} />
      </group>
      <group position={[-49.027, 1.125, 76.585]} rotation={[-0.171, 0.001, 0]} scale={1.329}>
        <mesh geometry={nodes.Safety_Base_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.876, 1.149, 76.583]} rotation={[-1.741, 0, -3.141]} scale={1.856}>
        <mesh geometry={nodes.SIRENE_GREEN_BUTTON_SUPORT.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.876, 1.149, 76.583]} rotation={[-1.741, 0, -3.141]} scale={1.856}>
        <mesh geometry={nodes.SIRENE_GREEN_BUTTON.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.176, -3.324, 104.657]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={2}>
        <mesh geometry={nodes.Solid1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.176, -3.324, 104.657]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={2}>
        <group scale={0.01}>
          <mesh geometry={nodes.Obj_Solid1_3.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Obj_Solid1_4.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-49.176, -3.324, 104.577]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={2}>
        <mesh geometry={nodes.Obj_Solid1_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.176, -3.324, 104.577]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={2}>
        <mesh geometry={nodes.Obj_Solid1_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, -2.903, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.583, -3.616, 104.932]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Base_Trilho_Box001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.564, -3.416, 104.972]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Torre_de_Lançamento.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 2.454, 104.9]}>
        <mesh geometry={nodes.Rectangle070_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 1.993, 104.9]}>
        <mesh geometry={nodes.Rectangle070_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 1.538, 104.9]}>
        <mesh geometry={nodes.Rectangle070_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 1.069, 104.9]}>
        <mesh geometry={nodes.Rectangle070_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 0.613, 104.9]}>
        <mesh geometry={nodes.Rectangle070_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 0.158, 104.9]}>
        <mesh geometry={nodes.Rectangle070_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -0.312, 104.9]}>
        <mesh geometry={nodes.Rectangle070_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -0.781, 104.9]}>
        <mesh geometry={nodes.Rectangle070_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -1.25, 104.9]}>
        <mesh geometry={nodes.Rectangle070_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -1.719, 104.9]}>
        <mesh geometry={nodes.Rectangle070_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -2.181, 104.9]}>
        <mesh geometry={nodes.Rectangle070_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -2.561, 104.9]}>
        <mesh geometry={nodes.Rectangle070_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -2.903, 104.9]}>
        <mesh geometry={nodes.Rectangle070_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -3.372, 104.9]}>
        <mesh geometry={nodes.Rectangle070_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, -2.841, 105.028]}>
        <mesh geometry={nodes.Rectangle099.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, -2.122, 105.028]}>
        <mesh geometry={nodes.Rectangle100.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, -1.191, 105.028]}>
        <mesh geometry={nodes.Rectangle100_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, -0.254, 105.044]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Rectangle100_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, 0.685, 105.028]}>
        <mesh geometry={nodes.Rectangle100_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, 1.596, 105.044]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Rectangle100_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -2.493, 104.916]} rotation={[Math.PI, 0, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle106.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -1.775, 104.916]} rotation={[Math.PI, 0, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -0.844, 104.916]} rotation={[Math.PI, 0, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 0.094, 104.916]} rotation={[Math.PI, 0, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 1.033, 104.916]} rotation={[Math.PI, 0, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 1.943, 104.916]} rotation={[Math.PI, 0, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 2.396, 104.916]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Rectangle100_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, 2.049, 105.044]} rotation={[Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 1.476, 104.916]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Rectangle100_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, 1.129, 105.044]} rotation={[Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, 0.566, 104.916]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Rectangle100_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, 0.219, 105.044]} rotation={[Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -0.373, 104.916]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Rectangle100_16.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, -0.721, 105.044]} rotation={[Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_17.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -1.311, 104.916]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Rectangle100_18.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, -1.658, 105.044]} rotation={[Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_19.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -2.975, 104.916]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Rectangle100_20.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, -3.322, 105.044]} rotation={[Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle100_21.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.569, -2.472, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle099_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.558, -2.125, 104.916]} rotation={[Math.PI, 0, 0]}>
        <mesh geometry={nodes.Rectangle106_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.414, -3.098, 105.016]} rotation={[0, Math.PI / 2, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Box113.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.295, -3.098, 105.016]} rotation={[0, Math.PI / 2, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Box114.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.195, -3.038, 104.915]} rotation={[Math.PI / 2, 1.186, 0]} scale={[1, 1, 0.718]}>
        <mesh geometry={nodes.Cone002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.289, -3.006, 104.914]}>
        <mesh geometry={nodes['Cut-Extrude027'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.289, -3.067, 104.968]} rotation={[-1.396, 0, 0]}>
        <mesh geometry={nodes['Cut-Extrude028'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.285, -3.034, 104.848]} rotation={[0.873, 0, 0]}>
        <mesh geometry={nodes['Cut-Extrude029'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.285, -3.004, 104.919]} rotation={[-1.484, 0, 0]}>
        <mesh geometry={nodes['Cut-Extrude030'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.278, -3.005, 104.915]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes['Cut-Extrude031'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.278, -3.005, 104.915]} rotation={[0, 1.481, 0]}>
        <mesh geometry={nodes['Cut-Extrude032'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.237, -3.012, 104.917]} rotation={[-Math.PI / 2, Math.PI / 6, Math.PI / 2]}>
        <mesh geometry={nodes['Cut-Extrude033'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.279, -3.206, 104.939]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes['Eletrica-Tomada_Simples_11881001'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.278, -3.256, 104.955]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes['Group#1_11884001'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.252, -3.015, 104.915]} rotation={[Math.PI / 2, -0.385, 0]}>
        <mesh geometry={nodes.Fillet027.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.252, -3.015, 104.915]} rotation={[Math.PI / 2, -0.385, 0]}>
        <mesh geometry={nodes.Fillet028.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.293, -3.005, 105.079]} rotation={[0, 1.481, 0]}>
        <mesh geometry={nodes['Cut-Extrude032_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.252, -3.012, 105.081]} rotation={[-Math.PI / 2, Math.PI / 6, Math.PI / 2]}>
        <mesh geometry={nodes['Cut-Extrude033_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.293, -3.005, 105.079]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes['Cut-Extrude031_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.266, -3.015, 105.079]} rotation={[Math.PI / 2, -0.385, 0]}>
        <mesh geometry={nodes.Fillet028_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.266, -3.015, 105.079]} rotation={[Math.PI / 2, -0.385, 0]}>
        <mesh geometry={nodes.Fillet027_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.304, -3.006, 105.078]}>
        <mesh geometry={nodes['Cut-Extrude027_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.304, -3.067, 105.132]} rotation={[-1.396, 0, 0]}>
        <mesh geometry={nodes['Cut-Extrude028_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.299, -3.034, 105.012]} rotation={[0.873, 0, 0]}>
        <mesh geometry={nodes['Cut-Extrude029_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.299, -3.004, 105.083]} rotation={[-1.484, 0, 0]}>
        <mesh geometry={nodes['Cut-Extrude030_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.294, -3.206, 105.103]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes['Eletrica-Tomada_Simples_11881'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.293, -3.256, 105.119]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes['Group#1_11884001_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.21, -3.038, 105.079]} rotation={[Math.PI / 2, 1.186, 0]} scale={[1, 1, 0.718]}>
        <mesh geometry={nodes.Cone002_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.756, -2.377, 104.954]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Rectangle114.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.736, -2.359, 105.031]}>
        <mesh geometry={nodes.Rectangle115.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.757, -2.359, 105.045]} rotation={[Math.PI, 0, 1.304]} scale={0.498}>
        <mesh geometry={nodes.Combinar1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.757, -2.359, 105.075]} rotation={[Math.PI, 0, Math.PI]} scale={0.498}>
        <mesh geometry={nodes.Filete1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.741, -2.359, 104.866]} rotation={[0, -0.09, 1.838]} scale={[-0.498, 0.498, 0.498]}>
        <mesh geometry={nodes.Combinar1_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.739, -2.359, 104.836]} rotation={[0, -0.09, 0]} scale={[-0.498, 0.498, 0.498]}>
        <mesh geometry={nodes.Filete1_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.722, -2.359, 104.882]} rotation={[Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle115_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.693, -2.357, 104.899]} rotation={[Math.PI, 0, 1.304]} scale={0.498}>
        <mesh geometry={nodes.Combinar1_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.693, -2.357, 104.929]} rotation={[Math.PI, 0, Math.PI]} scale={0.498}>
        <mesh geometry={nodes.Filete1_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.705, -2.357, 105.02]} rotation={[0, 0, -1.838]} scale={0.498}>
        <mesh geometry={nodes.Combinar1_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.705, -2.357, 104.99]} scale={0.498}>
        <mesh geometry={nodes.Filete1_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.853, -1.919, 104.868]}>
        <mesh geometry={nodes.Rectangle117.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.072, -1.811, 104.851]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Rectangle118_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Rectangle118_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-49.993, -1.62, 104.858]} rotation={[0, -0.09, 0]} scale={[0.595, 1, 0.595]}>
        <mesh geometry={nodes.Line1662.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.742, -2.089, 104.869]} rotation={[0, 0, 1.838]} scale={[-0.498, 0.498, 0.498]}>
        <mesh geometry={nodes.Combinar1_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.742, -2.089, 104.836]} scale={[-0.498, 0.498, 0.498]}>
        <mesh geometry={nodes.Filete1_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, -3.372, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.007, -1.773, 104.852]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.ROCKET_ENGINE_POLVORA.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.007, -1.76, 104.884]} rotation={[0, -Math.PI / 2, 0]} scale={0.871}>
        <mesh geometry={nodes.ROCKET_ALETA_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.034, -1.76, 104.837]} rotation={[Math.PI, Math.PI / 6, -Math.PI]} scale={0.871}>
        <mesh geometry={nodes.ROCKET_ALETA_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.007, -1.771, 104.851]} rotation={[Math.PI / 2, 0, -2.269]} scale={1.2}>
        <group scale={0.01}>
          <mesh geometry={nodes.ROCKET_IGNITOR_HELIX_WHITE_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.ROCKET_IGNITOR_HELIX_WHITE_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.ROCKET_IGNITOR_HELIX_WHITE_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-50.007, -1.764, 104.852]} rotation={[-Math.PI / 2, 0, 2.269]} scale={[0.914, 0.827, 1.769]}>
        <mesh geometry={nodes.ROCKET_IGNITOR_STELL.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.007, -1.56, 104.852]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.ROCKET_STEEL_WOOL.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.007, -1.598, 104.852]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.127, 1.127, 1.2]}>
        <mesh geometry={nodes.ROCKET_TRACK_BODY.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.007, -1.773, 104.852]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.ROCKET_ENGINE_TUBE.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.007, -1.602, 104.852]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.ROCKET_TRACK_HEAD.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.992, -1.696, 104.857]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.ROCKET_GUIA_FITA_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.992, -1.736, 104.857]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.ROCKET_GUIA.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.007, -1.473, 104.852]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.ROCKET_TUBEIRA.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.007, -1.773, 104.852]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.ROCKET_TUBE.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.992, -1.509, 104.857]} rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
        <mesh geometry={nodes.ROCKET_GUIA_FITA_01_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.98, -1.76, 104.837]} rotation={[0, Math.PI / 6, 0]} scale={0.871}>
        <mesh geometry={nodes.ROCKET_ALETA_001_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.78, -2.509, 104.95]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Filete4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.698, -2.489, 104.925]} rotation={[1.838, -Math.PI / 2, 0]} scale={0.498}>
        <mesh geometry={nodes.Combinar1_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.669, -2.489, 104.925]} rotation={[0, -Math.PI / 2, 0]} scale={0.498}>
        <mesh geometry={nodes.Filete1_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.704, -2.527, 104.997]} rotation={[1.838, -Math.PI / 2, 0]} scale={0.498}>
        <mesh geometry={nodes.Combinar1_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.675, -2.527, 104.997]} rotation={[0, -Math.PI / 2, 0]} scale={0.498}>
        <mesh geometry={nodes.Filete1_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CABO_DE_AÇO_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.696, 2.446, 104.963]} rotation={[0, 0, Math.PI / 2]} scale={0.503}>
        <mesh geometry={nodes.Espelhar21.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.696, 2.446, 104.962]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[-0.503, 0.503, 0.503]}>
        <mesh geometry={nodes.polia001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.696, 2.446, 104.949]} rotation={[0, 0, Math.PI / 2]} scale={0.503}>
        <mesh geometry={nodes.mancal.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.696, -3.363, 104.963]} rotation={[0, 0, Math.PI / 2]} scale={0.503}>
        <mesh geometry={nodes.Espelhar21_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.696, -3.363, 104.949]} rotation={[0, 0, Math.PI / 2]} scale={0.503}>
        <mesh geometry={nodes.mancal_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.696, -3.363, 104.962]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[-0.503, 0.503, 0.503]}>
        <mesh geometry={nodes.polia001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.CABO_DE_AÇO_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.352, -2.856, 104.991]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Obj_Filete1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.352, -2.856, 104.991]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes['Corte-extrusão6'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.564, 2.507, 104.972]} rotation={[Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes['Corte-extrusão007'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.564, 2.507, 104.972]} rotation={[Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Obj_Filete1_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.564, 2.507, 104.972]} rotation={[Math.PI, 0.09, Math.PI]} scale={[1.477, 1, 1.477]}>
        <mesh geometry={nodes.Object001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.564, 2.507, 104.972]} rotation={[Math.PI, 0.09, Math.PI]}>
        <mesh geometry={nodes.Obj_Object002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.564, 2.507, 104.972]} rotation={[Math.PI, 0.09, Math.PI]}>
        <mesh geometry={nodes.Object003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.055, -1.774, 104.902]} rotation={[-1.482, 0.177, -1.962]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Mirror004_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Mirror004_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-50.052, -1.774, 104.899]} rotation={[-1.482, 0.177, -1.875]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Mirror003_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Mirror003_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-49.211, -3.408, 104.871]} rotation={[-Math.PI / 2, 0, -0.09]}>
        <mesh geometry={nodes.Line1666.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.262, -3.181, 105.079]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid10'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.262, -3.181, 105.079]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid8'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.262, -3.181, 105.079]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid9'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.262, -3.181, 105.079]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid3'].geometry} material={materials.Material__12544} scale={0.01} />
      </group>
      <group position={[-49.262, -3.181, 105.079]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid4'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.262, -3.181, 105.079]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid7'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.262, -3.181, 105.079]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid6'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.262, -3.181, 105.079]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.262, -3.181, 105.079]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid2'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.247, -3.181, 104.915]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid011'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.247, -3.181, 104.915]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid10_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.247, -3.181, 104.915]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid013'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.247, -3.181, 104.915]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid3_1'].geometry} material={materials.Material__12544} scale={0.01} />
      </group>
      <group position={[-49.247, -3.181, 104.915]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid4_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.247, -3.181, 104.915]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid6_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.247, -3.181, 104.915]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid7_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.247, -3.181, 104.915]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid8_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.247, -3.181, 104.915]} rotation={[Math.PI / 2, 0, 1.661]}>
        <mesh geometry={nodes['PLUGUE_MACHO-1-solid9_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-50.07, -1.772, 104.878]} rotation={[1.284, 0.209, 2.666]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Mirror2_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Mirror2_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-50.072, -1.771, 104.881]} rotation={[1.284, 0.209, 2.579]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Obj_Mirror2_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Obj_Mirror2_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Helix007_1.geometry} material={materials.Material__12386} />
          <mesh geometry={nodes.Helix007_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-49.57, -2.561, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_16.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, -2.181, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_17.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, -1.719, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_18.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, 2.454, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_19.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, 1.993, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_20.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, 1.538, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_21.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, 1.069, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_22.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, 0.613, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_23.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, 0.158, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_24.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, -0.312, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_25.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, -0.781, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_26.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.57, -1.25, 105.044]} rotation={[-Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle070_27.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-47.403, -2.315, 75.534]} rotation={[0, -0.09, 0]}>
        <mesh geometry={nodes.Line1663.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.752, -3.412, 105.038]} rotation={[0, -0.09, 0]}>
        <mesh geometry={nodes.Line1664.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-49.737, -3.412, 104.874]} rotation={[0, -0.09, 0]}>
        <mesh geometry={nodes.Line1665.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.529, 5.656, 46.449]} rotation={[0, Math.PI / 9, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Wood_Stair_Coluna_V_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.434, 7.925, 47.545]} rotation={[-3.142, 1.222, 1.745]} scale={1.517}>
        <mesh geometry={nodes.Meade_Hold_Ocular_Cylinder_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.434, 7.925, 47.545]} rotation={[-3.142, 1.226, 1.745]} scale={1.517}>
        <mesh geometry={nodes.Meade_Hold_Ocular_Cylinder_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.068, 5.706, 49.328]} rotation={[0.649, -0.797, 0.497]}>
        <mesh geometry={nodes.Object107.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.178, 0, 46.24]} rotation={[-Math.PI / 2, 0, 0.164]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Escada_To_Cupula_Right_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Escada_To_Cupula_Right_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-26.816, 3.622, 34.209]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Aquario_Testeira.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.269, 0, 37.392]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Aquario_Mureta.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-27.523, 0.032, 35.01]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Aquario_Int_Floor_B.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.732, 0, 35.563]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Aquario_Wall_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Aquario_Wall_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Aquario_Wall_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-7.287, 0.021, 44.593]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[1.08, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Escada_Degrau_Frame_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Escada_Degrau_Frame_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-7.425, 0.021, 44.643]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Escada_Degrau_Top.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Anfi_Wall.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Telescope_Wall.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-26.032, 0, 51.378]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.CEU_Planetario_Wall_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Planetario_Wall_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Planetario_Wall_3.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Planetario_Wall_4.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Planetario_Wall_5.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Hall_Wall.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 1.918]}>
        <mesh geometry={nodes.Rosa_Dos_Ventos_White.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Rosa_Dos_Ventos_Black.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Borda_Rosa_Dos_Ventos.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.761, 0, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Full_Int_Floor.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.761, 0, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Entrance_Fllor.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.761, 3.73, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Laje_Parapeito_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Laje_Parapeito_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-25.761, 0, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Full_Garden.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Lojinha_AstroShop_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Lojinha_AstroShop_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.965, 0, 47.723]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.CEU_AstroShop_Int_Wall_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_AstroShop_Int_Wall_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-25.761, 3.63, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Laje_Ful_Roof_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Laje_Ful_Roof_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.985, 3.63, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Laje_Borda_Planetario_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Laje_Borda_Planetario_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-26.032, 3.245, 51.378]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Planetaio_Full.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.274, 4.48, 46.806]} rotation={[Math.PI, -1.204, Math.PI]} scale={2.31}>
        <mesh geometry={nodes.Cupola_do_Planetário_Parapeito.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.5, 1.911, 46.293]} rotation={[-Math.PI / 2, 0, 0.164]}>
        <mesh geometry={nodes.Escada_Circle_Parapeito.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.506, 1.528, 46.158]} rotation={[0, 0.164, 0]}>
        <mesh geometry={nodes.Escada_To_Cupul_Lateral_Left__Marble.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.497, 1.528, 43.554]} rotation={[-3.141, -0.53, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Escada_To_Cupul_Lateral_Left__Marble_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.963, 2.153, 42.695]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Escada_To_Cupula_Parapeito.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.259, 0.035, 43.259]} rotation={[-Math.PI / 2, 0, -2.61]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Escada_Marble.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-30.853, 3.939, 42.901]} rotation={[-1.621, -0.04, 0.675]}>
        <mesh geometry={nodes.Aquario_Ext_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.761, 0, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Full_Garden_Borda.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Desenv_Int_Wall.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.299, 0, 43.281]} rotation={[-Math.PI / 2, 0, -2.611]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Escada_To_Cupula_Lateral_Left_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Escada_To_Cupula_Lateral_Left_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-25.761, 3.73, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Laje_Parapeito_Marble.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.019, 5.092, 49.828]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Laje_Parapeito_Metal.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.425, -2.039, 44.643]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Escada_Garden.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[1.426, 1.426, 1]}>
        <mesh geometry={nodes.Hall_Cupula.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Hall_Coluna_Meade.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.502, 2.949, 46.517]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Hall_Borda_Gesso.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-26.544, 0, 65.753]} rotation={[-Math.PI / 2, 0, 1.789]}>
        <mesh geometry={nodes.CEU_Complex_Marble_Windows.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.269, 0, 37.392]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Aquario_Mureta_Marble.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.831, 0, 32.149]} rotation={[-Math.PI / 2, 0, 0.873]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Aquario_Wall_Coluna_Metal_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Aquario_Wall_Coluna_Metal_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.985, 3.419, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Lojinha_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Astroshop_Garden.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Lojinha_Floor.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Astroshop_Garden_Borda.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.937, 0, 31.156]} rotation={[-Math.PI / 2, 0, -0.111]}>
        <mesh geometry={nodes.Banheiros_Garden_Borda.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.425, -1.539, 44.643]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Escada_Garden_Borda.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.761, 1.94, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.CEU_Roof_Int_Planetario_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Roof_Int_Planetario_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-25.761, 3.53, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.CEU_Int_Roof_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Int_Roof_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.CEU_Int_Roof_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-25.761, 3.245, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Laje_Full_Orange_Borda_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Laje_Full_Orange_Borda_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Laje_Full_Orange_Borda_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-25.761, 3.63, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Escada_Det_To_Laje.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.98, 3, 47.743]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Hall_Int_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-26.816, 3.622, 34.209]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Aquario_Roof_Metal.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.785, 1.072, 47.216]} rotation={[-Math.PI / 2, 0, 0.086]}>
        <mesh geometry={nodes.Glass_Door_B_Wood_Handle_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.785, 1.072, 47.216]} rotation={[-Math.PI / 2, 0, 0.086]}>
        <mesh geometry={nodes.Glass_Door_B_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.785, 1.072, 47.216]} rotation={[-Math.PI / 2, 0, 0.086]}>
        <mesh geometry={nodes.Glass_Door_A_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.712, 1.072, 48.468]} rotation={[-Math.PI / 2, 0, 2.966]}>
        <mesh geometry={nodes.Glass_Door_A_Wood_Handle_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.712, 1.072, 48.468]} rotation={[-Math.PI / 2, 0, 2.966]}>
        <mesh geometry={nodes.Obj_Glass_Door_A_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.712, 1.072, 48.468]} rotation={[-Math.PI / 2, 0, 2.966]}>
        <mesh geometry={nodes.Glass_Door_A_Trinco.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.367, 1.072, 45.36]} rotation={[-Math.PI / 2, 0, -2.567]}>
        <mesh geometry={nodes.Obj_Glass_Door_A_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.367, 1.072, 45.36]} rotation={[-Math.PI / 2, 0, -2.567]}>
        <mesh geometry={nodes.Glass_Door_A_Trinco_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.367, 1.072, 45.36]} rotation={[-Math.PI / 2, 0, -2.567]}>
        <mesh geometry={nodes.Glass_Door_A_Wood_Handle_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.274, 1.072, 44.494]} rotation={[-Math.PI / 2, 0, 0.836]}>
        <mesh geometry={nodes.Glass_Door_A_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.274, 1.072, 44.494]} rotation={[-Math.PI / 2, 0, 0.836]}>
        <mesh geometry={nodes.Glass_Door_B_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.274, 1.072, 44.494]} rotation={[-Math.PI / 2, 0, 0.836]}>
        <mesh geometry={nodes.Glass_Door_B_Wood_Handle_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.917, 1.072, 56.788]} rotation={[-Math.PI / 2, 0, 1.227]}>
        <mesh geometry={nodes.Obj_Glass_Door_A_001_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.917, 1.072, 56.788]} rotation={[-Math.PI / 2, 0, 1.227]}>
        <mesh geometry={nodes.Glass_Door_A_Trinco_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.917, 1.072, 56.788]} rotation={[-Math.PI / 2, 0, 1.227]}>
        <mesh geometry={nodes.Glass_Door_A_Wood_Handle_001_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.541, 1.072, 57.212]} rotation={[-Math.PI / 2, 0, -1.915]}>
        <mesh geometry={nodes.Glass_Door_A_001_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.541, 1.072, 57.212]} rotation={[-Math.PI / 2, 0, -1.915]}>
        <mesh geometry={nodes.Glass_Door_B_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.541, 1.072, 57.212]} rotation={[-Math.PI / 2, 0, -1.915]}>
        <mesh geometry={nodes.Glass_Door_B_Wood_Handle_001_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.761, 3.58, 51.284]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Int_Roof_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 6.898, 47.745]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[-1.006, 1.006, 1.006]}>
        <mesh geometry={nodes.Cupula_Final.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.108, 7.068, 47.622]} rotation={[0, 0.01, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_016.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.026, 7.068, 47.527]} rotation={[0, -1.521, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_015.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.812, 7.068, 45.374]} rotation={[0, -0.918, 0]}>
        <mesh geometry={nodes.Cupola_Aleta_015_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.936, 7.068, 45.355]} rotation={[-Math.PI, -0.692, Math.PI]}>
        <mesh geometry={nodes.Cupola_Aleta_016_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.687, 7.068, 44.58]} rotation={[0, 0.762, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.626, 7.068, 44.614]} rotation={[0, 1.46, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.075, 7.068, 50.155]} rotation={[-Math.PI, -1.198, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.025, 7.068, 50.204]} rotation={[-Math.PI, -0.499, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.654, 7.068, 49.122]} rotation={[0, -0.176, 0]}>
        <mesh geometry={nodes.Cupola_Aleta_027_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.67, 7.068, 49.054]} rotation={[0, 0.522, 0]}>
        <mesh geometry={nodes.Cupola_Aleta_027_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.189, 7.068, 51.465]} rotation={[0, 1.438, 0]}>
        <mesh geometry={nodes.Cupola_Aleta_027_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.126, 7.068, 51.494]} rotation={[0, 0.74, 0]}>
        <mesh geometry={nodes.Cupola_Aleta_027_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.874, 7.068, 51.654]} rotation={[-Math.PI, -1.418, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.943, 7.068, 51.664]} rotation={[0, -1.025, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.558, 7.068, 50.812]} rotation={[Math.PI, 0.721, -Math.PI]}>
        <mesh geometry={nodes.Cupola_Aleta_027_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.499, 7.068, 50.775]} rotation={[Math.PI, 1.419, -Math.PI]}>
        <mesh geometry={nodes.Cupola_Aleta_027_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.677, 7.068, 49.83]} rotation={[0, -0.743, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.707, 7.068, 49.893]} rotation={[0, -0.045, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.193, 7.068, 48.701]} rotation={[Math.PI, 0.066, -Math.PI]}>
        <mesh geometry={nodes.Cupola_Aleta_027_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.168, 7.068, 48.635]} rotation={[Math.PI, 0.764, -Math.PI]}>
        <mesh geometry={nodes.Cupola_Aleta_027_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.267, 7.068, 45.618]} rotation={[0, -0.394, 0]}>
        <mesh geometry={nodes.Cupola_Aleta_027_16.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.311, 7.068, 45.672]} rotation={[0, -1.092, 0]}>
        <mesh geometry={nodes.Cupola_Aleta_027_17.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.788, 7.068, 46.832]} rotation={[-Math.PI, 0.416, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_18.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.779, 7.068, 46.763]} rotation={[-Math.PI, -0.282, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_19.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.041, 7.068, 43.834]} rotation={[0, -1.376, 0]}>
        <mesh geometry={nodes.Cupola_Aleta_027_20.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.11, 7.068, 43.827]} rotation={[-Math.PI, -1.068, -Math.PI]}>
        <mesh geometry={nodes.Cupola_Aleta_027_21.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.339, 7.068, 44.076]} rotation={[Math.PI, 1.398, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_22.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.277, 7.068, 44.044]} rotation={[-Math.PI, 0.7, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Aleta_027_23.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.384, 6.926, 49.521]} rotation={[-Math.PI / 2, 0, 2.058]} scale={1.22}>
        <mesh geometry={nodes.Cupula_Roldana_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.494, 6.988, 43.926]} rotation={[Math.PI, -0.138, Math.PI]}>
        <mesh geometry={nodes.Cupola_Roldana_Hold_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.491, 6.926, 43.943]} rotation={[-Math.PI / 2, 0, 0.138]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_010'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.535, 6.926, 43.949]} rotation={[-Math.PI / 2, 0, -1.433]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_011'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.515, 6.978, 43.929]} rotation={[0, 0.138, -Math.PI / 2]} scale={[2.44, 2.44, 1.168]}>
        <mesh geometry={nodes['Screw_+_Nuts_012'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.517, 6.978, 43.917]} rotation={[Math.PI, -0.138, Math.PI]} scale={[0.844, 0.844, 1]}>
        <mesh geometry={nodes.Cupola_Roldana_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.149, 6.988, 45.138]} rotation={[Math.PI, 0.822, -Math.PI]}>
        <mesh geometry={nodes.Cupola_Roldana_Hold_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.161, 6.926, 45.149]} rotation={[-Math.PI / 2, 0, -0.822]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_004'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.191, 6.926, 45.117]} rotation={[-Math.PI / 2, 0, -2.393]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_005'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.164, 6.978, 45.122]} rotation={[0, -0.822, -Math.PI / 2]} scale={[2.44, 2.44, 1.168]}>
        <mesh geometry={nodes['Screw_+_Nuts_006'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.154, 6.978, 45.113]} rotation={[Math.PI, 0.822, -Math.PI]} scale={[0.844, 0.844, 1]}>
        <mesh geometry={nodes.Cupola_Roldana_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.138, 6.978, 47.952]} rotation={[-Math.PI, -1.517, Math.PI / 2]} scale={[2.44, 2.44, 1.168]}>
        <mesh geometry={nodes['Screw_+_Nuts_009'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.156, 6.926, 47.973]} rotation={[-Math.PI / 2, 0, -1.625]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_007'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.154, 6.926, 47.929]} rotation={[-Math.PI / 2, 0, 3.088]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_008'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.125, 6.978, 47.953]} rotation={[0, 1.517, 0]} scale={[0.844, 0.844, 1]}>
        <mesh geometry={nodes.Cupola_Roldana_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.139, 6.988, 47.974]} rotation={[0, 1.517, 0]}>
        <mesh geometry={nodes.Cupola_Roldana_Hold_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.141, 6.988, 50.343]} rotation={[0, 0.836, 0]}>
        <mesh geometry={nodes.Cupola_Roldana_Hold_008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.153, 6.926, 50.332]} rotation={[-Math.PI / 2, 0, -2.305]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_022'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.123, 6.926, 50.299]} rotation={[-Math.PI / 2, 0, 2.407]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_023'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.126, 6.978, 50.326]} rotation={[-Math.PI, -0.836, Math.PI / 2]} scale={[2.44, 2.44, 1.168]}>
        <mesh geometry={nodes['Screw_+_Nuts_024'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.116, 6.978, 50.335]} rotation={[0, 0.836, 0]} scale={[0.844, 0.844, 1]}>
        <mesh geometry={nodes.Cupola_Roldana_008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.482, 6.988, 51.565]} rotation={[0, -0.124, 0]}>
        <mesh geometry={nodes.Cupola_Roldana_Hold_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.48, 6.926, 51.548]} rotation={[-Math.PI / 2, 0, 3.018]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_019'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.435, 6.926, 51.554]} rotation={[-Math.PI / 2, 0, 1.447]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_020'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.46, 6.978, 51.567]} rotation={[-Math.PI, 0.124, Math.PI / 2]} scale={[2.44, 2.44, 1.168]}>
        <mesh geometry={nodes['Screw_+_Nuts_021'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.462, 6.978, 51.58]} rotation={[0, -0.124, 0]} scale={[0.844, 0.844, 1]}>
        <mesh geometry={nodes.Cupola_Roldana_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.546, 6.988, 46.276]} rotation={[Math.PI, -1.185, Math.PI]}>
        <mesh geometry={nodes.Cupola_Roldana_Hold_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.531, 6.926, 46.282]} rotation={[-Math.PI / 2, 0, 1.185]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_013'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.547, 6.926, 46.324]} rotation={[-Math.PI / 2, 0, -0.385]} scale={1.22}>
        <mesh geometry={nodes['Screw_+_Nuts_014'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.554, 6.978, 46.296]} rotation={[0, 1.185, -Math.PI / 2]} scale={[2.44, 2.44, 1.168]}>
        <mesh geometry={nodes['Screw_+_Nuts_015'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.566, 6.978, 46.292]} rotation={[Math.PI, -1.185, Math.PI]} scale={[0.844, 0.844, 1]}>
        <mesh geometry={nodes.Cupola_Roldana_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.504, 6.839, 48.954]} rotation={[-Math.PI / 2, 0, -1.234]} scale={1.261}>
        <mesh geometry={nodes.Congé1785.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.479, 6.839, 46.496]} rotation={[-Math.PI / 2, 0, 1.918]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.49, 6.856, 46.467]} rotation={[-Math.PI / 2, 0, 1.918]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.504, 6.856, 46.429]} rotation={[-Math.PI / 2, 0, 1.929]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.493, 6.839, 46.458]} rotation={[-Math.PI / 2, 0, 1.929]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.519, 6.856, 46.391]} rotation={[-Math.PI / 2, 0, 1.94]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_2'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.508, 6.839, 46.42]} rotation={[-Math.PI / 2, 0, 1.94]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.534, 6.856, 46.352]} rotation={[-Math.PI / 2, 0, 1.951]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_3'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.522, 6.839, 46.381]} rotation={[-Math.PI / 2, 0, 1.951]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.549, 6.856, 46.315]} rotation={[-Math.PI / 2, 0, 1.962]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_4'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.538, 6.839, 46.343]} rotation={[-Math.PI / 2, 0, 1.962]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.565, 6.856, 46.277]} rotation={[-Math.PI / 2, 0, 1.974]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_5'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.553, 6.839, 46.305]} rotation={[-Math.PI / 2, 0, 1.974]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.582, 6.856, 46.239]} rotation={[-Math.PI / 2, 0, 1.985]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_6'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.569, 6.839, 46.268]} rotation={[-Math.PI / 2, 0, 1.985]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.599, 6.856, 46.202]} rotation={[-Math.PI / 2, 0, 1.996]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_7'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.586, 6.839, 46.23]} rotation={[-Math.PI / 2, 0, 1.996]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.616, 6.856, 46.164]} rotation={[-Math.PI / 2, 0, 2.007]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_8'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.603, 6.839, 46.193]} rotation={[-Math.PI / 2, 0, 2.007]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.633, 6.856, 46.127]} rotation={[-Math.PI / 2, 0, 2.018]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_9'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.62, 6.839, 46.155]} rotation={[-Math.PI / 2, 0, 2.018]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.651, 6.856, 46.091]} rotation={[-Math.PI / 2, 0, 2.029]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_10'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.638, 6.839, 46.118]} rotation={[-Math.PI / 2, 0, 2.029]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.67, 6.856, 46.054]} rotation={[-Math.PI / 2, 0, 2.04]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_11'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.656, 6.839, 46.082]} rotation={[-Math.PI / 2, 0, 2.04]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.689, 6.856, 46.018]} rotation={[-Math.PI / 2, 0, 2.051]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_12'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.674, 6.839, 46.045]} rotation={[-Math.PI / 2, 0, 2.051]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.708, 6.856, 45.981]} rotation={[-Math.PI / 2, 0, 2.062]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_13'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.693, 6.839, 46.009]} rotation={[-Math.PI / 2, 0, 2.062]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.728, 6.856, 45.945]} rotation={[-Math.PI / 2, 0, 2.073]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_14'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.713, 6.839, 45.972]} rotation={[-Math.PI / 2, 0, 2.073]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.748, 6.856, 45.909]} rotation={[-Math.PI / 2, 0, 2.084]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_15'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.732, 6.839, 45.937]} rotation={[-Math.PI / 2, 0, 2.084]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_16.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.768, 6.856, 45.874]} rotation={[-Math.PI / 2, 0, 2.095]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_16'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.753, 6.839, 45.901]} rotation={[-Math.PI / 2, 0, 2.095]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_17.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.789, 6.856, 45.839]} rotation={[-Math.PI / 2, 0, 2.106]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_17'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.773, 6.839, 45.865]} rotation={[-Math.PI / 2, 0, 2.106]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_18.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.81, 6.856, 45.803]} rotation={[-Math.PI / 2, 0, 2.117]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_18'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.794, 6.839, 45.83]} rotation={[-Math.PI / 2, 0, 2.117]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_19.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.832, 6.856, 45.769]} rotation={[-Math.PI / 2, 0, 2.128]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_19'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.815, 6.839, 45.795]} rotation={[-Math.PI / 2, 0, 2.128]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_20.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.854, 6.856, 45.734]} rotation={[-Math.PI / 2, 0, 2.139]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_20'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.837, 6.839, 45.76]} rotation={[-Math.PI / 2, 0, 2.139]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_21.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.876, 6.856, 45.7]} rotation={[-Math.PI / 2, 0, 2.15]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_21'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.859, 6.839, 45.726]} rotation={[-Math.PI / 2, 0, 2.15]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_22.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.899, 6.856, 45.665]} rotation={[-Math.PI / 2, 0, 2.161]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_22'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.882, 6.839, 45.691]} rotation={[-Math.PI / 2, 0, 2.161]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_23.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.922, 6.856, 45.632]} rotation={[-Math.PI / 2, 0, 2.172]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_23'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.904, 6.839, 45.657]} rotation={[-Math.PI / 2, 0, 2.172]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_24.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.945, 6.856, 45.598]} rotation={[-Math.PI / 2, 0, 2.183]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_24'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.928, 6.839, 45.623]} rotation={[-Math.PI / 2, 0, 2.183]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_25.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.969, 6.856, 45.564]} rotation={[-Math.PI / 2, 0, 2.194]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_25'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.951, 6.839, 45.59]} rotation={[-Math.PI / 2, 0, 2.194]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_26.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.993, 6.856, 45.531]} rotation={[-Math.PI / 2, 0, 2.205]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_26'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.975, 6.839, 45.556]} rotation={[-Math.PI / 2, 0, 2.205]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_27.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.018, 6.856, 45.499]} rotation={[-Math.PI / 2, 0, 2.216]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_27'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.999, 6.839, 45.523]} rotation={[-Math.PI / 2, 0, 2.216]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_28.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.043, 6.856, 45.466]} rotation={[-Math.PI / 2, 0, 2.227]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_28'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.024, 6.839, 45.491]} rotation={[-Math.PI / 2, 0, 2.227]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_29.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.068, 6.856, 45.434]} rotation={[-Math.PI / 2, 0, 2.238]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_29'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.049, 6.839, 45.458]} rotation={[-Math.PI / 2, 0, 2.238]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_30.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.094, 6.856, 45.402]} rotation={[-Math.PI / 2, 0, 2.249]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_30'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.074, 6.839, 45.426]} rotation={[-Math.PI / 2, 0, 2.249]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_31.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.12, 6.856, 45.37]} rotation={[-Math.PI / 2, 0, 2.26]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_31'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.1, 6.839, 45.394]} rotation={[-Math.PI / 2, 0, 2.26]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_32.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.146, 6.856, 45.339]} rotation={[-Math.PI / 2, 0, 2.271]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_32'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.126, 6.839, 45.362]} rotation={[-Math.PI / 2, 0, 2.271]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_33.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.173, 6.856, 45.307]} rotation={[-Math.PI / 2, 0, 2.282]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_33'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.153, 6.839, 45.331]} rotation={[-Math.PI / 2, 0, 2.282]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_34.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.2, 6.856, 45.277]} rotation={[-Math.PI / 2, 0, 2.293]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_34'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.179, 6.839, 45.3]} rotation={[-Math.PI / 2, 0, 2.293]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_35.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.227, 6.856, 45.246]} rotation={[-Math.PI / 2, 0, 2.304]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_35'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.207, 6.839, 45.269]} rotation={[-Math.PI / 2, 0, 2.304]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_36.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.255, 6.856, 45.216]} rotation={[-Math.PI / 2, 0, 2.315]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_36'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.234, 6.839, 45.239]} rotation={[-Math.PI / 2, 0, 2.315]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_37.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.283, 6.856, 45.186]} rotation={[-Math.PI / 2, 0, 2.326]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_37'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.262, 6.839, 45.208]} rotation={[-Math.PI / 2, 0, 2.326]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_38.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.311, 6.856, 45.156]} rotation={[-Math.PI / 2, 0, 2.337]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_38'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.29, 6.839, 45.179]} rotation={[-Math.PI / 2, 0, 2.337]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_39.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.34, 6.856, 45.127]} rotation={[-Math.PI / 2, 0, 2.348]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_39'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.318, 6.839, 45.149]} rotation={[-Math.PI / 2, 0, 2.348]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_40.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.369, 6.856, 45.098]} rotation={[-Math.PI / 2, 0, 2.359]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_40'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.347, 6.839, 45.12]} rotation={[-Math.PI / 2, 0, 2.359]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_41.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.399, 6.856, 45.069]} rotation={[-Math.PI / 2, 0, 2.37]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_41'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.376, 6.839, 45.091]} rotation={[-Math.PI / 2, 0, 2.37]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_42.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.428, 6.856, 45.041]} rotation={[-Math.PI / 2, 0, 2.381]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_42'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.406, 6.839, 45.062]} rotation={[-Math.PI / 2, 0, 2.381]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_43.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.458, 6.856, 45.013]} rotation={[-Math.PI / 2, 0, 2.392]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_43'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.435, 6.839, 45.034]} rotation={[-Math.PI / 2, 0, 2.392]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_44.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.488, 6.856, 44.985]} rotation={[-Math.PI / 2, 0, 2.403]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_44'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.465, 6.839, 45.006]} rotation={[-Math.PI / 2, 0, 2.403]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_45.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.519, 6.856, 44.958]} rotation={[-Math.PI / 2, 0, 2.414]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_45'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.496, 6.839, 44.978]} rotation={[-Math.PI / 2, 0, 2.414]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_46.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.55, 6.856, 44.931]} rotation={[-Math.PI / 2, 0, 2.425]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_46'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.526, 6.839, 44.951]} rotation={[-Math.PI / 2, 0, 2.425]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_47.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.581, 6.856, 44.904]} rotation={[-Math.PI / 2, 0, 2.436]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_47'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.557, 6.839, 44.924]} rotation={[-Math.PI / 2, 0, 2.436]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_48.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.612, 6.856, 44.878]} rotation={[-Math.PI / 2, 0, 2.448]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_48'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.589, 6.839, 44.898]} rotation={[-Math.PI / 2, 0, 2.448]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_49.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.644, 6.856, 44.852]} rotation={[-Math.PI / 2, 0, 2.459]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_49'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.62, 6.839, 44.871]} rotation={[-Math.PI / 2, 0, 2.459]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_50.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.676, 6.856, 44.826]} rotation={[-Math.PI / 2, 0, 2.47]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_50'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.652, 6.839, 44.846]} rotation={[-Math.PI / 2, 0, 2.47]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_51.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.709, 6.856, 44.801]} rotation={[-Math.PI / 2, 0, 2.481]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_51'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.684, 6.839, 44.82]} rotation={[-Math.PI / 2, 0, 2.481]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_52.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.741, 6.856, 44.776]} rotation={[-Math.PI / 2, 0, 2.492]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_52'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.716, 6.839, 44.795]} rotation={[-Math.PI / 2, 0, 2.492]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_53.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.774, 6.856, 44.751]} rotation={[-Math.PI / 2, 0, 2.503]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_53'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.749, 6.839, 44.77]} rotation={[-Math.PI / 2, 0, 2.503]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_54.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.807, 6.856, 44.727]} rotation={[-Math.PI / 2, 0, 2.514]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_54'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.782, 6.839, 44.745]} rotation={[-Math.PI / 2, 0, 2.514]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_55.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.841, 6.856, 44.703]} rotation={[-Math.PI / 2, 0, 2.525]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_55'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.815, 6.839, 44.721]} rotation={[-Math.PI / 2, 0, 2.525]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_56.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.874, 6.856, 44.68]} rotation={[-Math.PI / 2, 0, 2.536]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_56'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.849, 6.839, 44.698]} rotation={[-Math.PI / 2, 0, 2.536]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_57.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.908, 6.856, 44.657]} rotation={[-Math.PI / 2, 0, 2.547]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_57'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.882, 6.839, 44.674]} rotation={[-Math.PI / 2, 0, 2.547]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_58.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.942, 6.856, 44.634]} rotation={[-Math.PI / 2, 0, 2.558]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_58'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.916, 6.839, 44.651]} rotation={[-Math.PI / 2, 0, 2.558]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_59.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.977, 6.856, 44.612]} rotation={[-Math.PI / 2, 0, 2.569]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_59'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.951, 6.839, 44.629]} rotation={[-Math.PI / 2, 0, 2.569]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_60.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.011, 6.856, 44.59]} rotation={[-Math.PI / 2, 0, 2.58]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_60'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.985, 6.839, 44.606]} rotation={[-Math.PI / 2, 0, 2.58]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_61.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.046, 6.856, 44.568]} rotation={[-Math.PI / 2, 0, 2.591]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_61'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.02, 6.839, 44.585]} rotation={[-Math.PI / 2, 0, 2.591]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_62.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.081, 6.856, 44.547]} rotation={[-Math.PI / 2, 0, 2.602]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_62'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.055, 6.839, 44.563]} rotation={[-Math.PI / 2, 0, 2.602]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_63.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.117, 6.856, 44.526]} rotation={[-Math.PI / 2, 0, 2.613]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_63'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.09, 6.839, 44.542]} rotation={[-Math.PI / 2, 0, 2.613]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_64.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.152, 6.856, 44.506]} rotation={[-Math.PI / 2, 0, 2.624]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_64'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.125, 6.839, 44.521]} rotation={[-Math.PI / 2, 0, 2.624]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_65.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.188, 6.856, 44.486]} rotation={[-Math.PI / 2, 0, 2.635]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_65'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.161, 6.839, 44.501]} rotation={[-Math.PI / 2, 0, 2.635]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_66.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.224, 6.856, 44.466]} rotation={[-Math.PI / 2, 0, 2.646]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_66'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.197, 6.839, 44.481]} rotation={[-Math.PI / 2, 0, 2.646]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_67.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.26, 6.856, 44.447]} rotation={[-Math.PI / 2, 0, 2.657]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_67'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.233, 6.839, 44.462]} rotation={[-Math.PI / 2, 0, 2.657]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_68.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.297, 6.856, 44.428]} rotation={[-Math.PI / 2, 0, 2.668]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_68'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.269, 6.839, 44.443]} rotation={[-Math.PI / 2, 0, 2.668]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_69.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.333, 6.856, 44.41]} rotation={[-Math.PI / 2, 0, 2.679]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_69'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.306, 6.839, 44.424]} rotation={[-Math.PI / 2, 0, 2.679]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_70.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.37, 6.856, 44.392]} rotation={[-Math.PI / 2, 0, 2.69]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_70'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.342, 6.839, 44.406]} rotation={[-Math.PI / 2, 0, 2.69]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_71.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.407, 6.856, 44.374]} rotation={[-Math.PI / 2, 0, 2.701]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_71'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.379, 6.839, 44.388]} rotation={[-Math.PI / 2, 0, 2.701]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_72.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.445, 6.856, 44.357]} rotation={[-Math.PI / 2, 0, 2.712]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_72'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.416, 6.839, 44.37]} rotation={[-Math.PI / 2, 0, 2.712]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_73.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.482, 6.856, 44.34]} rotation={[-Math.PI / 2, 0, 2.723]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_73'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.454, 6.839, 44.353]} rotation={[-Math.PI / 2, 0, 2.723]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_74.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.52, 6.856, 44.324]} rotation={[-Math.PI / 2, 0, 2.734]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_74'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.491, 6.839, 44.336]} rotation={[-Math.PI / 2, 0, 2.734]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_75.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.557, 6.856, 44.308]} rotation={[-Math.PI / 2, 0, 2.745]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_75'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.529, 6.839, 44.32]} rotation={[-Math.PI / 2, 0, 2.745]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_76.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.595, 6.856, 44.293]} rotation={[-Math.PI / 2, 0, 2.756]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_76'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.567, 6.839, 44.304]} rotation={[-Math.PI / 2, 0, 2.756]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_77.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.634, 6.856, 44.277]} rotation={[-Math.PI / 2, 0, 2.767]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_77'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.605, 6.839, 44.289]} rotation={[-Math.PI / 2, 0, 2.767]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_78.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.672, 6.856, 44.263]} rotation={[-Math.PI / 2, 0, 2.778]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_78'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.643, 6.839, 44.274]} rotation={[-Math.PI / 2, 0, 2.778]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_79.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.71, 6.856, 44.249]} rotation={[-Math.PI / 2, 0, 2.789]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_79'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.681, 6.839, 44.259]} rotation={[-Math.PI / 2, 0, 2.789]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_80.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.749, 6.856, 44.235]} rotation={[-Math.PI / 2, 0, 2.8]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_80'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.72, 6.839, 44.245]} rotation={[-Math.PI / 2, 0, 2.8]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_81.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.788, 6.856, 44.221]} rotation={[-Math.PI / 2, 0, 2.811]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_81'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.758, 6.839, 44.231]} rotation={[-Math.PI / 2, 0, 2.811]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_82.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.827, 6.856, 44.208]} rotation={[-Math.PI / 2, 0, 2.822]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_82'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.797, 6.839, 44.218]} rotation={[-Math.PI / 2, 0, 2.822]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_83.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.866, 6.856, 44.196]} rotation={[-Math.PI / 2, 0, 2.833]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_83'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.836, 6.839, 44.205]} rotation={[-Math.PI / 2, 0, 2.833]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_84.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.905, 6.856, 44.184]} rotation={[-Math.PI / 2, 0, 2.844]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_84'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.875, 6.839, 44.193]} rotation={[-Math.PI / 2, 0, 2.844]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_85.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.944, 6.856, 44.172]} rotation={[-Math.PI / 2, 0, 2.855]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_85'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.914, 6.839, 44.181]} rotation={[-Math.PI / 2, 0, 2.855]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_86.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.984, 6.856, 44.161]} rotation={[-Math.PI / 2, 0, 2.866]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_86'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.954, 6.839, 44.169]} rotation={[-Math.PI / 2, 0, 2.866]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_87.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.023, 6.856, 44.15]} rotation={[-Math.PI / 2, 0, 2.877]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_87'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.993, 6.839, 44.158]} rotation={[-Math.PI / 2, 0, 2.877]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_88.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.063, 6.856, 44.14]} rotation={[-Math.PI / 2, 0, 2.888]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_88'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.033, 6.839, 44.147]} rotation={[-Math.PI / 2, 0, 2.888]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_89.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.103, 6.856, 44.13]} rotation={[-Math.PI / 2, 0, 2.899]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_89'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.073, 6.839, 44.137]} rotation={[-Math.PI / 2, 0, 2.899]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_90.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.143, 6.856, 44.12]} rotation={[-Math.PI / 2, 0, 2.91]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_90'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.112, 6.839, 44.127]} rotation={[-Math.PI / 2, 0, 2.91]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_91.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.183, 6.856, 44.111]} rotation={[-Math.PI / 2, 0, 2.921]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_91'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.152, 6.839, 44.118]} rotation={[-Math.PI / 2, 0, 2.921]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_92.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.223, 6.856, 44.102]} rotation={[-Math.PI / 2, 0, 2.933]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_92'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.192, 6.839, 44.109]} rotation={[-Math.PI / 2, 0, 2.933]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_93.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.263, 6.856, 44.094]} rotation={[-Math.PI / 2, 0, 2.944]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_93'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.232, 6.839, 44.1]} rotation={[-Math.PI / 2, 0, 2.944]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_94.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.303, 6.856, 44.086]} rotation={[-Math.PI / 2, 0, 2.955]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_94'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.273, 6.839, 44.092]} rotation={[-Math.PI / 2, 0, 2.955]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_95.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.344, 6.856, 44.079]} rotation={[-Math.PI / 2, 0, 2.966]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_95'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.313, 6.839, 44.085]} rotation={[-Math.PI / 2, 0, 2.966]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_96.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.384, 6.856, 44.072]} rotation={[-Math.PI / 2, 0, 2.977]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_96'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.353, 6.839, 44.077]} rotation={[-Math.PI / 2, 0, 2.977]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_97.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.424, 6.856, 44.066]} rotation={[-Math.PI / 2, 0, 2.988]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_97'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.394, 6.839, 44.071]} rotation={[-Math.PI / 2, 0, 2.988]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_98.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.465, 6.856, 44.06]} rotation={[-Math.PI / 2, 0, 2.999]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_98'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.434, 6.839, 44.064]} rotation={[-Math.PI / 2, 0, 2.999]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_99.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.506, 6.856, 44.054]} rotation={[-Math.PI / 2, 0, 3.01]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_99'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.475, 6.839, 44.059]} rotation={[-Math.PI / 2, 0, 3.01]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_100.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.546, 6.856, 44.049]} rotation={[-Math.PI / 2, 0, 3.021]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_100'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.516, 6.839, 44.053]} rotation={[-Math.PI / 2, 0, 3.021]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_101.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.587, 6.856, 44.045]} rotation={[-Math.PI / 2, 0, 3.032]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_101'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.556, 6.839, 44.048]} rotation={[-Math.PI / 2, 0, 3.032]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_102.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.628, 6.856, 44.041]} rotation={[-Math.PI / 2, 0, 3.043]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_102'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.597, 6.839, 44.044]} rotation={[-Math.PI / 2, 0, 3.043]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_103.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.669, 6.856, 44.037]} rotation={[-Math.PI / 2, 0, 3.054]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_103'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.638, 6.839, 44.04]} rotation={[-Math.PI / 2, 0, 3.054]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_104.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.71, 6.856, 44.034]} rotation={[-Math.PI / 2, 0, 3.065]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_104'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.679, 6.839, 44.036]} rotation={[-Math.PI / 2, 0, 3.065]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_105.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.751, 6.856, 44.031]} rotation={[-Math.PI / 2, 0, 3.076]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_105'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.72, 6.839, 44.033]} rotation={[-Math.PI / 2, 0, 3.076]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_106.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.792, 6.856, 44.028]} rotation={[-Math.PI / 2, 0, 3.087]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_106'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.761, 6.839, 44.03]} rotation={[-Math.PI / 2, 0, 3.087]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_107.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.833, 6.856, 44.027]} rotation={[-Math.PI / 2, 0, 3.098]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_107'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.802, 6.839, 44.028]} rotation={[-Math.PI / 2, 0, 3.098]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_108.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.874, 6.856, 44.025]} rotation={[-Math.PI / 2, 0, 3.109]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_108'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.843, 6.839, 44.026]} rotation={[-Math.PI / 2, 0, 3.109]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_109.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.915, 6.856, 44.024]} rotation={[-Math.PI / 2, 0, 3.12]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_109'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.884, 6.839, 44.025]} rotation={[-Math.PI / 2, 0, 3.12]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_110.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.956, 6.856, 44.024]} rotation={[-Math.PI / 2, 0, 3.131]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_110'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.925, 6.839, 44.024]} rotation={[-Math.PI / 2, 0, 3.131]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_111.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.997, 6.856, 44.023]} rotation={[-Math.PI / 2, 0, -3.141]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_111'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.966, 6.839, 44.023]} rotation={[-Math.PI / 2, 0, -3.141]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_112.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.038, 6.856, 44.024]} rotation={[-Math.PI / 2, 0, -3.13]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_112'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.007, 6.839, 44.023]} rotation={[-Math.PI / 2, 0, -3.13]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_113.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.079, 6.856, 44.025]} rotation={[-Math.PI / 2, 0, -3.119]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_113'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.048, 6.839, 44.024]} rotation={[-Math.PI / 2, 0, -3.119]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_114.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.12, 6.856, 44.026]} rotation={[-Math.PI / 2, 0, -3.108]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_114'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.089, 6.839, 44.025]} rotation={[-Math.PI / 2, 0, -3.108]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_115.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.161, 6.856, 44.028]} rotation={[-Math.PI / 2, 0, -3.097]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_115'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.13, 6.839, 44.026]} rotation={[-Math.PI / 2, 0, -3.097]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_116.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.202, 6.856, 44.03]} rotation={[-Math.PI / 2, 0, -3.086]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_116'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.171, 6.839, 44.028]} rotation={[-Math.PI / 2, 0, -3.086]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_117.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.242, 6.856, 44.032]} rotation={[-Math.PI / 2, 0, -3.075]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_117'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.212, 6.839, 44.03]} rotation={[-Math.PI / 2, 0, -3.075]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_118.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.283, 6.856, 44.035]} rotation={[-Math.PI / 2, 0, -3.064]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_118'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.252, 6.839, 44.033]} rotation={[-Math.PI / 2, 0, -3.064]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_119.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.324, 6.856, 44.039]} rotation={[-Math.PI / 2, 0, -3.053]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_119'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.293, 6.839, 44.036]} rotation={[-Math.PI / 2, 0, -3.053]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_120.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.365, 6.856, 44.043]} rotation={[-Math.PI / 2, 0, -3.042]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_120'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.334, 6.839, 44.04]} rotation={[-Math.PI / 2, 0, -3.042]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_121.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.406, 6.856, 44.047]} rotation={[-Math.PI / 2, 0, -3.031]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_121'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.375, 6.839, 44.044]} rotation={[-Math.PI / 2, 0, -3.031]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_122.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.447, 6.856, 44.052]} rotation={[-Math.PI / 2, 0, -3.02]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_122'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.416, 6.839, 44.048]} rotation={[-Math.PI / 2, 0, -3.02]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_123.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.487, 6.856, 44.058]} rotation={[-Math.PI / 2, 0, -3.009]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_123'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.457, 6.839, 44.053]} rotation={[-Math.PI / 2, 0, -3.009]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_124.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.528, 6.856, 44.063]} rotation={[-Math.PI / 2, 0, -2.998]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_124'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.497, 6.839, 44.059]} rotation={[-Math.PI / 2, 0, -2.998]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_125.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.568, 6.856, 44.07]} rotation={[-Math.PI / 2, 0, -2.987]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_125'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.538, 6.839, 44.065]} rotation={[-Math.PI / 2, 0, -2.987]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_126.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.609, 6.856, 44.076]} rotation={[-Math.PI / 2, 0, -2.976]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_126'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.578, 6.839, 44.071]} rotation={[-Math.PI / 2, 0, -2.976]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_127.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.649, 6.856, 44.083]} rotation={[-Math.PI / 2, 0, -2.965]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_127'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.619, 6.839, 44.078]} rotation={[-Math.PI / 2, 0, -2.965]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_128.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.69, 6.856, 44.091]} rotation={[-Math.PI / 2, 0, -2.954]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_128'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.659, 6.839, 44.085]} rotation={[-Math.PI / 2, 0, -2.954]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_129.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.73, 6.856, 44.099]} rotation={[-Math.PI / 2, 0, -2.943]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_129'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.699, 6.839, 44.093]} rotation={[-Math.PI / 2, 0, -2.943]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_130.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.77, 6.856, 44.107]} rotation={[-Math.PI / 2, 0, -2.932]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_130'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.74, 6.839, 44.101]} rotation={[-Math.PI / 2, 0, -2.932]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_131.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.81, 6.856, 44.116]} rotation={[-Math.PI / 2, 0, -2.921]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_131'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.78, 6.839, 44.109]} rotation={[-Math.PI / 2, 0, -2.921]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_132.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.85, 6.856, 44.125]} rotation={[-Math.PI / 2, 0, -2.91]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_132'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.82, 6.839, 44.118]} rotation={[-Math.PI / 2, 0, -2.91]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_133.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.89, 6.856, 44.135]} rotation={[-Math.PI / 2, 0, -2.899]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_133'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.86, 6.839, 44.128]} rotation={[-Math.PI / 2, 0, -2.899]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_134.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.93, 6.856, 44.145]} rotation={[-Math.PI / 2, 0, -2.888]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_134'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.9, 6.839, 44.138]} rotation={[-Math.PI / 2, 0, -2.888]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_135.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.969, 6.856, 44.156]} rotation={[-Math.PI / 2, 0, -2.877]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_135'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.939, 6.839, 44.148]} rotation={[-Math.PI / 2, 0, -2.877]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_136.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.009, 6.856, 44.167]} rotation={[-Math.PI / 2, 0, -2.866]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_136'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.979, 6.839, 44.159]} rotation={[-Math.PI / 2, 0, -2.866]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_137.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.048, 6.856, 44.179]} rotation={[-Math.PI / 2, 0, -2.855]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_137'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.018, 6.839, 44.17]} rotation={[-Math.PI / 2, 0, -2.855]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_138.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.087, 6.856, 44.191]} rotation={[-Math.PI / 2, 0, -2.844]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_138'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.058, 6.839, 44.181]} rotation={[-Math.PI / 2, 0, -2.844]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_139.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.126, 6.856, 44.203]} rotation={[-Math.PI / 2, 0, -2.833]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_139'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.097, 6.839, 44.193]} rotation={[-Math.PI / 2, 0, -2.833]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_140.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.165, 6.856, 44.216]} rotation={[-Math.PI / 2, 0, -2.822]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_140'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.136, 6.839, 44.206]} rotation={[-Math.PI / 2, 0, -2.822]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_141.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.204, 6.856, 44.229]} rotation={[-Math.PI / 2, 0, -2.811]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_141'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.175, 6.839, 44.219]} rotation={[-Math.PI / 2, 0, -2.811]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_142.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.243, 6.856, 44.243]} rotation={[-Math.PI / 2, 0, -2.8]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_142'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.214, 6.839, 44.232]} rotation={[-Math.PI / 2, 0, -2.8]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_143.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.281, 6.856, 44.257]} rotation={[-Math.PI / 2, 0, -2.788]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_143'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.252, 6.839, 44.246]} rotation={[-Math.PI / 2, 0, -2.788]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_144.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.32, 6.856, 44.271]} rotation={[-Math.PI / 2, 0, -2.777]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_144'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.291, 6.839, 44.26]} rotation={[-Math.PI / 2, 0, -2.777]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_145.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.358, 6.856, 44.286]} rotation={[-Math.PI / 2, 0, -2.766]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_145'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.329, 6.839, 44.275]} rotation={[-Math.PI / 2, 0, -2.766]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_146.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.396, 6.856, 44.301]} rotation={[-Math.PI / 2, 0, -2.755]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_146'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.367, 6.839, 44.29]} rotation={[-Math.PI / 2, 0, -2.755]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_147.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.434, 6.856, 44.317]} rotation={[-Math.PI / 2, 0, -2.744]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_147'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.405, 6.839, 44.305]} rotation={[-Math.PI / 2, 0, -2.744]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_148.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.472, 6.856, 44.333]} rotation={[-Math.PI / 2, 0, -2.733]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_148'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.443, 6.839, 44.321]} rotation={[-Math.PI / 2, 0, -2.733]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_149.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.509, 6.856, 44.35]} rotation={[-Math.PI / 2, 0, -2.722]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_149'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.481, 6.839, 44.337]} rotation={[-Math.PI / 2, 0, -2.722]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_150.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.546, 6.856, 44.367]} rotation={[-Math.PI / 2, 0, -2.711]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_150'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.518, 6.839, 44.354]} rotation={[-Math.PI / 2, 0, -2.711]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_151.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.584, 6.856, 44.384]} rotation={[-Math.PI / 2, 0, -2.7]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_151'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.556, 6.839, 44.371]} rotation={[-Math.PI / 2, 0, -2.7]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_152.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.621, 6.856, 44.402]} rotation={[-Math.PI / 2, 0, -2.689]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_152'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.593, 6.839, 44.389]} rotation={[-Math.PI / 2, 0, -2.689]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_153.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.657, 6.856, 44.42]} rotation={[-Math.PI / 2, 0, -2.678]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_153'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.629, 6.839, 44.407]} rotation={[-Math.PI / 2, 0, -2.678]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_154.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.694, 6.856, 44.439]} rotation={[-Math.PI / 2, 0, -2.667]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_154'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.666, 6.839, 44.425]} rotation={[-Math.PI / 2, 0, -2.667]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_155.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.73, 6.856, 44.458]} rotation={[-Math.PI / 2, 0, -2.656]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_155'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.703, 6.839, 44.444]} rotation={[-Math.PI / 2, 0, -2.656]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_156.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.766, 6.856, 44.478]} rotation={[-Math.PI / 2, 0, -2.645]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_156'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.739, 6.839, 44.463]} rotation={[-Math.PI / 2, 0, -2.645]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_157.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.802, 6.856, 44.497]} rotation={[-Math.PI / 2, 0, -2.634]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_157'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.775, 6.839, 44.482]} rotation={[-Math.PI / 2, 0, -2.634]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_158.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.838, 6.856, 44.518]} rotation={[-Math.PI / 2, 0, -2.623]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_158'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.811, 6.839, 44.502]} rotation={[-Math.PI / 2, 0, -2.623]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_159.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.873, 6.856, 44.538]} rotation={[-Math.PI / 2, 0, -2.612]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_159'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.847, 6.839, 44.523]} rotation={[-Math.PI / 2, 0, -2.612]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_160.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.909, 6.856, 44.559]} rotation={[-Math.PI / 2, 0, -2.601]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_160'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.882, 6.839, 44.543]} rotation={[-Math.PI / 2, 0, -2.601]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_161.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.944, 6.856, 44.581]} rotation={[-Math.PI / 2, 0, -2.59]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_161'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.917, 6.839, 44.564]} rotation={[-Math.PI / 2, 0, -2.59]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_162.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.978, 6.856, 44.602]} rotation={[-Math.PI / 2, 0, -2.579]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_162'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.952, 6.839, 44.586]} rotation={[-Math.PI / 2, 0, -2.579]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_163.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.013, 6.856, 44.625]} rotation={[-Math.PI / 2, 0, -2.568]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_163'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.987, 6.839, 44.608]} rotation={[-Math.PI / 2, 0, -2.568]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_164.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.047, 6.856, 44.647]} rotation={[-Math.PI / 2, 0, -2.557]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_164'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.021, 6.839, 44.63]} rotation={[-Math.PI / 2, 0, -2.557]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_165.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.081, 6.856, 44.67]} rotation={[-Math.PI / 2, 0, -2.546]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_165'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.055, 6.839, 44.653]} rotation={[-Math.PI / 2, 0, -2.546]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_166.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.115, 6.856, 44.693]} rotation={[-Math.PI / 2, 0, -2.535]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_166'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.089, 6.839, 44.676]} rotation={[-Math.PI / 2, 0, -2.535]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_167.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.148, 6.856, 44.717]} rotation={[-Math.PI / 2, 0, -2.524]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_167'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.123, 6.839, 44.699]} rotation={[-Math.PI / 2, 0, -2.524]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_168.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.182, 6.856, 44.741]} rotation={[-Math.PI / 2, 0, -2.513]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_168'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.156, 6.839, 44.723]} rotation={[-Math.PI / 2, 0, -2.513]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_169.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.215, 6.856, 44.765]} rotation={[-Math.PI / 2, 0, -2.502]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_169'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.19, 6.839, 44.747]} rotation={[-Math.PI / 2, 0, -2.502]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_170.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.247, 6.856, 44.79]} rotation={[-Math.PI / 2, 0, -2.491]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_170'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.223, 6.839, 44.771]} rotation={[-Math.PI / 2, 0, -2.491]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_171.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.28, 6.856, 44.815]} rotation={[-Math.PI / 2, 0, -2.48]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_171'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.255, 6.839, 44.796]} rotation={[-Math.PI / 2, 0, -2.48]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_172.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.312, 6.856, 44.841]} rotation={[-Math.PI / 2, 0, -2.469]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_172'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.288, 6.839, 44.821]} rotation={[-Math.PI / 2, 0, -2.469]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_173.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.344, 6.856, 44.867]} rotation={[-Math.PI / 2, 0, -2.458]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_173'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.32, 6.839, 44.847]} rotation={[-Math.PI / 2, 0, -2.458]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_174.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.375, 6.856, 44.893]} rotation={[-Math.PI / 2, 0, -2.447]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_174'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.351, 6.839, 44.873]} rotation={[-Math.PI / 2, 0, -2.447]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_175.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.407, 6.856, 44.919]} rotation={[-Math.PI / 2, 0, -2.436]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_175'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.383, 6.839, 44.899]} rotation={[-Math.PI / 2, 0, -2.436]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_176.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.438, 6.856, 44.946]} rotation={[-Math.PI / 2, 0, -2.425]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_176'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.414, 6.839, 44.926]} rotation={[-Math.PI / 2, 0, -2.425]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_177.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.468, 6.856, 44.973]} rotation={[-Math.PI / 2, 0, -2.414]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_177'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.445, 6.839, 44.953]} rotation={[-Math.PI / 2, 0, -2.414]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_178.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.499, 6.856, 45.001]} rotation={[-Math.PI / 2, 0, -2.403]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_178'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.476, 6.839, 44.98]} rotation={[-Math.PI / 2, 0, -2.403]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_179.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.529, 6.856, 45.029]} rotation={[-Math.PI / 2, 0, -2.392]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_179'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.506, 6.839, 45.008]} rotation={[-Math.PI / 2, 0, -2.392]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_180.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.559, 6.856, 45.057]} rotation={[-Math.PI / 2, 0, -2.381]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_180'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.536, 6.839, 45.036]} rotation={[-Math.PI / 2, 0, -2.381]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_181.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.588, 6.856, 45.086]} rotation={[-Math.PI / 2, 0, -2.37]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_181'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.566, 6.839, 45.064]} rotation={[-Math.PI / 2, 0, -2.37]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_182.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.617, 6.856, 45.114]} rotation={[-Math.PI / 2, 0, -2.359]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_182'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.595, 6.839, 45.093]} rotation={[-Math.PI / 2, 0, -2.359]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_183.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.646, 6.856, 45.144]} rotation={[-Math.PI / 2, 0, -2.348]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_183'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.624, 6.839, 45.121]} rotation={[-Math.PI / 2, 0, -2.348]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_184.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.675, 6.856, 45.173]} rotation={[-Math.PI / 2, 0, -2.337]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_184'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.653, 6.839, 45.151]} rotation={[-Math.PI / 2, 0, -2.337]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_185.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.703, 6.856, 45.203]} rotation={[-Math.PI / 2, 0, -2.326]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_185'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.681, 6.839, 45.18]} rotation={[-Math.PI / 2, 0, -2.326]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_186.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.731, 6.856, 45.233]} rotation={[-Math.PI / 2, 0, -2.314]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_186'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.71, 6.839, 45.21]} rotation={[-Math.PI / 2, 0, -2.314]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_187.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.758, 6.856, 45.263]} rotation={[-Math.PI / 2, 0, -2.303]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_187'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.737, 6.839, 45.24]} rotation={[-Math.PI / 2, 0, -2.303]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_188.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.785, 6.856, 45.294]} rotation={[-Math.PI / 2, 0, -2.292]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_188'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.765, 6.839, 45.271]} rotation={[-Math.PI / 2, 0, -2.292]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_189.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.812, 6.856, 45.325]} rotation={[-Math.PI / 2, 0, -2.281]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_189'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.792, 6.839, 45.302]} rotation={[-Math.PI / 2, 0, -2.281]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_190.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.839, 6.856, 45.356]} rotation={[-Math.PI / 2, 0, -2.27]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_190'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.819, 6.839, 45.333]} rotation={[-Math.PI / 2, 0, -2.27]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_191.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.865, 6.856, 45.388]} rotation={[-Math.PI / 2, 0, -2.259]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_191'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.845, 6.839, 45.364]} rotation={[-Math.PI / 2, 0, -2.259]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_192.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.891, 6.856, 45.42]} rotation={[-Math.PI / 2, 0, -2.248]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_192'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.871, 6.839, 45.396]} rotation={[-Math.PI / 2, 0, -2.248]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_193.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.916, 6.856, 45.452]} rotation={[-Math.PI / 2, 0, -2.237]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_193'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.897, 6.839, 45.428]} rotation={[-Math.PI / 2, 0, -2.237]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_194.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.941, 6.856, 45.485]} rotation={[-Math.PI / 2, 0, -2.226]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_194'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.922, 6.839, 45.46]} rotation={[-Math.PI / 2, 0, -2.226]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_195.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.966, 6.856, 45.517]} rotation={[-Math.PI / 2, 0, -2.215]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_195'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.947, 6.839, 45.492]} rotation={[-Math.PI / 2, 0, -2.215]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_196.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.99, 6.856, 45.55]} rotation={[-Math.PI / 2, 0, -2.204]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_196'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.972, 6.839, 45.525]} rotation={[-Math.PI / 2, 0, -2.204]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_197.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.014, 6.856, 45.584]} rotation={[-Math.PI / 2, 0, -2.193]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_197'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.996, 6.839, 45.558]} rotation={[-Math.PI / 2, 0, -2.193]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_198.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.038, 6.856, 45.617]} rotation={[-Math.PI / 2, 0, -2.182]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_198'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.02, 6.839, 45.592]} rotation={[-Math.PI / 2, 0, -2.182]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_199.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.061, 6.856, 45.651]} rotation={[-Math.PI / 2, 0, -2.171]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_199'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.044, 6.839, 45.625]} rotation={[-Math.PI / 2, 0, -2.171]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_200.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.084, 6.856, 45.685]} rotation={[-Math.PI / 2, 0, -2.16]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_200'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.067, 6.839, 45.659]} rotation={[-Math.PI / 2, 0, -2.16]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_201.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.106, 6.856, 45.719]} rotation={[-Math.PI / 2, 0, -2.149]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_201'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.09, 6.839, 45.693]} rotation={[-Math.PI / 2, 0, -2.149]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_202.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.129, 6.856, 45.754]} rotation={[-Math.PI / 2, 0, -2.138]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_202'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.112, 6.839, 45.728]} rotation={[-Math.PI / 2, 0, -2.138]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_203.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.15, 6.856, 45.788]} rotation={[-Math.PI / 2, 0, -2.127]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_203'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.134, 6.839, 45.762]} rotation={[-Math.PI / 2, 0, -2.127]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_204.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.172, 6.856, 45.823]} rotation={[-Math.PI / 2, 0, -2.116]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_204'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.156, 6.839, 45.797]} rotation={[-Math.PI / 2, 0, -2.116]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_205.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.193, 6.856, 45.859]} rotation={[-Math.PI / 2, 0, -2.105]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_205'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.177, 6.839, 45.832]} rotation={[-Math.PI / 2, 0, -2.105]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_206.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.213, 6.856, 45.894]} rotation={[-Math.PI / 2, 0, -2.094]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_206'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.198, 6.839, 45.867]} rotation={[-Math.PI / 2, 0, -2.094]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_207.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.234, 6.856, 45.93]} rotation={[-Math.PI / 2, 0, -2.083]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_207'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.218, 6.839, 45.903]} rotation={[-Math.PI / 2, 0, -2.083]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_208.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.253, 6.856, 45.966]} rotation={[-Math.PI / 2, 0, -2.072]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_208'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.238, 6.839, 45.939]} rotation={[-Math.PI / 2, 0, -2.072]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_209.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.273, 6.856, 46.002]} rotation={[-Math.PI / 2, 0, -2.061]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_209'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.258, 6.839, 45.975]} rotation={[-Math.PI / 2, 0, -2.061]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_210.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.292, 6.856, 46.038]} rotation={[-Math.PI / 2, 0, -2.05]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_210'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.277, 6.839, 46.011]} rotation={[-Math.PI / 2, 0, -2.05]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_211.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.31, 6.856, 46.075]} rotation={[-Math.PI / 2, 0, -2.039]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_211'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.296, 6.839, 46.047]} rotation={[-Math.PI / 2, 0, -2.039]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_212.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.329, 6.856, 46.112]} rotation={[-Math.PI / 2, 0, -2.028]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_212'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.315, 6.839, 46.084]} rotation={[-Math.PI / 2, 0, -2.028]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_213.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.346, 6.856, 46.149]} rotation={[-Math.PI / 2, 0, -2.017]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_213'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.333, 6.839, 46.121]} rotation={[-Math.PI / 2, 0, -2.017]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_214.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.364, 6.856, 46.186]} rotation={[-Math.PI / 2, 0, -2.006]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_214'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.351, 6.839, 46.158]} rotation={[-Math.PI / 2, 0, -2.006]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_215.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.381, 6.856, 46.223]} rotation={[-Math.PI / 2, 0, -1.995]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_215'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.368, 6.839, 46.195]} rotation={[-Math.PI / 2, 0, -1.995]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_216.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.397, 6.856, 46.261]} rotation={[-Math.PI / 2, 0, -1.984]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_216'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.385, 6.839, 46.232]} rotation={[-Math.PI / 2, 0, -1.984]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_217.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.413, 6.856, 46.298]} rotation={[-Math.PI / 2, 0, -1.973]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_217'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.401, 6.839, 46.27]} rotation={[-Math.PI / 2, 0, -1.973]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_218.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.429, 6.856, 46.336]} rotation={[-Math.PI / 2, 0, -1.962]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_218'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.417, 6.839, 46.307]} rotation={[-Math.PI / 2, 0, -1.962]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_219.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.445, 6.856, 46.374]} rotation={[-Math.PI / 2, 0, -1.951]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_219'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.433, 6.839, 46.345]} rotation={[-Math.PI / 2, 0, -1.951]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_220.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.459, 6.856, 46.412]} rotation={[-Math.PI / 2, 0, -1.94]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_220'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.448, 6.839, 46.384]} rotation={[-Math.PI / 2, 0, -1.94]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_221.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.474, 6.856, 46.451]} rotation={[-Math.PI / 2, 0, -1.929]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_221'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.463, 6.839, 46.422]} rotation={[-Math.PI / 2, 0, -1.929]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_222.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.488, 6.856, 46.489]} rotation={[-Math.PI / 2, 0, -1.918]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_222'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.477, 6.839, 46.46]} rotation={[-Math.PI / 2, 0, -1.918]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_223.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.502, 6.856, 46.528]} rotation={[-Math.PI / 2, 0, -1.907]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_223'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.491, 6.839, 46.499]} rotation={[-Math.PI / 2, 0, -1.907]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_224.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.515, 6.856, 46.567]} rotation={[-Math.PI / 2, 0, -1.896]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_224'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.505, 6.839, 46.537]} rotation={[-Math.PI / 2, 0, -1.896]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_225.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.528, 6.856, 46.606]} rotation={[-Math.PI / 2, 0, -1.885]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_225'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.518, 6.839, 46.576]} rotation={[-Math.PI / 2, 0, -1.885]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_226.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.54, 6.856, 46.645]} rotation={[-Math.PI / 2, 0, -1.874]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_226'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.531, 6.839, 46.615]} rotation={[-Math.PI / 2, 0, -1.874]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_227.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.552, 6.856, 46.684]} rotation={[-Math.PI / 2, 0, -1.863]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_227'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.543, 6.839, 46.655]} rotation={[-Math.PI / 2, 0, -1.863]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_228.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.563, 6.856, 46.724]} rotation={[-Math.PI / 2, 0, -1.852]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_228'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.555, 6.839, 46.694]} rotation={[-Math.PI / 2, 0, -1.852]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_229.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.574, 6.856, 46.763]} rotation={[-Math.PI / 2, 0, -1.841]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_229'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.566, 6.839, 46.733]} rotation={[-Math.PI / 2, 0, -1.841]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_230.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.585, 6.856, 46.803]} rotation={[-Math.PI / 2, 0, -1.829]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_230'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.577, 6.839, 46.773]} rotation={[-Math.PI / 2, 0, -1.829]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_231.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.595, 6.856, 46.842]} rotation={[-Math.PI / 2, 0, -1.818]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_231'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.587, 6.839, 46.812]} rotation={[-Math.PI / 2, 0, -1.818]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_232.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.605, 6.856, 46.882]} rotation={[-Math.PI / 2, 0, -1.807]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_232'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.597, 6.839, 46.852]} rotation={[-Math.PI / 2, 0, -1.807]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_233.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.614, 6.856, 46.922]} rotation={[-Math.PI / 2, 0, -1.796]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_233'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.607, 6.839, 46.892]} rotation={[-Math.PI / 2, 0, -1.796]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_234.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.623, 6.856, 46.962]} rotation={[-Math.PI / 2, 0, -1.785]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_234'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.616, 6.839, 46.932]} rotation={[-Math.PI / 2, 0, -1.785]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_235.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.631, 6.856, 47.002]} rotation={[-Math.PI / 2, 0, -1.774]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_235'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.625, 6.839, 46.972]} rotation={[-Math.PI / 2, 0, -1.774]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_236.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.639, 6.856, 47.043]} rotation={[-Math.PI / 2, 0, -1.763]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_236'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.633, 6.839, 47.012]} rotation={[-Math.PI / 2, 0, -1.763]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_237.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.647, 6.856, 47.083]} rotation={[-Math.PI / 2, 0, -1.752]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_237'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.641, 6.839, 47.053]} rotation={[-Math.PI / 2, 0, -1.752]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_238.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.654, 6.856, 47.123]} rotation={[-Math.PI / 2, 0, -1.741]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_238'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.649, 6.839, 47.093]} rotation={[-Math.PI / 2, 0, -1.741]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_239.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.66, 6.856, 47.164]} rotation={[-Math.PI / 2, 0, -1.73]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_239'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.656, 6.839, 47.133]} rotation={[-Math.PI / 2, 0, -1.73]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_240.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.667, 6.856, 47.205]} rotation={[-Math.PI / 2, 0, -1.719]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_240'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.662, 6.839, 47.174]} rotation={[-Math.PI / 2, 0, -1.719]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_241.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.672, 6.856, 47.245]} rotation={[-Math.PI / 2, 0, -1.708]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_241'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.668, 6.839, 47.214]} rotation={[-Math.PI / 2, 0, -1.708]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_242.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.678, 6.856, 47.286]} rotation={[-Math.PI / 2, 0, -1.697]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_242'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.674, 6.839, 47.255]} rotation={[-Math.PI / 2, 0, -1.697]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_243.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.682, 6.856, 47.327]} rotation={[-Math.PI / 2, 0, -1.686]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_243'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.679, 6.839, 47.296]} rotation={[-Math.PI / 2, 0, -1.686]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_244.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.687, 6.856, 47.367]} rotation={[-Math.PI / 2, 0, -1.675]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_244'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.684, 6.839, 47.336]} rotation={[-Math.PI / 2, 0, -1.675]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_245.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.691, 6.856, 47.408]} rotation={[-Math.PI / 2, 0, -1.664]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_245'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.688, 6.839, 47.377]} rotation={[-Math.PI / 2, 0, -1.664]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_246.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.694, 6.856, 47.449]} rotation={[-Math.PI / 2, 0, -1.653]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_246'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.692, 6.839, 47.418]} rotation={[-Math.PI / 2, 0, -1.653]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_247.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.697, 6.856, 47.49]} rotation={[-Math.PI / 2, 0, -1.642]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_247'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.695, 6.839, 47.459]} rotation={[-Math.PI / 2, 0, -1.642]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_248.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.7, 6.856, 47.531]} rotation={[-Math.PI / 2, 0, -1.631]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_248'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.698, 6.839, 47.5]} rotation={[-Math.PI / 2, 0, -1.631]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_249.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.702, 6.856, 47.572]} rotation={[-Math.PI / 2, 0, -1.62]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_249'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.701, 6.839, 47.541]} rotation={[-Math.PI / 2, 0, -1.62]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_250.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.704, 6.856, 47.613]} rotation={[-Math.PI / 2, 0, -1.609]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_250'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.703, 6.839, 47.582]} rotation={[-Math.PI / 2, 0, -1.609]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_251.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.705, 6.856, 47.654]} rotation={[-Math.PI / 2, 0, -1.598]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_251'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.704, 6.839, 47.623]} rotation={[-Math.PI / 2, 0, -1.598]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_252.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.706, 6.856, 47.695]} rotation={[-Math.PI / 2, 0, -1.587]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_252'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.705, 6.839, 47.664]} rotation={[-Math.PI / 2, 0, -1.587]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_253.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.706, 6.856, 47.736]} rotation={[-Math.PI / 2, 0, -1.576]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_253'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.706, 6.839, 47.705]} rotation={[-Math.PI / 2, 0, -1.576]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_254.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.706, 6.856, 47.777]} rotation={[-Math.PI / 2, 0, -1.565]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_254'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.706, 6.839, 47.746]} rotation={[-Math.PI / 2, 0, -1.565]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_255.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.705, 6.856, 47.818]} rotation={[-Math.PI / 2, 0, -1.554]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_255'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.706, 6.839, 47.787]} rotation={[-Math.PI / 2, 0, -1.554]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_256.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.704, 6.856, 47.859]} rotation={[-Math.PI / 2, 0, -1.543]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_256'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.705, 6.839, 47.828]} rotation={[-Math.PI / 2, 0, -1.543]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_257.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.703, 6.856, 47.9]} rotation={[-Math.PI / 2, 0, -1.532]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_257'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.704, 6.839, 47.869]} rotation={[-Math.PI / 2, 0, -1.532]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_258.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.701, 6.856, 47.941]} rotation={[-Math.PI / 2, 0, -1.521]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_258'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.702, 6.839, 47.91]} rotation={[-Math.PI / 2, 0, -1.521]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_259.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.698, 6.856, 47.982]} rotation={[-Math.PI / 2, 0, -1.51]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_259'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.7, 6.839, 47.951]} rotation={[-Math.PI / 2, 0, -1.51]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_260.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.696, 6.856, 48.023]} rotation={[-Math.PI / 2, 0, -1.499]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_260'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.698, 6.839, 47.992]} rotation={[-Math.PI / 2, 0, -1.499]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_261.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.692, 6.856, 48.064]} rotation={[-Math.PI / 2, 0, -1.488]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_261'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.695, 6.839, 48.033]} rotation={[-Math.PI / 2, 0, -1.488]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_262.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.689, 6.856, 48.104]} rotation={[-Math.PI / 2, 0, -1.477]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_262'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.692, 6.839, 48.074]} rotation={[-Math.PI / 2, 0, -1.477]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_263.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.684, 6.856, 48.145]} rotation={[-Math.PI / 2, 0, -1.466]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_263'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.688, 6.839, 48.114]} rotation={[-Math.PI / 2, 0, -1.466]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_264.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.68, 6.856, 48.186]} rotation={[-Math.PI / 2, 0, -1.455]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_264'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.683, 6.839, 48.155]} rotation={[-Math.PI / 2, 0, -1.455]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_265.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.675, 6.856, 48.227]} rotation={[-Math.PI / 2, 0, -1.444]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_265'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.679, 6.839, 48.196]} rotation={[-Math.PI / 2, 0, -1.444]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_266.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.669, 6.856, 48.267]} rotation={[-Math.PI / 2, 0, -1.433]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_266'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.673, 6.839, 48.237]} rotation={[-Math.PI / 2, 0, -1.433]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_267.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.663, 6.856, 48.308]} rotation={[-Math.PI / 2, 0, -1.422]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_267'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.668, 6.839, 48.277]} rotation={[-Math.PI / 2, 0, -1.422]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_268.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.657, 6.856, 48.348]} rotation={[-Math.PI / 2, 0, -1.411]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_268'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.662, 6.839, 48.318]} rotation={[-Math.PI / 2, 0, -1.411]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_269.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.65, 6.856, 48.389]} rotation={[-Math.PI / 2, 0, -1.4]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_269'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.655, 6.839, 48.358]} rotation={[-Math.PI / 2, 0, -1.4]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_270.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.643, 6.856, 48.429]} rotation={[-Math.PI / 2, 0, -1.389]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_270'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.648, 6.839, 48.399]} rotation={[-Math.PI / 2, 0, -1.389]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_271.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.635, 6.856, 48.47]} rotation={[-Math.PI / 2, 0, -1.378]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_271'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.641, 6.839, 48.439]} rotation={[-Math.PI / 2, 0, -1.378]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_272.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.627, 6.856, 48.51]} rotation={[-Math.PI / 2, 0, -1.367]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_272'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.633, 6.839, 48.479]} rotation={[-Math.PI / 2, 0, -1.367]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_273.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.618, 6.856, 48.55]} rotation={[-Math.PI / 2, 0, -1.355]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_273'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.625, 6.839, 48.519]} rotation={[-Math.PI / 2, 0, -1.355]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_274.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.609, 6.856, 48.59]} rotation={[-Math.PI / 2, 0, -1.344]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_274'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.616, 6.839, 48.56]} rotation={[-Math.PI / 2, 0, -1.344]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_275.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.599, 6.856, 48.63]} rotation={[-Math.PI / 2, 0, -1.333]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_275'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.607, 6.839, 48.6]} rotation={[-Math.PI / 2, 0, -1.333]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_276.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.589, 6.856, 48.669]} rotation={[-Math.PI / 2, 0, -1.322]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_276'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.597, 6.839, 48.639]} rotation={[-Math.PI / 2, 0, -1.322]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_277.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.579, 6.856, 48.709]} rotation={[-Math.PI / 2, 0, -1.311]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_277'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.587, 6.839, 48.679]} rotation={[-Math.PI / 2, 0, -1.311]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_278.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.568, 6.856, 48.749]} rotation={[-Math.PI / 2, 0, -1.3]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_278'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.576, 6.839, 48.719]} rotation={[-Math.PI / 2, 0, -1.3]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_279.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.557, 6.856, 48.788]} rotation={[-Math.PI / 2, 0, -1.289]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_279'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.565, 6.839, 48.758]} rotation={[-Math.PI / 2, 0, -1.289]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_280.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.545, 6.856, 48.827]} rotation={[-Math.PI / 2, 0, -1.278]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_280'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.554, 6.839, 48.798]} rotation={[-Math.PI / 2, 0, -1.278]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_281.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.533, 6.856, 48.867]} rotation={[-Math.PI / 2, 0, -1.267]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_281'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.542, 6.839, 48.837]} rotation={[-Math.PI / 2, 0, -1.267]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_282.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.52, 6.856, 48.906]} rotation={[-Math.PI / 2, 0, -1.256]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_282'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.53, 6.839, 48.876]} rotation={[-Math.PI / 2, 0, -1.256]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_283.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.507, 6.856, 48.945]} rotation={[-Math.PI / 2, 0, -1.245]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_283'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.517, 6.839, 48.915]} rotation={[-Math.PI / 2, 0, -1.245]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_284.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.494, 6.856, 48.983]} rotation={[-Math.PI / 2, 0, -1.234]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_284'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.466, 6.839, 46.535]} rotation={[-Math.PI / 2, 0, 1.907]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_285.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.48, 6.856, 49.022]} rotation={[-Math.PI / 2, 0, -1.223]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_285'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.491, 6.839, 48.993]} rotation={[-Math.PI / 2, 0, -1.223]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_286.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.466, 6.856, 49.06]} rotation={[-Math.PI / 2, 0, -1.212]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_286'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.477, 6.839, 49.031]} rotation={[-Math.PI / 2, 0, -1.212]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_287.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.451, 6.856, 49.099]} rotation={[-Math.PI / 2, 0, -1.201]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_287'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.462, 6.839, 49.07]} rotation={[-Math.PI / 2, 0, -1.201]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_288.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.436, 6.856, 49.137]} rotation={[-Math.PI / 2, 0, -1.19]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_288'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.447, 6.839, 49.108]} rotation={[-Math.PI / 2, 0, -1.19]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_289.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.42, 6.856, 49.175]} rotation={[-Math.PI / 2, 0, -1.179]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_289'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.432, 6.839, 49.146]} rotation={[-Math.PI / 2, 0, -1.179]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_290.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.404, 6.856, 49.213]} rotation={[-Math.PI / 2, 0, -1.168]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_290'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.416, 6.839, 49.184]} rotation={[-Math.PI / 2, 0, -1.168]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_291.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.388, 6.856, 49.25]} rotation={[-Math.PI / 2, 0, -1.157]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_291'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.4, 6.839, 49.222]} rotation={[-Math.PI / 2, 0, -1.157]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_292.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.371, 6.856, 49.288]} rotation={[-Math.PI / 2, 0, -1.146]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_292'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.384, 6.839, 49.259]} rotation={[-Math.PI / 2, 0, -1.146]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_293.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.354, 6.856, 49.325]} rotation={[-Math.PI / 2, 0, -1.135]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_293'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.367, 6.839, 49.297]} rotation={[-Math.PI / 2, 0, -1.135]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_294.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.336, 6.856, 49.362]} rotation={[-Math.PI / 2, 0, -1.124]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_294'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.35, 6.839, 49.334]} rotation={[-Math.PI / 2, 0, -1.124]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_295.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.318, 6.856, 49.399]} rotation={[-Math.PI / 2, 0, -1.113]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_295'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.332, 6.839, 49.371]} rotation={[-Math.PI / 2, 0, -1.113]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_296.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.3, 6.856, 49.435]} rotation={[-Math.PI / 2, 0, -1.102]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_296'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.314, 6.839, 49.408]} rotation={[-Math.PI / 2, 0, -1.102]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_297.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.281, 6.856, 49.472]} rotation={[-Math.PI / 2, 0, -1.091]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_297'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.295, 6.839, 49.444]} rotation={[-Math.PI / 2, 0, -1.091]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_298.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.262, 6.856, 49.508]} rotation={[-Math.PI / 2, 0, -1.08]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_298'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.276, 6.839, 49.481]} rotation={[-Math.PI / 2, 0, -1.08]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_299.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.242, 6.856, 49.544]} rotation={[-Math.PI / 2, 0, -1.069]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_299'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.257, 6.839, 49.517]} rotation={[-Math.PI / 2, 0, -1.069]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_300.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.222, 6.856, 49.58]} rotation={[-Math.PI / 2, 0, -1.058]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_300'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.237, 6.839, 49.553]} rotation={[-Math.PI / 2, 0, -1.058]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_301.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.202, 6.856, 49.615]} rotation={[-Math.PI / 2, 0, -1.047]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_301'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.217, 6.839, 49.588]} rotation={[-Math.PI / 2, 0, -1.047]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_302.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.181, 6.856, 49.651]} rotation={[-Math.PI / 2, 0, -1.036]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_302'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.197, 6.839, 49.624]} rotation={[-Math.PI / 2, 0, -1.036]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_303.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.16, 6.856, 49.686]} rotation={[-Math.PI / 2, 0, -1.025]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_303'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.176, 6.839, 49.659]} rotation={[-Math.PI / 2, 0, -1.025]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_304.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.138, 6.856, 49.721]} rotation={[-Math.PI / 2, 0, -1.014]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_304'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.154, 6.839, 49.694]} rotation={[-Math.PI / 2, 0, -1.014]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_305.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.116, 6.856, 49.755]} rotation={[-Math.PI / 2, 0, -1.003]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_305'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.133, 6.839, 49.729]} rotation={[-Math.PI / 2, 0, -1.003]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_306.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.094, 6.856, 49.79]} rotation={[-Math.PI / 2, 0, -0.992]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_306'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.111, 6.839, 49.764]} rotation={[-Math.PI / 2, 0, -0.992]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_307.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.071, 6.856, 49.824]} rotation={[-Math.PI / 2, 0, -0.981]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_307'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.088, 6.839, 49.798]} rotation={[-Math.PI / 2, 0, -0.981]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_308.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.048, 6.856, 49.858]} rotation={[-Math.PI / 2, 0, -0.97]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_308'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.065, 6.839, 49.832]} rotation={[-Math.PI / 2, 0, -0.97]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_309.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.024, 6.856, 49.891]} rotation={[-Math.PI / 2, 0, -0.959]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_309'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.042, 6.839, 49.866]} rotation={[-Math.PI / 2, 0, -0.959]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_310.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.001, 6.856, 49.925]} rotation={[-Math.PI / 2, 0, -0.948]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_310'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.019, 6.839, 49.9]} rotation={[-Math.PI / 2, 0, -0.948]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_311.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.976, 6.856, 49.958]} rotation={[-Math.PI / 2, 0, -0.937]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_311'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.995, 6.839, 49.933]} rotation={[-Math.PI / 2, 0, -0.937]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_312.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.952, 6.856, 49.991]} rotation={[-Math.PI / 2, 0, -0.926]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_312'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.97, 6.839, 49.966]} rotation={[-Math.PI / 2, 0, -0.926]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_313.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.927, 6.856, 50.023]} rotation={[-Math.PI / 2, 0, -0.915]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_313'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.946, 6.839, 49.999]} rotation={[-Math.PI / 2, 0, -0.915]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_314.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.902, 6.856, 50.056]} rotation={[-Math.PI / 2, 0, -0.904]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_314'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.921, 6.839, 50.031]} rotation={[-Math.PI / 2, 0, -0.904]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_315.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.876, 6.856, 50.088]} rotation={[-Math.PI / 2, 0, -0.893]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_315'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.895, 6.839, 50.063]} rotation={[-Math.PI / 2, 0, -0.893]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_316.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.85, 6.856, 50.119]} rotation={[-Math.PI / 2, 0, -0.882]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_316'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.87, 6.839, 50.095]} rotation={[-Math.PI / 2, 0, -0.882]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_317.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.824, 6.856, 50.151]} rotation={[-Math.PI / 2, 0, -0.87]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_317'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.844, 6.839, 50.127]} rotation={[-Math.PI / 2, 0, -0.87]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_318.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.797, 6.856, 50.182]} rotation={[-Math.PI / 2, 0, -0.859]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_318'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.817, 6.839, 50.158]} rotation={[-Math.PI / 2, 0, -0.859]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_319.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.77, 6.856, 50.213]} rotation={[-Math.PI / 2, 0, -0.848]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_319'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.79, 6.839, 50.189]} rotation={[-Math.PI / 2, 0, -0.848]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_320.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.742, 6.856, 50.243]} rotation={[-Math.PI / 2, 0, -0.837]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_320'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.763, 6.839, 50.22]} rotation={[-Math.PI / 2, 0, -0.837]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_321.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.715, 6.856, 50.274]} rotation={[-Math.PI / 2, 0, -0.826]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_321'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.736, 6.839, 50.251]} rotation={[-Math.PI / 2, 0, -0.826]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_322.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.687, 6.856, 50.303]} rotation={[-Math.PI / 2, 0, -0.815]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_322'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.708, 6.839, 50.281]} rotation={[-Math.PI / 2, 0, -0.815]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_323.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.658, 6.856, 50.333]} rotation={[-Math.PI / 2, 0, -0.804]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_323'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.68, 6.839, 50.311]} rotation={[-Math.PI / 2, 0, -0.804]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_324.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.63, 6.856, 50.362]} rotation={[-Math.PI / 2, 0, -0.793]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_324'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.651, 6.839, 50.34]} rotation={[-Math.PI / 2, 0, -0.793]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_325.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.601, 6.856, 50.391]} rotation={[-Math.PI / 2, 0, -0.782]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_325'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.623, 6.839, 50.37]} rotation={[-Math.PI / 2, 0, -0.782]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_326.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.571, 6.856, 50.42]} rotation={[-Math.PI / 2, 0, -0.771]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_326'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.594, 6.839, 50.398]} rotation={[-Math.PI / 2, 0, -0.771]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_327.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.542, 6.856, 50.448]} rotation={[-Math.PI / 2, 0, -0.76]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_327'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.564, 6.839, 50.427]} rotation={[-Math.PI / 2, 0, -0.76]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_328.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.512, 6.856, 50.476]} rotation={[-Math.PI / 2, 0, -0.749]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_328'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.534, 6.839, 50.455]} rotation={[-Math.PI / 2, 0, -0.749]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_329.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.481, 6.856, 50.504]} rotation={[-Math.PI / 2, 0, -0.738]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_329'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.504, 6.839, 50.483]} rotation={[-Math.PI / 2, 0, -0.738]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_330.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.451, 6.856, 50.531]} rotation={[-Math.PI / 2, 0, -0.727]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_330'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.474, 6.839, 50.511]} rotation={[-Math.PI / 2, 0, -0.727]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_331.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.42, 6.856, 50.558]} rotation={[-Math.PI / 2, 0, -0.716]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_331'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.443, 6.839, 50.538]} rotation={[-Math.PI / 2, 0, -0.716]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_332.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.389, 6.856, 50.585]} rotation={[-Math.PI / 2, 0, -0.705]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_332'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.412, 6.839, 50.565]} rotation={[-Math.PI / 2, 0, -0.705]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_333.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.357, 6.856, 50.611]} rotation={[-Math.PI / 2, 0, -0.694]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_333'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.381, 6.839, 50.592]} rotation={[-Math.PI / 2, 0, -0.694]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_334.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.326, 6.856, 50.637]} rotation={[-Math.PI / 2, 0, -0.683]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_334'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.35, 6.839, 50.618]} rotation={[-Math.PI / 2, 0, -0.683]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_335.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.294, 6.856, 50.663]} rotation={[-Math.PI / 2, 0, -0.672]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_335'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.318, 6.839, 50.644]} rotation={[-Math.PI / 2, 0, -0.672]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_336.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.261, 6.856, 50.688]} rotation={[-Math.PI / 2, 0, -0.661]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_336'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.286, 6.839, 50.669]} rotation={[-Math.PI / 2, 0, -0.661]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_337.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.229, 6.856, 50.713]} rotation={[-Math.PI / 2, 0, -0.65]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_337'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.253, 6.839, 50.694]} rotation={[-Math.PI / 2, 0, -0.65]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_338.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.196, 6.856, 50.738]} rotation={[-Math.PI / 2, 0, -0.639]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_338'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.221, 6.839, 50.719]} rotation={[-Math.PI / 2, 0, -0.639]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_339.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.163, 6.856, 50.762]} rotation={[-Math.PI / 2, 0, -0.628]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_339'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.188, 6.839, 50.744]} rotation={[-Math.PI / 2, 0, -0.628]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_340.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.129, 6.856, 50.786]} rotation={[-Math.PI / 2, 0, -0.617]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_340'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.155, 6.839, 50.768]} rotation={[-Math.PI / 2, 0, -0.617]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_341.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.096, 6.856, 50.809]} rotation={[-Math.PI / 2, 0, -0.606]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_341'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.121, 6.839, 50.792]} rotation={[-Math.PI / 2, 0, -0.606]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_342.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.062, 6.856, 50.832]} rotation={[-Math.PI / 2, 0, -0.595]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_342'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.087, 6.839, 50.815]} rotation={[-Math.PI / 2, 0, -0.595]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_343.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.028, 6.856, 50.855]} rotation={[-Math.PI / 2, 0, -0.584]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_343'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.053, 6.839, 50.838]} rotation={[-Math.PI / 2, 0, -0.584]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_344.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.993, 6.856, 50.877]} rotation={[-Math.PI / 2, 0, -0.573]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_344'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.019, 6.839, 50.861]} rotation={[-Math.PI / 2, 0, -0.573]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_345.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.959, 6.856, 50.899]} rotation={[-Math.PI / 2, 0, -0.562]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_345'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.985, 6.839, 50.883]} rotation={[-Math.PI / 2, 0, -0.562]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_346.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.924, 6.856, 50.921]} rotation={[-Math.PI / 2, 0, -0.551]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_346'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.95, 6.839, 50.905]} rotation={[-Math.PI / 2, 0, -0.551]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_347.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.888, 6.856, 50.942]} rotation={[-Math.PI / 2, 0, -0.54]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_347'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.915, 6.839, 50.926]} rotation={[-Math.PI / 2, 0, -0.54]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_348.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.853, 6.856, 50.963]} rotation={[-Math.PI / 2, 0, -0.529]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_348'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.88, 6.839, 50.947]} rotation={[-Math.PI / 2, 0, -0.529]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_349.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.818, 6.856, 50.983]} rotation={[-Math.PI / 2, 0, -0.518]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_349'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.844, 6.839, 50.968]} rotation={[-Math.PI / 2, 0, -0.518]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_350.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.782, 6.856, 51.003]} rotation={[-Math.PI / 2, 0, -0.507]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_350'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.809, 6.839, 50.988]} rotation={[-Math.PI / 2, 0, -0.507]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_351.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.746, 6.856, 51.023]} rotation={[-Math.PI / 2, 0, -0.496]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_351'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.773, 6.839, 51.008]} rotation={[-Math.PI / 2, 0, -0.496]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_352.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.709, 6.856, 51.042]} rotation={[-Math.PI / 2, 0, -0.485]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_352'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.737, 6.839, 51.028]} rotation={[-Math.PI / 2, 0, -0.485]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_353.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.673, 6.856, 51.061]} rotation={[-Math.PI / 2, 0, -0.474]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_353'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.701, 6.839, 51.047]} rotation={[-Math.PI / 2, 0, -0.474]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_354.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.636, 6.856, 51.079]} rotation={[-Math.PI / 2, 0, -0.463]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_354'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.664, 6.839, 51.065]} rotation={[-Math.PI / 2, 0, -0.463]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_355.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.599, 6.856, 51.097]} rotation={[-Math.PI / 2, 0, -0.452]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_355'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.627, 6.839, 51.084]} rotation={[-Math.PI / 2, 0, -0.452]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_356.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.562, 6.856, 51.115]} rotation={[-Math.PI / 2, 0, -0.441]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_356'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.591, 6.839, 51.102]} rotation={[-Math.PI / 2, 0, -0.441]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_357.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.525, 6.856, 51.132]} rotation={[-Math.PI / 2, 0, -0.43]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_357'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.553, 6.839, 51.119]} rotation={[-Math.PI / 2, 0, -0.43]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_358.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.488, 6.856, 51.149]} rotation={[-Math.PI / 2, 0, -0.419]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_358'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.516, 6.839, 51.136]} rotation={[-Math.PI / 2, 0, -0.419]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_359.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.45, 6.856, 51.165]} rotation={[-Math.PI / 2, 0, -0.408]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_359'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.479, 6.839, 51.153]} rotation={[-Math.PI / 2, 0, -0.408]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_360.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.412, 6.856, 51.181]} rotation={[-Math.PI / 2, 0, -0.396]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_360'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.441, 6.839, 51.169]} rotation={[-Math.PI / 2, 0, -0.396]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_361.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.374, 6.856, 51.197]} rotation={[-Math.PI / 2, 0, -0.385]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_361'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.403, 6.839, 51.185]} rotation={[-Math.PI / 2, 0, -0.385]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_362.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.336, 6.856, 51.212]} rotation={[-Math.PI / 2, 0, -0.374]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_362'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.365, 6.839, 51.2]} rotation={[-Math.PI / 2, 0, -0.374]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_363.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.298, 6.856, 51.226]} rotation={[-Math.PI / 2, 0, -0.363]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_363'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.327, 6.839, 51.215]} rotation={[-Math.PI / 2, 0, -0.363]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_364.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.259, 6.856, 51.241]} rotation={[-Math.PI / 2, 0, -0.352]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_364'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.289, 6.839, 51.23]} rotation={[-Math.PI / 2, 0, -0.352]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_365.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.221, 6.856, 51.255]} rotation={[-Math.PI / 2, 0, -0.341]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_365'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.25, 6.839, 51.244]} rotation={[-Math.PI / 2, 0, -0.341]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_366.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.182, 6.856, 51.268]} rotation={[-Math.PI / 2, 0, -0.33]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_366'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.211, 6.839, 51.258]} rotation={[-Math.PI / 2, 0, -0.33]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_367.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.143, 6.856, 51.281]} rotation={[-Math.PI / 2, 0, -0.319]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_367'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.173, 6.839, 51.271]} rotation={[-Math.PI / 2, 0, -0.319]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_368.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.104, 6.856, 51.294]} rotation={[-Math.PI / 2, 0, -0.308]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_368'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.134, 6.839, 51.284]} rotation={[-Math.PI / 2, 0, -0.308]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_369.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.065, 6.856, 51.306]} rotation={[-Math.PI / 2, 0, -0.297]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_369'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.095, 6.839, 51.297]} rotation={[-Math.PI / 2, 0, -0.297]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_370.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.026, 6.856, 51.317]} rotation={[-Math.PI / 2, 0, -0.286]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_370'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.055, 6.839, 51.309]} rotation={[-Math.PI / 2, 0, -0.286]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_371.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.986, 6.856, 51.329]} rotation={[-Math.PI / 2, 0, -0.275]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_371'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.016, 6.839, 51.32]} rotation={[-Math.PI / 2, 0, -0.275]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_372.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.947, 6.856, 51.339]} rotation={[-Math.PI / 2, 0, -0.264]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_372'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.977, 6.839, 51.331]} rotation={[-Math.PI / 2, 0, -0.264]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_373.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.907, 6.856, 51.35]} rotation={[-Math.PI / 2, 0, -0.253]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_373'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.937, 6.839, 51.342]} rotation={[-Math.PI / 2, 0, -0.253]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_374.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.867, 6.856, 51.36]} rotation={[-Math.PI / 2, 0, -0.242]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_374'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.897, 6.839, 51.352]} rotation={[-Math.PI / 2, 0, -0.242]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_375.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.827, 6.856, 51.369]} rotation={[-Math.PI / 2, 0, -0.231]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_375'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.857, 6.839, 51.362]} rotation={[-Math.PI / 2, 0, -0.231]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_376.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.787, 6.856, 51.378]} rotation={[-Math.PI / 2, 0, -0.22]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_376'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.818, 6.839, 51.372]} rotation={[-Math.PI / 2, 0, -0.22]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_377.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.747, 6.856, 51.387]} rotation={[-Math.PI / 2, 0, -0.209]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_377'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.777, 6.839, 51.38]} rotation={[-Math.PI / 2, 0, -0.209]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_378.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.707, 6.856, 51.395]} rotation={[-Math.PI / 2, 0, -0.198]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_378'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.737, 6.839, 51.389]} rotation={[-Math.PI / 2, 0, -0.198]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_379.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.667, 6.856, 51.403]} rotation={[-Math.PI / 2, 0, -0.187]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_379'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.697, 6.839, 51.397]} rotation={[-Math.PI / 2, 0, -0.187]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_380.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.626, 6.856, 51.41]} rotation={[-Math.PI / 2, 0, -0.176]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_380'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.657, 6.839, 51.405]} rotation={[-Math.PI / 2, 0, -0.176]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_381.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.586, 6.856, 51.417]} rotation={[-Math.PI / 2, 0, -0.165]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_381'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.616, 6.839, 51.412]} rotation={[-Math.PI / 2, 0, -0.165]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_382.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.545, 6.856, 51.423]} rotation={[-Math.PI / 2, 0, -0.154]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_382'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.576, 6.839, 51.419]} rotation={[-Math.PI / 2, 0, -0.154]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_383.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.505, 6.856, 51.429]} rotation={[-Math.PI / 2, 0, -0.143]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_383'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.535, 6.839, 51.425]} rotation={[-Math.PI / 2, 0, -0.143]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_384.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.464, 6.856, 51.435]} rotation={[-Math.PI / 2, 0, -0.132]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_384'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.495, 6.839, 51.431]} rotation={[-Math.PI / 2, 0, -0.132]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_385.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.423, 6.856, 51.44]} rotation={[-Math.PI / 2, 0, -0.121]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_385'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.454, 6.839, 51.436]} rotation={[-Math.PI / 2, 0, -0.121]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_386.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.383, 6.856, 51.445]} rotation={[-Math.PI / 2, 0, -0.11]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_386'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.413, 6.839, 51.441]} rotation={[-Math.PI / 2, 0, -0.11]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_387.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.342, 6.856, 51.449]} rotation={[-Math.PI / 2, 0, -0.099]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_387'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.373, 6.839, 51.446]} rotation={[-Math.PI / 2, 0, -0.099]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_388.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.301, 6.856, 51.452]} rotation={[-Math.PI / 2, 0, -0.088]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_388'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.332, 6.839, 51.45]} rotation={[-Math.PI / 2, 0, -0.088]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_389.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.26, 6.856, 51.456]} rotation={[-Math.PI / 2, 0, -0.077]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_389'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.291, 6.839, 51.453]} rotation={[-Math.PI / 2, 0, -0.077]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_390.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.219, 6.856, 51.458]} rotation={[-Math.PI / 2, 0, -0.066]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_390'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.25, 6.839, 51.456]} rotation={[-Math.PI / 2, 0, -0.066]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_391.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.178, 6.856, 51.461]} rotation={[-Math.PI / 2, 0, -0.055]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_391'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.209, 6.839, 51.459]} rotation={[-Math.PI / 2, 0, -0.055]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_392.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.137, 6.856, 51.463]} rotation={[-Math.PI / 2, 0, -0.044]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_392'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.168, 6.839, 51.461]} rotation={[-Math.PI / 2, 0, -0.044]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_393.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.096, 6.856, 51.464]} rotation={[-Math.PI / 2, 0, -0.033]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_393'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.127, 6.839, 51.463]} rotation={[-Math.PI / 2, 0, -0.033]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_394.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.055, 6.856, 51.465]} rotation={[-Math.PI / 2, 0, -0.022]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_394'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.086, 6.839, 51.465]} rotation={[-Math.PI / 2, 0, -0.022]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_395.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.014, 6.856, 51.466]} rotation={[-Math.PI / 2, 0, -0.011]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_395'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.045, 6.839, 51.465]} rotation={[-Math.PI / 2, 0, -0.011]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_396.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.973, 6.856, 51.466]} rotation={[-Math.PI / 2, 0, 0]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_396'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.004, 6.839, 51.466]} rotation={[-Math.PI / 2, 0, 0]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_397.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.932, 6.856, 51.465]} rotation={[-Math.PI / 2, 0, 0.011]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_397'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.963, 6.839, 51.466]} rotation={[-Math.PI / 2, 0, 0.011]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_398.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.891, 6.856, 51.465]} rotation={[-Math.PI / 2, 0, 0.022]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_398'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.922, 6.839, 51.465]} rotation={[-Math.PI / 2, 0, 0.022]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_399.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.85, 6.856, 51.463]} rotation={[-Math.PI / 2, 0, 0.033]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_399'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.881, 6.839, 51.464]} rotation={[-Math.PI / 2, 0, 0.033]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_400.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.809, 6.856, 51.462]} rotation={[-Math.PI / 2, 0, 0.044]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_400'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.84, 6.839, 51.463]} rotation={[-Math.PI / 2, 0, 0.044]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_401.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.768, 6.856, 51.46]} rotation={[-Math.PI / 2, 0, 0.055]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_401'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.799, 6.839, 51.461]} rotation={[-Math.PI / 2, 0, 0.055]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_402.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.727, 6.856, 51.457]} rotation={[-Math.PI / 2, 0, 0.066]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_402'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.758, 6.839, 51.459]} rotation={[-Math.PI / 2, 0, 0.066]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_403.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.686, 6.856, 51.454]} rotation={[-Math.PI / 2, 0, 0.078]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_403'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.717, 6.839, 51.456]} rotation={[-Math.PI / 2, 0, 0.078]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_404.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.646, 6.856, 51.45]} rotation={[-Math.PI / 2, 0, 0.089]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_404'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.676, 6.839, 51.453]} rotation={[-Math.PI / 2, 0, 0.089]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_405.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.605, 6.856, 51.446]} rotation={[-Math.PI / 2, 0, 0.1]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_405'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.636, 6.839, 51.449]} rotation={[-Math.PI / 2, 0, 0.1]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_406.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.564, 6.856, 51.442]} rotation={[-Math.PI / 2, 0, 0.111]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_406'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.595, 6.839, 51.445]} rotation={[-Math.PI / 2, 0, 0.111]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_407.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.523, 6.856, 51.437]} rotation={[-Math.PI / 2, 0, 0.122]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_407'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.554, 6.839, 51.441]} rotation={[-Math.PI / 2, 0, 0.122]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_408.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.483, 6.856, 51.432]} rotation={[-Math.PI / 2, 0, 0.133]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_408'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.513, 6.839, 51.436]} rotation={[-Math.PI / 2, 0, 0.133]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_409.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.442, 6.856, 51.426]} rotation={[-Math.PI / 2, 0, 0.144]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_409'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.473, 6.839, 51.43]} rotation={[-Math.PI / 2, 0, 0.144]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_410.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.401, 6.856, 51.42]} rotation={[-Math.PI / 2, 0, 0.155]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_410'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.432, 6.839, 51.425]} rotation={[-Math.PI / 2, 0, 0.155]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_411.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.361, 6.856, 51.413]} rotation={[-Math.PI / 2, 0, 0.166]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_411'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.392, 6.839, 51.418]} rotation={[-Math.PI / 2, 0, 0.166]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_412.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.321, 6.856, 51.406]} rotation={[-Math.PI / 2, 0, 0.177]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_412'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.351, 6.839, 51.412]} rotation={[-Math.PI / 2, 0, 0.177]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_413.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.28, 6.856, 51.399]} rotation={[-Math.PI / 2, 0, 0.188]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_413'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.311, 6.839, 51.404]} rotation={[-Math.PI / 2, 0, 0.188]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_414.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.24, 6.856, 51.391]} rotation={[-Math.PI / 2, 0, 0.199]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_414'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.27, 6.839, 51.397]} rotation={[-Math.PI / 2, 0, 0.199]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_415.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.2, 6.856, 51.382]} rotation={[-Math.PI / 2, 0, 0.21]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_415'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.23, 6.839, 51.389]} rotation={[-Math.PI / 2, 0, 0.21]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_416.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.16, 6.856, 51.373]} rotation={[-Math.PI / 2, 0, 0.221]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_416'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.19, 6.839, 51.38]} rotation={[-Math.PI / 2, 0, 0.221]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_417.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.12, 6.856, 51.364]} rotation={[-Math.PI / 2, 0, 0.232]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_417'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.15, 6.839, 51.371]} rotation={[-Math.PI / 2, 0, 0.232]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_418.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.08, 6.856, 51.354]} rotation={[-Math.PI / 2, 0, 0.243]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_418'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.11, 6.839, 51.362]} rotation={[-Math.PI / 2, 0, 0.243]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_419.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.04, 6.856, 51.344]} rotation={[-Math.PI / 2, 0, 0.254]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_419'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.07, 6.839, 51.352]} rotation={[-Math.PI / 2, 0, 0.254]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_420.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.001, 6.856, 51.333]} rotation={[-Math.PI / 2, 0, 0.265]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_420'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.031, 6.839, 51.341]} rotation={[-Math.PI / 2, 0, 0.265]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_421.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.961, 6.856, 51.322]} rotation={[-Math.PI / 2, 0, 0.276]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_421'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.991, 6.839, 51.331]} rotation={[-Math.PI / 2, 0, 0.276]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_422.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.922, 6.856, 51.311]} rotation={[-Math.PI / 2, 0, 0.287]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_422'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.952, 6.839, 51.32]} rotation={[-Math.PI / 2, 0, 0.287]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_423.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.883, 6.856, 51.299]} rotation={[-Math.PI / 2, 0, 0.298]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_423'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.912, 6.839, 51.308]} rotation={[-Math.PI / 2, 0, 0.298]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_424.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.843, 6.856, 51.286]} rotation={[-Math.PI / 2, 0, 0.309]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_424'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.873, 6.839, 51.296]} rotation={[-Math.PI / 2, 0, 0.309]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_425.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.804, 6.856, 51.274]} rotation={[-Math.PI / 2, 0, 0.32]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_425'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.834, 6.839, 51.283]} rotation={[-Math.PI / 2, 0, 0.32]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_426.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.766, 6.856, 51.26]} rotation={[-Math.PI / 2, 0, 0.331]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_426'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.795, 6.839, 51.271]} rotation={[-Math.PI / 2, 0, 0.331]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_427.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.727, 6.856, 51.247]} rotation={[-Math.PI / 2, 0, 0.342]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_427'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.756, 6.839, 51.257]} rotation={[-Math.PI / 2, 0, 0.342]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_428.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.688, 6.856, 51.233]} rotation={[-Math.PI / 2, 0, 0.353]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_428'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.718, 6.839, 51.243]} rotation={[-Math.PI / 2, 0, 0.353]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_429.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.65, 6.856, 51.218]} rotation={[-Math.PI / 2, 0, 0.364]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_429'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.679, 6.839, 51.229]} rotation={[-Math.PI / 2, 0, 0.364]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_430.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.612, 6.856, 51.203]} rotation={[-Math.PI / 2, 0, 0.375]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_430'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.641, 6.839, 51.215]} rotation={[-Math.PI / 2, 0, 0.375]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_431.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.574, 6.856, 51.188]} rotation={[-Math.PI / 2, 0, 0.386]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_431'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.603, 6.839, 51.2]} rotation={[-Math.PI / 2, 0, 0.386]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_432.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.536, 6.856, 51.172]} rotation={[-Math.PI / 2, 0, 0.397]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_432'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.565, 6.839, 51.184]} rotation={[-Math.PI / 2, 0, 0.397]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_433.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.498, 6.856, 51.156]} rotation={[-Math.PI / 2, 0, 0.408]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_433'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.527, 6.839, 51.168]} rotation={[-Math.PI / 2, 0, 0.408]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_434.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.461, 6.856, 51.139]} rotation={[-Math.PI / 2, 0, 0.419]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_434'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.489, 6.839, 51.152]} rotation={[-Math.PI / 2, 0, 0.419]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_435.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.423, 6.856, 51.122]} rotation={[-Math.PI / 2, 0, 0.43]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_435'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.452, 6.839, 51.135]} rotation={[-Math.PI / 2, 0, 0.43]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_436.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.386, 6.856, 51.105]} rotation={[-Math.PI / 2, 0, 0.441]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_436'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.414, 6.839, 51.118]} rotation={[-Math.PI / 2, 0, 0.441]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_437.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.349, 6.856, 51.087]} rotation={[-Math.PI / 2, 0, 0.452]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_437'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.377, 6.839, 51.101]} rotation={[-Math.PI / 2, 0, 0.452]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_438.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.313, 6.856, 51.069]} rotation={[-Math.PI / 2, 0, 0.463]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_438'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.34, 6.839, 51.083]} rotation={[-Math.PI / 2, 0, 0.463]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_439.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.276, 6.856, 51.05]} rotation={[-Math.PI / 2, 0, 0.474]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_439'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.304, 6.839, 51.064]} rotation={[-Math.PI / 2, 0, 0.474]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_440.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.24, 6.856, 51.031]} rotation={[-Math.PI / 2, 0, 0.485]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_440'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.267, 6.839, 51.046]} rotation={[-Math.PI / 2, 0, 0.485]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_441.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.204, 6.856, 51.012]} rotation={[-Math.PI / 2, 0, 0.496]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_441'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.231, 6.839, 51.027]} rotation={[-Math.PI / 2, 0, 0.496]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_442.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.168, 6.856, 50.992]} rotation={[-Math.PI / 2, 0, 0.507]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_442'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.195, 6.839, 51.007]} rotation={[-Math.PI / 2, 0, 0.507]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_443.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.132, 6.856, 50.972]} rotation={[-Math.PI / 2, 0, 0.518]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_443'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.159, 6.839, 50.987]} rotation={[-Math.PI / 2, 0, 0.518]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_444.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.097, 6.856, 50.951]} rotation={[-Math.PI / 2, 0, 0.529]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_444'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.123, 6.839, 50.967]} rotation={[-Math.PI / 2, 0, 0.529]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_445.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.061, 6.856, 50.93]} rotation={[-Math.PI / 2, 0, 0.54]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_445'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.088, 6.839, 50.946]} rotation={[-Math.PI / 2, 0, 0.54]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_446.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.026, 6.856, 50.909]} rotation={[-Math.PI / 2, 0, 0.551]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_446'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.053, 6.839, 50.925]} rotation={[-Math.PI / 2, 0, 0.551]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_447.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.992, 6.856, 50.887]} rotation={[-Math.PI / 2, 0, 0.563]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_447'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.018, 6.839, 50.903]} rotation={[-Math.PI / 2, 0, 0.563]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_448.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.957, 6.856, 50.865]} rotation={[-Math.PI / 2, 0, 0.574]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_448'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.983, 6.839, 50.882]} rotation={[-Math.PI / 2, 0, 0.574]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_449.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.923, 6.856, 50.842]} rotation={[-Math.PI / 2, 0, 0.585]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_449'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.949, 6.839, 50.859]} rotation={[-Math.PI / 2, 0, 0.585]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_450.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.889, 6.856, 50.819]} rotation={[-Math.PI / 2, 0, 0.596]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_450'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.914, 6.839, 50.837]} rotation={[-Math.PI / 2, 0, 0.596]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_451.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.855, 6.856, 50.796]} rotation={[-Math.PI / 2, 0, 0.607]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_451'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.88, 6.839, 50.814]} rotation={[-Math.PI / 2, 0, 0.607]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_452.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.821, 6.856, 50.772]} rotation={[-Math.PI / 2, 0, 0.618]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_452'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.847, 6.839, 50.79]} rotation={[-Math.PI / 2, 0, 0.618]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_453.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.788, 6.856, 50.748]} rotation={[-Math.PI / 2, 0, 0.629]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_453'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.813, 6.839, 50.767]} rotation={[-Math.PI / 2, 0, 0.629]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_454.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.755, 6.856, 50.724]} rotation={[-Math.PI / 2, 0, 0.64]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_454'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.78, 6.839, 50.742]} rotation={[-Math.PI / 2, 0, 0.64]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_455.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.723, 6.856, 50.699]} rotation={[-Math.PI / 2, 0, 0.651]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_455'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.747, 6.839, 50.718]} rotation={[-Math.PI / 2, 0, 0.651]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_456.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.69, 6.856, 50.674]} rotation={[-Math.PI / 2, 0, 0.662]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_456'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.715, 6.839, 50.693]} rotation={[-Math.PI / 2, 0, 0.662]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_457.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.658, 6.856, 50.649]} rotation={[-Math.PI / 2, 0, 0.673]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_457'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.682, 6.839, 50.668]} rotation={[-Math.PI / 2, 0, 0.673]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_458.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.626, 6.856, 50.623]} rotation={[-Math.PI / 2, 0, 0.684]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_458'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.65, 6.839, 50.642]} rotation={[-Math.PI / 2, 0, 0.684]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_459.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.595, 6.856, 50.597]} rotation={[-Math.PI / 2, 0, 0.695]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_459'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.618, 6.839, 50.616]} rotation={[-Math.PI / 2, 0, 0.695]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_460.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.563, 6.856, 50.57]} rotation={[-Math.PI / 2, 0, 0.706]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_460'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.587, 6.839, 50.59]} rotation={[-Math.PI / 2, 0, 0.706]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_461.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.532, 6.856, 50.543]} rotation={[-Math.PI / 2, 0, 0.717]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_461'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.556, 6.839, 50.564]} rotation={[-Math.PI / 2, 0, 0.717]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_462.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.502, 6.856, 50.516]} rotation={[-Math.PI / 2, 0, 0.728]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_462'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.525, 6.839, 50.537]} rotation={[-Math.PI / 2, 0, 0.728]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_463.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.471, 6.856, 50.488]} rotation={[-Math.PI / 2, 0, 0.739]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_463'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.494, 6.839, 50.509]} rotation={[-Math.PI / 2, 0, 0.739]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_464.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.441, 6.856, 50.461]} rotation={[-Math.PI / 2, 0, 0.75]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_464'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.464, 6.839, 50.482]} rotation={[-Math.PI / 2, 0, 0.75]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_465.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.411, 6.856, 50.432]} rotation={[-Math.PI / 2, 0, 0.761]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_465'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.434, 6.839, 50.454]} rotation={[-Math.PI / 2, 0, 0.761]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_466.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.382, 6.856, 50.404]} rotation={[-Math.PI / 2, 0, 0.772]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_466'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.404, 6.839, 50.425]} rotation={[-Math.PI / 2, 0, 0.772]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_467.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.353, 6.856, 50.375]} rotation={[-Math.PI / 2, 0, 0.783]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_467'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.375, 6.839, 50.397]} rotation={[-Math.PI / 2, 0, 0.783]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_468.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.324, 6.856, 50.346]} rotation={[-Math.PI / 2, 0, 0.794]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_468'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.346, 6.839, 50.368]} rotation={[-Math.PI / 2, 0, 0.794]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_469.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.295, 6.856, 50.316]} rotation={[-Math.PI / 2, 0, 0.805]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_469'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.317, 6.839, 50.339]} rotation={[-Math.PI / 2, 0, 0.805]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_470.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.267, 6.856, 50.287]} rotation={[-Math.PI / 2, 0, 0.816]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_470'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.288, 6.839, 50.309]} rotation={[-Math.PI / 2, 0, 0.816]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_471.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.239, 6.856, 50.256]} rotation={[-Math.PI / 2, 0, 0.827]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_471'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.26, 6.839, 50.279]} rotation={[-Math.PI / 2, 0, 0.827]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_472.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.212, 6.856, 50.226]} rotation={[-Math.PI / 2, 0, 0.838]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_472'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.232, 6.839, 50.249]} rotation={[-Math.PI / 2, 0, 0.838]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_473.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.185, 6.856, 50.195]} rotation={[-Math.PI / 2, 0, 0.849]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_473'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.205, 6.839, 50.219]} rotation={[-Math.PI / 2, 0, 0.849]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_474.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.158, 6.856, 50.164]} rotation={[-Math.PI / 2, 0, 0.86]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_474'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.178, 6.839, 50.188]} rotation={[-Math.PI / 2, 0, 0.86]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_475.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.131, 6.856, 50.133]} rotation={[-Math.PI / 2, 0, 0.871]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_475'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.151, 6.839, 50.157]} rotation={[-Math.PI / 2, 0, 0.871]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_476.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.105, 6.856, 50.101]} rotation={[-Math.PI / 2, 0, 0.882]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_476'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.125, 6.839, 50.125]} rotation={[-Math.PI / 2, 0, 0.882]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_477.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.079, 6.856, 50.069]} rotation={[-Math.PI / 2, 0, 0.893]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_477'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.099, 6.839, 50.094]} rotation={[-Math.PI / 2, 0, 0.893]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_478.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.054, 6.856, 50.037]} rotation={[-Math.PI / 2, 0, 0.904]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_478'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.073, 6.839, 50.062]} rotation={[-Math.PI / 2, 0, 0.904]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_479.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.029, 6.856, 50.005]} rotation={[-Math.PI / 2, 0, 0.915]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_479'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.048, 6.839, 50.029]} rotation={[-Math.PI / 2, 0, 0.915]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_480.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.004, 6.856, 49.972]} rotation={[-Math.PI / 2, 0, 0.926]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_480'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.023, 6.839, 49.997]} rotation={[-Math.PI / 2, 0, 0.926]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_481.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.98, 6.856, 49.939]} rotation={[-Math.PI / 2, 0, 0.937]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_481'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.998, 6.839, 49.964]} rotation={[-Math.PI / 2, 0, 0.937]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_482.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.956, 6.856, 49.906]} rotation={[-Math.PI / 2, 0, 0.948]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_482'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.974, 6.839, 49.931]} rotation={[-Math.PI / 2, 0, 0.948]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_483.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.932, 6.856, 49.872]} rotation={[-Math.PI / 2, 0, 0.959]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_483'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.95, 6.839, 49.898]} rotation={[-Math.PI / 2, 0, 0.959]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_484.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.909, 6.856, 49.839]} rotation={[-Math.PI / 2, 0, 0.97]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_484'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.926, 6.839, 49.864]} rotation={[-Math.PI / 2, 0, 0.97]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_485.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.886, 6.856, 49.805]} rotation={[-Math.PI / 2, 0, 0.981]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_485'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.903, 6.839, 49.83]} rotation={[-Math.PI / 2, 0, 0.981]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_486.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.863, 6.856, 49.77]} rotation={[-Math.PI / 2, 0, 0.992]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_486'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.88, 6.839, 49.796]} rotation={[-Math.PI / 2, 0, 0.992]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_487.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.841, 6.856, 49.736]} rotation={[-Math.PI / 2, 0, 1.003]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_487'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.858, 6.839, 49.762]} rotation={[-Math.PI / 2, 0, 1.003]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_488.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.819, 6.856, 49.701]} rotation={[-Math.PI / 2, 0, 1.014]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_488'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.836, 6.839, 49.727]} rotation={[-Math.PI / 2, 0, 1.014]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_489.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.798, 6.856, 49.666]} rotation={[-Math.PI / 2, 0, 1.025]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_489'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.814, 6.839, 49.692]} rotation={[-Math.PI / 2, 0, 1.025]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_490.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.777, 6.856, 49.631]} rotation={[-Math.PI / 2, 0, 1.037]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_490'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.793, 6.839, 49.657]} rotation={[-Math.PI / 2, 0, 1.037]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_491.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.756, 6.856, 49.595]} rotation={[-Math.PI / 2, 0, 1.048]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_491'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.772, 6.839, 49.622]} rotation={[-Math.PI / 2, 0, 1.048]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_492.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.736, 6.856, 49.56]} rotation={[-Math.PI / 2, 0, 1.059]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_492'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.751, 6.839, 49.587]} rotation={[-Math.PI / 2, 0, 1.059]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_493.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.716, 6.856, 49.524]} rotation={[-Math.PI / 2, 0, 1.07]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_493'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.731, 6.839, 49.551]} rotation={[-Math.PI / 2, 0, 1.07]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_494.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.697, 6.856, 49.487]} rotation={[-Math.PI / 2, 0, 1.081]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_494'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.712, 6.839, 49.515]} rotation={[-Math.PI / 2, 0, 1.081]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_495.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.678, 6.856, 49.451]} rotation={[-Math.PI / 2, 0, 1.092]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_495'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.692, 6.839, 49.479]} rotation={[-Math.PI / 2, 0, 1.092]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_496.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.659, 6.856, 49.415]} rotation={[-Math.PI / 2, 0, 1.103]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_496'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.673, 6.839, 49.442]} rotation={[-Math.PI / 2, 0, 1.103]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_497.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.641, 6.856, 49.378]} rotation={[-Math.PI / 2, 0, 1.114]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_497'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.655, 6.839, 49.406]} rotation={[-Math.PI / 2, 0, 1.114]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_498.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.623, 6.856, 49.341]} rotation={[-Math.PI / 2, 0, 1.125]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_498'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.637, 6.839, 49.369]} rotation={[-Math.PI / 2, 0, 1.125]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_499.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.606, 6.856, 49.304]} rotation={[-Math.PI / 2, 0, 1.136]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_499'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.619, 6.839, 49.332]} rotation={[-Math.PI / 2, 0, 1.136]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_500.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.589, 6.856, 49.266]} rotation={[-Math.PI / 2, 0, 1.147]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_500'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.602, 6.839, 49.295]} rotation={[-Math.PI / 2, 0, 1.147]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_501.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.572, 6.856, 49.229]} rotation={[-Math.PI / 2, 0, 1.158]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_501'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.585, 6.839, 49.257]} rotation={[-Math.PI / 2, 0, 1.158]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_502.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.556, 6.856, 49.191]} rotation={[-Math.PI / 2, 0, 1.169]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_502'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.568, 6.839, 49.22]} rotation={[-Math.PI / 2, 0, 1.169]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_503.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.541, 6.856, 49.153]} rotation={[-Math.PI / 2, 0, 1.18]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_503'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.552, 6.839, 49.182]} rotation={[-Math.PI / 2, 0, 1.18]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_504.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.525, 6.856, 49.115]} rotation={[-Math.PI / 2, 0, 1.191]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_504'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.537, 6.839, 49.144]} rotation={[-Math.PI / 2, 0, 1.191]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_505.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.51, 6.856, 49.077]} rotation={[-Math.PI / 2, 0, 1.202]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_505'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.522, 6.839, 49.106]} rotation={[-Math.PI / 2, 0, 1.202]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_506.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.496, 6.856, 49.039]} rotation={[-Math.PI / 2, 0, 1.213]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_506'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.507, 6.839, 49.068]} rotation={[-Math.PI / 2, 0, 1.213]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_507.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.482, 6.856, 49]} rotation={[-Math.PI / 2, 0, 1.224]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_507'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.492, 6.839, 49.029]} rotation={[-Math.PI / 2, 0, 1.224]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_508.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.468, 6.856, 48.961]} rotation={[-Math.PI / 2, 0, 1.235]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_508'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.478, 6.839, 48.991]} rotation={[-Math.PI / 2, 0, 1.235]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_509.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.455, 6.856, 48.923]} rotation={[-Math.PI / 2, 0, 1.246]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_509'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.465, 6.839, 48.952]} rotation={[-Math.PI / 2, 0, 1.246]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_510.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.442, 6.856, 48.884]} rotation={[-Math.PI / 2, 0, 1.257]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_510'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.452, 6.839, 48.913]} rotation={[-Math.PI / 2, 0, 1.257]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_511.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.43, 6.856, 48.844]} rotation={[-Math.PI / 2, 0, 1.268]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_511'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.439, 6.839, 48.874]} rotation={[-Math.PI / 2, 0, 1.268]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_512.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.418, 6.856, 48.805]} rotation={[-Math.PI / 2, 0, 1.279]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_512'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.427, 6.839, 48.835]} rotation={[-Math.PI / 2, 0, 1.279]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_513.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.407, 6.856, 48.766]} rotation={[-Math.PI / 2, 0, 1.29]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_513'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.415, 6.839, 48.796]} rotation={[-Math.PI / 2, 0, 1.29]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_514.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.395, 6.856, 48.726]} rotation={[-Math.PI / 2, 0, 1.301]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_514'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.404, 6.839, 48.756]} rotation={[-Math.PI / 2, 0, 1.301]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_515.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.385, 6.856, 48.687]} rotation={[-Math.PI / 2, 0, 1.312]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_515'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.393, 6.839, 48.717]} rotation={[-Math.PI / 2, 0, 1.312]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_516.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.375, 6.856, 48.647]} rotation={[-Math.PI / 2, 0, 1.323]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_516'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.382, 6.839, 48.677]} rotation={[-Math.PI / 2, 0, 1.323]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_517.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.365, 6.856, 48.607]} rotation={[-Math.PI / 2, 0, 1.334]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_517'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.372, 6.839, 48.637]} rotation={[-Math.PI / 2, 0, 1.334]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_518.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.356, 6.856, 48.567]} rotation={[-Math.PI / 2, 0, 1.345]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_518'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.363, 6.839, 48.597]} rotation={[-Math.PI / 2, 0, 1.345]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_519.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.347, 6.856, 48.527]} rotation={[-Math.PI / 2, 0, 1.356]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_519'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.353, 6.839, 48.557]} rotation={[-Math.PI / 2, 0, 1.356]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_520.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.338, 6.856, 48.487]} rotation={[-Math.PI / 2, 0, 1.367]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_520'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.345, 6.839, 48.517]} rotation={[-Math.PI / 2, 0, 1.367]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_521.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.33, 6.856, 48.447]} rotation={[-Math.PI / 2, 0, 1.378]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_521'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.336, 6.839, 48.477]} rotation={[-Math.PI / 2, 0, 1.378]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_522.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.323, 6.856, 48.406]} rotation={[-Math.PI / 2, 0, 1.389]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_522'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.329, 6.839, 48.437]} rotation={[-Math.PI / 2, 0, 1.389]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_523.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.316, 6.856, 48.366]} rotation={[-Math.PI / 2, 0, 1.4]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_523'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.321, 6.839, 48.397]} rotation={[-Math.PI / 2, 0, 1.4]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_524.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.309, 6.856, 48.325]} rotation={[-Math.PI / 2, 0, 1.411]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_524'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.314, 6.839, 48.356]} rotation={[-Math.PI / 2, 0, 1.411]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_525.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.303, 6.856, 48.285]} rotation={[-Math.PI / 2, 0, 1.422]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_525'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.308, 6.839, 48.316]} rotation={[-Math.PI / 2, 0, 1.422]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_526.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.297, 6.856, 48.244]} rotation={[-Math.PI / 2, 0, 1.433]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_526'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.302, 6.839, 48.275]} rotation={[-Math.PI / 2, 0, 1.433]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_527.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.292, 6.856, 48.204]} rotation={[-Math.PI / 2, 0, 1.444]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_527'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.296, 6.839, 48.234]} rotation={[-Math.PI / 2, 0, 1.444]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_528.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.287, 6.856, 48.163]} rotation={[-Math.PI / 2, 0, 1.455]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_528'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.291, 6.839, 48.194]} rotation={[-Math.PI / 2, 0, 1.455]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_529.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.283, 6.856, 48.122]} rotation={[-Math.PI / 2, 0, 1.466]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_529'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.286, 6.839, 48.153]} rotation={[-Math.PI / 2, 0, 1.466]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_530.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.279, 6.856, 48.081]} rotation={[-Math.PI / 2, 0, 1.477]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_530'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.282, 6.839, 48.112]} rotation={[-Math.PI / 2, 0, 1.477]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_531.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.275, 6.856, 48.04]} rotation={[-Math.PI / 2, 0, 1.488]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_531'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.278, 6.839, 48.071]} rotation={[-Math.PI / 2, 0, 1.488]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_532.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.272, 6.856, 47.999]} rotation={[-Math.PI / 2, 0, 1.499]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_532'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.275, 6.839, 48.03]} rotation={[-Math.PI / 2, 0, 1.499]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_533.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.27, 6.856, 47.959]} rotation={[-Math.PI / 2, 0, 1.51]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_533'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.272, 6.839, 47.99]} rotation={[-Math.PI / 2, 0, 1.51]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_534.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.268, 6.856, 47.918]} rotation={[-Math.PI / 2, 0, 1.522]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_534'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.269, 6.839, 47.949]} rotation={[-Math.PI / 2, 0, 1.522]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_535.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.266, 6.856, 47.877]} rotation={[-Math.PI / 2, 0, 1.533]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_535'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.267, 6.839, 47.908]} rotation={[-Math.PI / 2, 0, 1.533]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_536.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.265, 6.856, 47.836]} rotation={[-Math.PI / 2, 0, 1.544]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_536'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.266, 6.839, 47.867]} rotation={[-Math.PI / 2, 0, 1.544]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_537.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.264, 6.856, 47.795]} rotation={[-Math.PI / 2, 0, 1.555]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_537'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.265, 6.839, 47.826]} rotation={[-Math.PI / 2, 0, 1.555]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_538.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.264, 6.856, 47.754]} rotation={[-Math.PI / 2, 0, 1.566]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_538'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.264, 6.839, 47.785]} rotation={[-Math.PI / 2, 0, 1.566]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_539.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.264, 6.856, 47.713]} rotation={[-Math.PI / 2, 0, 1.577]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_539'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.264, 6.839, 47.744]} rotation={[-Math.PI / 2, 0, 1.577]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_540.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.264, 6.856, 47.672]} rotation={[-Math.PI / 2, 0, 1.588]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_540'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.264, 6.839, 47.703]} rotation={[-Math.PI / 2, 0, 1.588]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_541.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.265, 6.856, 47.631]} rotation={[-Math.PI / 2, 0, 1.599]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_541'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.265, 6.839, 47.662]} rotation={[-Math.PI / 2, 0, 1.599]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_542.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.267, 6.856, 47.59]} rotation={[-Math.PI / 2, 0, 1.61]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_542'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.266, 6.839, 47.621]} rotation={[-Math.PI / 2, 0, 1.61]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_543.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.269, 6.856, 47.549]} rotation={[-Math.PI / 2, 0, 1.621]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_543'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.267, 6.839, 47.58]} rotation={[-Math.PI / 2, 0, 1.621]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_544.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.271, 6.856, 47.508]} rotation={[-Math.PI / 2, 0, 1.632]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_544'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.269, 6.839, 47.539]} rotation={[-Math.PI / 2, 0, 1.632]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_545.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.274, 6.856, 47.467]} rotation={[-Math.PI / 2, 0, 1.643]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_545'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.272, 6.839, 47.498]} rotation={[-Math.PI / 2, 0, 1.643]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_546.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.277, 6.856, 47.426]} rotation={[-Math.PI / 2, 0, 1.654]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_546'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.275, 6.839, 47.457]} rotation={[-Math.PI / 2, 0, 1.654]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_547.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.281, 6.856, 47.385]} rotation={[-Math.PI / 2, 0, 1.665]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_547'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.278, 6.839, 47.416]} rotation={[-Math.PI / 2, 0, 1.665]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_548.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.285, 6.856, 47.344]} rotation={[-Math.PI / 2, 0, 1.676]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_548'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.282, 6.839, 47.375]} rotation={[-Math.PI / 2, 0, 1.676]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_549.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.29, 6.856, 47.303]} rotation={[-Math.PI / 2, 0, 1.687]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_549'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.286, 6.839, 47.334]} rotation={[-Math.PI / 2, 0, 1.687]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_550.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.295, 6.856, 47.263]} rotation={[-Math.PI / 2, 0, 1.698]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_550'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.291, 6.839, 47.293]} rotation={[-Math.PI / 2, 0, 1.698]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_551.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.301, 6.856, 47.222]} rotation={[-Math.PI / 2, 0, 1.709]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_551'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.296, 6.839, 47.253]} rotation={[-Math.PI / 2, 0, 1.709]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_552.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.307, 6.856, 47.181]} rotation={[-Math.PI / 2, 0, 1.72]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_552'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.302, 6.839, 47.212]} rotation={[-Math.PI / 2, 0, 1.72]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_553.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.313, 6.856, 47.141]} rotation={[-Math.PI / 2, 0, 1.731]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_553'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.308, 6.839, 47.172]} rotation={[-Math.PI / 2, 0, 1.731]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_554.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.32, 6.856, 47.101]} rotation={[-Math.PI / 2, 0, 1.742]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_554'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.315, 6.839, 47.131]} rotation={[-Math.PI / 2, 0, 1.742]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_555.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.327, 6.856, 47.06]} rotation={[-Math.PI / 2, 0, 1.753]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_555'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.322, 6.839, 47.091]} rotation={[-Math.PI / 2, 0, 1.753]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_556.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.335, 6.856, 47.02]} rotation={[-Math.PI / 2, 0, 1.764]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_556'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.329, 6.839, 47.05]} rotation={[-Math.PI / 2, 0, 1.764]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_557.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.343, 6.856, 46.98]} rotation={[-Math.PI / 2, 0, 1.775]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_557'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.337, 6.839, 47.01]} rotation={[-Math.PI / 2, 0, 1.775]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_558.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.352, 6.856, 46.94]} rotation={[-Math.PI / 2, 0, 1.786]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_558'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.345, 6.839, 46.97]} rotation={[-Math.PI / 2, 0, 1.786]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_559.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.361, 6.856, 46.9]} rotation={[-Math.PI / 2, 0, 1.797]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_559'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.354, 6.839, 46.93]} rotation={[-Math.PI / 2, 0, 1.797]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_560.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.37, 6.856, 46.86]} rotation={[-Math.PI / 2, 0, 1.808]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_560'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.363, 6.839, 46.89]} rotation={[-Math.PI / 2, 0, 1.808]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_561.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.38, 6.856, 46.82]} rotation={[-Math.PI / 2, 0, 1.819]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_561'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.373, 6.839, 46.85]} rotation={[-Math.PI / 2, 0, 1.819]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_562.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.391, 6.856, 46.78]} rotation={[-Math.PI / 2, 0, 1.83]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_562'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.383, 6.839, 46.81]} rotation={[-Math.PI / 2, 0, 1.83]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_563.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.402, 6.856, 46.741]} rotation={[-Math.PI / 2, 0, 1.841]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_563'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.393, 6.839, 46.771]} rotation={[-Math.PI / 2, 0, 1.841]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_564.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.413, 6.856, 46.701]} rotation={[-Math.PI / 2, 0, 1.852]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_564'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.404, 6.839, 46.731]} rotation={[-Math.PI / 2, 0, 1.852]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_565.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.425, 6.856, 46.662]} rotation={[-Math.PI / 2, 0, 1.863]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_565'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.416, 6.839, 46.692]} rotation={[-Math.PI / 2, 0, 1.863]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_566.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.437, 6.856, 46.623]} rotation={[-Math.PI / 2, 0, 1.874]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_566'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.428, 6.839, 46.652]} rotation={[-Math.PI / 2, 0, 1.874]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_567.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.449, 6.856, 46.584]} rotation={[-Math.PI / 2, 0, 1.885]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_567'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.44, 6.839, 46.613]} rotation={[-Math.PI / 2, 0, 1.885]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_568.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.462, 6.856, 46.545]} rotation={[-Math.PI / 2, 0, 1.896]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_568'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.452, 6.839, 46.574]} rotation={[-Math.PI / 2, 0, 1.896]} scale={1.261}>
        <mesh geometry={nodes.Congé1785_569.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.476, 6.856, 46.506]} rotation={[-Math.PI / 2, 0, 1.907]} scale={1.261}>
        <mesh geometry={nodes['Enlèv_mat-Extru1503_569'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 6.83, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[0.999, 0.999, 1]}>
        <mesh geometry={nodes.Cupula_Circle_Chain_Holder.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.45, 6.83, 46.464]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Int_Box_Det.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 6.87, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[0.987, 0.987, 1]}>
        <mesh geometry={nodes.Cupola_O_Ring.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.032, 10.886, 48.124]} rotation={[0, 0.348, 0.305]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cupula_Top_Retangle_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Top_Retangle_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-12.24, 6.882, 46.389]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Trapeira_Retangle.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 6.648, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Anel_Metal_Externo.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.873, 7.194, 44.651]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Trapeira_Left_Det.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.501, 6.652, 46.875]} rotation={[0, 0.348, 0]} scale={[-0.995, 0.995, 1]}>
        <mesh geometry={nodes.Cupula_Trapeira_Rubber_Left.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.58, 7.194, 48.22]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Trapeira_Left_Det_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.266, 6.996, 43.567]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.266, 7.045, 43.567]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.266, 7.07, 43.567]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.266, 7.119, 43.567]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.266, 7.144, 43.567]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.266, 7.169, 43.567]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.266, 7.194, 43.567]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.271, 7.243, 43.568]} rotation={[1.568, -0.008, 1.133]}>
        <mesh geometry={nodes.Cupula_Rebite_152_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.237, 7.15, 43.653]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.237, 7.171, 43.653]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.237, 7.124, 43.653]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.237, 7.098, 43.653]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.237, 7.073, 43.653]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.237, 7.048, 43.654]} rotation={[Math.PI / 2, 0, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.236, 7.151, 43.657]} rotation={[-1.778, -0.084, 1.951]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.225, 7.159, 43.693]} rotation={[-1.777, -0.084, 1.951]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.208, 7.168, 43.727]} rotation={[-1.767, -0.118, 1.859]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_16.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.2, 7.177, 43.764]} rotation={[-1.752, -0.148, 1.955]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_17.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.187, 7.185, 43.799]} rotation={[-1.731, -0.199, 1.958]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_18.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.176, 7.194, 43.834]} rotation={[-1.732, -0.197, 1.958]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_19.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.166, 7.202, 43.871]} rotation={[-1.756, -0.136, 1.954]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_20.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.156, 7.21, 43.907]} rotation={[-1.777, -0.084, 1.952]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_21.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.141, 7.219, 43.942]} rotation={[-1.737, -0.182, 1.957]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_22.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.128, 7.228, 43.976]} rotation={[-1.716, -0.233, 1.961]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_23.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.117, 7.236, 44.012]} rotation={[-1.71, -0.247, 1.963]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_24.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.103, 7.246, 44.047]} rotation={[-1.684, -0.309, 1.963]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_25.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.093, 7.254, 44.083]} rotation={[-1.706, -0.258, 1.957]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_26.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.079, 7.263, 44.118]} rotation={[-1.707, -0.262, 1.877]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_27.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.071, 7.271, 44.155]} rotation={[-1.712, -0.244, 1.946]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_28.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.061, 7.279, 44.192]} rotation={[-1.717, -0.232, 1.961]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_29.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.048, 7.288, 44.226]} rotation={[-1.687, -0.299, 1.963]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_30.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.038, 7.296, 44.263]} rotation={[-1.696, -0.28, 1.966]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_31.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.027, 7.305, 44.298]} rotation={[-1.696, -0.28, 1.966]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_32.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.015, 7.313, 44.334]} rotation={[-1.696, -0.28, 1.966]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_33.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.004, 7.322, 44.37]} rotation={[-1.696, -0.28, 1.966]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_34.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.993, 7.33, 44.406]} rotation={[-1.696, -0.28, 1.966]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_35.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.981, 7.339, 44.441]} rotation={[-1.696, -0.28, 1.966]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_36.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.97, 7.347, 44.477]} rotation={[-1.696, -0.28, 1.966]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_37.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.959, 7.356, 44.513]} rotation={[-1.696, -0.28, 1.966]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_38.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.816, 6.651, 46.007]} rotation={[0, 0.348, 0]} scale={[-0.995, 0.995, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cupula_Trapera_Left_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Trapera_Left_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-13.077, 11.151, 42.894]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Trapera_Frame_Left.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.268, 10.852, 47.425]} rotation={[-2.699, 1.189, -0.415]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_39.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.225, 10.858, 47.421]} rotation={[-2.692, 1.188, -0.421]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_40.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.183, 10.866, 47.394]} rotation={[-2.708, 1.191, -0.406]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_41.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.137, 10.874, 47.378]} rotation={[-2.742, 1.196, -0.374]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_42.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.087, 10.881, 47.371]} rotation={[-2.764, 1.199, -0.354]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_43.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.045, 10.888, 47.344]} rotation={[-2.791, 1.203, -0.329]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_44.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.999, 10.894, 47.328]} rotation={[-2.816, 1.206, -0.305]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_45.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.95, 10.9, 47.321]} rotation={[-2.842, 1.208, -0.281]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_46.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.907, 10.905, 47.294]} rotation={[-2.869, 1.211, -0.256]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_47.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.861, 10.91, 47.278]} rotation={[-2.896, 1.213, -0.23]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_48.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.811, 10.914, 47.271]} rotation={[-2.924, 1.215, -0.205]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_49.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.769, 10.918, 47.244]} rotation={[-2.952, 1.217, -0.178]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_50.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.722, 10.921, 47.227]} rotation={[-2.981, 1.219, -0.15]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_51.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.672, 10.924, 47.221]} rotation={[-3.01, 1.22, -0.124]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_52.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.63, 10.926, 47.194]} rotation={[-3.042, 1.222, -0.094]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_53.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.583, 10.928, 47.177]} rotation={[-3.08, 1.223, -0.058]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_54.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.47, 10.931, 47.147]} rotation={[0.051, -1.223, -3.089]}>
        <mesh geometry={nodes.Cupula_Rebite_152_55.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.491, 10.93, 47.143]} rotation={[3.125, 1.223, 0.016]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_56.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.478, 10.93, 47.035]} rotation={[3.136, 1.223, 0.005]}>
        <mesh geometry={nodes.Cupula_Rebite_152_57.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.435, 10.93, 47.008]} rotation={[3.094, 1.223, 0.045]}>
        <mesh geometry={nodes.Cupula_Rebite_152_58.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.388, 10.93, 46.992]} rotation={[3.065, 1.222, 0.072]}>
        <mesh geometry={nodes.Cupula_Rebite_152_59.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.339, 10.929, 46.985]} rotation={[3.034, 1.221, 0.104]}>
        <mesh geometry={nodes.Cupula_Rebite_152_60.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.296, 10.927, 46.958]} rotation={[3.003, 1.22, 0.128]}>
        <mesh geometry={nodes.Cupula_Rebite_152_61.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.249, 10.925, 46.941]} rotation={[2.973, 1.219, 0.158]}>
        <mesh geometry={nodes.Cupula_Rebite_152_62.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.203, 10.922, 46.924]} rotation={[2.943, 1.217, 0.187]}>
        <mesh geometry={nodes.Cupula_Rebite_152_63.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.157, 10.919, 46.908]} rotation={[2.913, 1.215, 0.215]}>
        <mesh geometry={nodes.Cupula_Rebite_152_64.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.107, 10.915, 46.901]} rotation={[2.884, 1.212, 0.242]}>
        <mesh geometry={nodes.Cupula_Rebite_152_65.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.065, 10.91, 46.874]} rotation={[2.855, 1.21, 0.269]}>
        <mesh geometry={nodes.Cupula_Rebite_152_66.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.018, 10.906, 46.858]} rotation={[2.825, 1.207, 0.297]}>
        <mesh geometry={nodes.Cupula_Rebite_152_67.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.969, 10.9, 46.851]} rotation={[2.797, 1.203, 0.323]}>
        <mesh geometry={nodes.Cupula_Rebite_152_68.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.926, 10.894, 46.824]} rotation={[2.764, 1.199, 0.354]}>
        <mesh geometry={nodes.Cupula_Rebite_152_69.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.88, 10.888, 46.808]} rotation={[2.734, 1.195, 0.382]}>
        <mesh geometry={nodes.Cupula_Rebite_152_70.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.831, 10.881, 46.801]} rotation={[2.718, 1.192, 0.397]}>
        <mesh geometry={nodes.Cupula_Rebite_152_71.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.789, 10.873, 46.774]} rotation={[2.695, 1.189, 0.418]}>
        <mesh geometry={nodes.Cupula_Rebite_152_72.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.743, 10.866, 46.758]} rotation={[2.671, 1.185, 0.441]}>
        <mesh geometry={nodes.Cupula_Rebite_152_73.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.693, 10.857, 46.752]} rotation={[2.637, 1.178, 0.471]}>
        <mesh geometry={nodes.Cupula_Rebite_152_74.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.652, 10.848, 46.725]} rotation={[2.614, 1.174, 0.493]}>
        <mesh geometry={nodes.Cupula_Rebite_152_75.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.606, 10.839, 46.708]} rotation={[2.589, 1.168, 0.516]}>
        <mesh geometry={nodes.Cupula_Rebite_152_76.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.557, 10.829, 46.702]} rotation={[2.565, 1.163, 0.538]}>
        <mesh geometry={nodes.Cupula_Rebite_152_77.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.516, 10.818, 46.675]} rotation={[2.543, 1.157, 0.559]}>
        <mesh geometry={nodes.Cupula_Rebite_152_78.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.47, 10.807, 46.659]} rotation={[2.521, 1.152, 0.579]}>
        <mesh geometry={nodes.Cupula_Rebite_152_79.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.422, 10.795, 46.653]} rotation={[2.499, 1.146, 0.599]}>
        <mesh geometry={nodes.Cupula_Rebite_152_80.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.38, 10.783, 46.626]} rotation={[2.478, 1.14, 0.618]}>
        <mesh geometry={nodes.Cupula_Rebite_152_81.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.336, 10.771, 46.61]} rotation={[2.457, 1.133, 0.636]}>
        <mesh geometry={nodes.Cupula_Rebite_152_82.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.291, 10.758, 46.594]} rotation={[2.437, 1.127, 0.655]}>
        <mesh geometry={nodes.Cupula_Rebite_152_83.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.243, 10.744, 46.588]} rotation={[2.418, 1.121, 0.672]}>
        <mesh geometry={nodes.Cupula_Rebite_152_84.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.202, 10.73, 46.562]} rotation={[2.399, 1.114, 0.689]}>
        <mesh geometry={nodes.Cupula_Rebite_152_85.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.158, 10.715, 46.546]} rotation={[2.381, 1.107, 0.705]}>
        <mesh geometry={nodes.Cupula_Rebite_152_86.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.11, 10.7, 46.54]} rotation={[2.363, 1.1, 0.721]}>
        <mesh geometry={nodes.Cupula_Rebite_152_87.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.07, 10.685, 46.514]} rotation={[2.345, 1.093, 0.737]}>
        <mesh geometry={nodes.Cupula_Rebite_152_88.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.026, 10.668, 46.498]} rotation={[2.329, 1.086, 0.751]}>
        <mesh geometry={nodes.Cupula_Rebite_152_89.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.982, 10.652, 46.482]} rotation={[2.301, 1.073, 0.776]}>
        <mesh geometry={nodes.Cupula_Rebite_152_90.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.935, 10.634, 46.475]} rotation={[2.296, 1.071, 0.78]}>
        <mesh geometry={nodes.Cupula_Rebite_152_91.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.892, 10.617, 46.46]} rotation={[2.272, 1.059, 0.802]}>
        <mesh geometry={nodes.Cupula_Rebite_152_92.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.852, 10.598, 46.435]} rotation={[2.267, 1.057, 0.805]}>
        <mesh geometry={nodes.Cupula_Rebite_152_93.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.809, 10.58, 46.419]} rotation={[2.24, 1.042, 0.829]}>
        <mesh geometry={nodes.Cupula_Rebite_152_94.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.767, 10.561, 46.404]} rotation={[2.226, 1.034, 0.841]}>
        <mesh geometry={nodes.Cupula_Rebite_152_95.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.724, 10.541, 46.389]} rotation={[2.21, 1.025, 0.855]}>
        <mesh geometry={nodes.Cupula_Rebite_152_96.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.682, 10.52, 46.373]} rotation={[2.193, 1.015, 0.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_97.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.637, 10.499, 46.367]} rotation={[2.178, 1.005, 0.882]}>
        <mesh geometry={nodes.Cupula_Rebite_152_98.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.599, 10.478, 46.343]} rotation={[2.163, 0.995, 0.895]}>
        <mesh geometry={nodes.Cupula_Rebite_152_99.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.557, 10.456, 46.328]} rotation={[2.148, 0.985, 0.907]}>
        <mesh geometry={nodes.Cupula_Rebite_152_100.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.516, 10.433, 46.313]} rotation={[2.134, 0.974, 0.919]}>
        <mesh geometry={nodes.Cupula_Rebite_152_101.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.472, 10.41, 46.307]} rotation={[2.12, 0.964, 0.931]}>
        <mesh geometry={nodes.Cupula_Rebite_152_102.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.435, 10.386, 46.284]} rotation={[2.106, 0.953, 0.942]}>
        <mesh geometry={nodes.Cupula_Rebite_152_103.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.394, 10.361, 46.269]} rotation={[2.092, 0.942, 0.953]}>
        <mesh geometry={nodes.Cupula_Rebite_152_104.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.354, 10.336, 46.255]} rotation={[2.079, 0.931, 0.963]}>
        <mesh geometry={nodes.Cupula_Rebite_152_105.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.312, 10.311, 46.249]} rotation={[2.067, 0.92, 0.974]}>
        <mesh geometry={nodes.Cupula_Rebite_152_106.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.276, 10.284, 46.226]} rotation={[2.055, 0.909, 0.983]}>
        <mesh geometry={nodes.Cupula_Rebite_152_107.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.237, 10.258, 46.212]} rotation={[2.043, 0.898, 0.993]}>
        <mesh geometry={nodes.Cupula_Rebite_152_108.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.195, 10.23, 46.206]} rotation={[2.031, 0.887, 1.002]}>
        <mesh geometry={nodes.Cupula_Rebite_152_109.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.16, 10.203, 46.184]} rotation={[2.02, 0.875, 1.01]}>
        <mesh geometry={nodes.Cupula_Rebite_152_110.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.122, 10.174, 46.17]} rotation={[2.009, 0.864, 1.019]}>
        <mesh geometry={nodes.Cupula_Rebite_152_111.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.084, 10.145, 46.157]} rotation={[1.999, 0.853, 1.027]}>
        <mesh geometry={nodes.Cupula_Rebite_152_112.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.044, 10.116, 46.152]} rotation={[1.988, 0.842, 1.034]}>
        <mesh geometry={nodes.Cupula_Rebite_152_113.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.01, 10.086, 46.13]} rotation={[1.978, 0.83, 1.042]}>
        <mesh geometry={nodes.Cupula_Rebite_152_114.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.974, 10.056, 46.117]} rotation={[1.969, 0.82, 1.048]}>
        <mesh geometry={nodes.Cupula_Rebite_152_115.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.938, 10.025, 46.104]} rotation={[1.956, 0.803, 1.058]}>
        <mesh geometry={nodes.Cupula_Rebite_152_116.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.899, 9.993, 46.1]} rotation={[1.953, 0.8, 1.06]}>
        <mesh geometry={nodes.Cupula_Rebite_152_117.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.863, 9.961, 46.087]} rotation={[1.941, 0.785, 1.069]}>
        <mesh geometry={nodes.Cupula_Rebite_152_118.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.832, 9.929, 46.065]} rotation={[1.939, 0.782, 1.07]}>
        <mesh geometry={nodes.Cupula_Rebite_152_119.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.793, 9.896, 46.062]} rotation={[1.926, 0.765, 1.079]}>
        <mesh geometry={nodes.Cupula_Rebite_152_120.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.763, 9.863, 46.04]} rotation={[1.919, 0.756, 1.084]}>
        <mesh geometry={nodes.Cupula_Rebite_152_121.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.729, 9.829, 46.028]} rotation={[1.912, 0.745, 1.089]}>
        <mesh geometry={nodes.Cupula_Rebite_152_122.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.692, 9.795, 46.025]} rotation={[1.904, 0.735, 1.094]}>
        <mesh geometry={nodes.Cupula_Rebite_152_123.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.662, 9.761, 46.004]} rotation={[1.898, 0.725, 1.098]}>
        <mesh geometry={nodes.Cupula_Rebite_152_124.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.629, 9.726, 45.992]} rotation={[1.891, 0.715, 1.103]}>
        <mesh geometry={nodes.Cupula_Rebite_152_125.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.597, 9.691, 45.98]} rotation={[1.885, 0.706, 1.107]}>
        <mesh geometry={nodes.Cupula_Rebite_152_126.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.562, 9.655, 45.978]} rotation={[1.879, 0.697, 1.111]}>
        <mesh geometry={nodes.Cupula_Rebite_152_127.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.533, 9.619, 45.957]} rotation={[1.873, 0.687, 1.114]}>
        <mesh geometry={nodes.Cupula_Rebite_152_128.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.502, 9.583, 45.946]} rotation={[1.867, 0.679, 1.118]}>
        <mesh geometry={nodes.Cupula_Rebite_152_129.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.467, 9.546, 45.944]} rotation={[1.862, 0.67, 1.121]}>
        <mesh geometry={nodes.Cupula_Rebite_152_130.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.44, 9.509, 45.923]} rotation={[1.857, 0.662, 1.124]}>
        <mesh geometry={nodes.Cupula_Rebite_152_131.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.41, 9.472, 45.912]} rotation={[1.852, 0.654, 1.127]}>
        <mesh geometry={nodes.Cupula_Rebite_152_132.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.38, 9.434, 45.902]} rotation={[1.845, 0.642, 1.131]}>
        <mesh geometry={nodes.Cupula_Rebite_152_133.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.346, 9.396, 45.901]} rotation={[1.839, 0.632, 1.135]}>
        <mesh geometry={nodes.Cupula_Rebite_152_134.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.321, 9.358, 45.88]} rotation={[1.832, 0.618, 1.139]}>
        <mesh geometry={nodes.Cupula_Rebite_152_135.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.289, 9.319, 45.88]} rotation={[1.823, 0.603, 1.144]}>
        <mesh geometry={nodes.Cupula_Rebite_152_136.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.264, 9.28, 45.86]} rotation={[1.815, 0.589, 1.149]}>
        <mesh geometry={nodes.Cupula_Rebite_152_137.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.237, 9.24, 45.85]} rotation={[1.808, 0.575, 1.153]}>
        <mesh geometry={nodes.Cupula_Rebite_152_138.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.21, 9.2, 45.84]} rotation={[1.801, 0.561, 1.157]}>
        <mesh geometry={nodes.Cupula_Rebite_152_139.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.18, 9.16, 45.84]} rotation={[1.795, 0.55, 1.16]}>
        <mesh geometry={nodes.Cupula_Rebite_152_140.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.158, 9.119, 45.821]} rotation={[1.784, 0.529, 1.165]}>
        <mesh geometry={nodes.Cupula_Rebite_152_141.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.133, 9.077, 45.812]} rotation={[1.782, 0.524, 1.166]}>
        <mesh geometry={nodes.Cupula_Rebite_152_142.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.104, 9.036, 45.812]} rotation={[1.773, 0.507, 1.171]}>
        <mesh geometry={nodes.Cupula_Rebite_152_143.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.084, 8.993, 45.794]} rotation={[1.772, 0.503, 1.171]}>
        <mesh geometry={nodes.Cupula_Rebite_152_144.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.06, 8.951, 45.786]} rotation={[1.765, 0.49, 1.174]}>
        <mesh geometry={nodes.Cupula_Rebite_152_145.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.033, 8.909, 45.786]} rotation={[1.758, 0.474, 1.178]}>
        <mesh geometry={nodes.Cupula_Rebite_152_146.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.011, 8.866, 45.778]} rotation={[1.753, 0.463, 1.18]}>
        <mesh geometry={nodes.Cupula_Rebite_152_147.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.992, 8.822, 45.761]} rotation={[1.747, 0.451, 1.183]}>
        <mesh geometry={nodes.Cupula_Rebite_152_148.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.97, 8.779, 45.753]} rotation={[1.742, 0.44, 1.185]}>
        <mesh geometry={nodes.Cupula_Rebite_152_149.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.946, 8.735, 45.755]} rotation={[1.737, 0.428, 1.187]}>
        <mesh geometry={nodes.Cupula_Rebite_152_150.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.929, 8.691, 45.738]} rotation={[1.732, 0.417, 1.189]}>
        <mesh geometry={nodes.Cupula_Rebite_152_151.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.909, 8.646, 45.731]} rotation={[1.727, 0.406, 1.191]}>
        <mesh geometry={nodes.Cupula_Rebite_152_152.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.885, 8.601, 45.734]} rotation={[1.722, 0.395, 1.193]}>
        <mesh geometry={nodes.Cupula_Rebite_152_153.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.87, 8.556, 45.717]} rotation={[1.718, 0.384, 1.195]}>
        <mesh geometry={nodes.Cupula_Rebite_152_154.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.851, 8.511, 45.71]} rotation={[1.713, 0.373, 1.196]}>
        <mesh geometry={nodes.Cupula_Rebite_152_155.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.833, 8.466, 45.704]} rotation={[1.708, 0.362, 1.198]}>
        <mesh geometry={nodes.Cupula_Rebite_152_156.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.812, 8.42, 45.707]} rotation={[1.704, 0.351, 1.2]}>
        <mesh geometry={nodes.Cupula_Rebite_152_157.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.799, 8.374, 45.691]} rotation={[1.699, 0.34, 1.201]}>
        <mesh geometry={nodes.Cupula_Rebite_152_158.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.782, 8.328, 45.685]} rotation={[1.695, 0.329, 1.203]}>
        <mesh geometry={nodes.Cupula_Rebite_152_159.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.766, 8.282, 45.679]} rotation={[1.691, 0.319, 1.204]}>
        <mesh geometry={nodes.Cupula_Rebite_152_160.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.751, 8.236, 45.674]} rotation={[1.686, 0.308, 1.205]}>
        <mesh geometry={nodes.Cupula_Rebite_152_161.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.732, 8.189, 45.678]} rotation={[1.682, 0.297, 1.207]}>
        <mesh geometry={nodes.Cupula_Rebite_152_162.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.721, 8.142, 45.663]} rotation={[1.678, 0.287, 1.208]}>
        <mesh geometry={nodes.Cupula_Rebite_152_163.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.707, 8.095, 45.658]} rotation={[1.672, 0.271, 1.209]}>
        <mesh geometry={nodes.Cupula_Rebite_152_164.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.69, 8.048, 45.662]} rotation={[1.668, 0.262, 1.21]}>
        <mesh geometry={nodes.Cupula_Rebite_152_165.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.681, 8.001, 45.648]} rotation={[1.667, 0.258, 1.211]}>
        <mesh geometry={nodes.Cupula_Rebite_152_166.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.668, 7.953, 45.644]} rotation={[1.66, 0.242, 1.212]}>
        <mesh geometry={nodes.Cupula_Rebite_152_167.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.652, 7.905, 45.65]} rotation={[1.66, 0.24, 1.212]}>
        <mesh geometry={nodes.Cupula_Rebite_152_168.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.644, 7.858, 45.635]} rotation={[1.652, 0.221, 1.214]}>
        <mesh geometry={nodes.Cupula_Rebite_152_169.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.633, 7.81, 45.631]} rotation={[1.649, 0.212, 1.215]}>
        <mesh geometry={nodes.Cupula_Rebite_152_170.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.62, 7.762, 45.637]} rotation={[1.645, 0.201, 1.216]}>
        <mesh geometry={nodes.Cupula_Rebite_152_171.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.613, 7.714, 45.624]} rotation={[1.641, 0.19, 1.217]}>
        <mesh geometry={nodes.Cupula_Rebite_152_172.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.604, 7.665, 45.62]} rotation={[1.636, 0.179, 1.217]}>
        <mesh geometry={nodes.Cupula_Rebite_152_173.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.595, 7.617, 45.617]} rotation={[1.632, 0.168, 1.218]}>
        <mesh geometry={nodes.Cupula_Rebite_152_174.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.583, 7.569, 45.624]} rotation={[1.628, 0.157, 1.219]}>
        <mesh geometry={nodes.Cupula_Rebite_152_175.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.579, 7.52, 45.611]} rotation={[1.624, 0.146, 1.219]}>
        <mesh geometry={nodes.Cupula_Rebite_152_176.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.571, 7.471, 45.609]} rotation={[1.62, 0.135, 1.22]}>
        <mesh geometry={nodes.Cupula_Rebite_152_177.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.565, 7.423, 45.606]} rotation={[1.616, 0.124, 1.22]}>
        <mesh geometry={nodes.Cupula_Rebite_152_178.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.555, 7.374, 45.614]} rotation={[1.612, 0.112, 1.221]}>
        <mesh geometry={nodes.Cupula_Rebite_152_179.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.553, 7.325, 45.602]} rotation={[1.607, 0.101, 1.221]}>
        <mesh geometry={nodes.Cupula_Rebite_152_180.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.543, 7.276, 45.612]} rotation={[1.603, 0.089, 1.222]}>
        <mesh geometry={nodes.Cupula_Rebite_152_181.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.543, 7.227, 45.598]} rotation={[1.599, 0.078, 1.222]}>
        <mesh geometry={nodes.Cupula_Rebite_152_182.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.539, 7.178, 45.597]} rotation={[1.595, 0.065, 1.222]}>
        <mesh geometry={nodes.Cupula_Rebite_152_183.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.536, 7.128, 45.596]} rotation={[1.59, 0.054, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_184.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.529, 7.079, 45.608]} rotation={[1.587, 0.044, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_185.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.531, 7.03, 45.594]} rotation={[1.578, 0.021, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_186.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.53, 6.981, 45.594]} rotation={[1.578, 0.02, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_187.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.529, 6.943, 45.593]} rotation={[1.579, 0.023, 1.223]}>
        <mesh geometry={nodes.Cupula_Rebite_152_188.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.424, 6.651, 49.85]} rotation={[-Math.PI, -0.348, -Math.PI]} scale={[0.995, 0.995, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cupula_Trapera_Right_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Trapera_Right_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Trapera_Right_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-10.586, 11.151, 49.77]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Cupula_Trapera_Frame_Right.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.497, 7.356, 48.549]} rotation={[-1.296, -0.136, 1.872]}>
        <mesh geometry={nodes.Cupula_Rebite_152_189.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.486, 7.347, 48.585]} rotation={[-1.336, -0.004, 1.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_190.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.471, 7.338, 48.619]} rotation={[-1.325, -0.042, 1.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_191.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.456, 7.33, 48.654]} rotation={[-1.325, -0.042, 1.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_192.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.439, 7.322, 48.687]} rotation={[-1.295, -0.136, 1.872]}>
        <mesh geometry={nodes.Cupula_Rebite_152_193.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.426, 7.313, 48.722]} rotation={[-1.306, -0.102, 1.87]}>
        <mesh geometry={nodes.Cupula_Rebite_152_194.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.41, 7.305, 48.757]} rotation={[-1.296, -0.136, 1.872]}>
        <mesh geometry={nodes.Cupula_Rebite_152_195.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.396, 7.297, 48.791]} rotation={[-1.296, -0.136, 1.872]}>
        <mesh geometry={nodes.Cupula_Rebite_152_196.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.381, 7.288, 48.826]} rotation={[-1.29, -0.156, 1.879]}>
        <mesh geometry={nodes.Cupula_Rebite_152_197.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.368, 7.279, 48.861]} rotation={[-1.311, -0.086, 1.87]}>
        <mesh geometry={nodes.Cupula_Rebite_152_198.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.353, 7.271, 48.895]} rotation={[-1.307, -0.098, 1.886]}>
        <mesh geometry={nodes.Cupula_Rebite_152_199.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.334, 7.263, 48.928]} rotation={[-1.287, -0.144, 1.959]}>
        <mesh geometry={nodes.Cupula_Rebite_152_200.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.324, 7.254, 48.965]} rotation={[-1.302, -0.112, 1.877]}>
        <mesh geometry={nodes.Cupula_Rebite_152_201.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.308, 7.246, 48.999]} rotation={[-1.285, -0.165, 1.88]}>
        <mesh geometry={nodes.Cupula_Rebite_152_202.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.296, 7.237, 49.034]} rotation={[-1.306, -0.102, 1.871]}>
        <mesh geometry={nodes.Cupula_Rebite_152_203.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.282, 7.228, 49.069]} rotation={[-1.311, -0.087, 1.87]}>
        <mesh geometry={nodes.Cupula_Rebite_152_204.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.27, 7.219, 49.104]} rotation={[-1.327, -0.034, 1.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_205.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.26, 7.21, 49.14]} rotation={[-1.358, 0.067, 1.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_206.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.244, 7.202, 49.174]} rotation={[-1.342, 0.013, 1.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_207.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.228, 7.194, 49.209]} rotation={[-1.322, -0.05, 1.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_208.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.214, 7.185, 49.243]} rotation={[-1.321, -0.052, 1.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_209.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.201, 7.177, 49.279]} rotation={[-1.338, 0.001, 1.869]}>
        <mesh geometry={nodes.Cupula_Rebite_152_210.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.184, 7.168, 49.312]} rotation={[-1.345, 0.034, 1.962]}>
        <mesh geometry={nodes.Cupula_Rebite_152_211.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.176, 7.159, 49.349]} rotation={[-1.358, 0.067, 1.87]}>
        <mesh geometry={nodes.Cupula_Rebite_152_212.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.162, 7.151, 49.384]} rotation={[-1.358, 0.067, 1.87]}>
        <mesh geometry={nodes.Cupula_Rebite_152_213.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.159, 7.048, 49.387]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_214.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.158, 7.073, 49.386]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_215.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.159, 7.098, 49.387]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_216.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.159, 7.124, 49.387]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_217.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.159, 7.171, 49.387]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_218.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.159, 7.15, 49.387]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_219.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.13, 7.243, 49.474]} rotation={[1.567, -0.008, 1.314]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_220.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.126, 7.209, 49.472]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_221.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.126, 7.178, 49.472]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_222.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.126, 7.144, 49.472]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_223.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.125, 7.117, 49.472]} rotation={[1.559, -0.033, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_224.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.127, 7.07, 49.472]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_225.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.127, 7.042, 49.472]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_226.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.127, 6.99, 49.472]} rotation={[Math.PI / 2, 0, 1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Rebite_152_227.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 3.73, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cupula_Full_Wall_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Full_Wall_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Full_Wall_3.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Full_Wall_4.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Full_Wall_5.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Full_Wall_6.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.604, 5.193, 49.69]} rotation={[0, 1.133, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cupula_Armario_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Armario_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.985, 4.543, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cupula_Central_Circle_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Central_Circle_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.985, 4.543, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Central_Circle_Soleira.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.998, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Central_Circle_Wood_Det.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.643, 47.744]} rotation={[-Math.PI / 2, 0, -0.909]}>
        <mesh geometry={nodes.Cupola_Degrau_Int_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.068, 5.706, 49.328]} rotation={[0.649, -0.797, 0.497]}>
        <mesh geometry={nodes.Cupola_Corrimão_Escada_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.243, 4.734, 49.649]} rotation={[0, 0.662, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Degrau_Suporte_Int_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.193, 6.749, 44.408]} rotation={[0, 0.348, Math.PI]} scale={0.119}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cupula_Motor_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Motor_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Motor_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-19.948, 4.732, 45.334]} rotation={[0, 1.04, Math.PI / 2]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_Suporte_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.943, 47.745]} rotation={[-Math.PI / 2, 0, 0.964]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.87, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Anel_Int_Wood.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.43, 47.745]} rotation={[-Math.PI / 2, 0, 0.943]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Door_Metal_Det.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.982, 3.73, 47.744]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cupula_Escada_Exterior_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Escada_Exterior_2.geometry} material={materials.Material__14063} />
          <mesh geometry={nodes.Cupula_Escada_Exterior_3.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Escada_Exterior_4.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-18.597, 5.019, 43.54]} rotation={[0, 0.348, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Escada_Exterior_Parapeito.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.702, 47.745]} rotation={[-Math.PI / 2, 0, 2.233]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_010.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.702, 47.745]} rotation={[-Math.PI / 2, 0, 2.861]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_013.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.691, 5.023, 48.363]} rotation={[-Math.PI / 2, 0, -2.794]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.702, 47.745]} rotation={[-Math.PI / 2, 0, 1.604]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.728, 5.023, 47.242]} rotation={[-Math.PI / 2, 0, 2.861]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.1, 5.023, 46.313]} rotation={[-Math.PI / 2, 0, 2.233]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.702, 47.745]} rotation={[-Math.PI / 2, 0, -2.794]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_016.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.046, 5.023, 45.931]} rotation={[-Math.PI / 2, 0, 1.604]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.362, 47.745]} rotation={[-Math.PI / 2, 0, 2.233]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_011.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.048, 47.745]} rotation={[-Math.PI / 2, 0, 2.233]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_012.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.362, 47.745]} rotation={[-Math.PI / 2, 0, 2.861]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_014.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.048, 47.745]} rotation={[-Math.PI / 2, 0, 2.861]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_015.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.362, 47.745]} rotation={[-Math.PI / 2, 0, 1.604]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.048, 47.745]} rotation={[-Math.PI / 2, 0, 1.604]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_009.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.362, 47.745]} rotation={[-Math.PI / 2, 0, -2.794]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_017.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.048, 47.745]} rotation={[-Math.PI / 2, 0, -2.794]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_018.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.702, 47.745]} rotation={[-Math.PI / 2, 0, -0.281]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_028.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.87, 5.023, 49.176]} rotation={[-Math.PI / 2, 0, -0.909]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.242, 5.023, 48.247]} rotation={[-Math.PI / 2, 0, -0.281]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.702, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.362, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.702, 47.745]} rotation={[-Math.PI / 2, 0, -1.537]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_022.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.362, 47.745]} rotation={[-Math.PI / 2, 0, -1.537]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_023.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.702, 47.745]} rotation={[-Math.PI / 2, 0, -0.909]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_025.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.362, 47.745]} rotation={[-Math.PI / 2, 0, -0.909]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_026.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.924, 5.023, 49.558]} rotation={[-Math.PI / 2, 0, -1.537]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.362, 47.745]} rotation={[-Math.PI / 2, 0, -0.281]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_029.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.048, 47.745]} rotation={[-Math.PI / 2, 0, -0.281]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_030.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.048, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.048, 47.745]} rotation={[-Math.PI / 2, 0, -1.537]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_024.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 5.048, 47.745]} rotation={[-Math.PI / 2, 0, -0.909]}>
        <mesh geometry={nodes.Cupula_Para_Peito_Curve_027.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.279, 5.023, 47.127]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.968, 5.023, 46.242]} rotation={[-Math.PI / 2, 0, 0.976]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.002, 5.023, 49.247]} rotation={[-Math.PI / 2, 0, -2.166]}>
        <mesh geometry={nodes.Cupula_Barra_Central_006_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.43, 47.745]} rotation={[-Math.PI / 2, 0, 0.004]}>
        <mesh geometry={nodes.Cupula_Metal_Door_Batente.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.981, 4.43, 47.757]} rotation={[-Math.PI / 2, 0, 0.524]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Metal_Door_Right.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.515, 5.43, 44.036]} rotation={[-Math.PI / 2, 0, -2.998]}>
        <mesh geometry={nodes.Cupola_Door_Handle_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.507, 5.352, 44.085]} rotation={[0, 0.18, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Chave_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.514, 5.352, 44.04]} rotation={[Math.PI, -0.163, Math.PI]}>
        <mesh geometry={nodes.Cupula_Chave_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.507, 5.43, 44.089]} rotation={[-Math.PI / 2, 0, 0.143]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Door_Handle_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.98, 4.43, 47.757]} rotation={[-Math.PI / 2, 0, 0.171]}>
        <mesh geometry={nodes.Cupula_Metal_Door_Right_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.925, 5.43, 44.603]} rotation={[-Math.PI / 2, 0, 0.552]}>
        <mesh geometry={nodes.Cupola_Door_Handle_003_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.928, 5.352, 44.6]} rotation={[0, 0.515, 0]}>
        <mesh geometry={nodes.Cupula_Chave_003_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.951, 5.352, 44.56]} rotation={[Math.PI, -0.532, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Chave_004_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.953, 5.43, 44.558]} rotation={[-Math.PI / 2, 0, -2.59]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Door_Handle_004_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.091, 6.338, 44.129]} rotation={[0, -0.242, 0]}>
        <mesh geometry={nodes.Cupula_Painel_Image_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.091, 6.338, 44.129]} rotation={[0, -0.242, 0]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.74, 6.338, 44.773]} rotation={[0, -0.647, 0]}>
        <mesh geometry={nodes.Cupula_Painel_Image_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.74, 6.338, 44.773]} rotation={[0, -0.647, 0]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.974, 6.338, 45.553]} rotation={[0, -0.941, 0]}>
        <mesh geometry={nodes.Cupula_Painel_Image_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.974, 6.338, 45.553]} rotation={[0, -0.941, 0]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.467, 6.338, 46.521]} rotation={[0, -1.236, 0]}>
        <mesh geometry={nodes.Cupula_Painel_Image_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.467, 6.338, 46.521]} rotation={[0, -1.236, 0]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.264, 6.338, 47.595]} rotation={[0, -1.531, 0]}>
        <mesh geometry={nodes.Cupula_Painel_Image_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.264, 6.338, 47.595]} rotation={[0, -1.531, 0]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.38, 6.338, 48.681]} rotation={[Math.PI, -1.317, Math.PI]}>
        <mesh geometry={nodes.Cupula_Painel_Image_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.38, 6.338, 48.681]} rotation={[Math.PI, -1.317, Math.PI]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.182, 6.338, 50.197]} rotation={[Math.PI, -0.852, Math.PI]}>
        <mesh geometry={nodes.Cupula_Painel_Image_008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.182, 6.338, 50.197]} rotation={[Math.PI, -0.852, Math.PI]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.015, 6.338, 50.905]} rotation={[Math.PI, -0.557, Math.PI]}>
        <mesh geometry={nodes.Cupula_Painel_Image_009.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.015, 6.338, 50.905]} rotation={[Math.PI, -0.557, Math.PI]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.017, 6.338, 51.341]} rotation={[Math.PI, -0.263, Math.PI]}>
        <mesh geometry={nodes.Cupula_Painel_Image_010.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.017, 6.338, 51.341]} rotation={[Math.PI, -0.263, Math.PI]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.103, 6.338, 51.467]} rotation={[Math.PI, 0.032, -Math.PI]}>
        <mesh geometry={nodes.Cupula_Painel_Image_011.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.103, 6.338, 51.467]} rotation={[Math.PI, 0.032, -Math.PI]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.178, 6.338, 51.273]} rotation={[Math.PI, 0.326, -Math.PI]}>
        <mesh geometry={nodes.Cupula_Painel_Image_012.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.178, 6.338, 51.273]} rotation={[Math.PI, 0.326, -Math.PI]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.693, 6.338, 50.302]} rotation={[Math.PI, 0.814, -Math.PI]}>
        <mesh geometry={nodes.Cupula_Painel_Image_013.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.693, 6.338, 50.302]} rotation={[Math.PI, 0.814, -Math.PI]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.318, 6.338, 49.406]} rotation={[Math.PI, 1.109, -Math.PI]}>
        <mesh geometry={nodes.Cupula_Painel_Image_014.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.318, 6.338, 49.406]} rotation={[Math.PI, 1.109, -Math.PI]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.657, 6.338, 48.366]} rotation={[Math.PI, 1.403, -Math.PI]}>
        <mesh geometry={nodes.Cupula_Painel_Image_015.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.657, 6.338, 48.366]} rotation={[Math.PI, 1.403, -Math.PI]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.679, 6.338, 47.274]} rotation={[0, 1.444, 0]}>
        <mesh geometry={nodes.Cupula_Painel_Image_016.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.679, 6.338, 47.274]} rotation={[0, 1.444, 0]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.383, 6.338, 46.222]} rotation={[0, 1.149, 0]}>
        <mesh geometry={nodes.Cupula_Painel_Image_017.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.383, 6.338, 46.222]} rotation={[0, 1.149, 0]}>
        <mesh geometry={nodes.CupulaPpainel_Box_001_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.061, 6.468, 45.678]} rotation={[0, 0.979, 0]}>
        <mesh geometry={nodes.Tube019.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.049, 6.468, 45.686]} rotation={[0, 0.979, 0]} scale={[1, 1, 0.515]}>
        <mesh geometry={nodes.Sphere001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.028, 6.468, 45.674]} rotation={[0, -0.591, 0]}>
        <mesh geometry={nodes.Rectangle502.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.041, 6.49, 45.693]} rotation={[Math.PI / 2, 0, 0.591]}>
        <mesh geometry={nodes.Rectangle503.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.086, 6.468, 45.661]} rotation={[0, 0.979, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-18.99, 6.436, 45.516]} rotation={[0, 0.897, 0]}>
        <mesh geometry={nodes.Object031.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.99, 6.436, 45.516]} rotation={[0, 0.897, 0]}>
        <mesh geometry={nodes.Rectangle504.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.007, 6.393, 50.886]} rotation={[Math.PI, 0.572, -Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-17.996, 6.393, 50.828]} rotation={[0, 0.999, 0]}>
        <mesh geometry={nodes.Rectangle502_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.977, 6.416, 50.84]} rotation={[Math.PI / 2, 0, -0.999]}>
        <mesh geometry={nodes.Rectangle503_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.983, 6.393, 50.848]} rotation={[Math.PI, 0.572, -Math.PI]} scale={[1, 1, 0.515]}>
        <mesh geometry={nodes.Sphere001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.991, 6.393, 50.861]} rotation={[Math.PI, 0.572, -Math.PI]}>
        <mesh geometry={nodes.Tube019_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.674, 6.393, 49.475]} rotation={[Math.PI, -1.089, Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-12.733, 6.393, 49.469]} rotation={[Math.PI, 0.481, -Math.PI]}>
        <mesh geometry={nodes.Rectangle502_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.722, 6.416, 49.449]} rotation={[Math.PI / 2, 0, -2.66]}>
        <mesh geometry={nodes.Rectangle503_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.714, 6.393, 49.454]} rotation={[Math.PI, -1.089, Math.PI]} scale={[1, 1, 0.515]}>
        <mesh geometry={nodes.Sphere001_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.7, 6.393, 49.461]} rotation={[Math.PI, -1.089, Math.PI]}>
        <mesh geometry={nodes.Tube019_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.344, 6.393, 44.388]} rotation={[0, -0.455, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cylinder011_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cylinder011_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-14.349, 6.393, 44.447]} rotation={[Math.PI, -1.116, Math.PI]}>
        <mesh geometry={nodes.Rectangle502_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.369, 6.416, 44.437]} rotation={[Math.PI / 2, 0, 2.025]}>
        <mesh geometry={nodes.Rectangle503_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.364, 6.393, 44.428]} rotation={[0, -0.455, 0]} scale={[1, 1, 0.515]}>
        <mesh geometry={nodes.Sphere001_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.357, 6.393, 44.415]} rotation={[0, -0.455, 0]}>
        <mesh geometry={nodes.Tube019_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.955, 6.557, 47.734]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Base_Principal.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.296, 6.728, 47.998]} rotation={[-1.292, -0.649, -1.129]} scale={1.517}>
        <mesh geometry={nodes.Meade_16_Botão_OnOff.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16, 7.008, 47.808]} rotation={[-Math.PI / 2, 0, -1.223]} scale={1.517}>
        <mesh geometry={nodes.Meade_16_Decalque_Montagem_U.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.955, 6.775, 47.734]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1.524, 1.524, 1.522]}>
        <mesh geometry={nodes.Meade_16_Montagem_U_Disco_Azimute.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.97, 7.497, 47.291]} rotation={[0, -1.223, 0]} scale={[-1.517, 1.517, 1.517]}>
        <mesh geometry={nodes.Meade_16_Montagem_U.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.917, 7.049, 48.273]} rotation={[Math.PI, 1.223, -Math.PI]} scale={1.517}>
        <mesh geometry={nodes.Conector_Motor_Altura_B002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.676, 7.459, 48.098]} rotation={[0, 0.348, 0.07]} scale={1.517}>
        <group scale={0.01}>
          <mesh geometry={nodes.Meade_16_Plug_04_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Plug_04_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.174, 6.817, 47.668]} rotation={[-Math.PI / 2, 0, -1.223]} scale={1.517}>
        <mesh geometry={nodes.Parafuso_146.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.081, 6.817, 47.925]} rotation={[-Math.PI / 2, 0, -0.351]} scale={1.517}>
        <mesh geometry={nodes.Parafuso_147.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.955, 7.002, 47.734]} rotation={[-Math.PI / 2, 0, -2.794]} scale={1.517}>
        <mesh geometry={nodes.Rectangle003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.1, 7.925, 47.33]} rotation={[-1.571, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Holder_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.808, 7.925, 48.137]} rotation={[-1.571, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Meade_16_Holder_01_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.484, 7.666, 47.646]} rotation={[-Math.PI / 2, 0, -2.794]} scale={1.517}>
        <mesh geometry={nodes.Alça_019.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.463, 7.925, 47.798]} rotation={[Math.PI, 1.223, 3.142]} scale={1.517}>
        <mesh geometry={nodes.Meade_Carcaça_Fan.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.424, 7.925, 47.784]} rotation={[-3.142, 1.223, -0.785]} scale={[2.14, 1.591, 1.591]}>
        <mesh geometry={nodes.Meade_Carcaça_Fan_Tela.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.507, 7.925, 48.284]} rotation={[Math.PI / 2, 0, -1.918]} scale={1.517}>
        <mesh geometry={nodes.Meade_Encaixe_PrismaOcula.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.434, 7.925, 47.545]} rotation={[-3.142, 1.223, 1.745]} scale={1.517}>
        <mesh geometry={nodes.Meade_Hold_Ocular.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.302, 7.925, 47.634]} rotation={[0, 0.348, -1.571]} scale={1.517}>
        <mesh geometry={nodes.Meade_Corop_Ocular.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.295, 7.925, 47.712]} rotation={[-Math.PI / 2, 0, -2.794]} scale={1.517}>
        <mesh geometry={nodes.Meade_Borda_Borracha_Ocular.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.267, 7.925, 47.732]} rotation={[-Math.PI / 2, 0, -2.794]} scale={1.517}>
        <mesh geometry={nodes.Lente_da_Ocular002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.343, 7.879, 47.499]} rotation={[-Math.PI / 2, 0, -2.009]} scale={1.517}>
        <mesh geometry={nodes.Meade_Espelho_Prisma.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.389, 7.955, 47.468]} rotation={[Math.PI, 0.439, -1.571]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_161.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.434, 7.925, 47.545]} rotation={[-3.142, 1.223, 1.745]} scale={1.517}>
        <mesh geometry={nodes.Meade_Encaixe_Ocular.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.275, 7.958, 47.616]} rotation={[-1.899, 0.727, -2.668]} scale={1.517}>
        <mesh geometry={nodes.Parafuso_Suporte_Objetiva_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.309, 7.971, 47.616]} rotation={[-Math.PI / 2, 0, -2.794]} scale={1.517}>
        <mesh geometry={nodes.Parafuso_Suporte_Objetiva_005_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.498, 8.28, 47.786]} rotation={[0.358, -0.582, -2.579]} scale={1.195}>
        <mesh geometry={nodes.Telescope_MEADE_201.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.62, 7.646, 47.613]} rotation={[3.142, -0.348, -1.571]} scale={1.517}>
        <mesh geometry={nodes.Etiqueta_Tubo_Principal002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.574, 8.279, 47.813]} rotation={[0, -1.223, -0.524]}>
        <mesh geometry={nodes.Meade_16_Buscadora_Holder.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.589, 8.197, 47.804]} rotation={[-0.989, 0.197, -2.853]} scale={1.517}>
        <mesh geometry={nodes.Parafuso_115.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.606, 8.226, 47.757]} rotation={[-1.158, 0.144, -2.824]} scale={1.517}>
        <mesh geometry={nodes.Parafuso_119.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.585, 8.223, 47.782]} rotation={[0, -1.223, -0.524]} scale={[2.287, 1.517, 1.517]}>
        <mesh geometry={nodes.Meade_16_Buscadora_Trilho.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.585, 8.223, 47.782]} rotation={[0, -1.223, -0.524]} scale={[2.287, 1.517, 1.517]}>
        <mesh geometry={nodes.Meade_16_Buscadora_Suporte.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.674, 8.279, 47.802]} rotation={[-1.571, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Buscadora_Parafusos.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.741, 7.925, 47.587]} rotation={[-1.571, 0, -1.223]} scale={1.517}>
        <mesh geometry={nodes.Tubo_Interno002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.673, 8.281, 47.849]} rotation={[0.358, -0.582, -2.579]} scale={1.195}>
        <group scale={0.01}>
          <mesh geometry={nodes.Meade_16_Corpo_Buscadora_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Corpo_Buscadora_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Corpo_Buscadora_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.609, 7.829, 47.391]} rotation={[-3.115, 1.223, -0.029]} scale={[0.762, 0.763, 1.517]}>
        <mesh geometry={nodes.Meade_16_Disco_Altura_Cromado_04.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.523, 8.285, 47.794]} rotation={[0.358, -0.582, -2.579]} scale={1.195}>
        <group scale={0.01}>
          <mesh geometry={nodes.Meade_16_Buscadora_Ocular_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Buscadora_Ocular_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Buscadora_Ocular_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.62, 7.925, 47.613]} rotation={[3.142, -0.348, -1.571]} scale={1.517}>
        <mesh geometry={nodes.Meade_Borda_Rear.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.716, 7.925, 47.42]} rotation={[-1.571, 0, -1.223]} scale={1.517}>
        <mesh geometry={nodes.Espelho_Primário002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.62, 7.646, 47.613]} rotation={[3.142, -0.348, -1.571]} scale={1.517}>
        <group scale={0.01}>
          <mesh geometry={nodes.Meade_Tubo_Principal_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_Tubo_Principal_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.713, 7.925, 47.672]} rotation={[0, -1.223, 0]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_128.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.497, 7.925, 48.267]} rotation={[0, -1.223, -3.142]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_131.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.541, 7.925, 47.937]} rotation={[0, 0.348, 0]} scale={[-1.517, 1.517, 1.517]}>
        <mesh geometry={nodes.Parafuso_154.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.274, 7.925, 47.803]} rotation={[0, 0.348, 1.571]} scale={1.517}>
        <mesh geometry={nodes.Parafuso_180.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.611, 7.808, 47.392]} rotation={[-3.142, 1.229, -1.571]}>
        <mesh geometry={nodes.Meade_16_Botão_Ajuste_Foco_Holder.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.618, 7.925, 47.371]} rotation={[-3.142, 1.223, -0.785]} scale={[2.14, 1.591, 1.591]}>
        <mesh geometry={nodes.Meade_16_Tela_Fan_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.593, 7.757, 47.965]} rotation={[3.142, -0.348, -1.571]} scale={1.517}>
        <mesh geometry={nodes.Meade_Lente_Corretora_Frontal.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.545, 7.877, 47.948]} rotation={[3.142, -0.348, 3.142]} scale={1.517}>
        <mesh geometry={nodes.Espelho_Secundário002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.525, 7.64, 48.117]} rotation={[1.073, 0.171, 2.838]} scale={1.517}>
        <mesh geometry={nodes.Meade_Parafusos_03.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.599, 7.855, 47.967]} rotation={[Math.PI, -0.348, -1.571]} scale={1.517}>
        <mesh geometry={nodes.Meade_Espelho_Int_Front.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.659, 8.199, 47.821]} rotation={[0, -1.223, -1.047]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_129.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.551, 8.199, 48.118]} rotation={[0, -1.223, -2.094]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_130.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.551, 7.651, 48.118]} rotation={[0, -1.223, 2.094]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_132.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.659, 7.651, 47.821]} rotation={[0, -1.223, 1.047]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_133.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.62, 7.646, 47.613]} rotation={[3.142, -0.348, -1.571]} scale={1.517}>
        <mesh geometry={nodes.Meade_Borda_Frontal.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.601, 7.592, 48.088]} rotation={[0, 0.348, 0]} scale={1.517}>
        <group scale={0.01}>
          <mesh geometry={nodes.Meade_16_Plug_03_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Plug_03_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.768, 7.925, 48.248]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Meade_16_Disco_Altura_Cromado_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.822, 7.651, 48.123]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Object014.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.776, 7.727, 48.228]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Parafuso_188.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.822, 7.663, 48.12]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Parafuso_189.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.78, 7.925, 48.216]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Meade_16_Disco_Altura_Black_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.776, 7.921, 48.23]} rotation={[0, 0.346, -1.571]} scale={[-1.517, 1.517, 1.517]}>
        <mesh geometry={nodes.Meade_16_Disco_Altura_Direito_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.779, 7.925, 48.219]} rotation={[0, -1.223, 0]} scale={1.517}>
        <mesh geometry={nodes.Cobertura_Braço_Direito009.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.052, 7.857, 48.27]} rotation={[-Math.PI, -0.348, 0]} scale={1.517}>
        <mesh geometry={nodes.Alças_002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.778, 7.641, 48.219]} rotation={[0, 0.348, 0]} scale={1.517}>
        <mesh geometry={nodes.Meade_16_Placa_Suporte_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.988, 7.551, 48.165]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Meade_16_Parafusos_05.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.102, 7.651, 47.349]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Object014_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.257, 7.551, 47.423]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Parafusos_05_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.141, 7.925, 47.219]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Disco_Altura_Cromado_02_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.134, 7.727, 47.239]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Parafuso_188_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.101, 7.663, 47.351]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Parafuso_189_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.129, 7.925, 47.251]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Disco_Altura_Black_02_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.147, 7.925, 47.203]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Telescope_MEADE_206.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.147, 7.925, 47.203]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Telescope_MEADE_207.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.134, 7.921, 47.237]} rotation={[-3.142, -0.348, -1.571]} scale={1.517}>
        <mesh geometry={nodes.Meade_16_Disco_Altura_Direito_01_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.131, 7.925, 47.248]} rotation={[0, -1.223, 0]} scale={[-1.517, 1.517, 1.517]}>
        <mesh geometry={nodes.Cobertura_Braço_Direito009_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.373, 7.857, 47.383]} rotation={[0, 0.348, Math.PI]} scale={[-1.517, 1.517, 1.517]}>
        <mesh geometry={nodes.Alças_002_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.131, 7.641, 47.247]} rotation={[-Math.PI, -0.348, -Math.PI]} scale={[-1.517, 1.517, 1.517]}>
        <mesh geometry={nodes.Meade_16_Placa_Suporte_02_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.831, 6.817, 47.543]} rotation={[-Math.PI / 2, 0, 2.442]} scale={1.517}>
        <mesh geometry={nodes.Parafuso_149.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.738, 6.817, 47.801]} rotation={[-Math.PI / 2, 0, 0.609]} scale={1.517}>
        <mesh geometry={nodes.Parafuso_148.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.955, 6.772, 47.734]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Montagem_U_Disc.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.931, 7.048, 48.272]} rotation={[Math.PI, -0.348, -Math.PI]} scale={3.347}>
        <group scale={0.01}>
          <mesh geometry={nodes.Meade_16_Plug_02_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Plug_02_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Plug_02_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.166, 6.806, 47.83]} rotation={[-Math.PI / 2, 0, -2.27]} scale={1.517}>
        <mesh geometry={nodes.Trava_Azimute002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.178, 6.802, 47.74]} rotation={[-Math.PI / 2, 0, -1.223]} scale={1.517}>
        <mesh geometry={nodes.Farafusos_Compridos002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.116, 6.802, 48]} rotation={[-Math.PI / 2, 0, -2.794]} scale={1.517}>
        <mesh geometry={nodes.Botão_Ajuste_Azimute002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.762, 7.925, 48.264]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Telescope_MEADE_206_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.762, 7.925, 48.265]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Telescope_MEADE_207_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.582, 7.499, 48.1]} rotation={[Math.PI, -0.348, Math.PI]}>
        <mesh geometry={nodes.Meade_16_Cable_03.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.222, 5.322, 47.529]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1.517, 1.517, 1.517]}>
        <mesh geometry={nodes.Meade_16_Base_Wood.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.149, 6.832, 47.844]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Disc_Controls_Parafuso_Trava.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.385, 6.718, 47.792]} rotation={[-1.297, -0.641, -1.132]} scale={[-1.517, 1.517, 1.517]}>
        <mesh geometry={nodes.Meade_16_Placa_Painel_de_Controle.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.335, 6.699, 48.031]} rotation={[1.849, 0.649, -2.013]} scale={1.517}>
        <mesh geometry={nodes.Conector_Motor_Altura_A002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.346, 6.711, 48.03]} rotation={[Math.PI, -0.348, -2.269]} scale={1.336}>
        <group scale={0.01}>
          <mesh geometry={nodes.Meade_16_Plug_01_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Plug_01_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.355, 6.685, 47.967]} rotation={[-1.292, -0.649, -1.129]} scale={1.517}>
        <mesh geometry={nodes.Meade_16_Conectores_Painel_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.379, 6.698, 47.906]} rotation={[1.849, 0.649, -2.013]} scale={1.517}>
        <mesh geometry={nodes.Meade_16_Conectores_Painel_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.272, 6.75, 48.013]} rotation={[1.185, -0.804, 1.058]} scale={1.517}>
        <mesh geometry={nodes.Led_Interno_Painel_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.265, 6.742, 48.01]} rotation={[-1.292, -0.649, -1.129]} scale={1.517}>
        <mesh geometry={nodes.Luz_Vermelha_Controle005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.445, 6.678, 47.774]} rotation={[-1.292, -0.649, -2.176]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_140.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.357, 6.678, 48.016]} rotation={[-1.292, -0.649, -2.176]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_141.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.265, 6.758, 47.983]} rotation={[-1.292, -0.649, -2.176]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_142.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.352, 6.758, 47.741]} rotation={[-1.292, -0.649, -2.176]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_143.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.302, 6.74, 47.947]} rotation={[-1.292, -0.649, -2.176]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_144.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.313, 6.714, 48.008]} rotation={[-1.292, -0.649, -2.176]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_145.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.281, 6.75, 47.984]} rotation={[-1.305, -0.627, -1.137]} scale={1.517}>
        <mesh geometry={nodes.Vidro_Visor_Corrente002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.308, 6.777, 47.604]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1.337, 1.337, 1.517]}>
        <mesh geometry={nodes.Meade_16_Vidro_Bolha.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.222, 5.333, 47.529]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1.517, 1.517, 1.517]}>
        <mesh geometry={nodes.Meade_16_Base_Principal_Apoio.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.494, 5.165, 47.692]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.054, 1]}>
        <mesh geometry={nodes.Cylinder029.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.478, 5.165, 47.736]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder030.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.461, 5.165, 47.783]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder031.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.444, 5.165, 47.831]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder032.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.427, 5.165, 47.878]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder033.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.41, 5.165, 47.925]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder034.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.393, 5.165, 47.973]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder035.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.375, 5.165, 48.02]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder036.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.358, 5.165, 48.067]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder037.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.342, 5.165, 48.112]} rotation={[-Math.PI / 2, 0, -2.794]} scale={[1, 1.063, 1]}>
        <mesh geometry={nodes.Cylinder038.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.665, 5.165, 47.643]} rotation={[-Math.PI / 2, 0, 0.303]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder058.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.989, 5.165, 48.048]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder046.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.798, 5.165, 47.994]} rotation={[-Math.PI / 2, 0, -1.046]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder050.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.843, 5.165, 48.016]} rotation={[-Math.PI / 2, 0, -1.198]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder049.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.131, 5.165, 48.099]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder043.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.084, 5.165, 48.082]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder044.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.037, 5.165, 48.065]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder045.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.757, 5.165, 47.964]} rotation={[-Math.PI / 2, 0, -0.847]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder051.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.941, 5.165, 48.036]} rotation={[-1.571, 0, -1.527]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder047.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.891, 5.165, 48.03]} rotation={[-Math.PI / 2, 0, -1.363]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder048.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.271, 5.165, 48.108]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder040.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.319, 5.165, 48.125]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder039.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.224, 5.165, 48.091]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder041.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.722, 5.165, 47.928]} rotation={[-Math.PI / 2, 0, -0.701]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder052.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.671, 5.165, 47.842]} rotation={[-Math.PI / 2, 0, -0.366]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder054.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.657, 5.165, 47.794]} rotation={[-Math.PI / 2, 0, -0.204]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder055.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.651, 5.165, 47.744]} rotation={[-Math.PI / 2, 0, -0.028]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder056.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.654, 5.165, 47.694]} rotation={[-Math.PI / 2, 0, 0.12]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder057.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.693, 5.165, 47.887]} rotation={[-Math.PI / 2, 0, -0.525]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder053.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.178, 5.165, 48.094]} rotation={[-Math.PI / 2, 0, -2.009]} scale={[1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder042.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.485, 5.165, 47.666]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder059.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.438, 5.165, 47.649]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder060.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.277, 5.165, 47.549]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder064.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.23, 5.165, 47.532]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder065.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.183, 5.165, 47.515]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder066.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.138, 5.165, 47.493]} rotation={[-1.571, 0, -0.919]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder067.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.096, 5.165, 47.466]} rotation={[-Math.PI / 2, 0, -1.084]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder068.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.05, 5.165, 47.446]} rotation={[-Math.PI / 2, 0, -1.249]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder069.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.001, 5.165, 47.434]} rotation={[-Math.PI / 2, 0, -1.4]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder070.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.951, 5.165, 47.431]} rotation={[-Math.PI / 2, 0, -1.599]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder071.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.901, 5.165, 47.436]} rotation={[-Math.PI / 2, 0, -1.745]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder072.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.852, 5.165, 47.449]} rotation={[-Math.PI / 2, 0, -1.922]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder073.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.806, 5.165, 47.469]} rotation={[-Math.PI / 2, 0, -2.08]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder074.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.765, 5.165, 47.497]} rotation={[-Math.PI / 2, 0, -2.242]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder075.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.728, 5.165, 47.532]} rotation={[-Math.PI / 2, 0, -2.418]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder076.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.698, 5.165, 47.572]} rotation={[-Math.PI / 2, 0, -2.567]} scale={[-1, 1.323, 1]}>
        <mesh geometry={nodes.Cylinder077.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.53, 6.481, 47.973]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Key_Pad_Indicator_Circle.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.446, 6.611, 47.984]} rotation={[Math.PI / 2, 0, -0.348]} scale={1.517}>
        <mesh geometry={nodes.Meade_16_Alça_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.66, 6.63, 47.557]} rotation={[Math.PI / 2, 0, 2.794]} scale={1.517}>
        <mesh geometry={nodes.Meade_16_Alça_01_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.213, 6.013, 48.543]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Cable_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.987, 6.013, 49.166]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <mesh geometry={nodes.Meade_16_Cable_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.285, 6.776, 47.562]} rotation={[-Math.PI / 2, 0, -2.27]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_137.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.264, 6.776, 47.62]} rotation={[-Math.PI / 2, 0, -2.27]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_138.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.351, 6.776, 47.619]} rotation={[-Math.PI / 2, 0, -2.27]} scale={[0.762, 0.762, 1.517]}>
        <mesh geometry={nodes.Parafuso_139.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.308, 6.777, 47.604]} rotation={[-Math.PI / 2, 0, -1.223]} scale={[1.337, 1.337, 1.517]}>
        <mesh geometry={nodes.Borda_Bolha002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.492, 6.609, 47.935]} rotation={[Math.PI, -0.348, Math.PI]} scale={1.517}>
        <mesh geometry={nodes.Gancho_Controle001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.522, 6.573, 47.939]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Meade_16_Control_Pad001_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Meade_16_Control_Pad001_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.52, 6.623, 47.945]} rotation={[-Math.PI / 2, 0, -1.223]} scale={1.517}>
        <mesh geometry={nodes.Luz_Vermelha_Controle002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.54, 6.556, 47.945]} rotation={[-Math.PI / 2, 0, -1.223]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Controle_Botões_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Controle_Botões_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.344, 6.486, 47.378]} rotation={[Math.PI / 2, 0, -1.395]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.68, 6.581, 47.26]} rotation={[-Math.PI / 2, 0, -0.7]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.196, 6.486, 47.785]} rotation={[Math.PI / 2, 0, -1.395]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.441, 6.486, 47.921]} rotation={[Math.PI / 2, 0, -1.395]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.344, 6.511, 47.378]} rotation={[Math.PI / 2, 0, -1.395]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.619, 6.511, 47.43]} rotation={[Math.PI / 2, 0, -1.395]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.405, 6.581, 47.208]} rotation={[-Math.PI / 2, 0, -0.7]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.196, 6.511, 47.785]} rotation={[Math.PI / 2, 0, -1.395]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.441, 6.511, 47.921]} rotation={[Math.PI / 2, 0, -1.395]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.619, 6.486, 47.43]} rotation={[Math.PI / 2, 0, -1.395]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.502, 6.581, 47.751]} rotation={[-Math.PI / 2, 0, -0.7]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.258, 6.581, 47.615]} rotation={[-Math.PI / 2, 0, -0.7]} scale={[2.28, 2.28, 1.517]}>
        <mesh geometry={nodes.Parafuso_168_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.528, 7.808, 47.362]} rotation={[0, -1.223, 0]}>
        <mesh geometry={nodes.Meade_16_Botão_Ajuste_Foco.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[4.385, -0.044, 50.466]} rotation={[-Math.PI / 2, 0, -1.797]}>
        <mesh geometry={nodes.AstroShop_Windows_Marble.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-27.042, 3.284, 34.2]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Aquario_Int_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-26.816, 3.622, 34.209]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Aquario_Testeira_Metal.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-30.523, 2.438, 44.403]} rotation={[0, -1.223, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_047.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-32.032, 3.47, 41.774]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Plane008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.145, 1.123, 41.322]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Object054.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.078, 1.123, 41.332]} rotation={[-Math.PI / 2, 0, 2.753]}>
        <mesh geometry={nodes.Object053.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-36.078, 1.123, 40.121]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Object052.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-32.032, 1.174, 41.774]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Plane004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-34.189, 1.174, 40.891]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Plane004_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-34.971, 1.174, 40.571]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Plane004_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-37.128, 1.174, 39.687]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Plane004_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-36.01, 1.123, 40.131]} rotation={[-Math.PI / 2, 0, 2.753]}>
        <mesh geometry={nodes.Object050.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-32.704, 2.764, 41.509]} rotation={[-Math.PI, -1.182, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_048.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-36.463, 2.764, 39.97]} rotation={[0, 1.182, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_048_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-34.665, 2.741, 40.686]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Rectangle518.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.512, 3.47, 41.168]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Plane009.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-32.735, 3.47, 41.486]} rotation={[0, -0.389, 0]}>
        <mesh geometry={nodes.Plane010.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-37.127, 3.47, 39.688]} rotation={[0, -0.389, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Plane011.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-35.648, 3.47, 40.294]} rotation={[0, -0.389, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Plane012.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-36.424, 3.47, 39.975]} rotation={[0, -0.389, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Plane013.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-34.585, 1.562, 40.743]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.923, 1.561, 42.948]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Object047.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.926, 1.562, 42.957]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Object046.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.926, 1.561, 42.956]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Object045.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.926, 1.562, 42.957]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Object049.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-21.443, 1.85, 24.945]} rotation={[Math.PI, -0.223, Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Aquario_Fixed_Windwos_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Aquario_Fixed_Windwos_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-21.443, 1.85, 24.945]} rotation={[Math.PI, -0.223, Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Glass_Door_Aquario_013_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Glass_Door_Aquario_013_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-20.218, 1.815, 24.672]} rotation={[-Math.PI / 2, 0, 0.224]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_Holder_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-21.445, 1.85, 24.938]} rotation={[0, 0.224, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-21.846, 1.815, 25.04]} rotation={[-Math.PI / 2, 0, 0.223]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_Holder_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-23.074, 1.85, 25.305]} rotation={[0, 0.223, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.38, 1.85, 26.141]} rotation={[0, 0.374, 0]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Glass_Door_Aquario_004_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Glass_Door_Aquario_004_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-26.888, 1.85, 26.732]} rotation={[0, 0.374, 0]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Glass_Door_Aquario_005_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Glass_Door_Aquario_005_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-28.008, 1.815, 27.385]} rotation={[-Math.PI / 2, 0, 0.587]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_Holder_003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-29.061, 1.85, 28.07]} rotation={[0, 0.588, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_007.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-29.395, 1.815, 28.31]} rotation={[-Math.PI / 2, 0, 0.589]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_Holder_004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-30.447, 1.85, 28.997]} rotation={[0, 0.589, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-31.386, 1.815, 29.81]} rotation={[-Math.PI / 2, 0, 0.76]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_Holder_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-32.305, 1.85, 30.666]} rotation={[0, 0.761, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_009.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-32.594, 1.815, 30.959]} rotation={[-Math.PI / 2, 0, 0.76]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_Holder_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-33.512, 1.85, 31.815]} rotation={[0, 0.761, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_Aquario_010.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-35.01, 1.85, 33.853]} rotation={[0, 0.976, 0]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Glass_Door_Aquario_011_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Glass_Door_Aquario_011_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-35.917, 1.85, 35.194]} rotation={[0, 0.976, 0]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Glass_Door_Aquario_012_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Glass_Door_Aquario_012_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-22.161, 1.85, 26.451]} rotation={[Math.PI, -0.223, Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Glass_Door_Aquario_014_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Glass_Door_Aquario_014_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-27.116, 2.74, 26.8]} rotation={[Math.PI, -0.59, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle527.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-23.252, 2.74, 25.333]} rotation={[Math.PI, -0.374, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle526.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.174, 2.74, 24.445]} rotation={[Math.PI, -0.223, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Rectangle525.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.479, 0, 52.311]} rotation={[-Math.PI / 2, 0, -0.22]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Box002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.036, 1.072, 52.219]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Glass_Door_A_016.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.479, 1.072, 52.318]} rotation={[-Math.PI / 2, 0, -0.22]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_A_017.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.038, 1.072, 52.22]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Glass_Door_A_Trinco005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.427, 1.072, 52.307]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Glass_Door_A_Wood_Handle_006.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.149, 1.072, 50.392]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Glass_Door_A_012.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.149, 1.072, 50.392]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Glass_Door_A_Trinco004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.795, 1.072, 50.471]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Glass_Door_A_Wood_Handle_005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.494, 1.072, 50.538]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Glass_Door_A_013.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.795, 1.072, 50.471]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Object040.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.834, 1.072, 50.463]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Glass_Door_A_014.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.65, 1.709, 50.718]} rotation={[Math.PI, 0.209, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_027.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.65, 1.709, 50.718]} rotation={[Math.PI, 0.209, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_035.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.65, 2.076, 50.718]} rotation={[Math.PI, 0.209, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_027.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.961, 2.428, 50.851]} rotation={[0, 1.362, 1.571]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_027.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.761, 1.709, 50.917]} rotation={[Math.PI, 0.209, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_027_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.761, 1.709, 50.917]} rotation={[Math.PI, 0.209, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_035_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.761, 2.076, 50.917]} rotation={[Math.PI, 0.209, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_027_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.072, 2.428, 51.049]} rotation={[0, 1.362, 1.571]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_027_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.875, 1.709, 51.121]} rotation={[Math.PI, 0.209, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_027_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.875, 1.709, 51.121]} rotation={[Math.PI, 0.209, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_035_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.875, 2.076, 51.121]} rotation={[Math.PI, 0.209, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_027_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.186, 2.428, 51.253]} rotation={[0, 1.362, 1.571]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_027_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.963, 2.076, 52.726]} rotation={[Math.PI, -1.052, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_027_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.963, 1.709, 52.726]} rotation={[Math.PI, -1.052, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_035_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.963, 1.709, 52.726]} rotation={[Math.PI, -1.052, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_027_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.626, 2.428, 52.11]} rotation={[Math.PI, 0.518, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_027_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.515, 2.076, 51.865]} rotation={[Math.PI, -1.155, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_027_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.515, 1.709, 51.865]} rotation={[Math.PI, -1.155, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_035_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.515, 1.709, 51.865]} rotation={[Math.PI, -1.155, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_027_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.244, 2.428, 51.218]} rotation={[Math.PI, 0.416, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_027_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[1.805, 1.709, 57.482]} rotation={[0, 1.068, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_035_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[1.805, 1.709, 57.482]} rotation={[0, 1.068, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_027_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[1.805, 2.076, 57.482]} rotation={[0, 1.068, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_027_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[1.478, 2.428, 58.103]} rotation={[0, -0.503, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_027_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[2.425, 1.709, 56.276]} rotation={[0, 1.144, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_035_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[2.425, 1.709, 56.276]} rotation={[0, 1.144, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_027_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[2.425, 2.076, 56.276]} rotation={[0, 1.144, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_027_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[2.146, 2.428, 56.92]} rotation={[0, -0.427, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_027_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[2.983, 1.709, 54.951]} rotation={[0, 1.214, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_035_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[2.983, 1.709, 54.951]} rotation={[0, 1.214, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_027_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[2.983, 2.076, 54.951]} rotation={[0, 1.214, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_027_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[2.75, 2.428, 55.612]} rotation={[0, -0.357, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_027_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.411, 1.709, 53.667]} rotation={[0, 1.279, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_027_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.411, 1.709, 53.667]} rotation={[0, 1.279, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_035_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.411, 2.076, 53.667]} rotation={[0, 1.279, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_027_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[3.222, 2.428, 54.342]} rotation={[0, -0.292, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_027_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.11, 0, 56.125]} rotation={[-Math.PI / 2, 0, 2.549]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Box005.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.73, 1.072, 56.371]} rotation={[-Math.PI / 2, 0, 2.549]}>
        <mesh geometry={nodes.Glass_Door_A_022.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.107, 1.072, 56.118]} rotation={[-Math.PI / 2, 0, 2.549]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_A_023.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-2.732, 1.072, 56.37]} rotation={[-Math.PI / 2, 0, 2.549]}>
        <mesh geometry={nodes.Glass_Door_A_Trinco008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.062, 1.072, 56.148]} rotation={[-Math.PI / 2, 0, 2.549]}>
        <mesh geometry={nodes.Glass_Door_A_Wood_Handle_009.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[0.743, 0, 58.712]} rotation={[-Math.PI / 2, 0, 2.55]}>
        <mesh geometry={nodes.Box005_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[0.371, 1.072, 58.454]} rotation={[-Math.PI / 2, 0, 2.55]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_A_022_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[0.748, 1.072, 58.707]} rotation={[-Math.PI / 2, 0, 2.55]}>
        <mesh geometry={nodes.Glass_Door_A_023_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[0.373, 1.072, 58.455]} rotation={[-Math.PI / 2, 0, 2.55]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_A_Trinco008_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[0.703, 1.072, 58.677]} rotation={[-Math.PI / 2, 0, 2.55]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_A_Wood_Handle_009_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.924, 0.5, 38.623]} rotation={[-Math.PI / 2, 0, 1.318]}>
        <mesh geometry={nodes.Banheiros_Windows_Marble.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.782, 0, 47.555]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Banheiros_Int_Wall.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.937, 0, 31.156]} rotation={[-Math.PI / 2, 0, -0.111]}>
        <mesh geometry={nodes.CEU_Banheiros_Floor.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.937, 2.98, 31.156]} rotation={[-Math.PI / 2, 0, -0.111]}>
        <mesh geometry={nodes.CEU_Banheiros_Roof.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.782, 0.02, 47.555]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Banheiros_Rodape.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.785, 0, 36.994]} rotation={[-Math.PI / 2, 0, -0.366]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Banheiros_Wall_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Banheiros_Wall_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Banheiros_Wall_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-7.582, 2.126, 32.052]} rotation={[Math.PI, 0.494, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_052.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.582, 2.126, 32.052]} rotation={[Math.PI, 0.494, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_060.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.582, 2.126, 32.052]} rotation={[Math.PI, 0.494, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_052.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.959, 2.48, 32.373]} rotation={[0, 1.077, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_046.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.945, 2.127, 31.376]} rotation={[Math.PI, 0.41, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_052_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.945, 2.127, 31.376]} rotation={[Math.PI, 0.41, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_060_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.945, 2.127, 31.376]} rotation={[Math.PI, 0.41, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_052_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.296, 2.48, 31.643]} rotation={[0, 1.161, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_046_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.925, 2.126, 30.218]} rotation={[Math.PI, 0.17, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_052_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.925, 2.126, 30.218]} rotation={[Math.PI, 0.17, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_060_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.925, 2.126, 30.218]} rotation={[Math.PI, 0.17, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_052_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.231, 2.48, 30.324]} rotation={[0, 1.401, Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_046_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.855, 2.126, 32.387]} rotation={[Math.PI, -1.459, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_049.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.855, 2.126, 32.387]} rotation={[Math.PI, -1.459, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_057.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.855, 2.126, 32.387]} rotation={[Math.PI, -1.459, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_049.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.79, 2.48, 31.689]} rotation={[Math.PI, 0.111, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_043.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.971, 2.126, 33.503]} rotation={[Math.PI, -1.459, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_049_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.971, 2.126, 33.503]} rotation={[Math.PI, -1.459, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_057_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.971, 2.126, 33.503]} rotation={[Math.PI, -1.459, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_049_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.907, 2.48, 32.805]} rotation={[Math.PI, 0.111, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_043_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.092, 2.126, 34.526]} rotation={[Math.PI, -1.459, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_049_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.092, 2.126, 34.526]} rotation={[Math.PI, -1.459, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_057_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.092, 2.126, 34.526]} rotation={[Math.PI, -1.459, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_049_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.027, 2.48, 33.828]} rotation={[Math.PI, 0.111, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_043_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.457, 2.126, 36.689]} rotation={[0, 0.969, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_049_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.049, 2.48, 36.118]} rotation={[Math.PI, 0.602, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_043_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.457, 2.126, 36.689]} rotation={[0, 0.969, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_049_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.457, 2.126, 36.689]} rotation={[0, 0.969, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_057_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.879, 2.126, 35.836]} rotation={[0, 0.969, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_049_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.879, 2.126, 35.836]} rotation={[0, 0.969, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_057_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.879, 2.126, 35.836]} rotation={[0, 0.969, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_049_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.471, 2.48, 35.265]} rotation={[Math.PI, 0.602, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_043_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.241, 2.126, 34.916]} rotation={[0, 0.969, 0]}>
        <mesh geometry={nodes.Glass_Window_Down_049_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.241, 2.126, 34.916]} rotation={[0, 0.969, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_057_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.241, 2.126, 34.916]} rotation={[0, 0.969, 0]}>
        <mesh geometry={nodes.Glass_Window_Up_049_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.833, 2.48, 34.345]} rotation={[Math.PI, 0.602, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_043_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.515, 1.561, 24.475]} rotation={[Math.PI, 0.667, -Math.PI]}>
        <mesh geometry={nodes.Object075.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.03, 3.47, 26.418]} rotation={[-Math.PI, 1.403, Math.PI]}>
        <mesh geometry={nodes.Plane044.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.61, 1.561, 23.944]} rotation={[Math.PI, 0.667, -Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object072_4.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Object072_5.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-18.882, 1.123, 27.373]} rotation={[-Math.PI / 2, 0, -1.403]}>
        <mesh geometry={nodes.Object073.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.855, 1.123, 27.435]} rotation={[-Math.PI / 2, 0, 1.738]}>
        <mesh geometry={nodes.Object074.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.591, 1.561, 24.113]} rotation={[Math.PI, 0.667, -Math.PI]}>
        <mesh geometry={nodes.Object077.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.697, 3.47, 28.389]} rotation={[Math.PI, 1.403, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Plane044_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.802, 3.47, 27.767]} rotation={[Math.PI, 1.403, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Plane040.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.121, 2.74, 25.93]} rotation={[Math.PI, 1.403, -Math.PI]}>
        <mesh geometry={nodes.Rectangle521.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.543, 1.561, 30.258]} rotation={[0, 1.002, 0]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object072_4.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Object072_5.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-19.114, 1.561, 25.839]} rotation={[-Math.PI / 2, 0, 2.474]}>
        <mesh geometry={nodes.Plane036.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.591, 1.561, 24.113]} rotation={[Math.PI, 0.667, -Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object071_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Object071_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.768, 1.561, 28.983]} rotation={[Math.PI, 0.667, -Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object071_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Object071_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.787, 1.561, 28.814]} rotation={[Math.PI, 0.667, -Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object072_4.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Object072_5.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-18.059, 1.123, 32.243]} rotation={[-Math.PI / 2, 0, -1.403]}>
        <mesh geometry={nodes.Object073_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.032, 1.123, 32.305]} rotation={[-Math.PI / 2, 0, 1.738]}>
        <mesh geometry={nodes.Object074_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.692, 1.561, 29.344]} rotation={[Math.PI, 0.667, -Math.PI]}>
        <mesh geometry={nodes.Object075_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.72, 1.561, 35.128]} rotation={[0, 1.002, 0]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object072_4.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Object072_5.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.768, 1.561, 28.983]} rotation={[Math.PI, 0.667, -Math.PI]}>
        <mesh geometry={nodes.Object077_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.291, 1.561, 30.709]} rotation={[-Math.PI / 2, 0, 2.474]}>
        <mesh geometry={nodes.Plane036_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.874, 3.47, 33.259]} rotation={[Math.PI, 1.403, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Plane044_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.979, 3.47, 32.637]} rotation={[Math.PI, 1.403, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Plane040_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.207, 3.47, 31.287]} rotation={[-Math.PI, 1.403, Math.PI]}>
        <mesh geometry={nodes.Plane044_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.299, 2.74, 30.8]} rotation={[Math.PI, 1.403, -Math.PI]}>
        <mesh geometry={nodes.Rectangle521_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.585, 1.561, 36.269]} rotation={[0, 1.084, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object092_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Object092_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.422, 1.561, 36.22]} rotation={[0, 1.084, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object093_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Object093_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-20.023, 1.123, 35.583]} rotation={[-Math.PI / 2, 0, -2.794]}>
        <mesh geometry={nodes.Object094.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-20.08, 1.123, 35.621]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Object095.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.927, 1.561, 36.408]} rotation={[0, 1.084, 0]}>
        <mesh geometry={nodes.Object096.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-22.443, 1.561, 38.402]} rotation={[0, -0.389, 0]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object093_2.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Object093_3.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-16.585, 1.561, 36.269]} rotation={[0, 1.084, 0]}>
        <mesh geometry={nodes.Object098.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.556, 1.561, 35.08]} rotation={[-Math.PI / 2, 0, 1.084]}>
        <mesh geometry={nodes.Plane053.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-20.99, 3.47, 35.947]} rotation={[0, 0.348, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Plane054.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-20.397, 3.47, 35.733]} rotation={[0, 0.348, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Plane055.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.11, 3.47, 35.266]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Plane054_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.647, 2.74, 35.089]} rotation={[0, 0.348, 0]}>
        <mesh geometry={nodes.Rectangle524.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.317, 1.072, 44.452]} rotation={[-Math.PI / 2, 0, 0.754]}>
        <mesh geometry={nodes.Glass_Door_CEU_Rotate_Suporte.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.989, 0.035, 47.739]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Anfi_Wall_Rodape.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-26.028, 0.035, 51.381]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Planetario_Wall_Rodape.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.767, 0.035, 51.288]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.CEU_Int_Rodape.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.021, 1.072, 51.314]} rotation={[-Math.PI / 2, 0, -0.22]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_A_Trinco001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.029, 1.072, 51.312]} rotation={[-Math.PI / 2, 0, -0.22]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Object041.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.019, 1.072, 51.314]} rotation={[-Math.PI / 2, 0, -0.22]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Door_A_Wood_Handle_001_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.058, 0, 51.298]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Box001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.089, 1.072, 51.299]} rotation={[-Math.PI / 2, 0, -0.22]}>
        <mesh geometry={nodes.Glass_Door_A_014_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-1.019, 1.072, 51.314]} rotation={[-Math.PI / 2, 0, -0.22]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Obj_Glass_Door_A_001_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.395, 1.754, 61.418]} rotation={[Math.PI, -1.428, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_011.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.395, 1.754, 61.418]} rotation={[Math.PI, -1.428, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_011.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.395, 2.689, 61.418]} rotation={[Math.PI, -1.428, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.308, 3.043, 60.722]} rotation={[Math.PI, 0.143, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.525, 1.754, 62.379]} rotation={[Math.PI, -1.437, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_011_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.525, 1.754, 62.379]} rotation={[Math.PI, -1.437, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.525, 2.689, 62.379]} rotation={[Math.PI, -1.437, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.444, 3.043, 61.682]} rotation={[Math.PI, 0.134, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.862, 1.754, 64.867]} rotation={[Math.PI, -1.433, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_011_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.862, 1.754, 64.867]} rotation={[Math.PI, -1.433, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.862, 2.689, 64.867]} rotation={[Math.PI, -1.433, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.779, 3.043, 64.17]} rotation={[Math.PI, 0.138, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.733, 1.754, 63.916]} rotation={[Math.PI, -1.421, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_011_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.733, 1.754, 63.916]} rotation={[Math.PI, -1.421, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.733, 2.689, 63.916]} rotation={[Math.PI, -1.421, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.642, 3.043, 63.22]} rotation={[Math.PI, 0.15, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.262, 1.754, 56.159]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_011_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.262, 1.754, 56.159]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.262, 2.689, 56.159]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_011_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.762, 3.043, 55.667]} rotation={[Math.PI, -0.812, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.177, 1.754, 59.813]} rotation={[Math.PI, -1.433, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_011_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.177, 1.754, 59.813]} rotation={[Math.PI, -1.433, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.177, 2.689, 59.813]} rotation={[Math.PI, -1.433, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.094, 3.043, 59.116]} rotation={[Math.PI, 0.138, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.989, 1.754, 55.473]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_011_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.989, 1.754, 55.473]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.989, 2.689, 55.473]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_011_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.489, 3.043, 54.981]} rotation={[Math.PI, -0.812, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.047, 1.754, 58.851]} rotation={[Math.PI, -1.433, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_011_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.047, 1.754, 58.851]} rotation={[Math.PI, -1.433, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.047, 2.689, 58.851]} rotation={[Math.PI, -1.433, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.964, 3.043, 58.155]} rotation={[Math.PI, 0.138, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.673, 2.689, 54.827]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_011_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-9.173, 3.043, 54.335]} rotation={[Math.PI, -0.812, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.673, 1.754, 54.827]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_011_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-8.673, 1.754, 54.827]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.531, 1.754, 58.743]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_011_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.531, 1.754, 58.743]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.531, 2.689, 58.743]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_011_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.031, 3.043, 58.251]} rotation={[Math.PI, -0.812, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_9.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.851, 1.754, 57.49]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_011_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.851, 1.754, 57.49]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-5.851, 2.689, 57.49]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_011_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.351, 3.043, 56.998]} rotation={[Math.PI, -0.812, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_10.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.821, 1.754, 59.404]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_011_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.821, 1.754, 59.404]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-3.821, 2.689, 59.404]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_011_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-4.321, 3.043, 58.912]} rotation={[Math.PI, -0.812, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_11.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.557, 1.754, 56.825]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_011_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.557, 1.754, 56.825]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-6.557, 2.689, 56.825]} rotation={[Math.PI, 0.759, -Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_011_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.057, 3.043, 56.332]} rotation={[Math.PI, -0.812, Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_12.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-20.898, 1.754, 57.022]} rotation={[0, -0.476, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_011_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-20.898, 1.754, 57.022]} rotation={[0, -0.476, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-20.898, 2.689, 57.022]} rotation={[0, -0.476, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-21.528, 3.043, 56.713]} rotation={[Math.PI, -1.095, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_13.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.964, 1.754, 58.092]} rotation={[0, -0.204, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_011_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.964, 1.754, 58.092]} rotation={[0, -0.204, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_011_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.964, 2.689, 58.092]} rotation={[0, -0.204, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.653, 3.043, 57.963]} rotation={[Math.PI, -1.367, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_011_14.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-26.37, 1.599, 57.311]} rotation={[0, -0.102, 0]}>
        <mesh geometry={nodes.Glass_Window_Small_001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-26.397, 1.599, 57.308]} rotation={[0, -0.102, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_017.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-27.333, 1.599, 57.132]} rotation={[0, -0.262, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_017_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-27.307, 1.599, 57.139]} rotation={[0, -0.262, 0]}>
        <mesh geometry={nodes.Glass_Window_Small_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-30.269, 1.599, 55.327]} rotation={[0, -0.843, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_017_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-30.251, 1.599, 55.347]} rotation={[0, -0.843, 0]}>
        <mesh geometry={nodes.Glass_Window_Small_001_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-30.834, 1.599, 54.592]} rotation={[0, -0.99, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_017_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-30.819, 1.599, 54.615]} rotation={[0, -0.99, 0]}>
        <mesh geometry={nodes.Glass_Window_Small_001_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-31.818, 1.599, 51.332]} rotation={[0, -1.557, 0]}>
        <mesh geometry={nodes.Glass_Window_Frame_017_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-31.818, 1.599, 51.36]} rotation={[0, -1.557, 0]}>
        <mesh geometry={nodes.Glass_Window_Small_001_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-31.753, 1.599, 50.394]} rotation={[Math.PI, -1.43, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_017_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-31.757, 1.599, 50.421]} rotation={[Math.PI, -1.43, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Small_001_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-30.308, 1.599, 47.281]} rotation={[Math.PI, -0.859, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_017_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-30.326, 1.599, 47.301]} rotation={[Math.PI, -0.859, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Small_001_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-29.636, 1.599, 46.627]} rotation={[Math.PI, -0.7, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_017_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-29.657, 1.599, 46.645]} rotation={[Math.PI, -0.7, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Small_001_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.283, 1.754, 44.334]} rotation={[Math.PI, -1.232, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_017.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.283, 1.754, 44.334]} rotation={[Math.PI, -1.232, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_025.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.283, 2.689, 44.334]} rotation={[Math.PI, -1.232, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_15.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-25.063, 3.043, 43.667]} rotation={[Math.PI, 0.338, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_017.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.907, 1.754, 43.45]} rotation={[Math.PI, -1.132, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_017_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.907, 1.754, 43.45]} rotation={[Math.PI, -1.132, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_025_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.907, 2.689, 43.45]} rotation={[Math.PI, -1.132, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_16.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.621, 3.043, 42.81]} rotation={[Math.PI, 0.439, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_017_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.457, 1.754, 42.61]} rotation={[Math.PI, -1.032, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_017_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.457, 1.754, 42.61]} rotation={[Math.PI, -1.032, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_025_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.457, 2.689, 42.61]} rotation={[Math.PI, -1.032, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_17.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-24.109, 3.043, 42.001]} rotation={[Math.PI, 0.539, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_017_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-23.937, 1.754, 41.802]} rotation={[Math.PI, -0.952, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_017_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-23.937, 1.754, 41.802]} rotation={[Math.PI, -0.952, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_025_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-23.937, 2.689, 41.802]} rotation={[Math.PI, -0.952, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_18.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-23.541, 3.043, 41.223]} rotation={[Math.PI, 0.619, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_017_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-23.335, 1.754, 41.052]} rotation={[Math.PI, -0.848, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_017_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-23.335, 1.754, 41.052]} rotation={[Math.PI, -0.848, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_025_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-23.335, 2.689, 41.052]} rotation={[Math.PI, -0.848, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_19.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-22.88, 3.043, 40.517]} rotation={[Math.PI, 0.723, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_017_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-22.662, 1.754, 40.369]} rotation={[Math.PI, -0.745, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Down_017_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-22.662, 1.754, 40.369]} rotation={[Math.PI, -0.745, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Frame_025_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-22.662, 2.689, 40.369]} rotation={[Math.PI, -0.745, -Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_011_20.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-22.156, 3.043, 39.884]} rotation={[Math.PI, 0.826, -Math.PI / 2]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_017_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.584, 1.754, 39.991]} rotation={[Math.PI, -0.218, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_023.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.584, 1.754, 39.991]} rotation={[Math.PI, -0.218, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_031.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.584, 2.689, 39.991]} rotation={[Math.PI, -0.218, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_023.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.272, 3.043, 40.13]} rotation={[0, -1.353, -Math.PI / 2]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_023.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.604, 1.754, 39.829]} rotation={[Math.PI, -0.095, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Down_023_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.604, 1.754, 39.829]} rotation={[Math.PI, -0.095, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Frame_031_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.604, 2.689, 39.829]} rotation={[Math.PI, -0.095, Math.PI]}>
        <mesh geometry={nodes.Glass_Window_Up_023_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.304, 3.043, 39.882]} rotation={[0, -1.476, -1.571]}>
        <mesh geometry={nodes.Glass_Window_Up_Trava_023_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.943, 47.745]} rotation={[-Math.PI / 2, 0, 1.535]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_007_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-20.622, 4.732, 47.861]} rotation={[Math.PI, 1.53, -1.571]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_Suporte_004_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.943, 47.745]} rotation={[-Math.PI / 2, 0, 2.106]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_007_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.823, 4.732, 50.35]} rotation={[Math.PI, 0.958, -Math.PI / 2]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_Suporte_004_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.943, 47.745]} rotation={[-Math.PI / 2, 0, 2.687]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_007_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.766, 4.732, 52.028]} rotation={[Math.PI, 0.378, -Math.PI / 2]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_Suporte_004_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.943, 47.745]} rotation={[-Math.PI / 2, 0, -3.02]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_007_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.145, 4.732, 52.307]} rotation={[Math.PI, -0.198, -Math.PI / 2]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_Suporte_004_4.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.943, 47.745]} rotation={[-Math.PI / 2, 0, -2.448]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_007_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-12.809, 4.732, 51.126]} rotation={[Math.PI, -0.77, -Math.PI / 2]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_Suporte_004_5.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.943, 47.745]} rotation={[-Math.PI / 2, 0, -1.876]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_007_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.484, 4.732, 48.869]} rotation={[Math.PI, -1.342, -Math.PI / 2]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_Suporte_004_6.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.943, 47.745]} rotation={[-Math.PI / 2, 0, -1.294]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_007_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.607, 4.732, 46.21]} rotation={[0, -1.218, Math.PI / 2]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_Suporte_004_7.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 4.943, 47.745]} rotation={[-Math.PI / 2, 0, -0.719]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_033.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.145, 4.732, 44.077]} rotation={[0, -0.643, Math.PI / 2]}>
        <mesh geometry={nodes.Cupula_Wood_Chair_Suporte_004_8.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.909, 5.166, 46.926]} rotation={[-Math.PI / 2, 0, 1.92]}>
        <mesh geometry={nodes.Wood_Stair_Degrau.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.36, 6.755, 47.093]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Wood_Stairs_Corrimão.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.98, 5.331, 47.319]} rotation={[Math.PI, -Math.PI / 9, 2.007]}>
        <mesh geometry={nodes.Wood_Stair_Coluna_Corrimão.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.112, 5.091, 46.961]} rotation={[-Math.PI / 2, 0, Math.PI / 9]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Wood_Stair_Coluna_Down.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.789, 4.988, 46.844]} rotation={[0.938, -1.019, 2.431]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Wood_Stair_Coluna_Back.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.831, 5.176, 47.245]} rotation={[Math.PI, -Math.PI / 9, Math.PI]} scale={[0.744, 0.744, 0.753]}>
        <mesh geometry={nodes.Wood_Stairs_Capinhas.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.529, 5.656, 46.449]} rotation={[0, Math.PI / 9, 0]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Wood_Stair_Coluna_V_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.864, 5.089, 46.862]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Espessamento002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.864, 5.089, 46.862]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Chanfro003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.864, 5.089, 46.862]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes['Corte-extrusão003'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.864, 5.089, 46.862]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Filete003.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.864, 5.089, 46.862]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Chanfro004.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.065, 5.089, 46.309]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Espessamento002_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.065, 5.089, 46.309]} rotation={[Math.PI, 0.087, Math.PI]}>
        <mesh geometry={nodes['Corte-extrusão003_1'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.065, 5.089, 46.309]} rotation={[Math.PI, 0.087, Math.PI]}>
        <mesh geometry={nodes.Filete003_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.065, 5.089, 46.309]} rotation={[Math.PI, 0.087, Math.PI]}>
        <mesh geometry={nodes.Chanfro004_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.065, 5.089, 46.309]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Chanfro003_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.831, 5.089, 47.214]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Espessamento002_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.831, 5.089, 47.214]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Chanfro003_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.831, 5.089, 47.214]} rotation={[Math.PI, -0.175, Math.PI]}>
        <mesh geometry={nodes['Corte-extrusão003_2'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.831, 5.089, 47.214]} rotation={[Math.PI, -0.175, Math.PI]}>
        <mesh geometry={nodes.Filete003_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-16.831, 5.089, 47.214]} rotation={[Math.PI, -0.175, Math.PI]}>
        <mesh geometry={nodes.Chanfro004_2.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.032, 5.089, 46.661]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Espessamento002_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.032, 5.089, 46.661]} rotation={[Math.PI, -Math.PI / 9, Math.PI]}>
        <mesh geometry={nodes.Chanfro003_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.032, 5.089, 46.661]} rotation={[Math.PI, -0.96, Math.PI]}>
        <mesh geometry={nodes['Corte-extrusão003_3'].geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.032, 5.089, 46.661]} rotation={[Math.PI, -0.96, Math.PI]}>
        <mesh geometry={nodes.Filete003_3.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-17.032, 5.089, 46.661]} rotation={[Math.PI, -0.96, Math.PI]}>
        <mesh geometry={nodes.Chanfro008.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.985, 0, 47.745]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Astroshop_Garden002.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-13.937, 0, 31.156]} rotation={[-Math.PI / 2, 0, -0.111]}>
        <mesh geometry={nodes.Banheiros_Garden001.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.901, 5.706, 46.161]} rotation={[2.492, 0.797, -2.644]}>
        <mesh geometry={nodes.Cupola_Corrimão_Escada_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.984, 4.643, 47.745]} rotation={[-Math.PI / 2, 0, 2.233]}>
        <mesh geometry={nodes.Cupola_Degrau_Int_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.726, 4.734, 45.84]} rotation={[Math.PI, -0.662, Math.PI]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupola_Degrau_Suporte_Int_001_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-14.901, 5.706, 46.161]} rotation={[2.492, 0.797, -2.644]}>
        <mesh geometry={nodes.Object107_1.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.274, 4.732, 51.779]} rotation={[-Math.PI, 0.5, -Math.PI / 2]}>
        <mesh geometry={nodes.Object105.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-18.274, 4.732, 51.779]} rotation={[-Math.PI, 0.5, -Math.PI / 2]}>
        <mesh geometry={nodes.Object106.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-19.92, 5.921, 38.851]} rotation={[-Math.PI / 2, 0, 0.379]}>
        <mesh geometry={nodes.Rectangle541.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-11.184, 2.244, 32.177]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Object109.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.584, 3.63, 2.188]} rotation={[-Math.PI / 2, 0, 0.873]}>
        <mesh geometry={nodes.Object110.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[21.584, 3.63, 2.188]} rotation={[-Math.PI / 2, 0, 0.873]}>
        <mesh geometry={nodes.PORT_Bilheteria_Marble_.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.726, 0.001, 23.742]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Teatro_De_Arena_Garden.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.726, 0.001, 23.742]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Object111.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.726, 0.001, 23.742]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Teatro_De_Arena_Garden_Borda.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.982, 3.73, 47.744]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Escada_Exterior_Piso_02.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.982, 3.73, 47.744]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Escada_Exterior_Piso_Sup.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.982, 3.73, 47.744]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[-1, 1, 1]}>
        <group scale={0.01}>
          <mesh geometry={nodes.Cupula_Escada_Exterior_Rodape_1.geometry} material={materials['fallback Material']} />
          <mesh geometry={nodes.Cupula_Escada_Exterior_Rodape_2.geometry} material={materials['fallback Material']} />
        </group>
      </group>
      <group position={[-15.982, 3.73, 47.744]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Object112.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-15.982, 3.73, 47.744]} rotation={[-Math.PI / 2, 0, 0.348]} scale={[-1, 1, 1]}>
        <mesh geometry={nodes.Cupula_Escada_Exterior_Pios_01.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-27.523, 0.032, 35.01]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Aquario_Piso_Marble.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-27.523, 0.032, 35.01]} rotation={[-Math.PI / 2, 0, 0.348]}>
        <mesh geometry={nodes.Aquario_Int_Floor_A.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.108, 0.001, 22.238]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Teatro_De_Arena_Palco_Piso.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[-7.726, 0.001, 23.742]} rotation={[-Math.PI / 2, 0, -0.389]}>
        <mesh geometry={nodes.Teatro_De_Arena_Wall_Rodape.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[20.97, 2.25, 11.623]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Escada_Principal_Piso.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[20.97, 2.25, 11.623]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Escada_Principal_Front.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
      <group position={[20.97, 2.25, 11.623]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PORT_Ext_Floor_Out.geometry} material={materials['fallback Material']} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('/CEU Full.glb')

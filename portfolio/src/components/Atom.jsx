
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/atom-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pTorus1_blue_0.geometry} material={materials.blue} rotation={[0, 0, Math.PI / 2]} scale={[0.02, 0.01, 0.01]} />
      <mesh geometry={nodes.pSphere1_red_0.geometry} material={materials.material} scale={0.01} />
      <mesh geometry={nodes.pTorus2_blue_0.geometry} material={materials.blue} rotation={[0.87, 0, Math.PI / 2]} scale={[0.02, 0.01, 0.01]} />
      <mesh geometry={nodes.pTorus3_blue_0.geometry} material={materials.blue} rotation={[2.18, 0, Math.PI / 2]} scale={[0.02, 0.01, 0.01]} />
    </group>
  )
}

useGLTF.preload('/atom-transformed.glb')

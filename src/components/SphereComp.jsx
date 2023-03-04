import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const SphereComp = () => {
    const myMesh = useRef()
    useFrame(({clock})=>{
        const a = clock.getElapsedTime()
        myMesh.current.rotation.x = a;
    });
  return (
    <mesh ref={myMesh}>
        <boxBufferGeometry args={[1]}/>
        <meshStandardMaterial color='royalblue'/>
    </mesh>
  )
}

export default SphereComp
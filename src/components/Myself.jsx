import { Canvas } from '@react-three/fiber'
import {OrbitControls, Stage} from '@react-three/drei'
import React from 'react'
import Newmeagain from './Newmeagain'

const Myself = () => {
  return (
        <Canvas>
            <Stage environment='city' intensity={0.5}>
                <Newmeagain/>
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
  )
}

export default Myself
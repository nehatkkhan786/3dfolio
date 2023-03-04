import React, { useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import SphereComp from './components/SphereComp'
import Myself from './components/Myself'

const App = () => {
  
  return (
    <div id='canvas-container'>
        {/* <Canvas> */}
         {/* <SphereComp/>
          <ambientLight />  
          <directionalLight intensity={0.1}/> */}

        {/* </Canvas> */}
        <Myself/>
    </div>
  )
}

export default App
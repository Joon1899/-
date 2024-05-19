import { Box, OrbitControls, MeshReflectorMaterial} from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useControls } from "leva"
import * as THREE from "three"

function MyElement3D(){

  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.5} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

  <mesh position={[0, -0.6, 0]} rotation= {[-Math.PI /2, 0, 0]}>
    <planeGeometry args={[10, 10]}/>
    <MeshReflectorMaterial
    blur={[300, 100]}
    resolution={2048}
    mixBlur={1}
    mixStrength={30}
    roughness={0.9}
    depthScale={.7}
    minDepthThreshold={0.5}
    maxDepthThreshold={1.4}
    color="#050505"
    metalness={0.5}
    />
  </mesh>

  <mesh position={[0, 0, 0]}>
    <boxGeometry />
    <meshStandardMaterial color="cyan"/>
  </mesh>
  </>
  )
}
export default MyElement3D

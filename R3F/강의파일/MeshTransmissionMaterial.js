import { Box, OrbitControls, MeshTransmissionMaterial, CubeCamera} from "@react-three/drei"
import {useControls} from "leva"
import {RGBELoader} from 'three-stdlib'
import {useLoader} from "@react-three/fiber"
import { clearcoat, ior } from "three/examples/jsm/nodes/core/PropertyNode.js"
import * as THREE from "three"

function MyElement3D(){

  const config = useControls({
    transmissionSampler: false,
    backside: false,
    samples: {value: 10, min: 1, max: 32, step: 1},
    resolution: {value: 2048, min : 256, max: 2048, step: 256},
    transmission: {value:1, min: 0, max: 1},
    roughness: {value:0.0, min: 0, max: 1, step: 0.01},
    thickness: {value: 3.5, min:0, max: 10, step: 0.01},
    ior: {value: 1.5, min: 1, max: 5, step: 0.01},
    chromaticAberration: {value: 0.06, min: 0, max: 0.1},
    anisotropy: {value: 0.1, min: 0, max: 1, step: 0.01},
    distortion: {value: 0.0, min: 0, max: 1, step: 0.01},
    distortionScale: {value: 0.3, min: 0.01, max: 1, step: 0.01},
    temporalDistortion: {value: 0.5, min: 0, max: 1, step: 0.01},
    clearcoat: {value: 0, min: 0, max: 1},
    attenuationDistance: {value: 0.5, min: 0, max: 10, step: 0.01},
    attenuationColor: "#ffffff",
    color: "#c9ffal",
    bg: "#839681",

  })
  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.2} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

<mesh>
  <sphereGeometry args={[1, 128, 128]} />
  <MeshTransmissionMaterial
  {...config} background={new THREE.Color(config.bg)}/>
</mesh>

<mesh scale={0.3}>
  <torusGeometry args={[0.5, 0.2, 32]}/>
  <meshStandardMaterial />
</mesh>
 

  </>
  )
}
export default MyElement3D

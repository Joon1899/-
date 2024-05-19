import { useTexture, OrbitControls,} from "@react-three/drei"
import * as THREE from "three"


function MyElement3D(){
const textures= useTexture({
  map: "./image/Glass_Window_002_baseColor.jpg",
  roughnessMap: "./image/Glass_Window_002_roughness.jpg",
  metalnessMap: "./image/Glass_Window_002_metallic.jpg",
  normalMap: "./image/Glass_Window_002_normal.jpg",
  displacementMap: "./image/Glass_Window_002_height.png",
  aoMap: "./image/Glass_Window_002_ambientOcclusion.jpg",
  alphaMap: "./image/Glass_Window_002_opacity.jpg"
})
  
  const mesh = useRef()

  useEffect(() => {
    mesh.current.geometry.setAttribute("uv2", new THREE.BufferAttribute(mesh.current.geometry.attributes.uv.array, 2)
    )}, [])
  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.1} />
  <directionalLight position={[0, 1, -8]} intensity={0.4}/>
  <directionalLight position={[1, 2, 8]} intensity={0.4}/>

    <mesh ref={mesh}>
      <cylinderGeometry args={[2, 2, 3, 256, 256, true]} />
      <meshStandardMaterial

      side={THREE.DoubleSide}
      map={textures.map}
      roughnessMap={textures.roughnessMap}
      roughnessMap-colorSpace={THREE.NoColorSpace}

      metalnessMap={textures.metalnessMap}
      metalness={0.5 }
      metalnessMap-colorSpace={THREE.NoColorSpace}

      normalMap={textures.normalMap}
      normalMap-colorSpace={THREE.NoColorSpace}
      normalScale={2}

      displacementMap={textures.displacementMap}
      displacementMap-colorSpace={THREE.NoColorSpace}
      displacementScale={0.2}
      displacementBias={-0.2}

      aoMap={textures.map}

      alphaMap={textures.alphaMap}
      transparent
      alphaToCoverage
      />
    </mesh>
 

  </>
  )
}
export default MyElement3D
 

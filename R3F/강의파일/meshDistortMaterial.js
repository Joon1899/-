import { MeshDistortMaterial, OrbitControls} from "@react-three/drei"


function MyElement3D(){

  
  
  return(

  <>
  <OrbitControls />
  <ambientLight intensitiy={0.2} />
  <directionalLight position={[0, 1, 0]}/>
  <directionalLight position={[1, 2, 8]} intensity={0.7}/>

<mesh>
  <torusGeometry/>
  <MeshDistortMaterial distort={0.23} speed={1} />
</mesh>
 

  </>
  )
}
export default MyElement3D

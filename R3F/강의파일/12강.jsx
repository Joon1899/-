import React, { useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'; 
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'; 
import { useThree } from "@react-three/fiber"

const torusGeometry = new THREE.TorusGeometry(0.4,0.1, 32,32); 
const torusMaterial = new THREE.MeshStandardMaterial({
    color : "#9b59b6",
    roughness : 0.5, 
    metalness : 0.9
})


export default function MyElement3D() {

    useFrame((state)=> {
        const time = state.clock.elapsedTime
        const smallSpherePivot = state.scene.getObjectByName('smallSpherePivot'); 
        smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time*10); 
      
        smallSpherePivot.children[0].getWorldPosition(light.current.position);
    })

    
    // const light = useRef(); 
    // const shadowCamera = useRef(); 
    const {scene} = useThree(); 
    useEffect(()=>{
        scene.add(light.current.target)
        return()=> {
            scene.remove(light.current.target)
        }

    }, [light.current])

    // useEffect(()=> {
    //     scene.add(light.current.target)
    //     shadowCamera.current = new THREE.CameraHelper(light.current.shadow.camera); 
    //     scene.add(shadowCamera.current)
    //     return ()=> {scene.remove(light.current.target) 
    //         scene.remove(shadowCamera.current)}
    // },[light.current])

    const light = useRef(); 


  return (
    <>
        <OrbitControls />
        <ambientLight intensity={0.1}/>

        <spotLight
            ref = {light}
            shadow-mapSize={[1024*4,1024*4]}
            shadow-radius = {32}
            shadow-blurSamples = {1}
            shadow-bias = {-0.0001}
            castShadow
            color={0xffffff}
            intensity={0.9}
            position={[0,5,0]}
            angle={THREE.MathUtils.degToRad(60)}
        />

        {/* <pointLight
            castShadow
            color="#ffffff" intensity={1}
            position={[0,5,0]}
        /> */}


        {/* <directionalLight 
            ref={light}

            shadow-camera-top = {6}
            shadow-camera-bottom = {-6}
            shadow-camera-left = {-6}
            shadow-camera-right = {6}

            shadow-mapSize = {[512*4,512*4]}
            

            castShadow
            color={0xffffff}
            intensity={0.9}
            position={[0,5,0]}
            target-position={[0,0,0]}
        /> */}

        <mesh receiveShadow rotation-x={THREE.MathUtils.degToRad(-90)}>
            <planeGeometry args={[10,10]} />
            <meshStandardMaterial 
                color='#2c3e50'
                roughness={0.5}
                metalness={0.5}
                side={THREE.DoubleSide}

            />

        </mesh>

        <mesh castShadow receiveShadow position-y={1.7}>
            <torusKnotBufferGeometry args={[1,0.2,128,32]} />
            <meshStandardMaterial
                color="#ffffff"
                roughness={0.1}
                metalness={0.2}
            />

        </mesh>

        {new Array(10).fill().map((item,index) => {
            return(
                <group key={index} rotation-y={THREE.MathUtils.degToRad(45*index)}>
                    <mesh
                    castShadow receiveShadow
                        geometry={torusGeometry}
                        material={torusMaterial}
                        position={[3,0.5,0]}
                    >

                    </mesh> 

                </group>
            )
        })}

        <group name='smallSpherePivot'>
            <mesh castShadow receiveShadow position={[3,0.5,0]}>
                <sphereGeometry args={[0.3,32,32]} />
                <meshStandardMaterial
                    color="#e74c3c"
                    roughness={0.2}
                    metalness={0.5}
                />
                

            </mesh>
        </group>

    </>
  )
}

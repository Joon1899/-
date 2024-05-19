import './App.css';
import MyElement3D from './MyElement3D';
import { Canvas } from '@react-three/fiber'; 
import MyElement3D2 from './MyElement3D2'; 
import MyElement3D3 from './MyElement3D3';
import MyElement3D34 from './MyElement3D4';
function App() {
  
  return (
    <>
  <Canvas
    shadows
    camera={
      {
      position : [7,7,0], 
      
    }}
  >
    <MyElement3D34 />
  </Canvas>
      
    </>
  );
}

export default App;

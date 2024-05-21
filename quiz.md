# AI Graphics Quiz 

## 1. [p5.js와 그래픽스 프로그래밍의 기초]

​

 ### 1-1) p5.js의 특징 설명

답 : 

1. 간편한 사용법 : 직관적이고 이해하기 쉬운 함수와 문법을 제공하여 초보자도 쉽게 접근할 수 있다. 

2. 웹 기반 : 웹 브라우저에서 직접 실행되므로, 설치나 환경 설정 없이 쉽게 시작할 수 있다. 

3. 다양한 기능 : 2D 및 3D 그래픽스, 애니메이션, 인터랙티브 아트, 데이터 시각화 등 다양한 분야에 활용할 수 있다. 

4. 강력한 커뮤니티 : 다양한 예제와 풍부한 문서가 제공되며, 커뮤니티가 활발하게 활동하고 있어 도움을 받기 쉽다. 

​

 ### 1-2) 인터랙티브 아트의 개념 설명

답 : 

인터랙티브 아트는 사용자의 입력(마우스 움직임, 키보드 입력 등)에 따라 변화하는 예술 작품을 의미한다. 이러한 아트는 사용자와의 상호작용을 통해 동적인 변화를 보여주며, 예술과 기술의 융합을 대표하는 예술 형태다.

​

### 1-3) 예제 코드 작성 및 설명(사용자가 마우스를 움직일 때마다 화면에 원이 그려지는 프로그램)

​

 답 : 

  

function setup() {
createCanvas(windowWidth, windowHeight);
background(255);
}

function draw() {
// 마우스가 움직일 때마다 마우스 위치에 원을 그림
fill(0);
ellipse(mouseX, mouseY, 20, 20);
}
 


AI Graphics Quiz 시험 및 답안 제출 (이글의 답글로 (1)
코드 설명:

setup(): 프로그램이 시작될 때 한 번 실행되는 함수로, 캔버스 크기를 설정하고 배경을 흰색으로 설정한다.

draw(): 계속 반복 실행되는 함수로, 마우스 위치에 원을 그려줍니다. mouseX와 mouseY는 현재 마우스의 위치를 나타내는 변수다. 

​

​

## 2. [ml5.js를 활용한 머신러닝 기초] 

​

 ### 2-1) ml5.js의 기능과 장점 설명

 답 : 

 ml5.js는 TensorFlow.js를 기반으로 한 자바스크립트 라이브러리로, 웹 브라우저에서 쉽게 머신러닝을 구현할 수 있도    록 돕는다. 주요 기능과 장점은 다음과 같다:

​

 1. 간편한 사용법: 복잡한 머신러닝 모델을 쉽게 사용할 수 있도록 간단한 API를 제공한다.

 2. 다양한 모델 지원: 이미지 분류, 객체 인식, 스타일 변환, 텍스트 생성 등 다양한 머신러닝 모델을 지원한다.

 3. 웹 친화적: 웹 브라우저에서 직접 실행되므로, 서버 없이도 머신러닝 기능을 구현할 수 있다.

 4. 교육적 목적: 머신러닝의 기초 개념을 쉽게 학습할 수 있도록 설계되었다.

​

 ### 2-2) 이미지 분류 모델 구현 과정 서술

​

 답 : ml5.js를 사용하여 이미지 분류 모델을 구현하는 과정은 다음과 같다:

​

 1. 라이브러리 로드: HTML 파일에서 ml5.js 라이브러리를 로드한다.

 2. 모델 로드: ml5.imageClassifier 함수를 사용하여 사전 훈련된 이미지 분류 모델을 로드한다.

 3. 이미지 입력: 분류할 이미지를 입력받는다.

 4. 분류 실행: 모델을 사용하여 이미지를 분류하고 결과를 출력한다.

​

 ### 2-3) 이미지 분류 모델의 원리 설명  

​

 답 : 

 이미지 분류 모델은 입력된 이미지를 다양한 카테고리로 분류하는 작업을 수행한다. 이러한 모델은 수많은 이미          지 데이터를 이용해 학습되며, 각 이미지의 특징을 추출하여 특정 클래스로 분류한다. 주요 원리는 다음과 같다:

 

 1. 특징 추출: 이미지의 시각적 특징(모양, 색상, 질감 등)을 추출한다.

 2. 신경망 처리: 추출된 특징을 신경망에 입력하여 각 클래스에 대한 확률을 계산한다.

 3. 결과 출력: 가장 높은 확률을 가진 클래스를 최종 결과로 출력한다.

​

## 3. [three.js를 활용한 3D 그래픽스]

​

 ### 3-1) three.js의 주요 구성 요소 설명

 답 : 

 1. Scene: 3D 장면을 구성하는 컨테이너로, 모든 객체(카메라, 조명, 메쉬 등)를 포함한다.

 2. Camera: 장면을 렌더링할 때의 시점을 정의합니다. 일반적으로 PerspectiveCamera를 사용한다.

 3. Renderer: 장면과 카메라를 기반으로 3D 그래픽스를 렌더링하여 화면에 표시한다.

 4. Mesh: 기하학적 형상(geometry)과 재질(material)로 구성된 3D 객체다.

 5. Light: 장면을 비추는 조명으로, 다양한 종류의 조명이 있다(예: AmbientLight, PointLight 등).

​

 ### 3-2) 3D 장면 구성 과정 설명

 답 : 

  1. Scene 생성: THREE.Scene()을 사용하여 새로운 장면을 생성한다.

  2. Camera 생성: THREE.PerspectiveCamera()를 사용하여 카메라를 생성하고 위치를 설정한다.

  3. Renderer 생성: THREE.WebGLRenderer()를 사용하여 렌더러를 생성하고 크기를 설정한다.

  4. Mesh 추가: 기하학적 형상과 재질을 결합하여 메쉬를 생성하고 장면에 추가한다.

  5. Light 추가: 조명을 생성하고 장면에 추가한다.

  6. 애니메이션: requestAnimationFrame()을 사용하여 렌더링 루프를 구현하고, 장면을 지속적으로 렌더링한다.

​

 ### 3-3) 예제 코드 작성 및 설명(회전하는 큐브)

 답 : 

 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Rotating Cube with Three.js</title>
  <style>body { margin: 0; }</style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
  <script>
    // 장면 생성
    const scene = new THREE.Scene();

    // 카메라 생성
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 렌더러 생성
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 큐브 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 애니메이션 함수
    function animate() {
      requestAnimationFrame(animate);

      // 큐브 회전
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();
  </script>
</body>
</html>
 
 THREE.Scene()을 사용하여 장면을 생성한다.

 THREE.PerspectiveCamera()를 사용하여 카메라를 생성하고 위치를 설정한다.

 THREE.WebGLRenderer()를 사용하여 렌더러를 생성하고 크기를 설정한다.

 THREE.BoxGeometry()와 THREE.MeshBasicMaterial()을 사용하여 큐브 메쉬를 생성하고 장면에 추가한다.

 animate() 함수에서 큐브를 회전시키고 장면을 렌더링한다.

​ 

## 4. [R3F(React Three Fiber)와 React 통합]

 ### 4-1) R3F의 특징 및 이점 설명

​

 답 : R3F(React Three Fiber)는 React와 Three.js를 통합하여 3D 그래픽스를 쉽게 구현할 수 있도록 하는 라이브러리      다. 주요 특징과 이점은 다음과 같다:

​

 1. React와의 통합: React의 컴포넌트 기반 아키텍처를 사용하여 3D 장면을 구성할 수 있다.

 2. 간편한 상태 관리: React의 상태 관리 시스템을 활용하여 3D 객체의 상태를 쉽게 관리할 수 있다.

 3. 재사용성: React 컴포넌트를 사용하여 재사용 가능한 3D 그래픽 요소를 만들 수 있다.

 4. 코드 간결화: three.js의 복잡한 설정을 간소화하여 더 직관적인 코드 작성을 지원한다.

​

 ### 4-2) R3F를 사용한 3D 장면 생성 과정 서술

​

 답 : 

 1. React 프로젝트 설정: React 프로젝트를 생성하고 R3F 라이브러리를 설치한다.

 2. Canvas 컴포넌트 사용: Canvas 컴포넌트를 사용하여 3D 렌더링 컨텍스트를 제공한다.

 3. 3D 객체 추가: React 컴포넌트로 3D 객체를 정의하고 Canvas 내부에 추가한다.

 4. 애니메이션 및 상호작용: React 상태와 이벤트 핸들러를 사용하여 3D 객체의 애니메이션 및 상호작용을 구현한다.

​

### 4-3) 예제 코드 작성 및 설명(간단한 3D 장면을 생성)

​

답 : 

// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function RotatingBox() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <RotatingBox />
    </Canvas>
  );
}

export default App;
 
 
코드 설명 : 

​Canvas는 R3F에서 제공하는 컴포넌트로, Three.js의 렌더링 컨텍스트를 제공한다. 이 컨텍스트 안에서 모든 3D 객체가 렌더링된다.

mesh: Three.js에서 3D 객체를 정의하는 기본 구성 요소다. rotation 속성은 객체의 초기 회전 값을 설정한다.

boxBufferGeometry: 큐브의 기하학적 형상을 정의한다. args는 큐브의 너비, 높이, 깊이를 설정하는 매개변수다.

meshStandardMaterial: 큐브의 표면 재질을 정의한다. color 속성으로 재질의 색상을 설정한다.ambientLight: 전역적으로 모든 방향에서 고르게 비추는 빛을 설정한다. intensity는 빛의 세기를 나타낸다.

directionalLight: 특정 방향에서 비추는 빛을 설정한다. position 속성은 빛의 위치를 설정한다.

RotatingBox: 앞서 정의한 큐브 컴포넌트를 추가합니다.

이 코드를 실행하면 웹 페이지에 오렌지 색상의 회전하는 큐브가 렌더링됩니다. Canvas 컴포넌트는 Three.js의 렌더링 컨텍스트를 제공하고, 그 안에 정의된 3D 객체들이 렌더링됩니다. RotatingBox 컴포넌트는 회전된 상태로 큐브를 렌더링하며, ambientLight와 directionalLight는 장면을 조명합니다.

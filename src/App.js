import React, {Suspense} from "react";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Evee from "./Components/Evee";
import Box from "./Components/Box"

export default function App() {
  return (
    <Wrapper className="App">
      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity = {0.5} />
        <directionalLight position = {[-2,5,2]} intensity = {1} />
        <Suspense fallback = {null}>
          <Evee />
        </Suspense>        
      </Canvas>

      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity = {0.5} />
        <directionalLight position = {[-2,5,2]} intensity = {1} />
        <Suspense fallback = {null}>
          <Box />
        </Suspense>        
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 position: relative;
 background: #1f1144;
 `;

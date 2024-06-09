"use client";

import { Dog } from "@/app/_components/Dog";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Blender: React.FC = () => {
  return (
    <Canvas>
      <OrbitControls enablePan={false} />
      <Suspense fallback={null}>
        <Dog />
      </Suspense>
      <Environment preset="park" background />
    </Canvas>
  );
};

export default Blender;

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Laptop from "./Laptop";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 1.5, 10],
        fov: 35,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[5, 7, 5]}
        intensity={2}
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={20}
        distance={12}
        color="#f56618"
      />

      <pointLight
        position={[4, 3, 2]}
        intensity={8}
        distance={10}
      />

      <Laptop />

      <Environment preset="city" />
    </Canvas>
  );
}
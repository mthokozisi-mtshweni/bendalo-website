import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function LaptopScreen() {
  return (
    <group position={[0, 1.45, -0.05]} rotation={[0, 0, 0]}>
      {/* Screen frame */}
      <mesh>
        <boxGeometry args={[5.8, 3.65, 0.18]} />
        <meshStandardMaterial
          color="#171717"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Display */}
      <mesh position={[0, 0, 0.11]}>
        <planeGeometry args={[5.35, 3.2]} />
        <meshStandardMaterial
          color="#0d0d0d"
          emissive="#080808"
          roughness={0.2}
        />
      </mesh>

      {/* Bendalo screen glow */}
      <mesh position={[0, 0, 0.12]}>
        <planeGeometry args={[5.1, 3]} />
        <meshBasicMaterial color="#111111" />
      </mesh>

      {/* Orange screen accent */}
      <mesh position={[1.5, 0.75, 0.13]}>
        <planeGeometry args={[1.5, 0.08]} />
        <meshBasicMaterial color="#f56618" />
      </mesh>
    </group>
  );
}

function LaptopBase() {
  return (
    <group position={[0, -0.65, 0]}>
      {/* Keyboard body */}
      <mesh rotation={[-0.05, 0, 0]}>
        <boxGeometry args={[6.4, 0.35, 4.3]} />
        <meshStandardMaterial
          color="#202020"
          metalness={0.75}
          roughness={0.28}
        />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.2, 0.65]}>
        <boxGeometry args={[1.7, 0.04, 1.1]} />
        <meshStandardMaterial
          color="#292929"
          metalness={0.5}
          roughness={0.35}
        />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, 0.2, -0.55]}>
        <boxGeometry args={[4.7, 0.04, 1.35]} />
        <meshStandardMaterial
          color="#101010"
          metalness={0.25}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
}

export default function Laptop() {
  const laptop = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!laptop.current) return;

    laptop.current.position.y =
      Math.sin(time * 0.7) * 0.08;

    laptop.current.rotation.y =
      Math.sin(time * 0.35) * 0.08;
  });

  return (
    <group
      ref={laptop}
      rotation={[0.08, -0.2, -0.03]}
    >
      <LaptopScreen />
      <LaptopBase />
    </group>
  );
}
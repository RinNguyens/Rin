import { Canvas, extend } from "@react-three/fiber";
import {
  Effects,
  OrbitControls,
  OrthographicCamera,
  BakeShadows,
} from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import { Tower } from "./tower";
import { Container } from "@mantine/core";

extend({ UnrealBloomPass });

export default function House() {
  return (
    <Container h={400} size={"sm"} pt={60}>
      <Canvas shadows gl={{ antialias: false }}>
        <color attach="background" args={["#f1e6db"]} />
        <fog attach="fog" args={["#f1e6db", 10, 25]} />
        <hemisphereLight intensity={0.2} color="#eaeaea" groundColor="blue" />
        <directionalLight
          castShadow
          intensity={0.2}
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
          position={[10, 10, -10]}
        />
        <Tower position={[0, -3.25, 0]} />
        <Effects disableGamma>
          <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
        </Effects>
        <BakeShadows />
        <OrthographicCamera
          makeDefault
          far={100}
          near={0.1}
          position={[-10, 2, -10]}
          zoom={110}
        />
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </Container>
  );
}

import { useAnimate, useAnimationControls } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Howl, Howler } from "howler";
import React, { useEffect, useState } from "react";

import { Float, useGLTF } from "@react-three/drei";

export function ComputerModel() {
  const { nodes, materials } = useGLTF(
    "/models/ibm_pcjr_4863_computer-freepoly.org.glb"
  );

  const [rotate, setRotate] = useState({
    rotateY: 0.4,
    rotateX: 0.3,
    rotateZ: 0.5,
  });

  const onClick = async () => {
    const audio = new Howl({
      src: ["/audio/sound.mp3"],
      volume: 0.5,
    });

    audio.play();

    setRotate({
      rotateX: Math.random() * 1,
      rotateY: Math.random() * 2,
      rotateZ: Math.random() * 1,
    });
  };

  return (
    <Float floatIntensity={2} speed={5}>
      <motion.group
        onClick={onClick}
        position={[-0.2, 0.5, 0]}
        initial={{ rotateY: 0.4, rotateX: 0.3, rotateZ: 0.5 }}
        animate={rotate}
        transition={{ type: "spring", duration: 1.3 }}
      >
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.defaultMaterial.geometry}
                material={materials.default_1001}
              />
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.defaultMaterial_1.geometry}
                material={materials.default_1005}
              />
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.defaultMaterial_2.geometry}
                material={materials.default_1002}
              />
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.defaultMaterial_3.geometry}
                material={materials.default_1004}
              />
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.defaultMaterial_4.geometry}
                material={materials.default_1003}
              />
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.defaultMaterial_5.geometry}
                material={materials.default_1006}
              />
              <mesh
                castShadow
                receiveShadow
                //@ts-ignore
                geometry={nodes.defaultMaterial_6.geometry}
                material={materials.default_1007}
              />
            </group>
          </group>
        </group>
      </motion.group>
    </Float>
  );
}

useGLTF.preload("/models/ibm_pcjr_4863_computer-freepoly.org.glb");

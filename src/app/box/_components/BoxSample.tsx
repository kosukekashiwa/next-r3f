"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const BoxSample: React.FC = () => {
  // Box コンポーネントの定義
  // 型にThree.jsのmeshを指定し、mesh要素のプロパティを安全に扱えるようにする
  const Box = (props: JSX.IntrinsicElements["mesh"]) => {
    // useRefでDOM要素にアクセス
    const ref = useRef<THREE.Mesh>(null!);
    // hover用の状態管理
    const [hovered, setHover] = useState(false);
    // active用の状態管理(boxをclickでactive状態を切替)
    const [active, setActive] = useState(false);
    // react-three/fiberのカスタムフック
    // アニメーションをループできるようにする
    useFrame((_state, _delta) => (ref.current.rotation.x += 0.01));
    // refに対して毎フレーム X 軸に 0.01 ラジアン分回転させるアニメーション
    return (
      <mesh
        {...props}
        ref={ref}
        scale={active ? 1.5 : 1}
        // クリックしたときのイベント
        onClick={(_event) => setActive((prev) => !prev)}
        // マウスホバーしたときのイベント
        onPointerOver={(_event) => setHover(true)}
        // マウスホバーを外したときのイベント
        onPointerOut={(_event) => setHover(false)}
      >
        {/* Thre.js の立方体のジオメトリを定義するコード args={[幅, 高さ, 奥行き]} */}
        <boxGeometry args={[1, 1, 1]} />
        {/* Three.js で提供されている標準的なマテリアルの一種 */}
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
  };

  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
        // position: "fixed",
        // top: 0,
        // left: 0,
      }}
    >
      {/* 3D シーンに影の明るさを決定する環境光 */}
      <ambientLight />
      {/* 物体の立体感を表現するポイントライト */}
      <pointLight position={[10, 10, 10]} />
      {/* 最初に定義したBoxを2つ配置 */}
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default BoxSample;

"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

interface PageFlip3DProps {
  isFlipping: boolean
  flipProgress: number
  flipDirection: "forward" | "backward"
  frontTexture?: string
  backTexture?: string
}

function Page({
  isFlipping,
  flipProgress,
  flipDirection,
}: {
  isFlipping: boolean
  flipProgress: number
  flipDirection: "forward" | "backward"
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  // Page dimensions based on viewport
  const pageWidth = Math.min(viewport.width * 0.4, 4)
  const pageHeight = pageWidth * 1.3

  // Create curved page geometry for realistic bend
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(pageWidth, pageHeight, 32, 1)
    return geo
  }, [pageWidth, pageHeight])

  // Paper material with subtle texture
  const frontMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#f4e8d0",
        roughness: 0.8,
        metalness: 0,
        side: THREE.FrontSide,
      }),
    [],
  )

  const backMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#e8dcc0",
        roughness: 0.8,
        metalness: 0,
        side: THREE.BackSide,
      }),
    [],
  )

  useFrame(() => {
    if (!meshRef.current) return

    const positions = meshRef.current.geometry.attributes.position
    const vertex = new THREE.Vector3()

    // Apply page curl effect based on flip progress
    const curlAmount = Math.sin(flipProgress * Math.PI) * 0.3

    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i)

      // Normalize x position (0 to 1)
      const normalizedX = (vertex.x + pageWidth / 2) / pageWidth

      // Apply curl deformation
      const curl = Math.sin(normalizedX * Math.PI) * curlAmount
      vertex.z = curl

      positions.setXYZ(i, vertex.x, vertex.y, vertex.z)
    }

    positions.needsUpdate = true
    meshRef.current.geometry.computeVertexNormals()

    // Rotate the page
    const targetRotation = flipDirection === "forward" ? -flipProgress * Math.PI : flipProgress * Math.PI

    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotation, 0.1)
  })

  return (
    <group position={[-pageWidth / 2, 0, 0]}>
      <mesh ref={meshRef} geometry={geometry} material={frontMaterial} castShadow receiveShadow>
        <mesh geometry={geometry} material={backMaterial} />
      </mesh>
    </group>
  )
}

function Scene({ isFlipping, flipProgress, flipDirection }: Omit<PageFlip3DProps, "frontTexture" | "backTexture">) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <pointLight position={[-5, 3, 2]} intensity={0.3} color="#ffe4c4" />

      {/* Page */}
      <Page isFlipping={isFlipping} flipProgress={flipProgress} flipDirection={flipDirection} />
    </>
  )
}

export default function PageFlip3D({ isFlipping, flipProgress, flipDirection }: PageFlip3DProps) {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-0">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Scene isFlipping={isFlipping} flipProgress={flipProgress} flipDirection={flipDirection} />
      </Canvas>
    </div>
  )
}

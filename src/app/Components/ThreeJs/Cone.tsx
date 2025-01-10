// src/app/Components/Experience.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create ConeGeometry
    const geometry = new THREE.ConeGeometry(5, 15, 32); // Radius, height, radial segments
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cone = new THREE.Mesh(geometry, material);
    scene.add(cone);

    // Set camera position
    camera.position.z = 30;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cone
      cone.rotation.x += 0.01;
      cone.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Experience;

import { useEffect, useRef } from "react";
import * as THREE from "three";

const customTealLight = new THREE.Color("#59C3AA");
const customTealDark = new THREE.Color("#015A48");

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

    // Create TorusGeometry
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

    // Custom Shader Material for glitch and gradient
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        glitchIntensity: { value: 0.1 },
        gradientStartColor: { value: new THREE.Color(0x0000ff) }, // Blue
        gradientEndColor: { value: new THREE.Color(0xff0000) }, // Red
      },
      vertexShader: `
        varying vec3 vUv;
        void main() {
          vUv = position;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float glitchIntensity;
        uniform vec3 gradientStartColor;
        uniform vec3 gradientEndColor;
        varying vec3 vUv;

        void main() {
          // Glitch effect
          float glitch = sin(time * 10.0 + vUv.y * 10.0) * 0.5 + 0.5;
          float glitchAmount = step(glitchIntensity, glitch);
          vec3 color = mix(gradientStartColor, gradientEndColor, vUv.y);

          // Apply glitch effect by distorting the color
          gl_FragColor = vec4(color * glitchAmount, 1.0);
        }
      `,
      side: THREE.DoubleSide,
    });

    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Set camera position
    camera.position.z = 30;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update time uniform for the glitch effect
      material.uniforms.time.value += 0.05;

      // Rotate the torus
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

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

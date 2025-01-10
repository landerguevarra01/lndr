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
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Set transparent background color
    containerRef.current.appendChild(renderer.domElement);

    // Create TorusGeometry
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

    // Custom Shader Material for glitch and gradient
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        glitchIntensity: { value: 0.09 },
        gradientStartColor: { value: new THREE.Color(0xffffff) },
        gradientEndColor: { value: new THREE.Color(0xffffff) },
        glitchColor: { value: new THREE.Color(0x181818) },
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
        uniform vec3 glitchColor; 
        varying vec3 vUv;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        void main() {
          // Random glitch effect based on time and position
          float glitch = random(vec2(vUv.x * 10.0, time * 0.5)) * step(glitchIntensity, fract(time + vUv.y * 10.0));
          vec3 color = mix(gradientStartColor, gradientEndColor, vUv.y);

          // Apply glitch effect by distorting the color with the glitch color
          gl_FragColor = vec4(mix(color, glitchColor, glitch), 1.0);
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

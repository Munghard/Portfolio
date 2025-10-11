import { useEffect, useRef } from 'react';
import * as THREE from 'three';
const clock = new THREE.Clock();

const ThreeDeeScene = () => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // === Scene & Camera ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // === Renderer ===
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // transparent
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // === Cube ===
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // === Light ===
    const light = new THREE.PointLight(0x00ff50, 2000);
    light.position.set(0, 20, 0);
    scene.add(light);
    
    const lightb = new THREE.PointLight(0x91E2FF, 100);
    lightb.position.set(0, -20, 0);
    scene.add(lightb);

    // === Animate ===
    const animate = () => {
        const time = clock.getElapsedTime();
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.position.x = Math.sin(time) * 2.5;
      renderer.render(scene, camera);
    };
    renderer.setAnimationLoop(animate);

    // === Handle window resize ===
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.setAnimationLoop(null);
      scene.clear();
      if (mount && renderer.domElement.parentElement) mount.removeChild(renderer.domElement);
      renderer.dispose();
      rendererRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100px', // optional minimum
      }}
    />
  );
};

export default ThreeDeeScene;

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const ThreeDeeScene = ({ delay, modelUrl }) => {

  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [animations, setAnimations] = useState(null);
  const [rotationY, setRotationY] = useState(120);

  const gltfRef = useRef(null);
  const mixerRef = useRef(null);
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const rotationYRef = useRef(0);


  useEffect(() => {
    if (mixerRef.current && animations.length) {
      mixerRef.current.stopAllAction();
      mixerRef.current.clipAction(animations[currentAnimation]).reset().play();
    }
  }, [currentAnimation, animations]);

  useEffect(() => {
    rotationYRef.current = rotationY;
  }, [rotationY]);

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

    // === Light ===
    const light = new THREE.PointLight(0xffff50, 2000);
    light.position.set(0, 20, 5);
    scene.add(light);

    const lightb = new THREE.PointLight(0xff5500, 100);
    lightb.position.set(0, -20, 3);
    scene.add(lightb);

    const lightc = new THREE.PointLight(0x0000ff, 1000);
    lightc.position.set(-10, 0, 3);
    scene.add(lightc);

    //   LOAD MODEL
    const loader = new GLTFLoader();
    loader.load(modelUrl,
      gltf => {
        gltfRef.current = gltf;
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.y = -1;

        const anims = gltf.animations;
        setAnimations(anims);

        if (anims && anims.length) {
          const localMixer = new THREE.AnimationMixer(gltf.scene)
          const action = localMixer.clipAction(anims[currentAnimation]);
          action.play();
          mixerRef.current = localMixer;
        }
        // gltf.scene.rotation.y = THREE.MathUtils.degToRad(rotation);
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('Error loading model:', error);
      }
    );
    const clock = new THREE.Clock();
    // === Animate ===
    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      if (gltfRef.current) {
        gltfRef.current.scene.rotation.y = THREE.MathUtils.degToRad(rotationYRef.current);
        // gltf.rotation.x += 0.01;
        // gltf.scene.rotation.y += 0.01;
        // gltf.scene.position.x = Math.sin(time) * 2.5;
      }
      renderer.render(scene, camera);
      if (mixerRef.current) mixerRef.current.update(delta);
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay / 5 }}
      viewport={{ once: false, amount: 0.3 }}
      className='flex flex-col items-center p-5 border-2 border-zinc-700 bg-zinc-800 w-fit rounded-sm m-4 shadow-xl shadow-black/70'>
      <h1 className='text-green-500 text-3xl'>{modelUrl.split('/')[3].split('.')[0]}</h1>
      <div
        ref={mountRef}
        style={{
          width: '300px',
          height: '100%',
          minHeight: '300px', // optional minimum
        }}
      />
      <div className='flex flex-col my-5 gap-2 border-2 border-zinc-700 p-2 w-full items-center'>
        <label className='text-zinc-400'> Rotation</label>
        <input
          min={90}
          max={450}
          type='range'
          value={rotationY}
          onChange={(e) => { setRotationY(Number(e.target.value)) }}
        ></input>
      </div>
      {(gltfRef.current && animations) &&
        <>
          <div className='flex flex-col gap-2   border-2 border-zinc-700 p-2  w-full items-center'>
            <label className='text-zinc-400'> Animation: {animations[currentAnimation]?.name} </label>
            <div className="flex items-center">
              <button
                className='text-sm p-2 bg-zinc-700'
                onClick={() => setCurrentAnimation(a => Math.max(0, a - 1))}>◀</button>
              <input
                type="number"
                value={currentAnimation}
                onChange={e => setCurrentAnimation(Number(e.target.value))}
                className="w-16 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                className='text-sm p-2 bg-zinc-700'
                onClick={() => setCurrentAnimation(a => Math.min(animations.length - 1, a + 1))}>▶</button>
            </div>
          </div>
        </>
      }
    </motion.div>
  );
};

export default ThreeDeeScene;

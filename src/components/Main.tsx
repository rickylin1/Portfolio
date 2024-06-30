import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as dat from 'lil-gui';
import Five from './5.jpg'
import gsap from 'gsap';
import '../styles/Main.css'; // Make sure to adjust path if needed

const MyThreeComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Parameters
    const parameters = {
      materialColor: '#ffeded'
    };

    

    // Texture
    const textureLoader = new THREE.TextureLoader();
    const texturePath = Five

    const onLoad = (loadedTexture: THREE.Texture) => {
        console.log('Texture loaded successfully:', loadedTexture);
      };
  
      const onProgress = (xhr: ProgressEvent<EventTarget>) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      };
  
      const onError = (err: ErrorEvent) => {
        console.error('Error loading texture:', err);
      };

    const texture = textureLoader.load(texturePath, onLoad, onProgress, onError);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;

    // Scene
    const scene = new THREE.Scene();

    // Objects
    const objectDistance = 4;
    const material = new THREE.MeshToonMaterial({
      color: parameters.materialColor,
      gradientMap: texture
    });

    const mesh1 = new THREE.Mesh(new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16), material);

    mesh1.position.y = objectDistance * 0;
    mesh1.position.x = 2;


    const meshs = [mesh1];

    // Particles
    const particlesCount = 2000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = 5 + objectDistance - Math.random() * objectDistance * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: parameters.materialColor,
      sizeAttenuation: true,
      size: 0.05
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);

    scene.add(mesh1);
    scene.add(particles);

    // Light
    const directionalLight = new THREE.DirectionalLight('#ffffff', 1);
    directionalLight.position.set(1, 1, 0);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      alpha: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // GUI
    const gui = new dat.GUI();
    gui.addColor(parameters, 'materialColor').onChange(() => {
      material.color.set(parameters.materialColor);
      particlesMaterial.color.set(parameters.materialColor);
    });

    // Scroll and Mouse Events
    let scrollY = window.scrollY;
    let currentsection = 0;

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      const newSection = Math.round(scrollY / sizes.height);

      if (newSection !== currentsection) {
        currentsection = newSection;

        gsap.to(meshs[currentsection].rotation, {
          duration: 1.5,
          ease: 'power2.inOut',
          x: '+=6',
          y: '+=3'
        });
      }
    });

    const cursor = { x: 0, y: 0 };

    window.addEventListener('mousemove', (event) => {
      cursor.x = event.clientX / sizes.width - 0.5;
      cursor.y = event.clientY / sizes.height - 0.5;
    });

    // Animation Loop
    const clock = new THREE.Clock();
    let previousTime = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      camera.position.y = -scrollY / sizes.height * objectDistance;

      const parallaxX = -cursor.x * 0.5;
      const parallaxY = cursor.y * 0.5;
      camera.position.x += (parallaxX - camera.position.x) * deltaTime * 3;
      camera.position.y += (parallaxY - camera.position.y) * deltaTime * 3;

      for (const mesh of meshs) {
        mesh.rotation.x += deltaTime * 0.1;
        mesh.rotation.y += deltaTime * 0.12;
      }

      if (elapsedTime % 10 < 5) {
        particles.position.y -= 0.01;
      } else {
        particles.position.y += 0.01;
      }

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();

    // Resize Handling
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Clean-up
    return () => {
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('resize', () => {});
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <canvas className="webgl" ref={canvasRef}></canvas>
  );
};

export default MyThreeComponent;
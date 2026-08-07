import * as THREE from './three/build/three.module.js';
import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';

const heroSection = document.querySelector('#intro');
if (heroSection) {
    const canvasContainer = document.createElement('div');
    canvasContainer.id = 'hero-3d-container';
    heroSection.prepend(canvasContainer);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x1c1c24, 1.5, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x1c1c24, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace || THREE.sRGBEncoding;
    renderer.physicallyCorrectLights = true;
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    canvasContainer.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.9, 2.7);
    scene.add(camera);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(5, 3.5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x95d0ff, 0.35);
    fillLight.position.set(-3, 1.5, -3);
    scene.add(fillLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.25);
    backLight.position.set(0, 4, -5);
    scene.add(backLight);

    const loader = new GLTFLoader();
    let model = null;

    loader.load(
        'models/ferrari_296_widebody.glb',
        (gltf) => {
            model = gltf.scene;
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    if (child.material) {
                        child.material.side = THREE.DoubleSide;
                    }
                }
            });

            model.scale.set(0.95, 0.95, 0.95);
            model.position.set(0, -0.4, 0);
            model.rotation.y = Math.PI * 0.05;
            scene.add(model);

            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3()).length();
            const center = box.getCenter(new THREE.Vector3());
            const distance = size * 0.9;
            camera.position.set(center.x, center.y + 0.3, distance + 1.2);
            camera.lookAt(center);

            camera.near = Math.max(0.1, size / 100);
            camera.far = size * 20;
            camera.updateProjectionMatrix();
        },
        undefined,
        (error) => {
            console.error('GLTF load error:', error);
        }
    );

    const mouse = { x: 0, y: 0 };
    heroSection.addEventListener('pointermove', (event) => {
        const rect = heroSection.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    const clock = new THREE.Clock();
    const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();

        if (model) {
            model.rotation.y += delta * 0.18;
            //model.position.x = mouse.x * 0.08;
            //model.position.y = -0.18 + mouse.y * 0.06;
        }

        renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
        const rect = heroSection.getBoundingClientRect();
        const width = Math.max(1, rect.width);
        const height = Math.max(1, rect.height);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener('resize', resize);
}

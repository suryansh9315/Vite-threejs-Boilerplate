import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from 'dat.gui';
 
const gui = new dat.GUI();
const TL = new THREE.TextureLoader();
const canvas = document.getElementById("three");
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0xa0a0a0 );
// scene.fog = new THREE.Fog( 0xa0a0a0, 10, 50 );
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  1000
);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 0, 3);
controls.update();

// const cameraFolder = gui.addFolder('camera')
// cameraFolder.add(camera.rotation,'x').min(-5).max(5).step(0.01)
// cameraFolder.add(camera.rotation,'z').min(-5).max(5).step(0.01)
// cameraFolder.add(camera.rotation,'y').min(-5).max(5).step(0.01)
// cameraFolder.open()

let hlight = new THREE.AmbientLight(0xededed, 1);
scene.add(hlight);

// const dirLight = new THREE.DirectionalLight( 0xffffff );
// dirLight.position.set( 10, 10, - 10 );
// dirLight.castShadow = true;
// dirLight.shadow.camera.top = 2;
// dirLight.shadow.camera.bottom = - 2;
// dirLight.shadow.camera.left = - 2;
// dirLight.shadow.camera.right = 2;
// dirLight.shadow.camera.near = 0.1;
// dirLight.shadow.camera.far = 40;
// scene.add( dirLight );

// let light = new THREE.PointLight(0xc4c4c4, 0.5);
// light.position.set(0, 100, -500);
// scene.add(light);

const geometry = new THREE.BoxGeometry(1,1,1,40,40,40)
const material = new THREE.MeshStandardMaterial()
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  // const time = clock.getElapsedTime()
  sphere.rotation.y += 0.01
  sphere.rotation.z += 0.01
  sphere.rotation.x += 0.01
  // controls.update();
  renderer.render(scene, camera);
}
animate();
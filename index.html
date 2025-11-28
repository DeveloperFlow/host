<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Glowing Particles Demo</title>
  <style>
    body { margin: 0; overflow: hidden; background: #000; }
  </style>
</head>
<body>
<script type="module">
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.164/build/three.module.js";

// -------------------------------------------------------
// 1. Make a soft "glow circle" texture using Canvas
// -------------------------------------------------------
function createGlowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );

  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return new THREE.CanvasTexture(canvas);
}

// -------------------------------------------------------
// 2. Setup Scene
// -------------------------------------------------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const glowTexture = createGlowTexture();

// -------------------------------------------------------
// 3. Create Particle Field
// -------------------------------------------------------
const particleCount = 2000;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
  positions[i*3 + 0] = (Math.random() - 0.5) * 20;
  positions[i*3 + 1] = (Math.random() - 0.5) * 20;
  positions[i*3 + 2] = (Math.random() - 0.5) * 20;
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  size: 0.2,
  map: glowTexture,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  color: 0xffffff,
});

const points = new THREE.Points(geometry, material);
scene.add(points);

// -------------------------------------------------------
// 4. Animation Loop
// -------------------------------------------------------
let t = 0;
function animate() {
  requestAnimationFrame(animate);

  t += 0.002;

  // Slight drifting motion
  points.rotation.y += 0.001;
  points.rotation.x = Math.sin(t) * 0.1;

  // Orbit camera
  camera.position.x = Math.sin(t * 0.6) * 10;
  camera.position.z = Math.cos(t * 0.6) * 10;
  camera.lookAt(0,0,0);

  renderer.render(scene, camera);
}

animate();

// -------------------------------------------------------
// 5. Handle Resize
// -------------------------------------------------------
addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
</script>
</body>
</html>

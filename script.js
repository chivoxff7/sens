let scene, camera, renderer;
let cars = [];
let activeCar = null;
let keys = {};

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xa0a0a0);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 10, 20);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Piso
  const groundGeometry = new THREE.PlaneGeometry(100, 100);
  const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228822 });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // Crear 5 carros (cubos simples)
  for (let i = 0; i < 5; i++) {
    const car = new THREE.Mesh(
      new THREE.BoxGeometry(2, 1, 4),
      new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff })
    );
    car.position.set(i * 3, 0.5, 0);
    car.visible = false;
    cars.push(car);
    scene.add(car);
  }

  activeCar = cars[0];
  activeCar.visible = true;

  // Selector de carros
  document.getElementById('carSelect').addEventListener('change', (e) => {
    const index = parseInt(e.target.value);
    cars.forEach(c => c.visible = false);
    activeCar = cars[index];
    activeCar.visible = true;
    activeCar.position.set(0, 0.5, 0);
  });

  // Movimiento
  window.addEventListener('keydown', (e) => keys[e.key] = true);
  window.addEventListener('keyup', (e) => keys[e.key] = false);

  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  moveCar();
  renderer.render(scene, camera);
}

function moveCar() {
  if (!activeCar) return;

  if (keys['ArrowUp']) activeCar.position.z -= 0.2;
  if (keys['ArrowDown']) activeCar.position.z += 0.2;
  if (keys['ArrowLeft']) activeCar.rotation.y += 0.05;
  if (keys['ArrowRight']) activeCar.rotation.y -= 0.05;

  camera.position.x = activeCar.position.x + 10;
  camera.position.z = activeCar.position.z + 10;
  camera.lookAt(activeCar.position);
}

let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  console.log(circle.style.left);
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

import * as THREE from 'three';
// import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js'

//make sure that the THREE object exists
console.log(THREE);

//how to create a THREE scene
const scene = new THREE.Scene(); 

//creating a THREE camera (can only use fully complete cameras - ortho or linear)
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000,
);
camera.position.set(0,0,100);
camera.lookAt(0,0,0); 

//be able to render a picture - create it's own canvas to put into document 
const renderer = new THREE.WebGL1Renderer();
renderer.setClearColor(0xfdab9f);
renderer.setSize(window.innerWidth, window.innerHeight);

//create canvas in the body
document.body.appendChild(renderer.domElement);

//THREE light: add directional light and ambient light 
const ambient = new THREE.AmbientLight(0xffffff, 1);
//if don't add ight to the scene, it won't show anything
scene.add(ambient); 
const directional = new THREE.DirectionalLight(0xffffff, 0.9);
//will point towards the origin so should change the direction
directional.position.x = 7; 
directional.position.y = 14; 
scene.add(directional);

// upload an obj 
// var objectLoader = new THREE.ObjectLoader(); 
// objectLoader.setPath('/models/');
// console.log(objectLoader.setPath('/models/'));
// var obj = objectLoader.load('base_figure1_Merge2.glb'); 
// console.log( `loaded ${objectLoader}`);
// scene.add(obj);

//create a cube 
const octahedron = new THREE.OctahedronGeometry(1,1);
const material = new THREE.MeshStandardMaterial({
    color: 0xf3ffe2,
    roughness: 0.5,
    metalness: 0.7,
    emissive: 5,
    
  wireframe: true,
  wireframeLinewidth: 10,
  wireframeLinejoin: 'round', 
  wireframeLinecap: 'round', 
  // map: new THREE.TextureLoader().load('stone wall.jpg'),
});
const cube = new THREE.BoxGeometry(1,1,1);
const material2 = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  transparent: true,
  wireframe: true,
  wireframeLinewidth: 10,
  wireframeLinejoin: 'round', 
  wireframeLinecap: 'round', 
  opacity: 1,
  roughness: 0.5,
  metalness: 0.7,
  setClearColor: 1,
});
const shape2 = new THREE.ConeGeometry(1,4);
const material3 = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  transparent: true,
  wireframe: true,
  wireframeLinewidth: 10,
  wireframeLinejoin: 'round', 
  wireframeLinecap: 'round', 
  opacity: 1,
  roughness: 0.5,
  metalness: 0.7,
  setClearColor: 1,
});
const box = new THREE.Mesh(cube, material2);
box.position.set(1,1,1);
const tetra = new THREE.Mesh(shape2, material3);
// shape2.position.set(0,0.5,0);
scene.add(box);
scene.add(tetra);
const mesh = new THREE.Mesh(octahedron, material);
// scene.add(mesh);
camera.position.z = 5; 

// var camControls = new THREE.OrbitControls(camera, renderer.domElement);
// camControls.enableDamping = true; 
// camControls.campingFactor = 0.25;
// camControls.enableZoom = true; 

// const loadModel = new THREE.ObjectLoader();
// loadModel.load("Ch19_nonPBR.fbx");

// function ( obj ) {
//   scene.add(obj);
// }

// function( err ) {
//   console.error(`Can't load model`)
// }
// const model = loader.parse(a_)

//create a blue line
const thread = new THREE.LineBasicMaterial({ 
  color: 0x194d33
  
}); 

const points = []; 
points.push(new THREE.Vector3(10,0,-10));
points.push(new THREE.Vector3(0,10,750));
points.push(new THREE.Vector3(40,0,-10));
const geometry = new THREE.BufferGeometry().setFromPoints(points); 

const line = new THREE.Line(geometry, thread); 
scene.add(line); 

//create a render loop, called every 60th of a second
function loop()
{
  // camControls.update();
    //modify the scene 
    cube.rotateY(0.01); 
    tetra.rotateX(-0.01); 
    tetra.rotateY(-0.01); 
    mesh.rotation.x += 0.01;
    mesh.rotateZ(0.01); 
    line.rotateY(0.01); 
    //render the scene, should be called last so can render all the changes
    renderer.render(scene,camera);
    //make it a loop
    requestAnimationFrame(loop); 
}
requestAnimationFrame(loop); 

import * as THREE from 'three';

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

//be able to render a picture - create it's own canvas to put into document 
const renderer = new THREE.WebGL1Renderer();
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

//create a cube 
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshPhysicalMaterial({
    color: 0x00ff00,
    roughness: 0.5,
    metalness: 0.7,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 5; 

//create a render loop, called every 60th of a second
function loop()
{
    //modify the scene 
    mesh.rotation.x += 0.01;
    mesh.rotateX(0.01); 
    mesh.rotateY(0.01); 
    //render the scene, should be called last so can render all the changes
    renderer.render(scene,camera);
    //make it a loop
    requestAnimationFrame(loop); 
}
requestAnimationFrame(loop); 

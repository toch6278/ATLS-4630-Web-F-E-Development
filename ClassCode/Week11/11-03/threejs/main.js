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

//be able to render a picture 
const renderer = new THREE.WebGL1Renderer();
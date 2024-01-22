import './styles/style.css'

import './styles/style.css';
import * as THREE from 'three';

console.log(THREE);


const canvas=document.querySelector('canvas.home_backgorund_scene');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.add(camera);


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "#ffd900" } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
    canvas
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.render(scene, camera);


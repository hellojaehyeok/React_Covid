import React from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './threeGraph.module.css';


const ThreeGraph = ({dailyDecide}) => {
    
    const threeRef = useRef();

    const three = () => {
      if(dailyDecide.length == 0){
        console.log('dailyDecide 전달받지 못함');
        return;
      }else{
        console.log("Three.js Start");
      }
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize( window.innerWidth, window.innerHeight );
      threeRef.current.appendChild(renderer.domElement);
      
      window.addEventListener("resize", function(){
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
      })
      renderer.setClearColor( 0xffffff, 0);
    
      
      const graphGroup = new THREE.Object3D();

      for(let i=0;i<21;i++){
        const positionY = dailyDecide[i] * 0.001;
        const geometry = new THREE.BoxGeometry( 0.02, positionY, 0.01 );
        const material = new THREE.MeshStandardMaterial( { color: 0x454545 } );
        const graphCube = new THREE.Mesh( geometry, material );
        graphCube.position.x=i*0.1-1;
        graphGroup.add( graphCube );
      }
      scene.add(graphGroup);
      

      const light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
      scene.add( light );
  
      camera.position.z = 2;
  
      let animate = () => {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
      };
      animate();
    }

    three();

    return(
        <div className={styles.three} ref={threeRef}></div>
    )

};

export default ThreeGraph;
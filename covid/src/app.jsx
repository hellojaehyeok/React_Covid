import styles from './app.module.css';
import CovidForm from './components/covidForm/covidForm';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

function App({covid}) {
  
    const threeRef = useRef();

    const three = () => {
      console.log("Three.js Start");
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      threeRef.current.appendChild(renderer.domElement);
      renderer.setSize( window.innerWidth, window.innerHeight );
      window.addEventListener("resize", function(){
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
      })
      renderer.setClearColor( 0xffffff, 0);
    
      const geometry = new THREE.BoxGeometry( 1, 1, 1 );
      const material = new THREE.MeshStandardMaterial( { color: 0x454545 } );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );
  
      const light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
      scene.add( light );
  
      camera.position.z = 2;
  
      let animate = () => {
              requestAnimationFrame( animate );
              cube.rotation.x += 0.005;
              cube.rotation.y += 0.005;
              cube.rotation.z += 0.005;
              renderer.render( scene, camera );
      };
      animate();
    }

    useEffect(()=>{
      three()
    },[threeRef])

  return (
    <div className="App">

      <div className={styles.three} ref={threeRef}></div>

      <ul>
        { covid.map(item => <CovidForm key={item.seq} item={item} />) }
      </ul>
    </div>
  );
  
}

export default App;

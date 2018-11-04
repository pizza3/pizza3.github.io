import React ,{Component} from 'react';
import {css} from 'emotion';
import * as THREE from 'three'
// window.THREE = THREE;
// import TrackballControls from 'three/examples/js/controls/TrackballControls';

class SceneOne extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
       this.initScene();
       this.animateScene();
    }

    initScene(){
        this.scene = new THREE.Scene();
        this.width = 500;
        this.height =  500;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(0xffffff);
        this.renderer.setSize(this.width, this.height);
        this.camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000);
        this.camera.position.set(0, 0, 10);
        this.camera.lookAt(this.scene.position);
        let container = document.getElementById('container');
        container.appendChild(this.renderer.domElement);
        // this.trackballControls = new THREE.TrackballControls(this.camera);
        this.renderer.render(this.scene, this.camera);
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        var plane = new THREE.Mesh( geometry, material );
        // plane.position.x = -100;
        this.scene.add( plane );
    }

    animateScene(){
        requestAnimationFrame(()=>this.animateScene());        
        // this.trackballControls.update();
        this.renderer.render(this.scene, this.camera);
    }


    render(){
        return(
            <div id='container' className={container}>
            </div>
        )
    }
}

const container =  css`
    position:relative;
    width:100%;
    height:100%;
`


export default SceneOne;
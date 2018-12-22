import React ,{Component} from 'react';
import {css} from 'emotion';
import * as THREE from 'three'
import SimplexNoise from 'simplex-noise'
// import * as Noise from './perlin';
// window.THREE = THREE;
// import 'three/examples/js/controls/TrackballControls';
import {TweenMax} from "gsap";


class SceneOne extends Component{
    constructor(props){
        super(props);
        this.state={
            check:false
        }
        this.handleMove=this.handleMove.bind(this);
        this.handleOut=this.handleOut.bind(this);
    }

    componentDidMount(){
       this.noise = new SimplexNoise();
       this.mouse = new THREE.Vector2();
       this.initScene();
       this.loadTexture();
       this.animateScene();
    }

    initScene(){
        this.ts=1;
        this.plane=null;
        this.scene = new THREE.Scene();
        if(window.innerWidth <= 800){
            this.width = 300;
            this.height =  300;
        }
        else{
            this.width = 400;
            this.height =  400;
        }
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(0xffffff);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.shadowMap.enabled = true;
        this.camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 10000);
        this.camera.position.set(0, 0, 1000);
        this.camera.lookAt(this.scene.position);
        this.raycaster = new THREE.Raycaster();
        let container = document.getElementById('container');
        container.appendChild(this.renderer.domElement);
        this.renderer.render(this.scene, this.camera);
        this.loader = new THREE.ImageLoader();
        // window.addEventListener("resize", this.handleWindowResize.bind(this), false);
    }

    loadTexture(){
        this.loader.load(
            'https://avatars0.githubusercontent.com/u/20243009?s=400&u=a5e8ce01e8f7eaf67084cb18ae60413e1e9a2ec5&v=4',
            function (image) {
              let canvasWidth = image.width;
              let canvasHeight = image.height;
              let geometry;
                if(window.innerWidth <= 800){
                    geometry = new THREE.PlaneGeometry(250, 450, 100, 30);
                }
                else{
                    geometry = new THREE.PlaneGeometry(640, 400, canvasWidth, 10);
                }
              let canvas = document.getElementById('image');
              canvas.height = canvasHeight;
              canvas.width = canvasWidth;
              let context = canvas.getContext('2d');
              context.drawImage(image, 0, 0, canvasWidth + 1, canvasHeight + 1);
              let canvasTexture = new THREE.Texture(canvas);
              canvasTexture.minFilter = THREE.LinearFilter
              let meshMaterial = new THREE.MeshBasicMaterial({
                opacity: 1,
                side: THREE.DoubleSide,
                // wireframe: true,
                map: canvasTexture
              });
              meshMaterial.map.needsUpdate = true;
              this.plane = new THREE.Mesh(geometry, meshMaterial);
              this.scene.add(this.plane);
            //   this.plane.rotation.y=Math.PI/80;
              this.plane.rotation.y = Math.PI/4;
              this.plane.rotation.x = Math.PI/4;
            }.bind(this)
          );
    }

    handleWindowResize() {
        let HEIGHT = window.innerHeight;
        let WIDTH = window.innerWidth;
        this.renderer.setSize(WIDTH, HEIGHT);
        this.camera.aspect = WIDTH / HEIGHT;
        this.camera.updateProjectionMatrix();
      }

    createNoise(ts){
        let amp = 4;
        let time = Date.now();
        if(this.plane){
            let center = new THREE.Vector2(0,0);
            let vLength = this.plane.geometry.vertices.length;
            for (let i = 0; i < vLength; i++) {
            let distance =
            this.noise.noise2D(
                this.plane.geometry.vertices[i].x + time * 0.0003,
                this.plane.geometry.vertices[i].y + time * 0.0003
            ) * amp;
              let v = this.plane.geometry.vertices[i];
              let dist = new THREE.Vector2(v.x, v.y).sub(center);
              let size = 14.0;
              let magnitude = 150;
              if(window.innerWidth <= 800){
                size = 13.0;
                magnitude = 80;
                v.z = Math.sin(dist.length()/-size + (ts/100) + distance / 2) * magnitude;
              }
              else{
                v.z = Math.sin(dist.length()/-size + (ts/100) + 0 / 2) * magnitude;
              }
            }
            this.plane.geometry.verticesNeedUpdate = true;
            this.plane.geometry.normalsNeedUpdate = true;
            this.plane.geometry.computeVertexNormals();
            this.plane.geometry.computeFaceNormals();
        }
    }

    handleMove(event){
        if(this.plane){
            TweenMax.to(this.plane.rotation, 0.5, {ease: Power2.easeOut,y:Math.PI/80,x:0});
        }   
    }

    handleOut(){
        if(this.plane){
            TweenMax.to(this.plane.rotation, 0.5, {y:Math.PI/4,x:Math.PI/4});
        }
    }

    animateScene(){
        requestAnimationFrame(()=>this.animateScene());
        this.ts+=10;
        this.createNoise(this.ts)
        this.renderer.render(this.scene, this.camera);
    }


    render(){
        return(
            <div>
                <canvas id="image" className={'canvas'}></canvas>
                <div id='container' className={'container'} onMouseMove={this.handleMove} onMouseLeave={this.handleOut}>
                </div>
                <style jsx>
                {`
                    .container{
                        position:relative;
                        width:400px;
                        height:400px;
                    }

                    .canvas{
                        visibility:hidden;
                        display: none;
                    }

                    @media (max-width: 800px) {
                        .container{
                            position:relative;
                            width:300px;
                            height:300px;
                            margin-left: calc(50% - 150px);
                        }
                    }

                `}
                </style>
            </div>
        )
    }
}



export default SceneOne;
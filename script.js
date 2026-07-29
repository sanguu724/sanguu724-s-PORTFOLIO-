const c=document.getElementById("canvas3d"),s=new THREE.Scene(),cam=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,.1,1000),r=new THREE.WebGLRenderer({alpha:true,antialias:true});
r.setPixelRatio(Math.min(devicePixelRatio,2));r.setSize(innerWidth,innerHeight);c.appendChild(r.domElement);cam.position.z=7;

const m=new THREE.Mesh(new THREE.IcosahedronGeometry(2.5,2),new THREE.MeshBasicMaterial({color:0x7850ff,wireframe:true,transparent:true,opacity:.2}));
s.add(m);

let x=0,y=0;
addEventListener("resize",()=>{cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();r.setSize(innerWidth,innerHeight)});
addEventListener("mousemove",e=>{x=(e.clientX/innerWidth-.5)*.5;y=(e.clientY/innerHeight-.5)*.5});

(function a(){
requestAnimationFrame(a);
m.rotation.x+=(y-m.rotation.x)*.01;
m.rotation.y+=(x-m.rotation.y)*.01;
m.rotation.z+=0.01;
r.render(s,cam);
})();
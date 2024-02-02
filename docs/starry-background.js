window.starColor="white",window.starVelocity={x:0,y:0,tx:0,ty:0,z:5e-4};const starSize=6,starMinScale=2.5e-10,overflowThreshold=50,starCount=(window.innerWidth+window.innerHeight)/(-1<navigator.userAgent.indexOf("Firefox")?18:11),canvas=document.querySelector("canvas"),context=canvas.getContext("2d");let scale=.5,stars=[],width,height,pointerX,pointerY,touchInput=!1;for(let t=0;t<starCount;t++)stars.push({x:0,y:0,z:starMinScale+Math.random()*(1-starMinScale)});function updateCanvasSize(){width=window.innerWidth*scale,height=window.innerHeight*scale,canvas.width=width,canvas.height=height,stars.forEach(t=>{t.x=Math.random()*width,t.y=Math.random()*height})}function animateStars(){context.clearRect(0,0,width,height),window.starVelocity.tx*=.86,window.starVelocity.ty*=.86,window.starVelocity.x+=.8*(window.starVelocity.tx-window.starVelocity.x),window.starVelocity.y+=.8*(window.starVelocity.ty-window.starVelocity.y),stars.forEach(t=>{if(t.x+=window.starVelocity.x*t.z,t.y+=window.starVelocity.y*t.z,t.x+=(t.x-width/2)*window.starVelocity.z*t.z,t.y+=(t.y-height/2)*window.starVelocity.z*t.z,t.z+=window.starVelocity.z,t.x<-overflowThreshold||t.x>width+overflowThreshold||t.y<-overflowThreshold||t.y>height+overflowThreshold){let o="z",e=Math.abs(window.starVelocity.x),n=Math.abs(window.starVelocity.y);if(1<e||1<n){let t;t=n<e?Math.random()<e/(e+n)?"h":"v":Math.random()<n/(e+n)?"v":"h",o="h"===t?0<window.starVelocity.x?"l":"r":0<window.starVelocity.y?"t":"b"}t.z=starMinScale+Math.random()*(1-starMinScale),"z"===o?(t.z=.1,t.x=Math.random()*width,t.y=Math.random()*height):"l"===o?(t.x=-overflowThreshold,t.y=height*Math.random()):"r"===o?(t.x=width+overflowThreshold,t.y=height*Math.random()):"t"===o?(t.x=width*Math.random(),t.y=-overflowThreshold):"b"===o&&(t.x=width*Math.random(),t.y=height+overflowThreshold)}}),stars.forEach(t=>{context.beginPath(),context.lineCap="round",context.lineWidth=starSize*t.z*scale,context.globalAlpha=.5+.5*Math.random(),context.strokeStyle=window.starColor,context.beginPath(),context.moveTo(t.x,t.y);let o=2*window.starVelocity.x,e=2*window.starVelocity.y;Math.abs(o)<.1&&(o=.5),Math.abs(e)<.1&&(e=.5),context.lineTo(t.x+o,t.y+e),context.stroke()}),requestAnimationFrame(animateStars)}function movePointer(t,o){var e,n;"number"==typeof pointerX&&"number"==typeof pointerY&&(e=t-pointerX,n=o-pointerY,window.starVelocity.tx=window.starVelocity.tx+e/8*scale*(touchInput?1:-1),window.starVelocity.ty=window.starVelocity.ty+n/8*scale*(touchInput?1:-1)),pointerX=t,pointerY=o}updateCanvasSize(),animateStars(),window.onresize=updateCanvasSize,document.onmousemove=t=>{touchInput=!1,movePointer(t.clientX,t.clientY)},document.ontouchmove=t=>{touchInput=!0,movePointer(t.touches[0].clientX,t.touches[0].clientY),t.preventDefault()},document.ontouchend=()=>{pointerX=null,pointerY=null},document.onmouseleave=()=>{pointerX=null,pointerY=null};
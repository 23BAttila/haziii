function drawCircle(){
    for(let deg=0;deg<=360; deg+= 3){   
        const newElement=document.createElement('div');
        newElement.classList.add('circle');
        newElement.style.backgroundColor="white";
        newElement.style.width="13px";
        newElement.style.height="13px";
        newElement.style.borderRadius="50%";
        /*newElement.style.filter="blur(0.5px)";*/
        newElement.style.position="absolute";
        newElement.style.top="350px";
        newElement.style.left="600px";
        const rad=Math.PI/120.0*deg;
        const x=290*Math.cos(rad)/1.5;
        const y=290*Math.sin(rad)/1.5;
        newElement.style.transform=`translate(${x}px,${y}px)`;
        document.body.appendChild(newElement);
        newElement.style.animationName="colorChange";
        newElement.style.animationDuration="4s";
        newElement.style.animationIterationCount="infinite";
        newElement.style.animationDelay=`${deg/120}s`;
        newElement.style.animationTimingFunction="ease-in-out";
        
    }
}
function sg(){
    
    
}

drawCircle();
/*


function drawCircles(){
    for(let deg=0;deg<360; deg+=10){
        const newElement=document.createElement('div');
        newElement.classList.add('circle');
        newElement.style.backgroundColor="red";
        newElement.style.width="50px";
        newElement.style.height="50px";
        newElement.style.borderRadius="50%";
        newElement.style.filter="blur(0.5px)";
        newElement.style.position="absolute";
        newElement.style.top="350px";
        newElement.style.left="600px";
        const rad=Math.PI/180.0*deg;
        const x=300*Math.cos(rad);
        const y=300*Math.sin(rad);
        newElement.style.transform=`translate(${x}px,${y}px)`;
        document.body.appendChild(newElement);
        newElement.style.animationName="colorChange";
        newElement.style.animationDuration="1s";
        newElement.style.animationIterationCount="infinite";
        newElement.style.animationDelay=`${deg/200.0}s`;
    }
}

drawCircles();*/
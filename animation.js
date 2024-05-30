function animaTion(){
    for(let deg=0;deg<=360; deg+=10){   
        const newElement=document.createElement('div');
        newElement.classList.add('circle');
        newElement.style.backgroundColor="white";
        newElement.style.width="200px";
        newElement.style.height="200px";
        newElement.style.borderRadius="10%";
        newElement.style.position="absolute";
        newElement.style.top="350px";
        newElement.style.left="600px";
        const rad=Math.PI/10.0*deg;
        const x=Math.cos(rad)/90;
        const y=Math.sin(rad)/180;
        newElement.style.transform=`translate(${x}px,${y}px)`;
        document.body.appendChild(newElement);
        newElement.style.backgroundColor="black";
        //newElement.style.animationName="colorChange";
        //newElement.style.animationDuration="4s";
        newElement.style.animationIterationCount="infinite";
        //newElement.style.animationDelay=`${deg/1}s`;
        //newElement.style.animationTimingFunction="ease-in-out";
        
    }
}


//animaTion()
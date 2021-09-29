for (var i = 100; i<=200; i++){
    if((i % 3 === 0)&&(i % 4 === 0)){
        console.log("LoopyLighthouse"+i);
    }
    else if(i % 3 === 0){
        console.log("Loopy"+i);
    }
    else if(i % 4 === 0){
        console.log("Lighthouse"+i);
    }
    else{
        console.log("number"+i);
    }
    }

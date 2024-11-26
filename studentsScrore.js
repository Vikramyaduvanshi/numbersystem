let score=[35,40,50,60,70,20,90,95,98,18];

for(let i=0; i<score.length; i++){

if(score[i]<40){
    score[i] = score[i]+20
}
if(score[i]>90){
    score[i] = Math.floor(Math.random()*90);
}

}

for(let value of score){
    if(value>=50){
        console.log("pass")
    }
    else{
        console.log("fail")
    }
}
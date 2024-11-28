let arr = [[1,2,3,4,5], [6,7,8,9,1], [3,2,5,4,6],[7,8,9,1,2]]

let p="";


let bag=true

for(let i=0; i<arr.length; i++){


if(bag==true){
    for(let j = arr[i].length-1; j>=0 ; j--){
        p += arr[i][j] + " "
    }
    bag=false;
    
}
else{
    for(let k=0; k<arr[i].length; k++){
        p += arr[i][k] + " ";
    }
    bag=true;
    
}


}
console.log(p)
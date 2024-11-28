let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let result = [];


for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i][0]);
}


for (let j = 1; j < arr[0].length; j++) {
    result.push(arr[0][j]);
}


for (let i = 1; i < arr.length; i++) {
    result.push(arr[i][arr[i].length - 1]);
}


for (let j = arr[arr.length - 1].length - 2; j > 0; j--) {
    result.push(arr[arr.length - 1][j]);
}

console.log(result.join(","));

let arr = [5,1,4,2,7];
function sumArr(arr){
let sum = 0;
for( let i = 0; i < arr.length; i++) {
     sum += arr[i]
    }
    return sum;
}
console.log(sumArr(arr));
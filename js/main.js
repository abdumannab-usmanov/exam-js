

// let arr = [ -1,2, -4,3, -3,1, ]


function num(arrey){
let inf = 0;
for(var i = 0; i < arrey.length; i = i + 1){
     if( arrey[i] > 0 ){
       inf = inf + arrey[i]
     }
    }
     return inf
}
console.log(num(arr));


var arre = [true, false,true, false,true, false,true, false,true, ]


function num(ar){
var bir = 0;
for(var i = 0; i < ar.length; i = i + 1){
     if( ar[i]===true ){
       bir = bir + 1
     }
    }
     return bir
}
console.log(num(arre));





let arrey = [ 1, 3, 0, 3, 0, 7, 5, 0 ]


function harf(arr){
 var num;
for(var a = 0; a < arr.length; a++){
  for(var b = a + 1; b < arr.length; b++)
     if( arr[a] === 0){
       num = arr[a];
       arr[a] = arr[b];
       arr[b] = num;
     }
    }
  var bum = arr.toString();
  bum = arr.join('');
     return bum
}
console.log(harf(arrey));
console.log(harf(typeof(arrey)));











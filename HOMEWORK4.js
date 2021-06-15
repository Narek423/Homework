// N1.

function deepCloneObj(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray (obj[key])) {
      newObj[key] = deepCloneObj(obj[key]);
    } else if (!Array.isArray (obj[key]) && typeof obj[key] !== 'object'){
        newObj[key] = obj[key];
    } else if (Array.isArray(obj[key])) {
        newObj[key] = deepClonArr(obj[key]);
    }
  }
  function deepClonArr(arr) {
  let arrNew = [];
  for (let key of arr) {
    if (Array.isArray(key)) {
      arrNew.push(deepClonArr(key));
    } else if (typeof key === 'object') {
        arrNew.push(deepCloneObj(key));
    } else {
        arrNew.push(key);
    }
}
    return arrNew;
}
  return newObj;
}
let old = { a: '‘1’', b: { a: [2,5,4,{f:[8,3]},'a']}};
let nNew = deepCloneObj(old);
old.b.a[3].f[0] = 5;
nNew.b.a[3].f[0] !== old.b.a[3].f[0];


// N2.

function range(x, y) {
  if (x === y - 1 || x >= y) return [];
  if (x[x.length - 1] === y - 1) return x.pop(), x;
  x = [].concat(x);
  x = x.concat(++x[x.length - 1]);
  return range(x,y);
}
range(-2, 8);


// N3.

function sortArr (arr, min, max) {
  let map = new Map;
  let result = [];
  for (let i = min; i <= max; i++) {
    map.set(i);
  }
  for (let key of arr) {
    map.set(key,[key].concat(map.get(key)));
  }
  for (let key of map.values()) {
    result = result.concat(key);
  }
  return result.filter(a => a + 0.5);
}

sortArr ([4, -8, -8, 3, -1, 0, -10], -10, 7);


// N4.

function allPosibSubsets({arr = [], arr1 = [...arr], arr2 = [...arr], result = []} = {}) {
  if (arr.length < 3 && result.length === 0) return arr;
  if (arr.length < 3) return result;
  if (arr2.length === 3) {
    result.push(arr2);
    arr = arr.slice(1);
    return allPosibSubsets({arr, result});
  }
  while(arr1.length >= 3) {
   result.push(arr1.slice(0,3));
   arr1.splice(2,1);
 } 
 arr2.splice(1,1);
 arr1 = [...arr2];

 return allPosibSubsets({arr, arr1, arr2, result});
}

allPosibSubsets({arr:[5, 9, 23, 0, -2]});

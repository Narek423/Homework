// N1.

let isAllDigitOdd = (num, i = 0) => num === 0 && i > 0 ? true : num % 10 % 2 === 0 ? false : isAllDigitOdd(Math.floor(num / 10), ++i);

isAllDigitOdd(55255);

// N2.

function minPositiveElem(arr, result = -1, i = 0) {
   if (arr[i] >= 0) {
    result = arr[i];
    if (arr[i] < result) result = arr[i];
  }
  if (i === arr.length -1) return result;

  return minPositiveElem (arr, result, ++i);
}

minPositiveElem([45, -9, 15, 5, -78]);

// N3.

let indexOfSortingOrderViolate = (arr, i = 0) => i === arr.length - 1 ? -1 : arr[i] <= arr[i + 1] ? indexOfSortingOrderViolate(arr, ++i) : i + 1;

indexOfSortingOrderViolate([-9, -4, -4, 3, 12, 4, 5]);

// N4.

function removeFirstElem(arr, i = 1, leng = arr.length) {
  if (i === leng || leng === 0) {
   return arr.splice(leng, leng);
  }
  arr.push(arr[i]);
  return removeFirstElem(arr, ++i, leng);
}

removeFirstElem([1,2]);

// N5.

function rotateArray(arr = [], num = 0) {
  if (num === 0) return arr;
  if (num > 0) {
    arr.push(arr[0]);
    arr.shift(arr[0]);
    return rotateArray(arr, --num);
  } else if (num < 0) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop(arr[arr.length - 1]);
    return rotateArray(arr, ++num);
  }
}

rotateArray(['f','k','h','r','d','t','u'],0);
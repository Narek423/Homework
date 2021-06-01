function elementUnderIndexOfItsValue (arr){
  arr.sort((a, b) => a - b);
  let result = [arr[0]];
  let count = 1;
  for (let i = 1; i <= arr[arr.length - 1]; i++) {
    if (i === arr[count]) {
      result[i] = arr[count];
      count++
      continue;
    }
    result[i] = undefined;
}
return result;
}


elementUnderIndexOfItsValue([5, 4, 8]);
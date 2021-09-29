const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < Math.ceil(arr.length/size); i++) {
    result.push(arr.slice((i * size), (i * size) + size));
  }

  return result;
}


console.log(chunkArray(result, 3));
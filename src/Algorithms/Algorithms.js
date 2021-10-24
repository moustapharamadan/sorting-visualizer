function getRandomFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}

export function resetArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    const rand = getRandomFloat(1, 100);
    array.push(rand);
  }
  return array;
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function merge(array, start, mid, end, updateDataArray) {
  const tmp = [];
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (array[i] < array[j]) {
      tmp.push(array[i]);
      i++;
    } else {
      tmp.push(array[j]);
      j++;
    }
  }
  while (i <= mid) {
    tmp.push(array[i]);
    i++;
  }
  while (j <= end) {
    tmp.push(array[j]);
    j++;
  }
  for (let k = start; k <= end; k++) {
    array[k] = tmp[k - start];
    updateDataArray([...array]);
    await sleep(1000 / array.size);
  }
  return array;
}

async function mergeSortInternal(array, start, end, updateDataArray) {
  debugger;
  if (start < end) {
    const mid = parseInt((end + start) / 2, 10);
    await mergeSortInternal(array, start, mid, updateDataArray);
    await mergeSortInternal(array, mid + 1, end, updateDataArray);
    array = await merge(array, start, mid, end, updateDataArray);
  }
  return array;
}

export function mergeSort(array, updateDataArray) {
  return mergeSortInternal(array, 0, array.length - 1, updateDataArray);
}

// function merge(left, right) {
//   const result = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       result.push(left.shift());
//     } else {
//       result.push(right.shift());
//     }
//   }
//   return [...result, ...left, ...right];
// }

// export function mergeSort(array) {
//   if (array.length < 2) return array;

//   const mid = array.length / 2;
//   const left = array.splice(array, mid);
//   return merge(mergeSort(left), mergeSort(array));
// }

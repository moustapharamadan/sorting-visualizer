import { store } from "../Redux/store";
import { toggleIsSortRunning, updateDataArray } from "../Redux/actions";

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

async function merge(array, start, mid, end) {
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
    store.dispatch(updateDataArray([...array]));
    await sleep(10000 / array.size);
  }
  return array;
}

async function mergeSortInternal(array, start, end) {
  if (start < end) {
    const mid = parseInt((end + start) / 2, 10);
    await mergeSortInternal(array, start, mid);
    await mergeSortInternal(array, mid + 1, end);
    array = await merge(array, start, mid, end);
  }
}

export async function mergeSort(array) {
  store.dispatch(toggleIsSortRunning());
  await mergeSortInternal(array, 0, array.length - 1);
  store.dispatch(toggleIsSortRunning());
}

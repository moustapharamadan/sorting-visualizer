import { store } from "../Redux/store";
import { toggleIsSortRunning, updateDataArray } from "../Redux/actions";
import * as types from "./AlgorithmTypes";

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function resetArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    const rand = getRandomInteger(1, 100);
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
    await sleep(1000 / array.length);
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

async function mergeSort(array) {
  await mergeSortInternal(array, 0, array.length - 1);
}

async function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
  store.dispatch(updateDataArray([...array]));
  await sleep(1000 / array.length);
}

async function partition(array, left, right) {
  const pivot = array[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++;
      await swap(array, i, j);
    }
  }
  await swap(array, i + 1, right);
  return i + 1;
}

async function quickSortInternal(array, left, right) {
  if (left < right) {
    const pivot = await partition(array, left, right);
    await quickSortInternal(array, left, pivot - 1);
    await quickSortInternal(array, pivot + 1, right);
  }
}

async function quickSort(array) {
  await quickSortInternal(array, 0, array.length - 1);
}

async function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; ++i) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; ++j) {
      if (array[j] > array[j + 1]) {
        await swap(array, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

async function insertionSort(array) {
  for (let i = 1; i < array.length; ++i) {
    for (let j = i; j > 0; --j) {
      if (array[j] < array[j - 1]) {
        await swap(array, j, j - 1);
      }
    }
  }
}

async function heapify(array, n, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let high = i;
  if (left < n && array[left] > array[high]) high = left;
  if (right < n && array[right] > array[high]) high = right;
  if (i !== high) {
    await swap(array, i, high);
    await heapify(array, n, high);
  }
}

async function heapSort(array) {
  for (let i = array.length / 2 - 1; i >= 0; --i) {
    await heapify(array, array.length, i);
  }
  console.log(array);
  for (let i = array.length - 1; i > 0; --i) {
    await swap(array, i, 0);
    await heapify(array, i, 0);
  }
}

export async function algorithm(array, name) {
  store.dispatch(toggleIsSortRunning());
  switch (name) {
    case types.BUBBLE_SORT:
      await bubbleSort(array);
      break;
    case types.HEAP_SORT:
      await heapSort(array);
      break;
    case types.INSERTION_SORT:
      await insertionSort(array);
      break;
    case types.MERGE_SORT:
      await mergeSort(array);
      break;
    case types.QUICK_SORT:
      await quickSort(array);
      break;
    default:
      break;
  }
  store.dispatch(toggleIsSortRunning());
}

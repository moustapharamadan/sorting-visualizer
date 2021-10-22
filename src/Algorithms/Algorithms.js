function getRandomFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}

export function resetArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    const rand = getRandomFloat(1, 100);
    array.push({ id: i, value: rand });
  }
  return array;
}

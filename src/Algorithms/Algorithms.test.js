import { resetArray, mergeSort } from "./Algorithms";
it("Merge Sort", () => {
  debugger;
  const array = resetArray(20);
  const expectedResult = [...array];
  const result = mergeSort(array);
  expectedResult.sort((a, b) => {
    return a - b;
  });
  expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));
});

This application is built to visualize the following sorting algorithms: Merge, Quick, Heap, Insertion, and Bubble sort.
It was built using React/Redux libraries in addition to the Bootstrap and Material-UI libraries.

Implementation overview:

- Create a redux store where the random collection of data and relevant flags like the plot direction and the chosen algorithm are stored.\* While the algorithm is running, the updated version of the data is dispatched to the redux store to visualize a progressive sort.
- Use async/await with the sorting algorithm to let the event loop update the array display component (SortingVisualizer) while executing the sorting.
- Disable all the buttons while running the sorting except the plot direction button.
- Add a collapsed box to display a brief description of the chosen algorithm.

Demo: <a href="https://moustapharamadan.github.io/sorting-visualizer/">sorting-visualizer</a>

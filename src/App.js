import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import SortingVisualizer from "./Visualizer/SortingVisualizer";
import SettingsFrame from "./Visualizer/SettingsFrame";
import AlgorithmInfo from "./Visualizer/AlgorithmInfo";

function App() {
  return (
    <Provider store={store}>
      <SettingsFrame />
      <AlgorithmInfo />
      <SortingVisualizer />
    </Provider>
  );
}

export default App;

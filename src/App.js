import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import configureStore from "./Redux/store";
import { Provider } from "react-redux";
import SortingVisualizer from "./Visualizer/SortingVisualizer";
import SettingsFrame from "./Visualizer/SettingsFrame";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <SettingsFrame />
      <SortingVisualizer />
    </Provider>
  );
}

export default App;

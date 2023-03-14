import "./App.css";
import Calculator from "./components/Calculator";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </>
  );
}

export default App;

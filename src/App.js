import "./App.css";
import Pages from "./components/Pages/Pages";
import { BrowserRouter } from "react-router-dom";
import AppConext from "./components/AppContext/AppConext";

function App() {
  return (
    <h1 className="App">
      <BrowserRouter>
        <AppConext>
          <Pages></Pages>
        </AppConext>
      </BrowserRouter>
    </h1>
  );
}

export default App;

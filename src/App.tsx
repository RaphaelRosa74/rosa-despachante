import { BrowserRouter } from "react-router-dom";
import './App.css';
import Index from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </div>
  )
}

export default App

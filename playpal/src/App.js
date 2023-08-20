import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <h1>Playpal</h1>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
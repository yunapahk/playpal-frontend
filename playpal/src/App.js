import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
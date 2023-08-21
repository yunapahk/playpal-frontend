import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SwipeCards from "./components/SwipeCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <SwipeCards />
      <Footer />
    </div>
  );
}

export default App;
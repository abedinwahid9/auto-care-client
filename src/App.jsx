import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Pages/Footer/Footer";

function App() {
  return (
    <div className="fonts container mx-auto">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;

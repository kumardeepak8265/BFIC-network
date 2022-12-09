import Footer from "./Component/Footer";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import OtherContent from "./Component/OtherContent";

function App() {
  return (
    <div>
      <div className="top-0 sticky">
        <NavBar></NavBar>
      </div>
      <Home></Home>
      <OtherContent></OtherContent>
      <Footer></Footer>
    </div>
  );
}

export default App;

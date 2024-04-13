import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <div style={{ position: "relative", top: "8rem" }}>
        <Home />
      </div>
    </div>
  );
}

export default App;

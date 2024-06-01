import "./App.css";
import BarReactEchart from "./components/BarReactEchart";
import PieReactEchart from "./components/PieReactEchart";
import StrokeAnimation from "./components/StrokeAnimation";

function App() {
  return (
    <>
      <StrokeAnimation text={"Dashboard"} fontSize={60} />
      <StrokeAnimation text={"Vite + React + Echarts"} fontSize={40} />

      <div className="container">
        <BarReactEchart />
        <PieReactEchart />
      </div>

      <div className="container">
        <PieReactEchart />
        <BarReactEchart />
      </div>

      <div className="container-info">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          distinctio reiciendis accusamus fugit quidem animi? Voluptatum odio
          numquam at. Libero tempore necessitatibus dolorem incidunt fuga iure
          saepe qui! Consectetur, perferendis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          ullam nulla fugit, modi facere placeat tempore sapiente dignissimos
          eveniet debitis! Dicta quo recusandae, consectetur numquam vero
          nostrum quos in voluptate?
        </p>
      </div>
    </>
  );
}

export default App;

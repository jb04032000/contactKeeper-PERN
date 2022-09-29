import { lazy } from "react";
import Button from "react-bootstrap/Button";
import RoueConfig from "./RouteConfig";
import "./styles/App.scss";

const Navbar = lazy(() => import("./components/layouts/Navbar"));

function App() {
  return (
    <>
      <Navbar />
      <RoueConfig />
    </>
  );
}

export default App;

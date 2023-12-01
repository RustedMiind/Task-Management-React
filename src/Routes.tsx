import { Routes, Route } from "react-router-dom";
import HomeScreen from "./layout/main-layout/Screens/home";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
}

export default RoutesComponent;

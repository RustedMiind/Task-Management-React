import { Routes, Route } from "react-router-dom";
import HomeScreen from "./layout/main-layout/Screens/home";
import TaskDetails from "./layout/main-layout/Screens/task-details";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/task" element={<TaskDetails />} />
    </Routes>
  );
}

export default RoutesComponent;

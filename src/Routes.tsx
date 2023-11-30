import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import EmplyeesRequests from "./pages/employees/requests";
import EmploeesRequestsProcedures from "./pages/employees/procedures";
import ClientData from "./pages/clients/data";
import AddClient from "./pages/clients/addClient/AddClient";
import Contracts from "./pages/contracts/data";
import AddContracts from "./pages/contracts/SetContract";
// import ContractsNotFound from "./pages/contracts/SetContract/ContractsNotFound.1";
import NotReactRoute from "./NotReactRoute";
import CreateContracts from "./pages/contracts/SetContract";
import ForTest from "./pages/forTest";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="react/*">
        <Route path="test" element={<ForTest />} />
        <Route path="" element={<MainPage />} />
        <Route path="employees">
          <Route path="requests" element={<EmplyeesRequests />} />
          <Route path="procedures" element={<EmploeesRequestsProcedures />} />
        </Route>
        <Route path="clients">
          <Route path="" element={<ClientData />} />
          <Route path="add" element={<AddClient />} />
          <Route path=":name/edit" element={<AddClient />} />
        </Route>
        <Route path="contracts">
          <Route path="" element={<Contracts />} />
          {/* <Route path="add" element={<ContractsNotFound />} /> */}
          <Route
            path="create/:type"
            element={<CreateContracts type="create" />}
          />
          <Route path=":id">
            <Route path="" element={<div>Contract Page</div>} />
            <Route path="edit" element={<CreateContracts type="edit" />} />
          </Route>
        </Route>
        <Route path="*" element={<div>صفحة خاطئة</div>} />
      </Route>
      <Route path="*" element={<NotReactRoute />} />
    </Routes>
  );
}

export default RoutesComponent;

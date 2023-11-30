import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function MountApp(type: "development") {
  switch (type) {
    case "development":
      RunDev();
      break;
    // case "production":
    //   RunProd();
    //   break;
    // default:
    //   RunProd();
    //   break;
  }
}

function RunDev() {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default App;

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Theme>
      <App />
    </Theme>
  </BrowserRouter>,
);

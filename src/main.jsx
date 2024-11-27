import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppFocus from "./AppFocus";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppFocus />
  </StrictMode>
);

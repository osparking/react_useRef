import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppLoop from "./AppLoop";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppLoop />
  </StrictMode>
);

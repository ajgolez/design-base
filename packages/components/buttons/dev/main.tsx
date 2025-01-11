import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM from "react-dom/client" in React 18+
import { ButtonComponent } from "../src/button"; // Import your Button component
import "@ajg/styles/dist/index.css";

const App = () => {
  return (
    <div>
      <h1>Testing ButtonComponent</h1>
      <ButtonComponent
        label="Click Me"
        onClick={() => alert("Button clicked!")}
      />
    </div>
  );
};

// Get the root element from the HTML
const rootElement = document.getElementById("root");

// Create a React root and render the application
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Use createRoot instead of render
  root.render(<App />);
}

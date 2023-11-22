import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="focaccia pizza"></img>
      <h2>Pizza kis</h2>
      <p>Tomato,mozoralla,spinich and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { useState } from "react";
import "./App.css";
import app_logo from "./assets/themes/watching-a-movie.png";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <img src={app_logo} alt="Centered" className="max-w-full max-h-full" />
      </div>
    </>
  );
}

export default App;

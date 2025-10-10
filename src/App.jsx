import { Home } from "@/pages/Home/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { NotFound } from "./pages/notfound/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

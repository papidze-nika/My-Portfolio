import { Home } from "@/pages/Home/Home";
import { About } from "@/pages/About/About";
import { Skills } from "@/pages/Skills/Skills";
import { Projects } from "@/pages/Projects/Projects";
import { Contact } from "@/pages/Contact/Contact";
import { Application } from "@/pages/Application/Application";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { NotFound } from "./pages/notfound/NotFound";
import { Toaster } from "./components/ui/toaster";
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/application" element={<Application />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

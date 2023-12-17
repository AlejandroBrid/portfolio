import { useHistory } from "react";
import "./App.css";
import Header from "./components/Header";
import { About } from "./pages/About";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

function App() {
  const history = useHistory();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Para mantener el historial actualizado, navega manualmente a la siguiente ruta en lugar de simplemente renderizar la nueva ruta */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          onEnter={() => history.push("/about")}
          element={<About />}
        />
        <Route
          path="/projects"
          onEnter={() => history.push("/projects")}
          element={<Projects />}
        />
        <Route
          path="/contact"
          onEnter={() => history.push("/contact")}
          element={<Contact />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

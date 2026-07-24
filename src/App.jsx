import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import AboutPage from "./Pages/AboutPage";
import Footer from "./Components/Footer";
import ProjectsPage from "./Pages/ProjectsPage";
import CVPage from "./Pages/CVPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<CVPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

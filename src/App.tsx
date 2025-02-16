import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
      </Route>
    </Routes>
  );
}

export default App;

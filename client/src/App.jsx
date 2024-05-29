import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Film from "./pages/Film";

function App() {
  // state (état, données) de l'application

  // comportement

  // affichage (render)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Film />} />
      </Routes>
    </>
  );
}
export default App;

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./routes/HomeRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<HomeRoutes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

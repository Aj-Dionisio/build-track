import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<DashboardPage />} />

            </Routes>

        </BrowserRouter>
    )






}

export default App
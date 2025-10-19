import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ChristmasList from "./pages/ChristmasList.tsx";
import "./styles/App.css";
import "./styles/Footer.css";
import "./styles/Header.css";
import BirthdayList from "./pages/BirthdayList.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ChristmasList />} />
            <Route path="/birthday" element={<BirthdayList />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

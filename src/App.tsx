import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import ChristmasList from "./pages/ChristmasList";
import BirthdayList from "./pages/BirthdayList";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/App.css";
import "./styles/Footer.css";
import "./styles/Header.css";

/* 🔥 This component can read the route */
function AppContent() {
  const location = useLocation();

  // 🎯 Decide theme based on URL
  const isChristmas = location.pathname.toLowerCase().includes("christmas");

  const themeClass = isChristmas ? "christmas-theme" : "bday-theme";

  return (
    <div className={`app-container ${themeClass}`}>
      <Header />

      <main className={`main-content ${themeClass}`}>
        <Routes>
          <Route path="/" element={<BirthdayList />} />
          <Route path="/Christmas" element={<ChristmasList />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

/* ✅ Router wraps everything */
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
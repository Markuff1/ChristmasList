import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  const isBirthday =
    location.pathname === "/" || location.pathname === "/birthday";

  const title = isBirthday
    ? "🎉 My Birthday List 🎂"
    : "🎄 My Christmas List 🎄";

  // Trigger animation on route change
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <header className={`header ${isBirthday ? "birthday" : "christmas"}`}>
      <h1 className={`title ${isAnimating ? "fade" : ""}`}>{title}</h1>

      <nav className="nav">
        <div
          className={`indicator ${
            isBirthday ? "left" : "right"
          }`}
        />

        <Link
          to="/"
          className={isBirthday ? "active" : ""}
        >
          Birthday List
        </Link>

        <Link
          to="/Christmas"
          className={!isBirthday ? "active" : ""}
        >
          Christmas List
        </Link>
      </nav>
    </header>
  );
}

export default Header;
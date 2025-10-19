import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // Dynamically set title + emojis based on the current route
  const isBirthday = location.pathname === "/birthday";

  const title = isBirthday
    ? "🎉 My Birthday List 🎂"
    : "🎄 My Christmas List 🎄";

  return (
    <header className="header">
      <h1>{title}</h1>

      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Christmas List
        </Link>
        <Link
          to="/birthday"
          className={location.pathname === "/birthday" ? "active" : ""}
        >
          Birthday List
        </Link>
      </nav>
    </header>
  );
}

export default Header;

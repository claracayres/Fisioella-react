import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const toggleMenu = () => {
    const navbarLinks = document.querySelector(".navbar-links");
    const icon = document.querySelector(".hamburger i");

    navbarLinks.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  };

  const closeMenu = () => {
    const navbarLinks = document.querySelector(".navbar-links");
    const icon = document.querySelector(".hamburger i");

    navbarLinks.classList.remove("active");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarLinks = document.querySelector(".navbar-links");
      const hamburger = document.querySelector(".hamburger");

      if (
        navbarLinks.classList.contains("active") &&
        !navbarLinks.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      const navbarLinks = document.querySelector(".navbar-links");
      if (navbarLinks.classList.contains("active")) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div
          className="navbar-container"
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        >
          <h2 className="fisioella">FISIOELLA</h2>
          <hr className="linha-vertical" />
          <h2 className="dra-neila">Dra. Neila Cayres</h2>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </button>

        <div className="navbar-links">
          <ul className="nav-list">
            <li>
              <Link className="pages" to="/" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li>
              <Link className="pages" to="/sobre-mim" onClick={closeMenu}>
                Sobre mim
              </Link>
            </li>
            <li>
              <Link className="pages" to="/tratamentos" onClick={closeMenu}>
                Tratamentos
              </Link>
            </li>
            <li>
              <Link className="pages" to="/contato" onClick={closeMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

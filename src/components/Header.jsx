<<<<<<< HEAD
=======
import { useEffect } from "react";
>>>>>>> c47954c5777b580e2969cdee0a6f7d2ba4af4822
import { Link } from "react-router-dom";

const Header = () => {
  const toggleMenu = () => {
    const navbarLinks = document.querySelector(".navbar-links");
    const icon = document.querySelector(".hamburger i");

<<<<<<< HEAD
    navbar.classList.remove("active");
=======
    navbarLinks.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  };

  const closeMenu = () => {
    const navbarLinks = document.querySelector(".navbar-links");
    const icon = document.querySelector(".hamburger i");

    navbarLinks.classList.remove("active");
>>>>>>> c47954c5777b580e2969cdee0a6f7d2ba4af4822
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
<<<<<<< HEAD
      <nav>
        <div
          className="logo-container"
          onClick={() => (window.location.href = "/")}
          onMouseOver={(e) => (e.target.style.cursor = "pointer")}
          onMouseOut={(e) => (e.target.style.cursor = "default")}
=======
      <nav className="navbar">
        <div
          className="navbar-container"
          onClick={() => (window.location.href = "/")}
>>>>>>> c47954c5777b580e2969cdee0a6f7d2ba4af4822
          style={{ cursor: "pointer" }}
        >
          <h2 className="fisioella">FISIOELLA</h2>
          <hr className="linha-vertical" />
          <h2 className="dra-neila">Dra. Neila Cayres</h2>
        </div>
<<<<<<< HEAD
        <div className="hamburguer">
          <button
            className="hamburguer-btn"
            onClick={() => {
              const navbar = document.querySelector(".navbar-links");
              const icon = document.querySelector(".hamburguer i");

              navbar.classList.toggle("active");

              // Troca ícone
              icon.classList.toggle("fa-bars");
              icon.classList.toggle("fa-times");
            }}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div >
        <div className="navbar-links">
          <ul className="nav-list">
            <li>
              <Link className="pages" to="/" onClick={handleLinkClick}>
=======

        <button className="hamburger" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </button>

        <div className="navbar-links">
          <ul className="nav-list">
            <li>
              <Link className="pages" to="/" onClick={closeMenu}>
>>>>>>> c47954c5777b580e2969cdee0a6f7d2ba4af4822
                Início
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link className="pages" to="/sobre-mim" onClick={handleLinkClick}>
=======
              <Link className="pages" to="/sobre-mim" onClick={closeMenu}>
>>>>>>> c47954c5777b580e2969cdee0a6f7d2ba4af4822
                Sobre mim
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link
                className="pages"
                to="/tratamentos"
                onClick={handleLinkClick}
              >
=======
              <Link className="pages" to="/tratamentos" onClick={closeMenu}>
>>>>>>> c47954c5777b580e2969cdee0a6f7d2ba4af4822
                Tratamentos
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link className="pages" to="/contato" onClick={handleLinkClick}>
=======
              <Link className="pages" to="/contato" onClick={closeMenu}>
>>>>>>> c47954c5777b580e2969cdee0a6f7d2ba4af4822
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

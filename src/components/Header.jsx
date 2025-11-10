import { Link } from "react-router-dom";

const Header = () => {
  const handleLinkClick = () => {
    const navbar = document.querySelector(".navbar");
    const icon = document.querySelector(".hamburger i");

    navbar.classList.remove("active");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  };
  

  return (
    <header>
      <nav>
        <div
          className="logo-container"
          onClick={() => (window.location.href = "/")}
          onMouseOver={(e) => (e.target.style.cursor = "pointer")}
          onMouseOut={(e) => (e.target.style.cursor = "default")}
          style={{ cursor: "pointer" }}
        >
          <h2 className="fisioella">FISIOELLA</h2>
          <hr className="linha-vertical" />
          <h2 className="dra-neila">Dra. Neila Cayres</h2>
        </div>
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
                Início
              </Link>
            </li>
            <li>
              <Link className="pages" to="/sobre-mim" onClick={handleLinkClick}>
                Sobre mim
              </Link>
            </li>
            <li>
              <Link
                className="pages"
                to="/tratamentos"
                onClick={handleLinkClick}
              >
                Tratamentos
              </Link>
            </li>
            <li>
              <Link className="pages" to="/contato" onClick={handleLinkClick}>
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

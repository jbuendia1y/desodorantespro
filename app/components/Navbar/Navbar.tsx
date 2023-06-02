"use client";
import Link from "next/link";

export default function Navbar() {
  const onClick = async () => {
    const Collapse = await import("bootstrap/js/dist/collapse").then(
      (m) => m.default
    );
    const collapse = new Collapse("#navbarNavAltMarkup");
    collapse.toggle();
  };

  const onDropdown = async () => {
    const Dropdown = await import("bootstrap/js/dist/dropdown").then(
      (m) => m.default
    );
    const dropdown = new Dropdown("#guides-dropdown");
    dropdown.toggle();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand text-uppercase" href="/">
          Desodorantes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={onClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/tipos-de-desodorantes-una-guia-para-encontrar-el-mejor-para-ti"
              >
                Tipos
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link dropdown-toggle" onClick={onDropdown}>
                Guías
              </button>
              <ul
                id="guides-dropdown"
                className="dropdown-menu dropdown-menu-end"
              >
                <li onClick={onDropdown}>
                  <Link
                    className="dropdown-item"
                    href="/como-elegir-un-desodorante-para-hombres-y-mantener-la-frescura-todo-el-dia"
                  >
                    Desodorante para hombres
                  </Link>
                </li>
                <li onClick={onDropdown}>
                  <Link
                    className="dropdown-item"
                    href="/elige-el-desodorante-perfecto-para-mujeres"
                  >
                    Desodorante para mujeres
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/beneficios-de-usar-desodorante">
                Beneficios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

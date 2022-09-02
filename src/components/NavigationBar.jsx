import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    // Nav Bar
    <Navbar bg="light" expand="lg" className="navbar py-4   bg-white fixed-top">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between order-lg-0"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs055yivZN4dfPP9jh9UmjZIx18bysfdrmRZ8vC2ebaON8ddVtMG_QiaSNwC8sooS-Ar4&usqp=CAU"
            alt="Site Icon"
          />
          <span id="brand-name">ULTRA</span>
        </NavLink>

        <div className="nav-btns order-lg-2">
          <button className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="badge position-absolute top-0 bg-primary translate-middle start-100">
              5
            </span>
          </button>
          <button className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faHeart} />
            <span className="badge position-absolute top-0 bg-primary translate-middle start-100">
              2
            </span>
          </button>
          <button className="btn position-relative" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <Navbar.Toggle className="border-0">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse
          className="collapse navbar-collapse order-lg-1"
          id="navMenu"
        >
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <a href="/" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item px-2 py-2">
              <a href="#collection" className="nav-link text-dark">
                COLLECTION
              </a>
            </li>
            <li className="nav-item px-2 py-2">
              <a href="#specials" className="nav-link text-dark">
                SPECIALS
              </a>
            </li>
            <li className="nav-item px-2 py-2">
              <a href="#blogs" className="nav-link text-dark">
                BLOGS
              </a>
            </li>
            <li className="nav-item px-2 py-2">
              <a href="#about-us" className="nav-link text-dark">
                ABOUT US
              </a>
            </li>
            <li className="nav-item px-2 py-2">
              <a href="#popular" className="nav-link text-dark">
                POPULAR
              </a>
            </li>
          </ul>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

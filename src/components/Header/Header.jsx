import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { select, onscroll, on, scrollto } from "../../assets/js/script";

const Header = () => {
  useEffect(() => {
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select("#header");
    let selectTopbar = select("#topbar");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
          if (selectTopbar) {
            selectTopbar.classList.add("topbar-scrolled");
          }
        } else {
          selectHeader.classList.remove("header-scrolled");
          if (selectTopbar) {
            selectTopbar.classList.remove("topbar-scrolled");
          }
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scroll with ofset on links with a class name .scrollto
     */
    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();

          let navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
          }
          scrollto(this.hash);
        }
      },
      true
    );
  }, []);

  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <div className="logo me-auto">
          <h1>
            <a href="/">Genesis</a>
          </h1>
        </div>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="nav-link scrollto">
                Menu
              </a>
            </li>
            <li>
              <a href="#specials" className="nav-link scrollto">
                Specials
              </a>
            </li>
            <li>
              <a href="#events" className="nav-link scrollto">
                Events
              </a>
            </li>
            <li>
              <a href="#gallery" className="nav-link scrollto">
                Gallery
              </a>
            </li>
            <li>
              <a href="#chefs" className="nav-link scrollto">
                Chefs
              </a>
            </li>

            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle">
            <GiHamburgerMenu />
          </i>
        </nav>
        <a href="#book-a-table" className="book-a-table-btn scrollto">
          Book a table
        </a>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

export default function HeaderView(props) {
  return (
    <header
      id="header"
      className="navbar navbar-inverse navbar-fixed-top"
      role="banner"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target=".bs-navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* Your Logo */}
          <a href="#hero" className="navbar-brand">
            Process Surveys (U) Ltd <span className="lighter">All the Way</span>
          </a>
        </div>
        <nav
          className="collapse navbar-collapse bs-navbar-collapse navbar-right"
          role="navigation"
        >
          <ul class="nav navbar-nav">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#slider">Testimonials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contactarea">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

import React from "react";

import "./assets/scss/styles.scss";

import {
  Topbar,
  Header,
  Hero,
  About,
  WhyUs,
  Menu,
  Specials,
  Events,
  Gallery,
  Chef,
  Testimonials,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Hero />
      <div id="main">
        <About />
        <WhyUs />
        <Menu />
        <Specials />
        <Events />
        <Gallery />
        <Chef />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

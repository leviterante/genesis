import React, { useState, useEffect } from "react";
import Isotope from "isotope-layout";

import { select, on } from "../../assets/js/script";

const Menu = () => {
  const menu = [
    {
      name: "Lobster Bisque",
      price: "$5.95",
      ingredients: ["Lorem", "deren", "trataro", "filede", "nerada"],
      category: "starters",
    },
    {
      name: "Bread barrel",
      price: "$6.95",
      ingredients: ["Lorem", "deren", "trataro", "filede", "nerada"],
      category: "specialty",
    },
    {
      name: "Crab Cake",
      price: "$7.95",
      ingredients: ["Lorem", "deren", "trataro", "filede", "nerada"],
      category: "starters",
    },
    {
      name: "Caesar Selections",
      price: "$8.95",
      ingredients: ["Lorem", "deren", "trataro", "filede", "nerada"],
      category: "salads",
    },
    {
      name: "Tuscan Grilled",
      price: "$9.95",
      ingredients: ["Lorem", "deren", "trataro", "filede", "nerada"],
      category: "specialty",
    },
    {
      name: "Mozzarella Stick",
      price: "$4.95",
      ingredients: ["Lorem", "deren", "trataro", "filede", "nerada"],
      category: "starters",
    },
    {
      name: "Greek Salad",
      price: "$9.95",
      ingredients: ["Lorem", "deren", "trataro", "filede", "nerada"],
      category: "salads",
    },
    {
      name: "Spinach Salad",
      price: "$9.95",
      ingredients: ["Lorem", "deren", "trataro", "filede", "nerada"],
      category: "salads",
    },
    {
      name: "Lobster Roll",
      price: "$12.95",
      ingredients: ["Lorem", "deren", "trataro", "filede", "nerada"],
      category: "specialty",
    },
  ];
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".menu-container", {
        itemSelector: ".menu-item",
        layoutMode: "fitRows",
      })
    );

    let menuFilters = select("#menu-filters li", true);

    on(
      "click",
      "#menu-filters li",
      function (e) {
        e.preventDefault();
        menuFilters.forEach(function (el) {
          el.classList.remove("filter-active");
        });
        this.classList.add("filter-active");
      },
      true
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);
  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-title">
          <h2>
            Check our tasty <span>Menu</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-filters">
              <li onClick={() => setFilterKey("*")} className="filter-active">
                Show All
              </li>
              <li onClick={() => setFilterKey("filter-starters")}>Starters</li>
              <li onClick={() => setFilterKey("filter-salads")}>Salads</li>
              <li onClick={() => setFilterKey("filter-specialty")}>
                Specialty
              </li>
            </ul>
          </div>
        </div>

        <div className="row menu-container">
          {menu.map((item, index) => (
            <div
              className={"col-lg-6 menu-item filter-" + item.category}
              key={index}
            >
              <div className="menu-content">
                <a href="">{item.name}</a>
                <span>{item.price}</span>
              </div>
              <div className="menu-ingredients">
                {item.ingredients.map((ingredient, index) => ingredient + ", ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

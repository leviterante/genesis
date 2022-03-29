import React from "react";
import { Tab, Nav } from "react-bootstrap";

import { images } from "../../constants";

const Specials = () => {
  const specials = [
    {
      title: "Modi sit est",
      subtitle: "Architecto ut aperiam autem id",
      quotes:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
      image: images.specials1,
      eventKey: "first",
    },
    {
      title: "Unde praesentium sed",
      subtitle: "Et blanditiis nemo veritatis excepturi",
      quotes:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
      image: images.specials2,
      eventKey: "second",
    },
    {
      title: "Pariatur explicabo vel",
      subtitle: "Impedit facilis occaecati odio neque aperiam sit",
      quotes:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
      image: images.specials3,
      eventKey: "third",
    },
    {
      title: "Nostrum qui quasi",
      subtitle:
        "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
      quotes:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
      image: images.specials4,
      eventKey: "fourth",
    },
    {
      title: "Iusto ut expedita aut",
      subtitle: "Est eveniet ipsam sindera pad rone matrelat sando reda",
      quotes:
        "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
      desc: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
      image: images.specials5,
      eventKey: "fifth",
    },
  ];
  return (
    <section id="specials" className="specials">
      <div className="container">
        <div className="section-title">
          <h2>
            Check our <span>Specials</span>
          </h2>
          <p>
            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
            adipisci expedita at voluptas atque vitae autem.
          </p>
        </div>

        <Tab.Container defaultActiveKey="first">
          <div className="row">
            <div className="col-lg-3">
              <Nav className="nav nav-tabs flex-column">
                {specials.map((item, index) => (
                  <Nav.Item className="nav-item" key={index}>
                    <Nav.Link className="nav-link" eventKey={item.eventKey}>
                      {item.title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>

            <div className="col-lg-9 mt-4 mt-lg-0">
              <Tab.Content>
                {specials.map((item, index) => (
                  <Tab.Pane eventKey={item.eventKey} key={index}>
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>{item.subtitle}</h3>
                        <p className="fst-italic">{item.quotes}</p>
                        <p>{item.desc}</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src={item.image} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </section>
  );
};

export default Specials;

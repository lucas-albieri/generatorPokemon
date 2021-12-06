import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.pokemon.com/br/"
                
                >
                  Pokemon Company{" "}
                </a>{" "}
              </li>{" "}
              <li>
                <a
                  href="https://www.pokemon.com/br/episodios-pokemon/"
                
                >
                  TV Pokemon{" "}
                </a>{" "}
              </li>{" "}
              <li>
                <a
                  href="https://pokeapi.co/docs/v2"
                
                >
                  Licenses{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </nav>{" "}
          <div className="credits ml-auto">
            <span className="copyright">
              {" "}
              ©{new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Lucas Albieri{" "}
            </span>{" "}
          </div>{" "}
        </Row>{" "}
      </Container>{" "}
    </footer>
  );
}

export default DemoFooter;

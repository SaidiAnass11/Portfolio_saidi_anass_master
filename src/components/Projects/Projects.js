import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TicTacToe_Game from "../../Assets/Projects/TicTacToe_Game.png";
import Bakeology from "../../Assets/Projects/Bakeology.png";
import IAjokes from "../../Assets/Projects/IAjokes.png";
import PortfolioMaster from "../../Assets/Projects/PortfolioMaster.png";
import Pcard from "../../Assets/Projects/Pcard.png";
import App_Gestion_déléction from "../../Assets/Projects/App_Gestion_déléction.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PortfolioMaster}
              isBlog={false}
              title={<span className="purple">Portfolio</span>}
              description="Crafted with passion and precision, my portfolio is more than just a collection of projects, it's a showcase of my dedication to web development and design. Powered by JavaScript and built with the efficiency and versatility of React.js, my portfolio embodies the modern approach to creating dynamic and responsive web applications."
              ghLink="https://github.com/SaidiAnass11/Portfolio_saidi_anass"
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={App_Gestion_déléction}
              isBlog={false}
              title={<span className="purple">App Gestion d'éléction</span>}
              description="Developing a desktop application for a company using Ado.NET, C# and SQL server, through which the Excel file is imported and the information is stored in the database, and tools for deletion, search, modification and addition are provided, and printing."
              ghLink="https://github.com/SaidiAnass11/App-desktop_gestion_d_election"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IAjokes}
              isBlog={false}
              title={<span className="purple">IA Jokes Generator</span>}
              description="A simple project telling jokes generating with IA, using with html, Css and java script."
              ghLink="https://github.com/SaidiAnass11/IA-jokes-generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pcard}
              isBlog={true}
              showIcons={true}
              title="Professional card"
              description="Designing my logo in a Simple professional card using Adobe Photoshop & illustrator."
              ghLink="https://www.threads.net/@saidi_anass_11/post/C0za4EMrgLz/?igshid=NTc4MTIwNjQ2YQ=="
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe_Game}
              isBlog={false}
              title={<span className="purple">TicTacToe Game</span>}
              description="This project brings the classic Tic Tac Toe game to life using HTML, CSS, and JavaScript. It's a simple yet engaging implementation that allows players to enjoy the timeless game of Tic Tac Toe in the browser."
              ghLink="https://github.com/SaidiAnass11/TicTacToe-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bakeology}
              isBlog={false}
              title={<span className="purple">Bakeology Bakery</span>}
              description="A Commercial website which is a bakery store, using HTML,Css and java script."
              ghLink="https://github.com/SaidiAnass11/Bakeology_Bakery"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

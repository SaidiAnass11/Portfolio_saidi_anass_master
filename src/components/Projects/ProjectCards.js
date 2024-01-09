import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            {props.showIcons ? (
              <img
                src={require('../../Assets/Threads-Logo-PNG.png')}
                alt="Threads Logo"
                style={{ height: '20px', filter: 'invert(1)' }}
              />
            ) : (
              <BsGithub />
            )}
            &nbsp;
            {props.isBlog ? "Threads" : "GitHub"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

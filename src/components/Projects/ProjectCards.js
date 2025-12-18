import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";


function ProjectCards(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // الصور اللي بغيتي تبدل بينهم
  const images = props.images || [props.imgPath];

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={images[currentIndex]}
        alt="card-img"
      />

      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Buttons Previous / Next */}
        {images.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <Button
              variant="primary"
              className="nav-btn"
              onClick={handlePrev}
            >
              {"<"}
            </Button>

            <Button
              variant="primary"
              className="nav-btn"
              onClick={handleNext}
            >
              {">"}
            </Button>
          </div>
        )}

        <div style={{ marginTop: "auto" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            {props.showIcons ? (
              <img
                src={props.threadsLogo}
                alt="Threads Logo"
                style={{ height: "20px", filter: "invert(1)" }}
              />
            ) : (
              <BsGithub />
            )}
            &nbsp;
            {props.isBtn ? "Threads" : "GitHub"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

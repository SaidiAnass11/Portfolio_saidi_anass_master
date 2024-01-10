import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdfFile from "../../Assets/../Assets/Saidi_anass_Curriculum_Vitae.pdf";
import { saveAs } from "file-saver";
import '../../style.css';

function ResumeNew() {
  const handleDownload = () => {
    saveAs(pdfFile, "Saidi_anass_Curriculum_Vitae.pdf");
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <img
            src={require('../../Assets/CvPic.png')} // Replace with your actual image file name
            alt="My CV"
            style={{ maxWidth: "60%", width: "100%", marginBottom: "15px" }}          />  
          <h1 style={{ paddingBottom: 15 }} className="heading">
            For download My CV
          </h1>
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: "250px" }}
            className="btnResume"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

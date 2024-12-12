
import React from "react";
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import myImage from 'assets/img/CLOGO.png';
// core components
import { useNavigate } from 'react-router-dom'
function SectionNucleoIcons() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('./views/examples/ProfilePage.js');
  };
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
            
              <h2 className="title">LEARN with CHESSORIES</h2>
              <br/>

              <p className="description">
              🌟 Dive into the world of strategy and skill! Whether you’re a beginner or a seasoned player, Chessories offers an innovative platform where you can learn, play, and master chess in a way that’s fun, accessible, and truly engaging.
              </p>
              <br />
              <br/>
              <div>
      <Button
        className="btn-round ml-1"
        color="danger"
        onClick={toggleModal} // Open the modal on click
        outline
      >
        View Demo Video
      </Button>

      {/* Modal that opens up in the same page */}
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>YouTube Video</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/CSA9se6t82I?si=wcQ5i-O97ftkPiFC"
              title="YouTube video"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
    </div>
    <br></br>
              <Button
                className="btn-round ml-1"
                color="danger"
                href="/landing-page"
                outline
                target="_blank"
              >
                View All Videos
              </Button>
            </Col>
            <div style={{ marginLeft: '200px' }}>
            <img src={myImage} alt="Description of the image" />
            </div>
            {/* <Col lg="6" md="12">
              <div className="icons-container">
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;

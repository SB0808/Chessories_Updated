
import React from "react";
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import { useNavigate } from 'react-router-dom'
// reactstrap components

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/daniel-olahh.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
          <div className="title-brand">
              <h1 className="presentation-title" style={{ fontSize: "5rem" }}>Learning Page</h1>
              {/* <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
            </div>
            {/* <h1>Learning Page</h1> */}
            <h3 style={{ fontSize: "2rem" }}>Start Learning Chess with CHESSORIES.</h3>
            <br />
            <Button
              onClick={toggleModal}
              className="btn-round mr-1"
              style={{color: "#FF5733" }}
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch Demo video
            </Button>
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
            {/* <Button className="btn-round" color="neutral" type="button" outline>
              Download
            </Button> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;

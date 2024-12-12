
import React from "react";
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";


// core components
import { useNavigate } from 'react-router-dom'
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";


function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  // const navigate = useNavigate();

  return (
    <>
      <IndexNavbar />
      <LandingPageHeader />
      <div className="main">
        {/* <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
        
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Learn Beginner Level CHESS</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>Lesson # 1</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://youtu.be/GQvR_fLkNKo?si=gX5x4Tt28aeqQ_9I"
              title="Lesson # 1"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
                    </a>
                    
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 1</CardTitle>
                        <h6 className="card-category">The Chess Pieces and the Board</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>Lesson # 2</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/CSA9se6t82I?si=wcQ5i-O97ftkPiFC"
              title="Lesson # 2"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 2</CardTitle>
                        <h6 className="card-category">How the Chess Pieces Move</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>Lesson # 3</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/CSA9se6t82I?si=wcQ5i-O97ftkPiFC"
              title="Lesson # 3"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 3</CardTitle>
                        <h6 className="card-category">How the Chess Pieces Capture</h6>
                      </div>
                    </a>
                   
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>

              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>Lesson # 4</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/CSA9se6t82I?si=wcQ5i-O97ftkPiFC"
              title="Lesson # 4"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 4</CardTitle>
                        <h6 className="card-category">Check & Checkmate</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>Lesson # 5</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/CSA9se6t82I?si=wcQ5i-O97ftkPiFC"
              title="Lesson # 5"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 5</CardTitle>
                        <h6 className="card-category">Your 1st Chess Game</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>Lesson # 6</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/CSA9se6t82I?si=wcQ5i-O97ftkPiFC"
              title="Lesson # 6"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 6</CardTitle>
                        <h6 className="card-category">Special moves: promotion, castling, and en passant</h6>
                      </div>
                    </a>
                   
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>

              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>Lesson # 7</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/CSA9se6t82I?si=wcQ5i-O97ftkPiFC"
              title="Lesson # 7"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 7</CardTitle>
                        <h6 className="card-category">The point value of the Chess pieces</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>Lesson # 8</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/CSA9se6t82I?si=wcQ5i-O97ftkPiFC"
              title="Lesson # 8"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 8</CardTitle>
                        <h6 className="card-category"> Do you know the 7 ways a Chess game can be drawn? Stalemate, 50-move draw and more</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg" centered>
        <ModalHeader toggle={toggleModal}>Lesson # 9</ModalHeader>
        <ModalBody>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/CSA9se6t82I?si=wcQ5i-O97ftkPiFC"
              title="Lesson # 9"
              width="100%" // Ensuring the width is responsive
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ModalBody>
      </Modal>
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 9</CardTitle>
                        <h6 className="card-category">Chess notation - learn how to record your Chess games, read books and communicate</h6>
                      </div>
                    </a>
                   
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              
              
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Learn Blindfold CHESS</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
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
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 1</CardTitle>
                        <h6 className="card-category">Knight's Vision: Mastering Blindfold Basics</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
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
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 2</CardTitle>
                        <h6 className="card-category">Pawn to Perception: Building Memory for Blindfold Play</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
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
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 3</CardTitle>
                        <h6 className="card-category">Invisible Tactics: Seeing the Board Without Sight</h6>
                      </div>
                    </a>
                   
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>

              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
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
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 4</CardTitle>
                        <h6 className="card-category">Opening Gambits: Blindfold Chess Strategies</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
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
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 5</CardTitle>
                        <h6 className="card-category">Beyond the Bishop's View: Positional Awareness in Blindfold Chess</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
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
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 6</CardTitle>
                        <h6 className="card-category">Queen's Gambit Unseen: Advanced Blindfold Techniques</h6>
                      </div>
                    </a>
                   
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>

              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
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
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 7</CardTitle>
                        <h6 className="card-category">Invisible Middlegame: Shaping Strategy Without Sight</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
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
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 8</CardTitle>
                        <h6 className="card-category">Silent Checkmates: Navigating the Endgame Blindfolded</h6>
                      </div>
                    </a>
                    
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                  <a onClick={toggleModal}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
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
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Lesson # 9</CardTitle>
                        <h6 className="card-category">Endgame Echoes: Perfecting Blindfold Closings</h6>
                      </div>
                    </a>
                   
                  </CardBody>
                  {/* <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter> */}
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div> */}
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;


import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          {/* <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Do you like what you see?</h2>
              <p className="description">
                Cause if you do, it can be yours for Free. Hit the button below
                and download it. Start a new project or give an old Bootstrap 4
                project a new look.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="danger"
                href="http://www.creative-tim.com/product/paper-kit-react?ref=pkr-index-page"
                target="_blank"
              >
                Download free React
              </Button>
            </Col>
          </Row>
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Want more?</h2>
              <p className="description">
                We're going to launch{" "}
                <a className="text-danger" href="#pablo" disabled>
                  Paper Kit PRO React in a few weeks
                </a>
                . It will have a huge number of components, sections and example
                pages.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              <Button className="btn-round" color="info" href="#pablo" disabled>
                <i aria-hidden={true} className="nc-icon nc-spaceship" />{" "}
                Upgrade to PRO
              </Button>
            </Col>
          </Row> */}
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              {/* <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href="#pablo"
                id="tooltip3373767"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" /> Twitter
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Tweet!
              </UncontrolledTooltip> */}
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="google-bg"
                href="https://www.linkedin.com/in/chessories-the-virtual-chess-pratidhvandi-244250337/"
                target="_blank"
                id="tooltip840791273"
                
              >
                <i className="fa fa-linkedin" /> Linkedin
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip840791273">
                Share!
              </UncontrolledTooltip>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="https://www.instagram.com/chessories_sb/"
                target="_blank"
                id="tooltip68961360"
                
              >
                <i className="fa fa-instagram" /> Instagram
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip68961360">
                Share!
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                color="github-bg"
                href="https://github.com/SB0808"
                target="_blank"
                id="tooltip864353654"
              >
                <i className="fa fa-github" /> Star
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;

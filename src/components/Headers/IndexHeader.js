
import React from "react";
import ProfilePage from "views/examples/ProfilePage.js";
// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/daniel-olahh.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title" style={{ fontSize: "7rem" }}>CHEssORIES</h1>
              {/* <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div> */}
            </div>
            <h2 className="presentation-subtitle text-center">
            Unleash Your Inner Grandmaster – Chess for All Levels.
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
        This website is made with <i class="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="/profile-page" target="_blank">CHESSORIES TEAM</a>
          {/* <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            />
          </a> */}
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;

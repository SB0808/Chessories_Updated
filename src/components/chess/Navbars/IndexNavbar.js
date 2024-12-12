
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

const openOtherProject = () => {
  window.open('http://localhost:3001', '_blank'); // Replace with the actual URL
};
function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            CHESSORIES
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/chessories-the-virtual-chess-pratidhvandi-244250337/"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/chessories_sb/"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/SB0808"
                target="_blank"
                title="Star on GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
              onClick={openOtherProject}
                href="/Single"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> Single-Player Chess
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
              
                href="/Blindfold"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> BlindFold-Chess
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/Multiplayer"
                target="_blank"
              >
                <i className="nc-icon nc-book-bookmark" /> Multiplayer Chess
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="/landing-page"
                target="_blank"
              >
                <i className="nc-icon nc-spaceship"></i> Learn CHess
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;

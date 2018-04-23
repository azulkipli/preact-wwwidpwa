import { h, Component } from "preact";
import { Link } from "preact-router/match";
// import style from "./style";

const headerSt = {
  backgroundColor: "#3b1f6d",
  padding: "0.4rem 0"
};
const headcolorSt = {
  color: "#3b1f6d"
};
const rightLinkSt = {
  marginRight: "0.4rem",
  fontSize: "1rem",
  color: "#fff"
};

const brandSt = {
  color: "#fff"
};

const navbarLeft = {
  width: "33%",
  display: "inline-block",
  color: "#fff",
  padding: "10px"
};

const navbarCenter = {
  width: "33%",
  margin: "0 auto",
  textAlign: "center",
  display: "inline-block"
};

const navbarRight = {
  width: "33%",
  display: "inline-block",
  color: "#fff",
  padding: "10px",
  textAlign: "right"
};

export default class Header extends Component {
  render(props, {}) {
    return (
      <div id="header" style={headerSt}>
        <header class="navbar">
          <section class="navbar-section text-primary" style={navbarLeft}>
            menu
          </section>
          <section class="navbar-center" style={navbarCenter}>
            <Link href="/" class="btn btn-noborder btn-transparent text-light" style={brandSt}>
              WWWID
            </Link>
          </section>
          <section class="navbar-section" style={navbarRight}>
            <a
              class="btn btn-noborder btn-transparent text-light rightpos"
              href="https://github.com/azulkipli/preact-wwwidpwa"
              target="_blank"
              role="button"
              aria-label="github"
              rel="noopener"
              style={rightLinkSt}
            >
              <i class="icon icon-link" /> repo
            </a>
          </section>
        </header>
      </div>
    );
  }
}

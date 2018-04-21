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
  fontSize: "1rem"
};

export default class Header extends Component {
  render(props, {}) {
    return (
      <div id="header" style={headerSt}>
        <header class="navbar">
          <section class="navbar-section text-primary">...</section>
          <section class="navbar-center">
            <Link href="/" class="btn btn-noborder btn-transparent text-light">
              WWWID
            </Link>
          </section>
          <section class="navbar-section">
            <a
              class="btn btn-noborder btn-transparent text-light rightpos"
              href="https://github.com/azulkipli/preact-wwwidpwa"
              target="_blank"
              role="button"
              aria-label="github"
              rel="noopener"
              style={rightLinkSt}
            >
              <i class="icon icon-link" />
            </a>
          </section>
        </header>
      </div>
    );
  }
}

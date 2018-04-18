import { h, Component } from "preact";
import { Link } from "preact-router/match";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import faBars from "@fortawesome/fontawesome-free-solid/faBars";
// import faMediumM from "@fortawesome/fontawesome-free-brands/faMediumM";
// import faGithubAlt from "@fortawesome/fontawesome-free-brands/faGithubAlt";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import style from "./style";

export default class Header extends Component {
  render(props, {}) {
    return (
      <div id="header" class={style.header}>
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
              style={{ fontSize: "1rem" }}
            >
              <i class="icon icon-link" />
            </a>
          </section>
        </header>
      </div>
    );
  }
}

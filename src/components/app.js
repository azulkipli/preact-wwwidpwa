import { h, render, Component, cloneElement } from "preact";
import { Router, route } from "preact-router";
// import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import Head from "preact-head";
import { Link } from "preact-router/match";

// Unistore
import { connect } from "unistore/preact";
import actions from "../store/actions";
// Unistore

// Components
import Header from "./header";
// import Drawer from "./drawer";
import Clock from "./clock";
import Error from "./error";
import Modal from "./modal";
// import Home from "../routes/home";
// import Profile from "../routes/profile";
import Home from "async!../routes/home";
import Articles from "async!../routes/articles";
// import Profile from "async!../routes/profile";
// Components

// Hotreload
if (module.hot) {
  require("preact/debug");
}
// Hotreload

const jsUcfirst = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
// Utils

const appStyle = {
  height: "100%"
};

const appcontainerStyle = {
  height: "100%",
  padding: "0 15px",
  marginBottom: "50px"
};

class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  goTo = pathname => {
    route(pathname);
    if (this.props.drawerActive) {
      this.props.hideDrawer();
    }
  };

  render(props, {}) {
    console.log("App Router", Router);
    const currentUrl = Router.getCurrentUrl();
    const paths = currentUrl.split("/");
    const curPath = paths[1] === "" ? "Home" : jsUcfirst(paths[1]);
    return (
      <div id="app" style={appStyle}>
        <Head>
          <title>PreactJS WWWIDPWA</title>
          <meta name="description" content="Progressive Web App using PreactJS" />
          <meta
            name="keywords"
            content="pwa, preact, unistore, netlify, code-splitting, hot-reload, wwwid, medium-app"
          />
          <meta name="author" content="Azul" />
        </Head>
        <header>
          <label for="drawer-checkbox" class="button drawer-toggle" />
          <Link class="logo" href="/">
            WWWID
          </Link>
        </header>
        <label for="drawer-checkbox" />
        <input type="checkbox" id="drawer-checkbox" aria-label="btnDrawer" name="btndrawer" />
        <div class="drawer">
          <label for="drawer-checkbox" class="close" />
          <Link href="/">Home</Link>
        </div>
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Articles path="/articles/:slug" />
          <Error type="404" default />
        </Router>
        <footer>
          <Clock />
        </footer>
      </div>
    );
  }
}

// export default App;
export default connect("count, login, modalActive, modalTitle, modalContent, drawerActive", actions)(App);

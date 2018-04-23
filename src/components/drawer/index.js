import { h, Component } from "preact";
import Router from "preact-router";

export default class Drawer extends Component {
  isActive = pathname => {
    const path = pathname.split("/");
    const curUrl = Router.getCurrentUrl();
    let path1 = "/" + path[1];

    if (path1 === curUrl) {
      return "c-card__item c-card__item--active";
    } else {
      return "c-card__item";
    }
  };
  render(props, {}) {
    const clsSidebar = props.active ? "off-canvas-sidebar active" : "off-canvas-sidebar";
    return (
      <div id="sidebar" class={clsSidebar} style={{ display: "none" }}>
        <ul className="menu">
          <li>
            <figure class="avatar" data-initial="</>" />
            <b> WWWID PWA</b>
            <div class="float-right">
              <a
                role="link"
                aria-label="close"
                class="btn btn-link-dark c-hand"
                onClick={props.hideDrawer}
                style={{ marginTop: "-0.5rem" }}
              >
                <i class="icon icon-cross" />
              </a>
            </div>
          </li>

          <li class="divider" data-content="CATEGORIES" />
          <li class="menu-item">
            <div class="menu-badge">
              <label class="label label-primary">2</label>
            </div>
            <a role="link" aria-label="category-1" class="c-hand" href="#">
              Favorite
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

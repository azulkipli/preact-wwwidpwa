import { h, Component } from "preact";
import { route } from "preact-router";
import { Link } from "preact-router/match";
// Unistore
import { connect } from "unistore/preact";
import actions from "../../store/actions";
import { titleToSlug, slugToTitle, getExcerpt, getAllCategories } from "../../utils/helper";

class Articles extends Component {
  componentDidMount = () => {};

  loading = () => {
    return <div class="loading loading-lg" />;
  };
  render(props, {}) {
    console.log("Articles props", props);

    return <div id="articles" />;
  }
}

export default connect("count,loadingRSSFeed,listRSSwwwid", actions)(Home);

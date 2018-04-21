import { h, Component } from "preact";
import { route } from "preact-router";
import { Link } from "preact-router/match";
// Unistore
import { connect } from "unistore/preact";
import actions from "../../store/actions";
import Lazyimg, { withLazyimg } from "react-lazyimg-component";

const pubdateStyle = {
  fontSize: "0.7rem",
  margin: "0"
};

class Home extends Component {
  componentDidMount = () => {
    if (this.props.listRSSwwwid.length === 0) {
      this.props.getRSSFeed();
    }
  };
  renderListRSS = () => {
    const listRSS = this.props.listRSSwwwid;
    let rssFeeds = [];
    if (listRSS.length > 0) {
      rssFeeds = listRSS.map(item => {
        console.log("listRSS item: ", item);
        return (
          <div class="card" style={{ marginBottom: "10px" }}>
            <div class="card-header">
              <div class="card-title h6" style={{ lineHeight: "1.3" }}>
                <Link href={"/articles/" + item.slug}>{item.title}</Link>
              </div>
              <div class="card-subtitle">
                <div class="author" style={pubdateStyle}>
                  {item.author}
                </div>
                <div class="pubdate" style={pubdateStyle}>
                  {item.pubDate}
                </div>
              </div>
            </div>
            <div class="card-image">
              <Lazyimg className="lazy" src={item.thumbnail} alt={item.slug} style={{ width: "100%" }} />
            </div>
            <div class="card-body">{item.excerpt}</div>
          </div>
        );
      });
    }

    if (this.props.loadingRSSFeed) {
      return <div class="loading loading-lg" />;
    } else {
      return rssFeeds;
    }
  };
  render(props, {}) {
    return (
      <div id="home">
        <h1 class="h6 my-4 text-center">Update tren pengembangan web modern</h1>
        {this.renderListRSS()}
      </div>
    );
  }
}

export default connect("count,loadingRSSFeed,listRSSwwwid", actions)(Home);

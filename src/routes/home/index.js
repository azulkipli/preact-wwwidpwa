import { h, Component } from "preact";
import { route } from "preact-router";
import { Link } from "preact-router/match";
// Unistore
import { connect } from "unistore/preact";
import actions from "../../store/actions";
import { titleToSlug, slugToTitle, getExcerpt, getAllCategories } from "../../utils/helper";

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
        // let img350 = item.thumbnail.replace("max/680", "max/350");
        // console.log("img350", img350);
        return (
          <div class="card mb-2">
            <div class="card-header">
              <div class="card-title h6">
                <Link href={"/articles/" + titleToSlug(item.title)}>{item.title}</Link>
              </div>
              <div class="card-subtitle">
                <p class="author">{item.author}</p>
                <p class="pubdate">{item.pubDate}</p>
              </div>
            </div>
            <div class="card-image">
              <img src={item.thumbnail} class="img-responsive" alt={titleToSlug(item.title)} />
            </div>
            <div class="card-body">{getExcerpt(item.content, 400)}</div>
            <div class="card-footer">
              <Link href={"/articles/" + titleToSlug(item.title)} class="btn btn-primary">
                More
              </Link>
            </div>
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
        <div className="listFeeds p-1">{this.renderListRSS()}</div>
      </div>
    );
  }
}

export default connect("count,loadingRSSFeed,listRSSwwwid", actions)(Home);

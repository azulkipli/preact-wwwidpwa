import { h, Component } from "preact";
import { route } from "preact-router";
import { Link } from "preact-router/match";
// Unistore
import { connect } from "unistore/preact";
import actions from "../../store/actions";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

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
          <div class="card mb-2">
            <div class="card-header">
              <div class="card-title h6">
                <Link href={"/articles/" + item.slug}>{item.title}</Link>
              </div>
              <div class="card-subtitle">
                <p class="author">{item.author}</p>
                <p class="pubdate">{item.pubDate}</p>
              </div>
            </div>
            <div class="card-image">
              {/*
              <LazyLoadImage
                effect="blur"
                alt={item.slug}
                delayTime={500}
                src={item.thumbnail}
                class="img-responsive"
              />
              */}
              <img src={item.thumbnail} width="330" height="186" alt={item.slug} placeholderColor="#ddd" />
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
        <div className="listFeeds p-1">{this.renderListRSS()}</div>
      </div>
    );
  }
}

export default connect("count,loadingRSSFeed,listRSSwwwid", actions)(Home);

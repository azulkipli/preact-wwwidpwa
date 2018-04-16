import { h, Component } from "preact";
import { route } from "preact-router";
import { Link } from "preact-router/match";
// Unistore
import { connect } from "unistore/preact";
import actions from "../../store/actions";
import { titleToSlug, slugToTitle } from "../../utils/helper";
import ReactHtmlParser from "react-html-parser";

class Articles extends Component {
  componentDidMount = () => {
    if (this.props.listRSSwwwid.length === 0) {
      this.props.getRSSFeed();
    }
  };
  renderArticle = () => {
    let title = slugToTitle(this.props.slug);
    let markupArticle = <div class="loading loading-lg" />;

    if (this.props.loadingRSSFeed) {
      return <div class="loading loading-lg" />;
    }

    if (this.props.listRSSwwwid.length >= 0) {
      let article = this.props.listRSSwwwid.find(item => {
        console.log("article title", title);
        return titleToSlug(item.title) === this.props.slug;
      });
      console.log("article", article);

      if (typeof article !== "undefined") {
        markupArticle = (
          <div class="card">
            <div class="card-header">
              <div class="card-title h6">{article.title}</div>
              <div class="card-subtitle">
                <p class="author">{article.author}</p>
                <p class="pubdate">{article.pubDate}</p>
              </div>
            </div>
            <div class="card-image">
              <img src={article.thumbnail} class="img-responsive" />
            </div>
            <div class="card-body">{ReactHtmlParser(article.description)}</div>
          </div>
        );

        return markupArticle;
      }
    }
  };
  loading = () => {
    return <div class="loading loading-lg" />;
  };
  render(props, {}) {
    return <div id="articles">{this.renderArticle()}</div>;
  }
}

export default connect("loadingRSSFeed,listRSSwwwid", actions)(Articles);

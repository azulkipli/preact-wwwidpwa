import { h, render, Component, cloneElement } from "preact";
import { route } from "preact-router";
import { Link } from "preact-router/match";
import Head from "preact-head";

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
        return titleToSlug(item.title) === this.props.slug;
      });
      if (typeof article !== "undefined") {
        markupArticle = (
          <div class="article">
            <Head>
              <title>Preact WWWIDPWA - {article.title}</title>
            </Head>
            <div class="article-title h6">{article.title}</div>
            <div class="article-subtitle">
              <p class="author">{article.author}</p>
              <p class="pubdate">{article.pubDate}</p>
            </div>
            <div class="article-image">
              <img src={article.thumbnail} class="img-responsive" />
            </div>
            <div class="article-body">{ReactHtmlParser(article.description)}</div>
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

import { h, render, Component, cloneElement } from "preact";
import { route } from "preact-router";
import { Link } from "preact-router/match";
import Head from "preact-head";

// Unistore
import { connect } from "unistore/preact";
import actions from "../../store/actions";
import { titleToSlug, slugToTitle } from "../../utils/helper";
import ReactHtmlParser from "react-html-parser";

const articlesStyle = {
  paddingBottom: "40px",
  margin: "10px auto"
};

const articleBodyStyle = {
  overflowWrap: "break-word",
  lineHeight: "1.7"
};

const articleImageStyle = {
  marginLeft: "-7px",
  marginRight: "-7px",
  marginBottom: "1rem"
};

const authorStyle = {
  fontSize: "0.7rem",
  margin: "0"
};

const pubdateStyle = {
  fontSize: "0.7rem",
  margin: "0 0 1rem"
};

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
          <div class="article" style={articleBodyStyle}>
            <Head>
              <title>PreactJS WWWIDPWA - {article.title}</title>
            </Head>
            <div class="article-title h6">{article.title}</div>
            <div class="article-subtitle">
              <div class="author" style={authorStyle}>
                {article.author}
              </div>
              <div class="pubdate" style={pubdateStyle}>
                {article.pubDate}
              </div>
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
    return (
      <div id="articles" style={articlesStyle}>
        {this.renderArticle()}
      </div>
    );
  }
}

export default connect("loadingRSSFeed,listRSSwwwid", actions)(Articles);

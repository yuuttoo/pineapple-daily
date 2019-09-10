import React, { Component } from "react";
import Loading from "./Loading";

class mainArticles extends Component {
  state = {
    article: undefined
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ article: this.props.mainArticle });
    }
  }

  render() {
    if (this.state.article === undefined) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    } else {
      return this.state.article.map((article, index) => {
        return (
          <article key={index} className="main-article-container">
            <h2>{article.title}</h2>

            <img
              className="main-article-img"
              src={article.urlToImage}
              alt="articleimage"
            />
            <p className="main-article-description"> {article.description}</p>
            <a href={article.url} rel="noopener noreferrer " target="_blank">
              Read more here...
            </a>
          </article>
        );
      });
    }
  }
}

export default mainArticles;

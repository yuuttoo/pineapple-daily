import React, { Component } from "react";

class subArticles extends Component {
  state = {
    article: undefined
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ article: this.props.subArticle });
    }
  }

  render() {
    if (this.state.article === undefined) {
      return <div className="loading-container" />;
    } else {
      return this.state.article.map((article, index) => {
        return (
          <article key={index} className="sub-article-container">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} rel="noopener noreferrer " target="_blank">
              Read more here...
            </a>
          </article>
        );
      });
    }
  }
}

export default subArticles;

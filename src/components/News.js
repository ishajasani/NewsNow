import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };

  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=84c57124174f4a51ac8f4ef508c09e40";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }
  render() {
    return (
      <div className="container my - 3 mx - 3">
        <h3 >Your Headlines</h3>
        <div className="row my - 2">
          {this.state.articles.map((element) => {
            return (
              <div className="col md - 4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0,30)}
                  description={element.description.slice(0,80)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my - 3">
          <h3>Your Headlines</h3>
          <div className="row">
            <div className="col md - 4">
              <NewsItem title="hi" description="first card" />
            </div>
            <div className="col md - 4">
              <NewsItem title="hi" description="first card" />
            </div>
            <div className="col md - 4">
              <NewsItem title="hi" description="first card" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

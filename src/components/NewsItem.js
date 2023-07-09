import React from "react";

export const NewsItem = (props) =>{
    let { title, description, imageUrl, newsUrl, author, date,source } = props;

    return (
      <div>
        <div className="card mx-2 my-4">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              <span class="badge rounded-pill text-bg-secondary">{source}</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="/"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );

}

export default NewsItem;

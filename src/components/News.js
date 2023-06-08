import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "IPL 2023: Who are India's next cricketing stars?",
      description:
        "These players and their dazzling performances at the IPL make a case for their inclusion in India's national side.",
      url: "https://www.bbc.co.uk/news/world-asia-india-65692539",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/5D8B/production/_129874932_gettyimages-1253790493-594x594.jpg",
      publishedAt: "2023-05-26T23:49:58Z",
      content:
        "The Indian Premier League (IPL), apart from being lucrative, has been an excellent platform for uncapped players to fast-track their careers into the international arena. Like past editions, this yea… [+5820 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title:
        "England ‘legend’ Katherine Sciver-Brunt retires from international cricket",
      description:
        "Cricket has given me a purpose and many golden memories’ECB’s Clare Connor: ‘She has been an unbelievable role model’After 267 games, 335 wickets, 1,864 runs, 19 years, four Ashes victories and three in World Cups, Katherine Sciver…",
      url: "https://www.theguardian.com/sport/2023/may/05/england-legend-katherine-sciver-brunt-retires-from-international-cricket",
      urlToImage:
        "https://i.guim.co.uk/img/media/0aa9057291d9e239c1bde68d1664123118faad71/0_101_2772_1663/master/2772.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b0720409335fa6ac1a3270bb08f52486",
      publishedAt: "2023-05-05T14:34:28Z",
      content:
        "After 267 games, 335 wickets, 1,864 runs, 19 years, four Ashes victories and three in World Cups, Katherine Sciver-Brunt has announced her retirement from international cricket. The decision continue… [+8232 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title: "Michael Vaughan returns to BBC cricket coverage for Ashes summer",
      description:
        "<ul><li>Charge against former captain was found not proven by CDC</li><li>Vaughan was dropped from BBC coverage in autumn 2021</li></ul>Michael Vaughan is to return to the BBC and play a key part in their cricket coverage this summer after being cleared of ma…",
      url: "https://www.theguardian.com/sport/2023/may/19/michael-vaughan-returns-to-bbc-cricket-coverage-for-ashes-summer",
      urlToImage:
        "https://i.guim.co.uk/img/media/3bf8982c6519474533b38c1be03424519d8dfa99/0_130_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9bfbda837cb58de1ecbc88663f16b98d",
      publishedAt: "2023-05-19T12:08:29Z",
      content:
        "Michael Vaughan is to return to the BBC and play a key part in its cricket coverage this summer after being earlier this year cleared of making a racist remark during his time as a player at Yorkshir… [+7110 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my - 3 mx - 3">
        <h3>Your Headlines</h3>
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

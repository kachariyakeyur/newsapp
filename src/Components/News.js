import React, { Component } from "react";
import Newsitem from "./Newsitem";
import '../style.css'

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 9,
      totalResults: 0,
    };
  }

  fetchNews = async (page) => {
    try {
      this.setState({ loading: true });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      let Url = `http://localhost:5000/api/news?page=${page}&pageSize=${this.state.pageSize}`;
      let data = await fetch(Url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: Array.isArray(parsedData.articles) ? parsedData.articles : [],
        totalResults: parsedData.totalResults,
        page: page,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({
        articles: [],
        totalResults: 0,
        loading: false,
      });
    }
  };

  async componentDidMount() {
    this.fetchNews(1);
  }

  handlePreviousClick = async () => {
    console.log("Previous");

    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  handleNextClick = async () => {
    console.log("Next");

    const totalPages = Math.max(
      1,
      Math.ceil((this.state.totalResults || 0) / this.state.pageSize),
    );

    if (this.state.page < totalPages) {
      this.fetchNews(this.state.page + 1);
    }
  };

  render() {
    const totalPages = Math.max(
      1,
      Math.ceil((this.state.totalResults || 0) / this.state.pageSize),
    );
    return (
      <div className="container my-3">
        <h2>Latest News - Top Headlines</h2>

        { this.state.loading && (
          <div className="loading-container">
            <div className="news-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h4 className="mt-3">Loading Latest News...</h4>
          </div>
        )}
        
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 85)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>
         
       
        <div className="container d-flex justify-content-between align-items-center my-4">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <h4>
            <span className="badge bg-dark px-4 py-2">
              Page No. {this.state.page}/{totalPages}
            </span>
          </h4>
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page >= totalPages }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
       
      </div>
    );
  }
}

export default News;

import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"; // Import your CSS file for styling
import Navbar from './Navbar';
import HeadlineNews from "./HeadlinesNews";


function App() {

  const [keyword, setKeyword] = useState("");
  const [language, setLanguage] = useState("en");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sortBy, setSortBy] = useState("publishedAt");
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showHeadlines, setShowHeadlines] = useState(false); // State to control visibility

 console.log(process.env)
  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const handleChangeFromDate = (event) => {
    setFromDate(event.target.value);
  };

  const handleChangeToDate = (event) => {
    setToDate(event.target.value);
  };

  const handleChangeSortBy = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy); // Update sortBy state

    // Call the API with the updated sortBy parameter
    handleSubmit();
  };

  const handleSubmit = async (event) => {
    //console.log('SUBMIT FORM')
    console.log('SUBMIT FORM')
    
    if (event) {
      event.preventDefault(); // Prevent form submission default behavior
    }
    try {
      let url = `https://newsapi.org/v2/everything?q=${keyword}&language=${language}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=10&page=${currentPage}&sortBy=${sortBy}`;
      
      if (fromDate) {
        url += `&from=${fromDate}`;
      }
      if (toDate) {
        url += `&to=${toDate}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      //setArticles(data.articles || []);

      if (data.status === "error" && data.code === "rateLimited") {
        // Handle rate limit error
        console.error(
          "Rate limit exceeded. Please try again later or upgrade to a paid plan."
        );
      } else {
        // If no error, update the articles state
        setArticles(data.articles || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (keyword) {
      handleSubmit();
    }
  }, [currentPage, keyword]);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleShowHeadlines = () => {
    setShowHeadlines(true); // Set showHeadlines state to true when button is clicked
  };
  
  return (
    <div className="container">
      <Navbar />
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter keyword"
            value={keyword}
            onChange={handleChangeKeyword}
          />
          <select value={language} onChange={handleChangeLanguage}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="nl">Dutch</option>
            <option value="no">Norwegian</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="sv">Swedish</option>
            <option value="tr">Turkish</option>
            <option value="zh">Chinese</option>

            {/* Add more language options as needed */}
          </select>
          <input
            type="date"
            placeholder="From date"
            value={fromDate}
            onChange={handleChangeFromDate}
          />
          <input
            type="date"
            placeholder="To date"
            value={toDate}
            onChange={handleChangeToDate}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {/* Sort by dropdown */}
      <div className="sort-by-dropdown">
        <label htmlFor="sortBy">Sort By:</label>
        <select value={sortBy} onChange={handleChangeSortBy}>
          <option value="publishedAt">Published At</option>
          <option value="popularity">Popularity</option>
          <option value="relevancy">Relevancy</option>
        </select>
      </div>
      <br></br>
      <div className="articles-container">
        {articles.length === 0 ? (
          <div className="no-news-message">
            <p>No news found</p>
            <p>Sorry, there are currently no news items to display.</p>
          </div>
        ) : (
          articles.map((article, index) => (
            <div className="article" key={index}>
              <img
                className="article-image"
                src={article.urlToImage}
                alt={article.title}
              />
              <div className="article-details">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>
                  Published at: {new Date(article.publishedAt).toLocaleString()}
                </p>
                <p>{article.content}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ float: "left" }}
        >
          Previous Page
        </button>
        <button onClick={handleNextPage} style={{ float: "right" }}>
          Next Page
        </button>
        <div style={{ clear: "both" }}></div>
      </div>
      <div className="headline-news-tab">
      <button onClick={handleShowHeadlines}>Show Headlines</button>
      {/* Conditionally render the HeadlineNews component */}
      {showHeadlines && <HeadlineNews />}
    </div>
        {/* <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/headline" component={HeadlineNews} />
        </Switch> */}
      <br></br>
    </div>
  );
}

export default App;

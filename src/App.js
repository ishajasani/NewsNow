import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEW_API;
  state = {
    progress : 0
  }

  setProgress = (progress)=> {
    this.setState({progress : progress,
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#0000FF"
            progress={this.state.progress}
           height={2.5}
          />

          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} apiKey = {this.apiKey}  
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <News setProgress={this.setProgress} apiKey = {this.apiKey}  
                  key="about"
                  pageSize={this.pageSize}
                  country="us"
                  category="about"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News setProgress={this.setProgress} apiKey = {this.apiKey}  
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apiKey = {this.apiKey}  
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} apiKey = {this.apiKey}  
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News setProgress={this.setProgress} apiKey = {this.apiKey}  
                  key="science"
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} apiKey = {this.apiKey}  
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} apiKey = {this.apiKey}  
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

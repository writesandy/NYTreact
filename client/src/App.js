import React, { Component } from 'react';
import logo from './logo.svg';
import API from "./components/utils/API";
import Header from "./components/Header";
import Search from "./components/Search";
import SavedArticles from "./components/SavedArticles";
import TopArticles from "./components/TopArticles";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header />
            <Search />
            <TopArticles />
            <SavedArticles />
      {/* <style>
        .panel-body a {
          word-break: break-all;
        }
      </style>
   */}    
      </div>
    );
  }
}

export default App;

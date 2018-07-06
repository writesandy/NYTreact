import React, { Component } from 'react';
import logo from './logo.svg';
import API from "./components/utils/API";
import Header from "./components/Header";
import Search from "./components/Search";
import SavedArticles from "./components/SavedArticles";
import TopArticles from "./components/TopArticles";
import './App.css';

class App extends Component {

state = {
   stSavedArticles = [],
   articleSearch = "",
};


handleInputChange = event => {
   const {name, value} = event.target;
   this.setState({
     [name]: value
   });
};

handleFormSubmit = event => {
  event.preventDefault();
  API.getArticles(this.state.articleSearch)
  .then(res => this.setState( {stSavedArticles: res.data} ) 
  .catch(err => console.log(err));
};


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

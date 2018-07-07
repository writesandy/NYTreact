import React, { Component } from 'react';
import API from "./components/utils/API";
import Header from "./components/Header";
import Search from "./components/Search";
import SavedArticles from "./components/SavedArticles";
import TopArticles from "./components/TopArticles";
import './App.css';

class App extends Component {

state = {
   stSavedArticles: [],
   articleSearch: "",
   startYear: "",
   endYear: "",
   searchTerm: "",
   numRecords: ""
};


handleInputChange = event => {
   const {name, value} = event.target;
   this.setState({
     [name]: value
   });
};

handleFormSubmit = event => {

  console.log("this function ran")
  event.preventDefault();
  API.getArticles(this.state.searchTerm)
  .then(res => this.setState( {stSavedArticles: res.data} ))
  .catch(err => console.log(err))

}

componentDidUpdate(){
  console.log(this.state);
}

componentDidMount(){
  console.log(this.state);
}


  render() {
    return (
      <div className="App">
            <Header />
            <Search 
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              searchTerm={this.searchTerm}
              startYear={this.startYear}
              endYear={this.endYear}
              numRecords={this.numRecords}
            
            />
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

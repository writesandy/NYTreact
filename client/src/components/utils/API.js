import axios from "axios";
import filterParams from './filterParams';

// The getArticles method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getArticles: function(query) {
    console.log(query)
    return axios.get("/api/nyt", { params: filterParams(query) });
  }
};

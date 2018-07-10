const axios = require("axios");
const router = require("express").Router();
const nytController = require("../../controllers/nytController.js");

// function buildQueryURL() {
//   // queryURL is the url we'll use to query the API
//   const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

//   // add the api key parameter (the one we received when we registered)
//   queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

//   // grab text the user typed into the search input, add as parameter to url
//   const searchTerm = $("#search-term").val().trim();
//   queryURL += "&q=" + searchTerm;

//   // if the user provides a startYear, include it in the queryURL
//   const startYear = $("#start-year").val().trim();

//   if (parseInt(startYear)) {
//     queryURL += "&begin_date=" + startYear + "0101";
//   }

//   // if the user provides an endYear, include it in the queryURL
//   const endYear = $("#end-year").val().trim();

//   if (parseInt(endYear)) {
//     queryURL += "&end_date=" + endYear + "0101";
//   }

//   // Logging the URL so we have access to it for troubleshooting
//   console.log("---------------\nURL: " + queryURL + "\n---------------");

//   return queryURL;
// }

router
  .route('/')
  .get(nytController.findAll)



// router.get("/articles", (req, res) => {
//   axios
//     .get(queryURL, { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

module.exports = router;

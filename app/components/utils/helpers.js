// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");




     var authKey = "53567ecab3d5401b9ef7333adaad3204";
        var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            authKey + "&q=";
        var startYear = 0;
        var endYear = 0;



// Helper functions for making API Calls
var helper = {


   
    // This function serves our purpose of running the query to geolocate.
    runQuery: function(location) {

       
        var queryURL = queryURLBase + location;

        return axios.get(queryURL).then(function(response) {
      console.log(response);
            // for (var i = 0; i < 5; i++) {
            //     var titleResult = response.response.docs[1].headline.main.formatted;
            //     var urlResult = response.response.docs[1].web_url.formatted;
            //     console.log(titleResult);
            //     console.log(urlResult);
            //     var exampleLibrary = new Article({

            //         title: titleResult,
            //         url: urlResult,
            //     });
            //     exampleLibrary.save(function(error, doc) {
            //         // Log any errors
            //         if (error) {
            //             console.log(error);
            //         }
            //         // Or log the doc
            //         else {
            //             console.log(doc);
            //         }
            //     });


            // };

        });

       

        console.log(location);

        // Figure out the geolocation
        

    },

    // This function hits our own server to retrieve the record of query results
    // getHistory: function() {
    //     return axios.get("/api");
    // },

    // // This function posts new searches to our database.
    // postHistory: function(location) {
    //     return axios.post("/api", { location: location });
    // }
};

// We export the API helper
module.exports = helper;

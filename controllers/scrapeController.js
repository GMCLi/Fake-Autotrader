var cheerio = require("cheerio");
var axios = require("axios");

console.log(
  "\n******************************************\n" +
    "Grabbing every article headline and link\n" +
    "from thecarmagazine website:" +
    "\n******************************************\n"
);

// Making a request via axios for `thecarmagazine.com`'s homepage
module.exports = {
  carScrape: function() {
    return axios
      .get("https://www.thecarmagazine.com//")
      .then(function(response) {
        // Load the body of the HTML into cheerio
        var $ = cheerio.load(response.data);

        // Empty array to save our scraped data
        const results = [];

        // With cheerio, find each h2 with the class "post-title" and loop through the results
        $("h2.post-title").each(function(i, element) {
          // Save the text of the h2 as "title"
          var title = $(element).text();

          // Find the h2 tag's children a-tag, and save it's href value as "link"
          var link = $(element)
            .children()
            .attr("href");

          // Make an object with data we scraped for this h2 and push it to the results array
          results.push({
            title: title,
            link: link
          });
        });

        // After looping through each h2, log the results
        return results;
      });
  }
};
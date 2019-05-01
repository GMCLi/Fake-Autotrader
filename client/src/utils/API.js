import axios from "axios";

export default {
  getScrape: function() {
    return axios.get("/api/scrape");
  },
  // Saving Selected Listing to db
  saveListing: function (ListingData) {
    return axios.post("/api/listings", ListingData)
  },
  // Getting all saved listings from 
  getSavedlistings: function () {
    return axios.get("/api/listings");
  },
  // Deleting selected Listing from db
  deleteListing: function (id) {
    return axios.delete("/api/listings/" + id)
  }
};

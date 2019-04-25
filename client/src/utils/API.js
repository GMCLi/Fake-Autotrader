import axios from "axios";

export default {
  getScrape: function() {
    return axios.get("/api/scrape");
  }
};

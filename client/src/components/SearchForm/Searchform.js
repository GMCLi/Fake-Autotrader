import React from "react";

function SearchForm() {
  return (
    <div>
      THIS WILL BE THE SearchFORM
      {/* // Search Form */}
      <div className="row searchForm">
        <div className="col-sm-12">
          <form onSubmit={this.searchSubmit}>
            {/* // Search Make */}

            <div className="form-group makesearchform">
              <label for="makeinput" />
              <input
                type="text"
                class="form-control"
                placeholder="Search Make"
                onChange={this.updatemakeSearch}
              />
            </div>
            {/* // Search Model */}
            <div className="form-group modelsearchform">
              <label for="modelinput" />
              <input
                type="text"
                class="form-control"
                placeholder="Search Model"
                onChange={this.updatemodelSearch}
              />
            </div>
            {/* // Search Year */}
            <div className="form-group yearsearchform">
              <label for="yearinput" />
              <input
                type="text"
                class="form-control"
                placeholder="Search Year"
                onChange={this.updateyearSearch}
              />
            </div>
            <button
              variant="primary"
              type="submit"
              className="btn searchBtn"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;

import React from "react";


const Search = props => (
  <div>
  <form>
    <div className="form-group">
      <label htmlFor="topic"><strong>Topic</strong></label>
      <input 
        className="form-control"
        id="topic"
        type="text"
        value={props.searchTerm}
        onChange={props.handleInputChange}
        name="searchTerm"
        required
        />
      
      <label htmlFor="startYear"><strong>Start Year:</strong></label>
      <input
        className="form-control"
        id="startYear"
        type="number"
        value={props.startYear}
        onChange={props.handleInputChange}
        name="startYear"
        required
        />

        <label htmlFor="endYear"><strong>End Year:</strong></label>
      <input
        className="form-control"
        id="endYear"
        type="number"
        value={props.endYear}
        onChange={props.handleInputChange}
        name="endYear"
        required
        />
    </div>
      <div>
        
      </div>
    </form>
    <button 
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-success"
        >Submit</button>
        </div>
);



export default Search;



{/* <div>
        <div class="row">
        <div class="col-sm-12">
          <br/>

          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>Search Parameters</strong></h3>
            </div>
            <div class="panel-body">
  
              <form role="form">
                <div class="form-group">
                  <label for="search">Search Term:{props.searchTerm}        
                  
                  </label>
                  <input type="text" class="form-control" id="search-term" 
                   onChange={props.handleInputChange}
                   value={props}
                  />
                </div>
                <div clas="form-group">
                  <label for="pwd">Number of Records to Retrieve:</label>
                  <select class="form-control" id="num-records-select">
                <option value="1">1</option>
                <option value="5" selected>5</option>
                <option value="10">10</option>
              </select>
                </div>

                <div class="form-group">
                  <label for="start-year">Start Year (Optional):{props.startYear}</label>
                  <input type="text" class="form-control" id="start-year" />
                </div>
  
                <div class="form-group">
                  <label for="end-year">End Year (Optional):{props.endYear}</label>
                  <input type="text" class="form-control" id="end-year"/>
                </div>

                <button type="submit" class="btn btn-default" id="run-search"><i class="fa fa-search"></i>Search</button>
                <button type="button" class="btn btn-default" id="clear-all"><i class="fa fa-trash"></i>Clear Results</button>
  
              </form>
            </div>
          </div>
        </div>
      </div>
      </div> */}
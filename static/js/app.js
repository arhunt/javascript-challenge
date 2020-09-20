// from data.js
var tableData = data;

// Select action areas of the page
var filters = d3.select(".filters");
var button = d3.select("#filter-btn");

// Create event handlers
filters.on("submit", runEnter);
button.on("click", runEnter);

// Event handler
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var inputDateElement = d3.select("#datetime");

    var inputDate = inputDateElement.property("value");

    console.log(inputDate);
    console.log(tableData);

    var filteredData = tableData.filter(datum => datum.datetime === inputDate);

    console.log(filteredData);

    // Clear the current data
    //list.html("");

};

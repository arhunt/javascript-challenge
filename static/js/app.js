// from data.js
var tableData = data;

// Select action areas of the page
var filters = d3.select(".filters");
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody")

// Create event handlers
filters.on("submit", runEnter);
// Filters is not working anymore??
button.on("click", runEnter);

// Event handler
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Grab date
    var inputDateElement = d3.select("#datetime");
    var inputDate = inputDateElement.property("value");

    // Grab city
    var inputCityElement = d3.select("#city");
    var inputCity = inputCityElement.property("value");

    // Grab state
    var inputStateElement = d3.select("#state");
    var inputState = inputStateElement.property("value");

    // Grab country
    var inputCountryElement = d3.select("#country");
    var inputCountry = inputCountryElement.property("value");

    // Grab shape
    var inputShapeElement = d3.select("#shape");
    var inputShape = inputShapeElement.property("value");

    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    // idea to start with filteredData = tableData and construct IFs for each filter
    var filteredData = tableData;

    if (inputDate != "") {
        var filteredData = filteredData.filter(datum => datum.datetime === inputDate);
    }
    else {
        var filteredData = filteredData
    }

    // else filteredData = filteredData
    console.log(filteredData);

    // Clear the current data
    tbody.html("");

    filteredData.forEach(function (datum) {
        var row = tbody.append("tr");
        Object.entries(datum).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};

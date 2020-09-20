// from data.js
var tableData = data;

// Select action areas of the page
var filters = d3.select("#filter");
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody")

// Create event handlers
// Filters enter is not working anymore??
button.on("click", runEnter);
filters.on("submit", runEnter);

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
    inputCity = inputCity.toLowerCase();

    // Grab state
    var inputStateElement = d3.select("#state");
    var inputState = inputStateElement.property("value");
    inputState = inputState.toLowerCase();

    // Grab country
    var inputCountryElement = d3.select("#country");
    var inputCountry = inputCountryElement.property("value");
    inputCountry = inputCountry.toLowerCase();

    // Grab shape
    var inputShapeElement = d3.select("#shape");
    var inputShape = inputShapeElement.property("value");
    inputShape = inputShape.toLowerCase();

    // Return all final input into the console
    console.log("Filters:")
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);

    // Establish the filter
    var filteredData = tableData;

    // If date is filled out, filter by date
    if (inputDate != "") {
        var filteredData = filteredData.filter(datum => datum.datetime === inputDate);
    }
    else {
        var filteredData = filteredData
    }
    
    // If city is filled out, filter by city
    if (inputCity != "") {
        var filteredData = filteredData.filter(datum => datum.city === inputCity);
    }
    else {
        var filteredData = filteredData
    }

    // If state is filled out, filter by state
    if (inputState != "") {
        var filteredData = filteredData.filter(datum => datum.state === inputState);
    }
    else {
        var filteredData = filteredData
    }

    // If country is filled out, filter by country
    if (inputCountry != "") {
        var filteredData = filteredData.filter(datum => datum.country === inputCountry);
    }
    else {
        var filteredData = filteredData
    }

    // If shape is filled out, filter by shape
    if (inputShape != "") {
        var filteredData = filteredData.filter(datum => datum.shape === inputShape);
    }
    else {
        var filteredData = filteredData
    }

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

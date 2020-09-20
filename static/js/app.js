// from data.js
var tableData = data;

// Select action areas of the page
var filters = d3.select(".filters");
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody")

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

    // idea to start with filteredData = tableData and construct IFs for each filter
    // var filteredData = tableData;

    // if filteredData != "";
    var filteredData = tableData.filter(datum => datum.datetime === inputDate);

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

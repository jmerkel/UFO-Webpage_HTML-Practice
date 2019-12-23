//import data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //Clear existing data
    tbody.html("");

    //Loop through each object & append row + cells for each value in row
    data.forEach((dataRow) => {
        //Append row to table body
        let row = tbody.append("tr");

        //Loop through each field in data row & add value as table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
};

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

    // Save the element, value, and id of the filter that was changed
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");


    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object

    filters = {}; //Object NOT ARRAY

    if (date) {
        filters["datetime"] = date;
    }
    if (city) {
        filters["city"] = city;
    }
    if (state) {
        filters["state"] = state;
    }
    if (country) {
        filters["country"] = country;
    }
    if (shape) {
        filters["shape"] = shape;
    }

    // Call function to apply all filters and rebuild the table
    filterTable();
}

function filterTable() {
    // Set the filteredData to the tableData
    let filteredData = tableData;

    // Loop through all of the filters and keep any data that matches the filter values
    // Filters are "OR" not "AND"
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    })

    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
}
  
// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis

// Select any user input, run the update Filters whenever focus changes
d3.selectAll("input").on("blur",updateFilters)

// Build table when the page loads
buildTable(tableData);
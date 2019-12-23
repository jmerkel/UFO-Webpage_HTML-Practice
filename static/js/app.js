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
    if (date) {
        filters.append(date)
    }
    if (city) {
        filters.append(city)
    }
    if (state) {
        filters.append(state)
    }
    if (country) {
        filters.append(country)
    }
    if (shape) {
        filters.append(shape)
    }
    else {
        filters = {}
    }

    // Call function to apply all filters and rebuild the table
    filterTable(filters);
}

function filterTable(filters) {
    // Set the filteredData to the tableData
    let filteredData = tableData;

    // Loop through all of the filters and keep any data that matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
        console.log(`My ${key}: ${value}`);
    })


    // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
}
  
// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is 
//    listening for within each set of parenthesis
d3.selectAll().on();

// Build table when the page loads
buildTable(tableData);

/*
function handleClick() {
    // Look for #datetime id in HTML
    // Property(value) --> grab information and hold in "date variable"
    let date = d3.select("#datetime").property("value");

    //default filter (tableData = original data)
    let filteredData = tableData;

    if (date) {
        //show rows where date == date filter. "===" --> match exactly (type & value)
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    
    //Rebuild table using filtered data. No date --> Original table used
    buildTable(filteredData);
};
*/

//d3.select("#filter-btn").on("click", handleClick);

/*
One thing that might help you for the module challenge, depending how you’ve structured
your JavaScript, is another implementation of forEach that is useful for objects 
(dictionaries). Given an object called player:

let player = {"name": "Doug", "position": "Quarterback", "madeTeam": true};
Object.entries(player).forEach(([key, value]) => {
    console.log(`My ${key}: ${value}`);
})

This allows you to iterate over all the key-value pairs in an object, if, 
for example, you had an object of filters where the key was the field to 
filter on and the value is supplied by the user.
*/
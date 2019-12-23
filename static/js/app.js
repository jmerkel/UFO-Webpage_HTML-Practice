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

d3.select("#filter-btn").on("click", handleClick);

buildTable(tableData);
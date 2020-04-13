# HTML/JavaScript Practice - UFO webpage
### UC Berkeley - Module 11

## Purpose
The purpose of this challenge is for the site administrator to display a series of data on a webpage, add additional filter options for users to use, and improve the quality of the webpage by dynamically filtering the data set instead of using a button to engage the filter.

This project replaced the single filter (date) and filter button with multiple filter options (date, city, state, country, and shape of UFO sighting). Additionally, the button was replaced so that the data is filtered whenever the user inputs a new filter line and then leaves the input box. This is done to prevent the table from being re-created when the filter string is not complete which in turn cuts down on the amount of "noise" from the table being re-filtered.

## Technologies Used
This project uses 3 main technologies:
* HTML        - Displaying information
* Javascript  - Adding actions to the webpage
* d3.js       - Adding additional actions and features


## Further development
The next iteration of the webpage could include some of the following features:
* Click-through to get more details on the sighting
* Changing the single date filter to be a date range
* Including a user input option to add data to the dataset
* Including a download link so users can run their own analysis
* Including visualization options, such as a line graph to show the frequency of sightings, or a map with pins to show locations of each sighting

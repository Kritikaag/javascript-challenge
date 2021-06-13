// from data.js
var tableData = data;
console.log(data)
// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Create table structure in the html file and insert each "data" object
tableData.forEach(obj => {
    // for each "element" in the object create a row
    var tRow = tbody.append("tr");
    //below "object" becomes the targetet array (element)
    Object.entries(obj).forEach(([key,value]) => {
        // console.log(`The key is: ${key} and the value is: ${value}`);
        var tdata = tRow.append("td");
        // adds the "value" to each row in the table
        tdata.text(value);
    });
});



// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select('form');

// Create event handlers
button.on("click", submitForm);
form.on("submit", submitForm);

// Complete the event handler function for the form
function submitForm() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select('#datetime');

  // Get the value property of the input element
  var inputValue = inputElement.property('value');

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  // Clear current table body
  d3.select('tbody').text('');

  // Get a reference to the table body and save to new variable
  var filterTbody = d3.select("tbody");

  // Create table pulling information matching the filter
  filteredData.forEach(function(sighting) {
  console.log(sighting);
  var row = filterTbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
  });
});
};

// Select the button
var button = d3.select("#filter-city");

// Select the form
var form = d3.select('form');

// Create event handlers
button.on("click", cityForm);
form.on("submit", cityForm);

// Complete the event handler function for the form
function cityForm() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select('#city');

  // Get the value property of the input element
  var inputValue = inputElement.property('value');

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.city === inputValue);

  console.log(filteredData);

  // Clear current table body
  d3.select('tbody').text('');

  // Get a reference to the table body and save to new variable
  var filterTbody = d3.select("tbody");

  // Create table pulling information matching the filter
  filteredData.forEach(function(sighting) {
  console.log(sighting);
  var row = filterTbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
  });
});
};


// Select the button
var button = d3.select("#filter-state");

// Select the form
var form = d3.select('form');

// Create event handlers
button.on("click", stateForm);
form.on("submit", stateForm);

// Complete the event handler function for the form
function stateForm() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select('#state');

  // Get the value property of the input element
  var inputValue = inputElement.property('value');

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.state === inputValue);

  console.log(filteredData);

  // Clear current table body
  d3.select('tbody').text('');

  // Get a reference to the table body and save to new variable
  var filterTbody = d3.select("tbody");

  // Create table pulling information matching the filter
  filteredData.forEach(function(sighting) {
  console.log(sighting);
  var row = filterTbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
  });
});
};
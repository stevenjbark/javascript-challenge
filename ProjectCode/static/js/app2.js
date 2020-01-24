// from data.js
var tableData = data;

// use d3 to referenc table body for adding data fields
var tbody = d3.select("tbody");

// check data. Noted the order was different in the console than in the data.js file
//console.log(data);

//Capture user input date from textbox
var inputDate = document.getElementById("input_field").value;
console.log(Boolean(inputDate));

//Create function to filter by inputDate
function filterByDate(sighting) {
        return sighting.datetime === inputDate;
};

//Use the filterByDate function and .filter to extract tableData
var filteredTableData = tableData.filter(filterByDate);
console.log(filteredTableData);


//Loop through the filteredTableData and log each UFO sighting
filteredTableData.forEach(function(daysighting) {

    //check value. OK! Reads each object in sequence!
    //console.log(sighting);

    //make new row in tbody
    var row = tbody.append("tr");

    //use Object.entries on sighting to get all key, value pairs.
    var ufos = Object.entries(daysighting);

    //using map produces an listing of arrays for key, value pairs I called value.
    ufos.map(function(value) {
        //console.log(value[1]); gives second element in value arrays
        
        var cell = row.append("td");
        
        //each array called value in the .map function has the value at [1]
        cell.text(value[1]);
    });

});

//Define the button for clicking to update the webpage on entering new date.
var button = d3.select("#Click");

//Link a click on the button object to updating the webpage
button.on("click", function(){
    location.reload();
});


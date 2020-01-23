// from data.js
var tableData = data;

// use d3 to referenc table body for adding data fields
var tbody = d3.select("tbody");

// check data. Noted the order was different in the console than in the data.js file
//console.log(data);

//Loop through the data and log each UFO sighting
data.forEach(function(sighting) {

    //check value. OK! Reads each object in sequence!
    //console.log(sighting);

    //make new row in tbody
    var row = tbody.append("tr");

    //use Object.entries on sighting to get all key, value pairs.
    var ufos = Object.entries(sighting);

    //using map produces an listing of arrays for key, value pairs I called value.
    ufos.map(function(value) {
        //console.log(value[1]); gives second element in value arrays
        
        var cell = row.append("td");
        
        //each array called value in the .map function has the value at [1]
        cell.text(value[1]);
    });

});
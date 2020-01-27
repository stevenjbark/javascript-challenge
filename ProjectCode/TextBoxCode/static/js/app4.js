// from data.js
var tableData = data;

// use d3 to referenc table body for adding data fields
var tbody = d3.select("tbody");





//Capture user input date from textbox for inputDate
var inputDate = document.getElementById("input_field1").value;
console.log(inputDate);
console.log(Boolean(inputDate));

//Capture user input State from textbox for inputState
var inputState = document.getElementById("input_field2").value;
console.log(inputState);
console.log(Boolean(inputState));

//Capture user input Shape from textbox for inputShape
var inputShape = document.getElementById("input_field3").value;
console.log(inputShape);
console.log(Boolean(inputShape));



//Setup Boolean if no date or state is enetered to return everything
if (Boolean(inputDate) === false && Boolean(inputState) === false && Boolean(inputShape) === false) {
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
}


if (Boolean(inputDate) === true) {

    console.log(inputDate);

    //Create function to filter by inputDate
    function filterByDate(sighting) {
            return sighting.datetime === inputDate;
    }
    
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

};

if (Boolean(inputState) === true) {

    console.log(inputState);

    //Create function to filter by inputDate
    function filterByState(sighting) {
            return sighting.state === inputState;
    }
    
    //Use the filterByDate function and .filter to extract tableData
    var filteredTableData2 = tableData.filter(filterByState);
    console.log(filteredTableData2);


    //Loop through the filteredTableData and log each UFO sighting
    filteredTableData2.forEach(function(statesighting) {

        //check value. OK! Reads each object in sequence!
        //console.log(sighting);

        //make new row in tbody
        var row = tbody.append("tr");

        //use Object.entries on sighting to get all key, value pairs.
        var ufos = Object.entries(statesighting);

        //using map produces an listing of arrays for key, value pairs I called value.
        ufos.map(function(value) {
            //console.log(value[1]); gives second element in value arrays
            
            var cell = row.append("td");
            
            //each array called value in the .map function has the value at [1]
            cell.text(value[1]);
        });
    });

};


if (Boolean(inputShape) === true) {

    console.log(inputShape);

    //Create function to filter by inputDate
    function filterByShape(sighting) {
            return sighting.shape === inputShape;
    }
    
    //Use the filterByDate function and .filter to extract tableData
    var filteredTableData = tableData.filter(filterByShape);
    console.log(filteredTableData);


    //Loop through the filteredTableData and log each UFO sighting
    filteredTableData.forEach(function(shapesighting) {

        //check value. OK! Reads each object in sequence!
        //console.log(sighting);

        //make new row in tbody
        var row = tbody.append("tr");

        //use Object.entries on sighting to get all key, value pairs.
        var ufos = Object.entries(shapesighting);

        //using map produces an listing of arrays for key, value pairs I called value.
        ufos.map(function(value) {
            //console.log(value[1]); gives second element in value arrays
            
            var cell = row.append("td");
            
            //each array called value in the .map function has the value at [1]
            cell.text(value[1]);
        });
    });
};

//Define the button for clicking to update the webpage on entering new date.
var button1 = d3.select("#Click1");
var button2 = d3.select("#Click2");
var button3 = d3.select("#Click3");

//Link a click on the button object to updating the webpage
button1.on("click", function(){
    location.reload();
});

button2.on("click", function(){
    location.reload();
});

button3.on("click", function(){
    location.reload();
});

//To populate the dropDownMenu with dates in the tableData, I need to
//create an array and append any new values using .map function.
var currentDates = data.map(date => date.datetime);
//console.log("Current Dates: " + currentDates);

//currentDates is an array of all 111 values in data. Reduce to
//unique values using Set function (similar to Python).
var dateSet = new Set(currentDates);
//console.log("DateSet: " + dateSet);

//Use dateSet to populate the dropDownMenu by adding lines for <option>.

//Select the #selectDate and call the selection dateMenu
var dateMenu = d3.select("#selectDate");

//Loop through the dateSet
dateSet.forEach(function(newDate) {

    //console.log(newDate);

    //For each newDate in the dateSet, create a new row
    var cell = dateMenu.append("option");
    cell.text(newDate);

    //To add a new class to the newly generated "option" tags, I found
    //the .classed() function. Set to backtick to include the naming of
    //the new class as "newDate", and MUST SET SECOND PARAMETER TO true!!!
    //This now sets the class for each <option> row to class="newDate".
    cell.classed(`${newDate}`, true);
    
});




//Setup "displayAll" function to display all values in tableData. Inital Table

function displayAll() {

    // use d3 to reference table body for adding data fields
    var tbody = d3.select("tbody");

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
};


//When changes are made to the dropdown menu, Update using new Date
d3.selectAll("#selectDate").on("change", updatePage);

function updatePage() {
    
    //DROP PREVIOUS CONTENTS
    var oldtable = d3.select(".table>tbody");
    console.log(oldtable);
    //remove data in the oldtable
    oldtable.html("");

    //SELECT DROPDOWN AND GET NEW DATE
    //I think this is necessary to select new values added
    //in dropdown menu from lines 14-30.
    var dateMenu2 = d3.select("#selectDate");
            
    //Assign the dropdown menu option to a variable
    var inputDate = dateMenu2.property("value"); 
    
    // //Use inputDate for the inputDateSearch function
    inputDateSearch(inputDate);


    //inputDateSearch FUNCTION SCRIPT
    //Define the inputDateSearch function
    function inputDateSearch(inputDate) {

        //console.log("else inputDate: " + inputDate);
    
        //FILTER BY INPUT DATE
        function filterByDate(sighting) {
                return sighting.datetime === inputDate;
        }
    
        //Use the filterByDate function and .filter to extract tableData
        var filteredTableData = data.filter(filterByDate);
        console.log(filteredTableData);
    
        //Loop through the filteredTableData and log each UFO sighting
        filteredTableData.forEach(function(daysighting) {

        //use d3 to reference table body for adding data fields
            var tbody = d3.select("tbody");

            //make new row in tbody
            var row = tbody.append("tr");

        //use Object.entries on sighting to get all key, value pairs.
            var ufos = Object.entries(daysighting);
            
            //Arrays from Object.entries ar correct.
            //console.log(ufos);

         //using map produces an listing of arrays for key, value pairs I called value.
            ufos.map(function(value) {

                //console.log(value[1]); gives second element in value arrays
                
                var cell = row.append("td");
                
                //each array called value in the .map function has the value at [1]
                cell.text(value[1]);
            });
        });
    };
};

//Select button for reloading page
button1 = d3.select("#Click1");

//On clicking Reload Page button, reload page.
button1.on("click", function() {
    location.reload();
});


//Initial conditions when starting the webpage
displayAll();
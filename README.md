# javascript-challenge
Homework on javascript and webpages


There are two folders in the ProjectCode folder.

TextBoxCode: 
This code has the html page and javascript for textbox input from the user. This is a more modular javascript implementation
and other textboxes and buttons can be added by almost trivial duplication of the ones already encoded. The only data where such implementation would
be problematic are the Duration and Comment columns because of non-standardized data entered in these columns. If Duration were standardized to minutes,
this would enable use of these data as well for search criteria.

DropDownMenuCode: 
This code is much more exploratory. It is not yet modular, but has many of the features desired from a dropdown menu system.
Clicking on the "Click to Display All Data" reloads the page to the initial condition, displaying all records in the table. Selecting dates 
in the Pick Date dropdown menu displays only those dates by clearing the table prior to appending these dates to a new table. Because the modularity
is not as clear as in the TextBoxCode, I have only implemented this search in the date category.
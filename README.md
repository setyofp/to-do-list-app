# to-do-list-app
This app is using window prompt as an input. When you open the page, the browser will automatically ask for the input. There is some valid input for using this app. The valid input is:
* "new"
<br> Add task into to do list. In this command, Array.push method used to insert task into existing list. The initial condition of the list is an empty array.
* "list"
<br> Show list of all task. Using for loop and console.log to print out list of all task stored at list array.
* "delete"
<br> Delete specific task based on index number. Array.splice method used to delete specific task based on user input. User must input integer value. Alert warning pop-up will show if the input is non-integer. 
* "quit"
<br> Quit, to list app and stop asking the input.

While loop is apply if the user input is none of the valid input above. The browser will continously asking for the valid input, to close the pop up, please input "quit".

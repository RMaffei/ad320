Nested Buttons

Overview:

NestedButtons contains two buttons one nested inside the other. This helps demonstrate event propagation and prevent events from rising up to its parent elements. There are separated click event handlers for the inner/outer buttons and ensure that only that handler is called. Using the stopPropagation() method within the function for handlerInnerClick allows us to prevent the click event from propoagating up the DOM tree. This gives us control flow within the component and has been a very effective demonstration in event propagation. 

How to Run: 

1.	Clone or download project files from GitHub repository.
2.	Download src files and project dependencies.
3.	Run ‘npm start’ in project directory. 
4.	Click buttons and observe unique behaviors within App.js.

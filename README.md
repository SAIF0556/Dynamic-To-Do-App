Dynamic To-Do List Application

This is a dynamic to-do list application built with React and React Beautiful DnD. The application has three sections: Pending, In Progress, and Completed. Users can add tasks, move tasks between sections using buttons, and optionally use drag-and-drop functionality to move tasks between sections.


Features: 
-	Add new tasks to the Pending section.
-	Move tasks from Pending to In Progress.
-	Move tasks from In Progress to Completed, adding a timestamp when completed.
-	Drag and drop tasks between sections.

Dependencies:
-	React
-	react-beautiful-dnd
-	Tailwind CSS

Installation:
To run this project locally, follow these steps:

Clone the repository or download the folder:
-	git clone https://github.com/SAIF0556 /todo-app.git
-	cd todo-app
Install dependencies:
-	Ensure you have Node.js installed. Then, install the project dependencies by running:
o	npm install
-	Start the development server: 	
o	npm run dev
This will start the application and open it in your default web browser. If it does not open automatically, navigate to http://localhost:5174 in your browser.


Usage
Adding a Task:
•	Enter a title and an optional description in the input fields under the Pending section.
•	Click the "+ Create" button to add the task to the Pending section.
Moving Tasks:
•	To move a task from Pending to In Progress, click the "Start" button on the task card.
•	To move a task from In Progress to Completed, click the "Complete" button on the task card.
•	The Completed section will display a timestamp of when the task was completed.
Drag and Drop:
•	Drag a task from the Pending section to the In Progress section.
•	Drag a task from the In Progress section to the Completed section.


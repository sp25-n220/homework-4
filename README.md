## Assignment 4

### Project Summary

Assignment 4 is all about collaboration and OOP techniques. This project allows us to collaborate using Git pushing our own code and pulling others to update our own local projects. Outside of this, we learn powerful OOP techniques. For example, we have a parent class GeneratePdf and we extend that to a child class for example ticketEventPdf. This technique is called inheritence. We allow the child to have all of the properties the parent does but it is a more focused class. 
    - Analogy: 
        - Genre -> Book
        - In this example, a genre will have a bunch of broad details. But a book will incorporate those details and tell a story. Like fiction is the genre and the book designs a fictional world. 

The jsPDF module is extremely powerful as well. It allows for dynamic pdfs, handle user inputs, and you can download and save those pdfs! 

This is what the assignment is about!

### Live Link

[Assignment-4](https://homework-4-98db.onrender.com)

Gitub link

[Assignment-4 Github](https://sp25-n220.github.io/homework-4/views)

### Key Takeaways

- Node.js Server & Routing – Creating a functional HTTP server with dynamic content handling.
- Modular Frontend Development – Using JavaScript modules for better structure and interaction.
- OOP & Class Inheritance – Implementing a base PDFGenerator class and extending it.
- PDF Generation – Using jsPDF to create, preview, and download formatted PDFs.
- Navigation & UI – Building seamless navigation between pages.
- User Interaction – Handling form inputs and dynamic content updates.
- Team Collaboration – Assigning roles and working in a structured group project.
- Real-World Application – Simulating practical scenarios like invoices, tickets, and receipts.

### Design Choices

List color palette used and rationale for top level layout decisions.

### Members & Responsibilities

Joseph Roper - President:
    - ticket.js
    - ticketCreation.js
    - ticket.html
    - Imported files as well

Kieren Foulk - Designer 
    - Global styling
    - certification.html
    - certification.js

Elias Arriaga - Analyist
    - career.js


Haven Hamelin - Scrum Master






### Running this assignment 

To run this assignment 

- Install npm

`npm i`

- Run the server

`npm run start`

- Then in your browser search http://localhost:3008


### Documentation for Joseph Roper 

As President I wrote down members and responsibilities as well as the project overview.

For my specific scenario I created the ticket.js and ticketCreation.js. This was a fun challenge! I liked using inheritance because all methods were available to me. I did not have to write any "new" pdf code in a sense. All I had to do was write the logic for my pdf creation and for my ticket creation. The way I chose to do this was in two parts

- First, I decided to create one javascript file for just the pdf class. This way it was much easier to split up code from event listeners to the actual pdf logic

- Second, I created the ticketCreation file in order to add event listeners to the page. This was extremely handy because it made my code super easy to read. By exporting the pdf, I was able to use some of the properties and create a ticket.

For example 

`ticketPdf = new ticketEventPdf("ticket-pdf");`

This creates a new instance of the pdf file in ticket.js which allows me to create a new ticket in the next line!

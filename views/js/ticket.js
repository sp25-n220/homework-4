import { GeneratePdf } from './app.js';  

// extends from app.js
export class ticketEventPdf extends GeneratePdf {
    
    //Create a super constructor that passes the 
    constructor(domRefId) {
        super(domRefId);
    }
    
    createTicketCode() {

        // Create a variable with all capital letters and numbers
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        // Empty ticket
        let ticketCode = '';

        // Loop through available characters 7 times and assign a random character and put it in the ticket string
        for (let i = 0; i < 7; i++) {
            ticketCode += characters.charAt(Math.floor(Math.random() * characters.length));

            console.log(ticketCode);
        }

        return ticketCode;

        
    }

    //Create a ticket with the given parameters
    createTicket = (eventName, eventDate, userName) =>  {

        // this.resetPdf();

        
        this.addHeader(`Event: ${eventName}`, "maroon");
        this.position.y += 20;
        
        //Create ticket date and name line and append to pdf
        this.addText(`Date: ${eventDate}`, "black");    
        this.addText(`Name: ${userName}`, "black");     
        
        //Create a ticket code and append to pdf
        const ticketNumber = this.createTicketCode();
        this.addText(`Ticket Number: ${ticketNumber}`, "black");

        //Creates space in between ticket generations
        this.position.y += 20;
        
        this.showPdf();
        

    }

} 
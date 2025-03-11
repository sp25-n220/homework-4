import { ticketEventPdf } from './ticket.js';

//Declare ticketPdf globally to use for both listeners
let ticketPdf; 

document.getElementById('generate-ticket').addEventListener('click', () => {

    const eventSelect = document.getElementById('event-selection');
    const userNameInput = document.getElementById('userName');

    const eventName = eventSelect.value;
    const userName = userNameInput.value;
    

    const getEventDate = (eventName) => {
        //Switch statement to detirmine what date it for the event. 
        switch(eventName) {

            case 'Concert':
                return '3/12/2025';
        
            case 'Seminar':
                return '3/13/2025';
            
            default:
                return null;
        }
    }

    const eventDate = getEventDate(eventName);
    

    if (userName && eventName) {
        
        ticketPdf = new ticketEventPdf("ticket-pdf");
        ticketPdf.createTicket(eventName, eventDate, userName);

        //Clear all user inout and reset the selections value to Concert
        userNameInput.value = '';
        eventSelect.value = 'Concert';
    } else {
        alert('Please enter your name and select an event!');
    }
});


document.getElementById("download-ticket").addEventListener("click", () => {
    ticketPdf.pdfDoc.save("ticket.pdf");
    console.log("button clicked")
})
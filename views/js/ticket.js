import { GeneratePdf } from './app.js';  

class ticketEventPdf extends GeneratePdf {
    
    constructor(domRefId) {
        super(domRefId);
    }

    createTicket(eventName, eventDate, name) {
        this.reset();

        
    }

} 
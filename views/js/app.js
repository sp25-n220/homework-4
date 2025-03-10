import {jsPDF} from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";



class GeneratePdf {
    pdfDoc; 

    position = {
        x:0,
        y:0,

    }

    margin = {
        y:10,
        x:0,
    }

    constructor () {
        this.pdfDoc = new jsPDF();
    }

    downloadPdf() {
        this.pdfDoc.save("mydoc.pdf")
    }

    getPdfUrl () {
        return this.pdfDoc.output ("blourl");
    }

    addHeader(text) {
        this.pdfDoc.setFontSize(24);
        this.pdfDoc.tet(text, this.position.x, this.position.y)
        this.pdfDoc.setFontSize
    }

    
    
}

const myPdf = new GeneratePdf();

document.querySelector("#pdf-preview").src = myPdf.getPdfUrl();


console.log("hello", jsPDF); 
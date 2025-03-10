import {jsPDF} from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";



class GeneratePdf {
    pdfDoc; 

    position = {
        x: 20,
        y: 10,

    }

    margin = {
        y:20,
        x:10,
    }

    pageCounter = 1;

    domRef = "";

    constructor (domRefId) {
        this.pdfDoc = new jsPDF();
        this.pdfDoc.setFontSize(11);

        if(domRefId) {
            this.domRef = document.querySelector(`#${domRefId}`)
        }
    }

    downloadPdf() {
        this.pdfDoc.save("mydoc.pdf")
    }

    getPdfUrl () {
        return this.pdfDoc.output("bloburl") + "#toolbar = 1";
    }

    addHeader(text, color = "black") {
        this.pdfDoc.setFontSize(18);
        this.pdfDoc.setTextColor(color);
        this.pdfDoc.text(text, this.position.x, this.position.y);
        this.pdfDoc.setTextColor("black");
        this.pdfDoc.setFontSize(14);
    }

    addText(text, color = "black") {
        this.pdfDoc.setTextColor(color);
        this.pdfDoc.text(text, this.position.x, this.position.y);
        this.pdfDoc.setTextColor("black");
        this.position.y += 6;
    }
    
    resetPdf() {
        for (let i = this.pageCounter; i > 0; i--) {
            this.pdfDoc.deletePage(i);
        }

        this.pageCounter = 1;
        this.pdfDoc.addPage();

        this.showPdf()
    }

    newPage() { 
        this.position = {...this.margin}; 
        this.pdfDoc.addPage();
        this.pageCounter++;
    }

    showPdf() {
        if(this.domRef) {
            this.domRef.src = this.getPdfUrl();
        }
    }

    addBackground({color = "black", fontSize = 11} = {}) {
        const offSet = fontSize / 2;
        this.pdfDoc.setFillColor(color);
        this.pdfDoc.rect(
        this.position.x,
        this.position.y - (offset * 3) / 4,
        100,
        offset,
        "F"
    );
        this.pdfDoc.setFillColor("white");
    }

}

const myPdf = new GeneratePdf();

document.querySelector("#pdf-preview").src = myPdf.getPdfUrl();

myPdf.addBackground({ fontSize: 16, color: "blue" });
myPdf.addHeader("Title", "white");
myPdf.addBackground();
myPdf.addText("Something else is amidst", "white");

myPdf.newPage();
myPdf.addHeader("Second Page!!!");

myPdf.showPdf();


console.log("hello", jsPDF); 
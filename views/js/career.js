import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

class GeneratePdf {
  pdfDoc;
  position = { x: 20, y: 10 };
  margin = { y: 20, x: 10 };
  pageCounter = 1;
  domRef = "";

  constructor(domRefId) {
    this.pdfDoc = new jsPDF();
    this.pdfDoc.setFontSize(11);

    if (domRefId) {
      this.domRef = document.querySelector(`#${domRefId}`);
    }
  }

  downloadPdf(filename = "mydoc.pdf") {
    this.pdfDoc.save(filename);
  }

  getPdfUrl() {
    return this.pdfDoc.output("bloburl") + "#toolbar=1";
  }

  addHeader(text, color = "black") {
    this.pdfDoc.setFontSize(18);
    this.pdfDoc.setTextColor(color);
    this.position.y += 10;
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
    this.pdfDoc = new jsPDF();
    this.pdfDoc.setFontSize(11);
    this.pageCounter = 1;
    this.position = { ...this.margin };
    this.showPdf();
  }

  newPage() {
    this.pdfDoc.addPage();
    this.pageCounter++;
    this.position.y = this.margin.y;
    this.showPdf();
  }

  showPdf() {
    if (this.domRef) {
      this.domRef.src = this.getPdfUrl();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const pdfPreviewFrame = document.getElementById("pdf-preview");
  const pdfGenerator = new GeneratePdf("pdf-preview");

  document.getElementById("generate-pdf").addEventListener("click", () => {
    pdfGenerator.resetPdf();
    pdfGenerator.addHeader("Career Page PDF");
    pdfGenerator.addText("This PDF contains information from the career page.");
    pdfGenerator.showPdf();
  });

  document.getElementById("preview-pdf").addEventListener("click", () => {
    pdfGenerator.showPdf();
  });

  document.getElementById("download-pdf").addEventListener("click", () => {
    pdfGenerator.downloadPdf();
  });
});

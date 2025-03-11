import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

class GeneratePdf {
  pdfDoc;
  position = { x: 20, y: 20 };
  domRef = "";

  constructor(domRefId) {
    this.pdfDoc = new jsPDF();
    this.pdfDoc.setFontSize(11);
    if (domRefId) {
      this.domRef = document.querySelector(`#${domRefId}`);
    }
  }

  getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString();
  }

  generateReceipt() {
    this.pdfDoc = new jsPDF(); // Reset PDF
    this.position = { x: 20, y: 20 };

    // Restaurant Name Header
    this.pdfDoc.setFontSize(18);
    this.pdfDoc.setTextColor("black");
    this.pdfDoc.text("The Gourmet Bistro", this.position.x, this.position.y);
    this.position.y += 10;

    // Date
    this.pdfDoc.setFontSize(12);
    this.pdfDoc.text(
      `Date: ${this.getCurrentDate()}`,
      this.position.x,
      this.position.y
    );
    this.position.y += 10;

    // Sample Menu Items (Simulating Restaurant Order)
    const orderItems = [
      { name: "Grilled Salmon", price: 18.99, quantity: 2 },
      { name: "Caesar Salad", price: 9.99, quantity: 1 },
      { name: "Pasta Alfredo", price: 14.99, quantity: 1 },
      { name: "Iced Lemon Tea", price: 3.99, quantity: 2 },
    ];

    this.pdfDoc.setFontSize(12);
    this.pdfDoc.text("Order Summary:", this.position.x, this.position.y);
    this.position.y += 8;

    let grandTotal = 0;

    // Table Header
    this.pdfDoc.setFontSize(10);
    this.pdfDoc.text("Item", this.position.x, this.position.y);
    this.pdfDoc.text("Price", this.position.x + 70, this.position.y);
    this.pdfDoc.text("Qty", this.position.x + 110, this.position.y);
    this.pdfDoc.text("Total", this.position.x + 140, this.position.y);
    this.position.y += 6;

    // Add Items to PDF
    orderItems.forEach((item) => {
      let lineTotal = item.price * item.quantity;
      grandTotal += lineTotal;

      this.pdfDoc.text(item.name, this.position.x, this.position.y);
      this.pdfDoc.text(
        `$${item.price.toFixed(2)}`,
        this.position.x + 70,
        this.position.y
      );
      this.pdfDoc.text(
        `${item.quantity}`,
        this.position.x + 110,
        this.position.y
      );
      this.pdfDoc.text(
        `$${lineTotal.toFixed(2)}`,
        this.position.x + 140,
        this.position.y
      );
      this.position.y += 6;
    });

    // Add Grand Total
    this.position.y += 10;
    this.pdfDoc.setFontSize(12);
    this.pdfDoc.text(
      `Grand Total: $${grandTotal.toFixed(2)}`,
      this.position.x,
      this.position.y
    );

    this.showPdf();
  }

  getPdfUrl() {
    return this.pdfDoc.output("bloburl") + "#toolbar=1";
  }

  showPdf() {
    if (this.domRef) {
      this.domRef.src = this.getPdfUrl();
    }
  }

  downloadPdf(filename = "restaurant_receipt.pdf") {
    this.pdfDoc.save(filename);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const pdfGenerator = new GeneratePdf("pdf-preview");

  document.getElementById("generate-pdf").addEventListener("click", () => {
    pdfGenerator.generateReceipt();
  });

  document.getElementById("preview-pdf").addEventListener("click", () => {
    pdfGenerator.showPdf();
  });

  document.getElementById("download-pdf").addEventListener("click", () => {
    pdfGenerator.downloadPdf();
  });
});

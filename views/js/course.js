import { GeneratePdf } from './app.js';  

var question1Radios;
var question2Radios;
var questionsAll;

export class CoursePdf extends GeneratePdf {

    generateCertificate(userName, scorePercentage) {
        this.resetPdf();
        
        // Course Name Header
        this.addHeader("Introduction to Business", "blue", undefined, "bold");        
        // Add Certificate Title
        this.addHeader("Certificate of Completion", "black");
        this.position.x += 71;
        this.addText("to", "black");
        this.position.x -= 71;
        
        // Add User Name
        this.addHeader(userName, "black");
        this.position.y += 10;
        
        // Add Score and Date
        this.addText(`Score: ${scorePercentage}%`, "black");
        const currentDate = new Date().toLocaleDateString();
        this.addText(`Date: ${currentDate}`, "black");
        
        this.showPdf();
    }
}

function checkSelections() {
    let selectionsCount = 0;
    let correctAnswers = 0;
    questionsAll.forEach(questions => {
        Array.from(questions).forEach(radio => {
            if (radio.checked) {
                selectionsCount++;
                if (radio.classList.contains('correct-answer')) {
                    correctAnswers++;
                }
            }
        });
    });

    const buttonSection = document.querySelector('.button');
    if (selectionsCount >= questionsAll.length) {
        buttonSection.style.visibility = 'visible';
    } else {
        buttonSection.style.visibility = 'hidden';
    }
    return {"selectionsCount":selectionsCount, "correctAnswers":correctAnswers};
    }

document.addEventListener("DOMContentLoaded", function() {
    question1Radios = document.querySelectorAll('input[name="money"]');
    question2Radios = document.querySelectorAll('input[name="economy"]');
    questionsAll = [question1Radios,question2Radios];

    question1Radios.forEach(radio => {
      radio.addEventListener('change', checkSelections);
    });
    question2Radios.forEach(radio => {
      radio.addEventListener('change', checkSelections);
    });
    checkSelections();

    document.getElementById('generate-certificate').addEventListener('click', () => {
        const userName = document.getElementById('user-name').value;
        var selectionsCheck = checkSelections();
        var scorePercentage = (selectionsCheck.correctAnswers / questionsAll.length)*100;
        if (userName) {
            const certificate = new CoursePdf("pdf-preview");
            certificate.generateCertificate(userName,scorePercentage);
        } else {
            alert('Please enter your name!');
        }
    });

    document.getElementById('download-certificate').addEventListener('click', () => {
        const userName = document.getElementById('user-name').value;
        var selectionsCheck = checkSelections();
        var scorePercentage = (selectionsCheck.correctAnswers / questionsAll.length)*100;
        if (userName) {
            const certificate = new CoursePdf("pdf-preview");
            certificate.generateCertificate(userName,scorePercentage);
            certificate.downloadPdf();
        } else {
            alert('Please enter your name!');
        }
    });
  });
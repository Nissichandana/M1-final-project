// This is global variable to hold random generated number
let randNumGenerated = 0;

// This is global variable to track number of attempts made by user
let guessAttempts = 1; 

// This is for alert message to show user
let userMsg = "";


// This function is triggered when page is loaded
// MathRandom() to generate random number
// Function to generate a Random Number
function genRandNum() {
    randNumGenerated = Math.floor(Math.random() * 10) + 1;
    guessAttempts = 1;
    guessField.value="";
    guessRemain.value=3;
    guessField.focus();
    console.log("randNumGenerated = " + randNumGenerated);
}


// Function to check if user exceeded attempts. If so show the message 
// if not show the message returned by the actual routine
function exceededAttempts(MsgForUser,guessStatus){
    guessAttempts = guessAttempts + 1;
    if (guessAttempts == 3 && guessStatus != 'S') { 
        // Last Attempt Message
        alert("You Used all your guesses. Actual Number : "+randNumGenerated+". Please start Over")
        //document.querySelector(".message").textContent = "correct number";
        genRandNum();
    } else if (guessStatus == 'F'){
       alert(MsgForUser);
    }else if (guessStatus == 'F'){
       //document.querySelector(".message").textContent =""
        guessRemain.value=4-guessAttempts;
    } else {
        alert(MsgForUser);
        genRandNum();
    }

}


// This function triggers when the button is clicked
// Function to retrieve Guessed Number and also check for attempts
function startGuessNum() {
    console.log("Guess attempt # " + guessAttempts);

        // Capture the number entered by User
        let numGuessed = document.getElementById("guessField").value;
        console.log("Num = " + randNumGenerated + "; you entered = " + numGuessed)

        /*
           check if User 
           entered number out of Range or
           entered number less than expected or
           entered number grater than expected 
           or uese guessed right number
           Based on user entry shoe appropriate message
        */
    if (isNaN(numGuessed) || numGuessed < 1 || numGuessed > 10) {
            //userMsg = "Please Enter A Valid Number between 1 and 10";
            document.querySelector(".message").textContent = "Please Enter A Valid Number between 1 and 10";
            exceededAttempts(userMsg, 'F');
        } else if (numGuessed > randNumGenerated) {
            userMsg ="OOPS SORRY! TRY A SMALLER NUMBER";
            exceededAttempts(userMsg, 'F');
        } else if (numGuessed < randNumGenerated) {
            userMsg ="OOPS SORRY! TRY A GREATER NUMBER";
            exceededAttempts(userMsg, 'F');
        } else if (numGuessed == randNumGenerated) {
            userMsg ="CONGRATULATIONS! YOU GUESSED IT RIGHT IN " + guessAttempts + " ATTEMPT";
            exceededAttempts(userMsg, 'S');
        } 
    }




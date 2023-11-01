// This is global variable to hold random generated number
let randNumGenerated = 0;

// This is global variable to track number of attempts made by user
let guessAttempts = 1; 

// This is global variable to track number of attempts made by user
let guessesRemaining = 3; 

// This is for alert message to show user
let userMsg = "";


// This function is triggered when page is loaded
// MathRandom() to generate random number
// Function to generate a Random Number
function genRandNum() {
    randNumGenerated = Math.floor(Math.random() * 10) + 1;
    guessAttempts = 1;
    guessesRemaining = 3;
    guessRemain.value=guessesRemaining;
    guessField.value="";
    guessField.focus();
    console.log("randNumGenerated = " + randNumGenerated);
}


// Function to check if user exceeded attempts. If so show the message 
// if not show the message returned by the actual routine
function exceededAttempts(guessStatus){
    if (guessAttempts == 3 && guessStatus == 'F') { 
        // Last Attempt Message
        //alert("You used all your attempts. Actual number is: " + randNumGenerated);
        errorMsg.value = "You used all your attempts. Actual number is: " + randNumGenerated
        //document.querySelector(".message").textContent = "correct number";
        genRandNum();
    } else if (guessStatus == 'F'){
       //alert(userMsg);
       errorMsg.value = userMsg;
       guessesRemaining--;
       guessRemain.value= guessesRemaining;
       guessAttempts = guessAttempts + 1;
    } else {
        //alert(userMsg);
        errorMsg.value = userMsg;
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
            userMsg = "Please Enter a Valid Number between 1 and 10";
            //document.querySelector(".message").textContent = "Please Enter A Valid Number between 1 and 10";
            exceededAttempts('F');
    } else if (numGuessed == randNumGenerated) {
                userMsg ="CONGRATULATIONS! YOU GUESSED IT RIGHT IN " + guessAttempts + " ATTEMPT";
                exceededAttempts('S');
            } 
        else if (numGuessed > randNumGenerated) {
            userMsg ="OOPS SORRY! TRY A SMALLER NUMBER";
            exceededAttempts('F');
        } else if (numGuessed < randNumGenerated) {
            userMsg ="OOPS SORRY! TRY A GREATER NUMBER";
            exceededAttempts('F');
        }// else if (numGuessed == randNumGenerated) {
           // userMsg ="CONGRATULATIONS! YOU GUESSED IT RIGHT IN " + guessAttempts + " ATTEMPT";
            //exceededAttempts(userMsg, 'S');
        } 
    




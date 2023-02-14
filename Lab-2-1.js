//######## LAB 2-1 FILE DELETE CONFIRMATION ########
//alert("hey 2.1");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";

var questionText = "Are you sure you want to delete the file?"

//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE
userChoice = confirm(questionText);

//2. IF USER CLICKS OKAY ADD yesMessage TO messageOut
//3. IF USER CLICKS ANYTHING BUT OKAY, ADD noMessage TO messageOut
messageOut += (userChoice === true) ? yesMessage : noMessage;

//4. SEND FINAL POPUP MESSAGE TO USER
alert(messageOut);
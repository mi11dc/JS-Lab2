//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
var correctUserName = "dart";
var correctPassword = "vader";
var userNameInput;
var passwordInput;

var userNamePromptTxt = "Enter username ...";
var passwordPromptTxt = "Enter password ...";
var successOutputMsgAlt = "Welcome back";
var faildOutputMsgAlt = "Invalid username/password";
var successOutputMsgLog = "Login Successful";
var faildOutputMsgLog = "Login Fail";


//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
userNameInput = prompt(userNamePromptTxt);
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(userNameInput);
//5. CREATE POPUP BOX FOR PASSWORD
passwordInput = prompt(passwordPromptTxt);
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(passwordInput);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
if (userNameInput === correctUserName && passwordInput === correctPassword) {
	alert(successOutputMsgAlt);
	console.log(successOutputMsgLog);
} else {
	alert(faildOutputMsgAlt);
	console.log(faildOutputMsgLog);
}
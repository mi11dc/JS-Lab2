//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var joinQueTxt = "You would like to join our mailing list?";
var emailInputTxt = "Please enter your e-mail...";
var defaultEmail = "me@example.com";
var joinInput;
var emailInput;
var noJoinOutputMsg = "Thank you, we will not bother you again.";
var successOutputMsg = "Thank you, our next newsletter will be sent to ";
var invalidOutputMsg = "Thank you, but your email was not valid.";


//==== LOGIC =============
joinInput = confirm(joinQueTxt);

if (!joinInput) {
    alert(noJoinOutputMsg);
} else {
    emailInput = prompt(emailInputTxt, defaultEmail);
    switch(emailInput) {
        case "":
        case null:
        case undefined:
        case defaultEmail:
            alert(invalidOutputMsg);
            break;
        default:
            alert(successOutputMsg + emailInput);
            break;
    }
}
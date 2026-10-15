let password = "mypassword123";
let length = password.length;

if (length < 8) {
    console.log("Too short");
} else if (length >= 8 && length <= 11) {
    console.log("Moderate");
} else {
    console.log("Strong");
}
// unknown Type
var userInput;
var userName;
userInput = 5;
userInput = 'Joms';
// userName = userInput // Type 'unknown' is not assignable to type 'string'.
// FIX:
if (typeof userInput === 'string') {
    userName = userInput;
}
// never Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);

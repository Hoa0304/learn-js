function showDiaLog() {
    alert('Please')
}

function showMessage(message) {
    console.log(message);
}

showMessage("Hi anh em F8!");

function writeMessage(message, messageType) {
    if (message) {
        console.log(message);
    }
    console.log(messageType);
}

writeMessage("Hi anh em nhà Hoa!", 23);

function writeLog() {
    var myString = '';
    for (var para of arguments) {
        myString += `${para} - `
    }
    console.log(myString)
}

writeLog('Hello',2,3)
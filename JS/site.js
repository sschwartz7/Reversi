//entry point
function getValues(){
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//logic
function reverseString(userString){
    let revString = '';
     for (let index = userString.length-1; index >= 0; index--) {
         revString+= userString[index];         
     }
     return(revString);
}

//display
function displayString(revString){
    document.getElementById('results').textContent = revString;
    let alertBox = document.getElementById('alert');
    alertBox.classList.remove('invisible');

}


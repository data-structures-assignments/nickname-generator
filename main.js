// Nickname Generator
let nameIndex = 0;

// Event Listeners
document.getElementById("random").addEventListener("click", randomName);
document.getElementById("all").addEventListener("click", allName);


// Event Functions
function randomName() {
    // Local Variables
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;

    // Select random name from lowest to highest index
    nameIndex = Math.randomInt(0, storeNames.length);

    // Display Nickname
    document.getElementById("nicknames").innerHTML = firstName + " " + storeNames[nameIndex] + " " + lastName + "<br>";


}

function allName() {
    // Local Variables
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;

    let nameContainer = document.getElementById("nicknames");

    for (let i = 0; i < storeNames.length; i++) {
        nameContainer.innerHTML += firstName + " " + storeNames[i] + " " + lastName + "<br>";
    }
}

let storeNames;

fetch("names.txt").then(convertNames).then(processNames);

function convertNames(rawData){
    return rawData.text();
}

function processNames(data){
    storeNames = data.split("\r\n");
}

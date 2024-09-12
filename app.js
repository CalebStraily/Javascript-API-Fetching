//* API = Application Programming Interface
// What it means: Its the middle man between The front end (website) and the DATABASE

// JSON is set up the same way as an object
// JSON = Javascript Object Notation

let person = 
{
    firstName: "Michael",
    lastName: "Valencia"
}



// Fetching

/*
fetch(url)
    .then(response => response.json())
    .then(data => 
    {
        console.log(data);
    })
    .catch(error => 
    {
        console.log(error);
    });
*/

// Fetching Manipulation

//I want to use this data in more functions so I made a global EMPTY variable
let currentCharacter = "";
let showButton = document.querySelector(".characterName button");
let counter = 1;

async function fetchData(currentCount)
{
    let url = `https://swapi.dev/api/people/${currentCount}`;

    await fetch(url)
        .then(response => response.json())
        .then(data => 
        {
            currentCharacter = data;
            console.log(currentCharacter);

            //gets just the height and mass from the current data index
            pasteTraits(data.height, data.mass);
        })
        .catch(error =>
        {
            console.log(error);
        })
}

fetchData(counter);

async function pasteDataToPage()
{
    showButton.disabled = 'true';
    await fetchData(counter);

    counter++;

    let paragraph = document.createElement("p");
    console.log(currentCharacter.name);
    paragraph.innerText = currentCharacter.name;

    let characterDivBox = document.querySelector(".characterName");
    console.log(characterDivBox);

    characterDivBox.append(paragraph);
    showButton.removeAttribute('disabled');
}

function pasteTraits(currentHeight, currentWeight)
{
    console.log(currentHeight, currentWeight);
}

showButton.addEventListener("click", pasteDataToPage);
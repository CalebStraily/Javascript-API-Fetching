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

function fetchPokemonData()
{
    let kricketuneUrl = `https://pokeapi.co/api/v2/pokemon/kricketune`;
    let finneonUrl = `https://pokeapi.co/api/v2/pokemon/finneon`;
    let pikachuUrl = `https://pokeapi.co/api/v2/pokemon/pikachu`;

    //Activates fetching to get data from API
    fetch(pikachuUrl)
    //See if we get an answer from this link. And breaks it down as JSON (Just an Object)
    .then(response => response.json())
    //This is the place where you with an object. Do whatever you want.
    .then(data => 
    {
        console.log(data);
        console.log(data.id);
        console.log(data.species.name);
        console.log(data.moves[25].move);

        putPickachuOnWebsite(data.sprites.front_default);
    })
    .catch(error =>
    {
        console.log(error)
    })
    
    //Activates fetching to get data from API
    fetch(kricketuneUrl)
        //See if we get an answer from this link. And breaks it down as JSON (Just an Object)
        .then(response => response.json())
        //This is the place where you with an object. Do whatever you want.
        .then(data => 
        {
            console.log(data.cries.legacy);
        })
        .catch(error =>
        {
            console.log(error)
        })
    
    //Activates fetching to get data from API
    fetch(finneonUrl)
        //See if we get an answer from this link. And breaks it down as JSON (Just an Object)
        .then(response => response.json())
        //This is the place where you with an object. Do whatever you want.
        .then(data => 
        {
            console.log(data.cries.legacy);
        })
        .catch(error =>
        {
            console.log(error)
        })
}

fetchPokemonData();

function putPickachuOnWebsite(pikaPicture)
{
    let characterTraits = document.querySelector(".characterTraits");
    let imgSrc = document.createElement("img");
    imgSrc.src = pikaPicture;
    characterTraits.append(imgSrc);
}
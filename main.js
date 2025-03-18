/*Javascript*/

const mainContainer =  document.querySelector("main");
console.log("HELLO WORLD"); 

//Proof of concept of JS works in the console 
let myNumber = 7; 

if (myNumber > 8) {
    console.log("Big number"); 
} else {
    console.log("Small number"); 
}

// DOM manipulations 
const magicContent = document.createElement("p"); 
//put something inside the container 
const myText ="Lorem thingy I don't remember what the rest is.";
magicContent.innerHTML =  myText; 
mainContainer.appendChild(magicContent); 

//same thing with different syntax 
// mainContainer.appendChild(document.createElement("section")); 
const anotherExample = document.createElement("section"); 
anotherExample.className = "mySection"; 
mainContainer.appendChild(anotherExample); 

//Loop over an array 
const allTheThings = ["dog", "milk", "banana", myNumber, true, "<strong>Important thing</strong>"]; 
const myListOfThings = document.createElement("ul"); 

allTheThings.forEach(things => {
    //First we need a list item to hold each things 
    const item = document.createElement("li"); 

    // Put the thing into the list item 
    item.innerHTML = things; 

    // Put the list item into the list 
    myListOfThings.appendChild(item); 
});

// Put the list onto the page 
mainContainer.appendChild(myListOfThings);


/*another syntax to foreach 
for (thing of alltheThings){
    //First we need a list item to hold each things 
    const item = document.createElement("li"); 

    // Put the thing into the list item 
    item.innerHTML = things; 

    // Put the list item into the list 
    myListOfThings.appendChild(item); 
}; 

// Put the list onto the page 
mainContainer.appendChild(myListOfThings);
*/

// Make an object 
const myNavMenu = {
    home: "index.html",
    about: "about.html",
    contact: "contact.html"
}
const myNavBar = document.createElement("nav"); 

for (slug in myNavMenu){
    // create a anchor 
    const bitem = document.createElement("a"); 

    // put value into the href 
    bitem.href = myNavMenu[slug];

    //put property into the content 
    bitem.innerHTML = slug; 

    //style the anchor 
    bitem.className = "link"

    // put property into the contents 
    myNavBar.appendChild(bitem);
} 
mainContainer.appendChild(myNavBar); 


/*
lecture version 
const myNavMenu = {
    home: "/",
    about: "about.html",
    contact: "contact.html"
}
const navBar = document.createElement("nav"); 

for (slug in myNavMenu){
    // Make a anchor element 
    const myLink = document.createElement("a"); 

    // Put value into the href 
    myLink.href = myNavMenu[slug];

    //put property into the content 
    myLink.innerHTML = slug; 

    //style the anchor 
    myLink.className = "link"

    // put property into the contents 
    myNavBar.appendChild(myLink);
} 
mainContainer.appendChild(navBar); 

 */
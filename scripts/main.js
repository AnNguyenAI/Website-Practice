const myImage = document.querySelector("img")
myImage .addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/images.jpg") {
        myImage.setAttribute("src", "images/images2.jpg");
    }
    else {
        myImage.setAttribute("src", "images/images.jpg");
    }
});

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Enter username: ");
    if (!myName) {
        setUserName();
    }
    else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome mister ${myName}`
}}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome mister ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});
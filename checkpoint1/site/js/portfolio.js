const pictureProfile = document.querySelector(".profilePicture")
let bProfilePicture = false;
pictureProfile.addEventListener("click", ()=>{
    if (bProfilePicture === false){
        bProfilePicture = true;
        pictureProfile.src = "./image/avatar.svg";
    }else{
        bProfilePicture = false;
        pictureProfile.src = "./image/avatar-bis.png";
    }
    
})

//etape2
const descriptionZone = document.querySelector(".description");
const nameButton = document.createElement("button");
const nameVal = document.querySelector("#name");
const pinkText = document.querySelectorAll(".pink-text");
const pinkBg = document.querySelectorAll(".pink-bg");
const linkColor = document.querySelectorAll(".menu a");
const liList = document.querySelectorAll("#front-dev-tools li");
const btnList = document.querySelector(".btnList");

nameButton.style.width="150px";
nameButton.style.height="50px";
nameButton.style.borderRadius = "11px";
nameButton.style.borderColor = "white";
nameButton.style.color = "white";
nameButton.style.backgroundColor = "pink";
nameButton.innerHTML = "Modify text and color";
descriptionZone.appendChild(nameButton);


nameButton.addEventListener("click", () =>{
    let myColor = prompt("Qu'elle couleur voulez vous")
    let val = prompt("Qu'elle est votre nom?")
    descriptionZone.style.backgroundColor = myColor;
    nameButton.style.backgroundColor = myColor;
    pinkText.forEach((myText)=> {
        myText.style.color = myColor;
    })
    pinkBg.forEach((myBg)=> {
        myBg.style.backgroundColor = myColor;
    })
    linkColor.forEach((linkColor)=> {
        console.log("test")
        linkColor.style.color = myColor;
    })
    nameVal.innerText = val;
})
btnList.addEventListener("click", ()=>{
    for(let i = 0; i < liList.length;i++){
        let val1 = prompt(`Entrer le Dev Tools n° ${i}`)
        liList[i].innerHTML = val1;
    }
})

const backUl = document.querySelector("#backUl");
const addBackend = document.querySelector("#addBackend");
const btnBack = document.querySelector(".btnBack");


let currentIndex = 0
const myList = []
btnBack.addEventListener("click",()=>{
    let newList = document.createElement("li");
    newList.innerText= addBackend.value
    backUl.appendChild(newList);
})


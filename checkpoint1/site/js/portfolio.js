const pictureProfile = document.querySelector(".profilePicture")
let bProfilePicture = false;
pictureProfile.addEventListener("click", ()=>{
    if (bProfilePicture === false){
        bProfilePicture = true;
        pictureProfile.src = "image/avatar.svg";
    }else{
        bProfilePicture = false;
        pictureProfile.src = "image/avatar-bis.png";
    }
    
})

//etape2
const descriptionZone = document.querySelector(".description");
const nameButton = document.createElement("button");
const nameVal = document.querySelector("#name");
const pinkText = document.querySelectorAll(".pink-text");
const pinkBg = document.querySelectorAll(".pink-bg");

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
        console.log("test");
        myText.style.color = myColor;
        // myText.innerHTML.color = "red";
    })
    pinkBg.forEach((myBg)=> {
        myBg.style.backgroundColor = myColor;
    })
    // pinkBg.style.backgroundColor = myColor ;
    nameVal.innerText = val
})
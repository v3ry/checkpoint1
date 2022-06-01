const pictureProfile = document.querySelector(".profilePicture")
let bProfilePicture = false;
pictureProfile.addEventListener("click", ()=>{
    if (bProfilePicture === false){
        bProfilePicture = true;
        pictureProfile.src = "image/avatar.svg"
    }else{
        bProfilePicture = false;
        pictureProfile.src = "image/avatar-bis.png"
    }
    
})
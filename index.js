const profileImage = document.querySelector("#ProfileImage");
const firstNameSpan = document.querySelector("#FirstName");
const ageSpan = document.querySelector("#Age");
const statusSpan = document.querySelector("#Status");
const btnUpdateProfile = document.querySelector("#UpdateButton");

const IsBrayan = confirm("Are you Brayan?");
//console.log(typeof IsBrayan);

if(IsBrayan === true)
{
    console.log("Hello");
} 
else 
{
    profileImage.src = "images/image2.jpg"; 
    firstNameSpan.innerHTML = "Dudley Dursley";
    ageSpan.innerHTML = 12;
    statusSpan.innerHTML = "Muggle";
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/image2.jpg"; 
    firstNameSpan.innerHTML = "Dudley Dursley2";
    ageSpan.innerHTML = 14;
    statusSpan.innerHTML = "Muggle2";
});
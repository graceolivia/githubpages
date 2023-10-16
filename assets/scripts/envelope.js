console.log("Is this thing on??");

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const hiddenDiv = document.getElementById("hiddenDiv");
envelope.addEventListener("click", function() {
    hiddenDiv.classList.remove("hidden");
    envelope.classList.add("hidden");
});



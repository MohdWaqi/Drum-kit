buttons = document.querySelectorAll(".btn")
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click",handler)
    
}
function handler() {         
    var button = this.querySelector('p').innerHTML
    createSound(button)
    activeButton(button)
}
document.addEventListener("keypress", function (event) {
    createSound(event.key)
    activeButton(event.key)
})
function createSound(key) {        
    switch (key) {
        case "w":
            var tom1 = new Audio("/assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("/assets/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "a":
            var tom3 = new Audio("/assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("/assets/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("/assets/sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("/assets/sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("/assets/sounds/snare.mp3");
            snare.play();
            break;
        default: console.log(key);
            break;
    }
}
function activeButton(key) {
    document.querySelector("." + key).classList.add("opacity-40")
    setTimeout(() => {
        document.querySelector("." + key).classList.remove("opacity-40")
    }, 100);
}
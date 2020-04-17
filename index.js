window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#120f96",
        "#603883",
        "#120f96",
        "#8c779e",
        "#833883",
        "#386b83",
        "#a2c937",
        "#dd0998"
    ]

    // Lets get going with the sound here
    pads.forEach((pad, index ) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play()

            createBubbles(index)
        })
    })

    create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation ='jump 1s ease'
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this)
        })
    }
}) 






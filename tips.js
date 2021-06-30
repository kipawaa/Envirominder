const getTipButton = document.getElementById("getTipButton");
const tip = document.getElementById("tip");

getTipButton.addEventListener("click", getTip);
window.onload = getTip;


async function getTip() {
    try {
        const response = await fetch("./tips.txt");
        const text = await response.text();
        let tips = text.split("\n");

        console.log(tips);
        
        var index = Math.round(Math.random() * (tips.length - 1));
        console.log(index);

        tip.textContent = tips[index];
    } catch(err) {
        console.error(err);
    }
}

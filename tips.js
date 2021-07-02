const getTipButton = document.getElementById("getTipButton");
const tip = document.getElementById("tip");

getTipButton.addEventListener("click", getNewTip);
window.onload = getTip;

async function getTip() {
    chrome.notifications.clear("dailyTip");
    try {
        // get tips from text file
        const response = await fetch("tips.txt");
        const text = await response.text();
        let tips = text.split("\n");

        chrome.storage.sync.get("index", function(indexObj) {
            tip.textContent = tips[indexObj.index];
        });
    } catch(err) {
        console.err("Failed to get tip: " + err);
    }
}


async function getNewTip() {
    try {
        const response = await fetch("tips.txt");
        const text = await response.text();
        let tips = text.split("\n");

        let index = Math.floor(Math.random() * (tips.length - 1));

        chrome.storage.sync.set({"index": index}, function() {console.log("index: " + index)});

        tip.textContent = tips[index];

    } catch(err) {
        console.error(err + " failed to get tip");
    }
}

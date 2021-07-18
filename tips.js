// get page items
const html = document.documentElement;
const body = document.body;

const helpButton = document.getElementById("howDoesThisHelpButton");
const helpText = document.getElementById("howDoesThisHelpText");
const getTipButton = document.getElementById("getTipButton");
const tip = document.getElementById("tip");

// page events
helpButton.addEventListener("click", howDoesThisHelp);
getTipButton.addEventListener("click", getNewTip);
window.onload = getTip;


async function howDoesThisHelp() {
    if (helpText.style.visibility === "visible") {
        helpText.style.visibility = "hidden";
        helpText.style.height = "0px";
    } else {
        try {
            const response = await fetch("tips.txt");
            const text = await response.text();

            let howTipsHelp = text.split("\n");
            
            chrome.storage.sync.get("index", function(indexObj) {
                helpText.textContent = howTipsHelp[indexObj.index + 1];
            });
            
            helpText.style.height = "auto";
            helpText.style.visibility = "visible";

        } catch(err) {
            console.err("failed to get how this helps: " + err);
            helpText.textContent = "Failed to get from database how this is helpful, sorry!";
        }
    }
}


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
    helpText.style.visibility = "hidden";
    helpText.style.height = "0px";
    try {
        const response = await fetch("tips.txt");
        const text = await response.text();
        let tips = text.split("\n");

        let index = Math.floor(Math.random() * (tips.length - 1));
        
        index -= (index % 2 == 1);

        chrome.storage.sync.set({"index": index}, function() {console.log("index: " + index)});

        tip.textContent = tips[index];

    } catch(err) {
        console.error(err + " failed to get tip");
        tip.textContent = "Failed to get a new tip :(";
    }
}

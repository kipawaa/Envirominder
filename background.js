chrome.runtime.onStartup.addListener(async function() {
    const d = new Date();

    let currentTime = Math.floor(d.getTime() / 86400000);
    
    await chrome.storage.sync.get("lastAccess", function(lastAccessObj) {
        console.log("last access: " + lastAccessObj.lastAccess);
        console.log("current date: " + currentTime);
        if (lastAccessObj.lastAccess < currentTime) {
            // notification
            console.log("adding notification");
            chrome.notifications.create("dailyTip", {
                    type: "basic",
                    iconUrl: "Envirominder Icon-128.png",
                    title: "Daily Tip!",
                    message: "Open the extension to get your daily tip!"
                },
                function() {console.log("notification sent")}
            );

            // new tip
            chrome.storage.sync.get("tipsLen", function(tipsLenObj) {
                let index = Math.floor(Math.random() * (tipsLenObj.tipsLen - 1));
        
                index -= (index % 2 == 1);

                chrome.storage.sync.set({"index":  index}, function() {console.log("index: " + index)});
            });
        }
    });

    chrome.storage.sync.set({"lastAccess": currentTime}, function() {console.log("saved date")});
});

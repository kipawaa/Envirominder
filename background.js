chrome.runtime.onStartup.addListener(function() {
    
    const d = new Date();

    let currentTime = Math.floor(d.getTime() / 86400000);
    
    chrome.storage.sync.get("lastAccess", function(lastAccessObj) {
        console.log("last access: " + lastAccessObj.lastAccess);
        console.log("current date: " + currentTime);
        if (lastAccessObj.lastAccess < currentTime) {
            // notification
            console.log("adding notification");
            chrome.notifications.create("dailyTip", {
                    type: "basic",
                    iconUrl: "Envirominder Icon.png",
                    title: "Daily Tip!",
                    message: "Open the extension to get your daily tip!"
                },
                function() {console.log("notification sent")}
            );
        }
    });

    chrome.storage.sync.set({"lastAccess": currentTime}, function() {console.log("saved date")});
});

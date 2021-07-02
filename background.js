chrome.runtime.onStartup.addListener(function() {
    
    const d = new Date();
    
    chrome.storage.sync.get("lastAccess", function(lastAccessObj) {
        if (lastAccessObj.lastAccess < Math.floor(d.getTime() / 86400000)) {
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

    chrome.storage.sync.set({"lastAccess": Math.floor(d.getTime() / 86400000)}, function() {console.log("saved date")});
});

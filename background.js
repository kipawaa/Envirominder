chrome.runtime.onStartup.addListener(function() {
    console.log("onStartup fired");
    const d = new Date();
    chrome.storage.sync.get("lastAccess", function(obj) {
        if (obj.lastAccess < Math.floor(d.getTime() / 86400000)) {
            console.log("open popup");
            chrome.tabs.create({url:"popup.html"});
        }
    });
    chrome.storage.sync.set({"lastAccess": Math.floor(d.getTime() / 86400000)}, function() {console.log("saved date")});
});

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        width: 200,
        height: 270
    });
});


chrome.contextMenus.create({
    id: "some-command",
    title: "open file",
    contexts: ["all"]
});


chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "some-command") {
        chrome.tabs.sendMessage(tab.id, "getClickedEl", {frameId: info.frameId}, data => {
            console.log(data.pathFile)
            chrome.tabs.create({ url: data.pathFile });
        });
    }
});

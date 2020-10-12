chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        width: 200,
        height: 270
    });
});


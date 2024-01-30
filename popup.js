document.getElementById('setRate').addEventListener('click', function() {
    var rate = document.getElementById('rateInput').value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: setPlaybackRate,
            args: [rate]
        });
    });
});

function setPlaybackRate(rate) {
    document.getElementsByTagName("video")[0].playbackRate = parseFloat(rate);
}

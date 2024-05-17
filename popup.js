// popup.js

const buttonFunctionMap = {
    'button1': bingRemoveBg,
    'button2': functionForButton2,
    'button3': functionForButton3,
};

function setupButtonListener(buttonId, pageFunction) {
    document.getElementById(buttonId).addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: pageFunction
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    Object.keys(buttonFunctionMap).forEach(buttonId => {
        setupButtonListener(buttonId, buttonFunctionMap[buttonId]);
    });
});

function bingRemoveBg() {
    if (window.location.hostname === "bing.com" || window.location.hostname === "www.bing.com"){
        // alert('BingChat website');
        var mainDiv = document.querySelector("#b_sydConvCont > cib-serp");
        if (mainDiv) {
            var cibConversationMain = mainDiv.shadowRoot.querySelector("#cib-conversation-main");
            if (cibConversationMain) {
                var civChatTurn = cibConversationMain.shadowRoot.querySelector("#cib-chat-main").querySelectorAll('cib-chat-turn');
                civChatTurn.forEach(function(chatTurn) {
                    var cibMessage = chatTurn.shadowRoot.querySelector('cib-message-group.response-message-group').shadowRoot.querySelectorAll('cib-message');
                    cibMessage.forEach(function(message) {
                        message.setAttribute("output-background", "bing-result");
                    });
                });
            }
            else {
                console.error("cibConversationMain not found");
            }
        }
        else {
            console.error("mainDiv not found");
        }  
    }
    else{
        alert('This is not BingChat website');
    }
}

function functionForButton2() {
    if (window.location.hostname === "bing.com" || window.location.hostname === "www.bing.com" || window.location.hostname === "copilot.microsoft.com") {

        // alert('Augment Bing Chat message charcters limit');
        var searchBox = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.input-row > cib-text-input").shadowRoot.querySelector("#searchbox");
        searchBox.maxLength = 25000;

        var letterCounter = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.bottom-controls > div.bottom-right-controls > div.letter-counter").childNodes[3];
        letterCounter.textContent = 25000;
    }
    else{
        alert('This is not BingChat website');
    }
}

function functionForButton3() {
    alert('Button 3 clicked!');
}

// popup.js
// document.querySelector('h1').addEventListener('click', function() {
//     alert('Hello, World!');
// });


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button1').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: bingRemoveBg
            });
        });
    });
});

function bingRemoveBg() {
    if (window.location.hostname === "bing.com" || window.location.hostname === "www.bing.com"){
        alert('BingChat website');
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
    alert('Button 2 clicked!');
}

function functionForButton3() {
    alert('Button 3 clicked!');
}

// Add event listeners to your buttons when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // document.getElementById('button1').addEventListener('click', bingRemoveBg);
    document.getElementById('button2').addEventListener('click', functionForButton2);
    document.getElementById('button3').addEventListener('click', functionForButton3);
});

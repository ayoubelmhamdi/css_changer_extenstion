if (window.location.hostname === "localhost") {
    document.arrive(".jp-WindowedPanel-outer", function() {
        // 'this' refers to the newly created element
        this.style.paddingLeft = "350px";
        this.style.paddingRight = "7px";
    });
}

if (window.location.hostname === "bing.com" || window.location.hostname === "www.bing.com") {
    setTimeout(function () {

        var searchBox = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.input-row > cib-text-input").shadowRoot.querySelector("#searchbox");
        searchBox.maxLength = 25000;

        var letterCounter = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.bottom-controls > div.bottom-right-controls > div.letter-counter").childNodes[3];
        letterCounter.textContent = 25000;
    }, 5000);
}


// // i can't wait until cib-message is ready
// if (window.location.hostname === "bing.com" || window.location.hostname === "www.bing.com"){
//     document.arrive('.cib-chat-turn', function() {
//
//         var mainDiv = document.querySelector("#b_sydConvCont > cib-serp");
//         console.error(mainDiv);
//         if (mainDiv) {
//             var cibConversationMain = mainDiv.shadowRoot.querySelector("#cib-conversation-main");
//             if (cibConversationMain) {
//                 var civChatTurn = cibConversationMain.shadowRoot.querySelector("#cib-chat-main").querySelectorAll('cib-chat-turn');
//                 civChatTurn.forEach(function(chatTurn) {
//                     var cibMessage = chatTurn.shadowRoot.querySelector('cib-message-group.response-message-group').shadowRoot.querySelectorAll('cib-message');
//                     cibMessage.forEach(function(message) {
//                         message.setAttribute("output-background", "bing-result");
//                     });
//                 });
//             }
//             else {
//                 console.error("cibConversationMain not found");
//             }
//         }
//         else {
//             console.error("mainDiv not found");
//         }  
//     });
// }

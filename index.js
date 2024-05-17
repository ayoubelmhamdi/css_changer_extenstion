if (window.location.hostname === "localhost") {
    document.arrive(".jp-WindowedPanel-outer", function() {
        // 'this' refers to the newly created element
        this.style.paddingLeft = "10px";
        this.style.paddingRight = "10px";
    });
}

if (window.location.hostname === "bing.com" || window.location.hostname === "www.bing.com" || window.location.hostname === "copilot.microsoft.com") {
    setTimeout(function () {

        var searchBox = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.input-row > cib-text-input").shadowRoot.querySelector("#searchbox");
        searchBox.maxLength = 25000;

        var letterCounter = document.querySelector("#b_sydConvCont > cib-serp").shadowRoot.querySelector("#cib-action-bar-main").shadowRoot.querySelector("div > div.main-container > div > div.bottom-controls > div.bottom-right-controls > div.letter-counter").childNodes[3];
        letterCounter.textContent = 25000;
    }, 5000);
}

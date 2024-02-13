if (window.location.hostname === "localhost") {
    var doc = document.arrive(".jp-WindowedPanel-outer", function() {
        // 'this' refers to the newly created element
        this.style.paddingLeft = "7px";
        this.style.paddingRight = "7px";
    });
}

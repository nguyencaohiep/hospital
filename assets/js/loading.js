document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            ".center").style.visibility = "visible";
    } else {
        document.querySelector(
            ".center").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};
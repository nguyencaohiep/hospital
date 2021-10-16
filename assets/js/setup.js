function includeHTML() {
    const ele = "file-include";
    var includeELE = document.querySelectorAll(`[${ele}]`);
    for (let elm of includeELE) {
        file = elm.getAttribute("file-include");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elm.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elm.innerHTML = "Page Not Found";
                    }
                    elm.removeAttribute("file-include");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

function backToTop() {
    const toTop = document.getElementById("to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    })
}
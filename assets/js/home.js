function includeHTML() {
    const header = "include-header";
    var includeHeader = document.querySelectorAll(`[${header}]`);
    for (let elm of includeHeader) {
        file = elm.getAttribute("include-header");
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
                    elm.removeAttribute("include-header");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
        const footer = "include-footer";
        var includeFooter = document.querySelectorAll(`[${footer}]`);
        for (let elm of includeFooter) {
            file = elm.getAttribute("include-footer");
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
                        elm.removeAttribute("include-footer");
                        includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
            }
        }
    }
}

function backToTop() {
    const toTop = document.getElementById("to-top");
    console.log(toTop);
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    })
}
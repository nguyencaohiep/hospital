function beLoaded(img) {
    const url = img.getAttribute('lazy-src');
    img.setAttribute('src', url);
    img.removeAttribute('lazy-src')
}

function ready() {
    if ('IntersectionObserver' in window) {
        var lazyImg = document.querySelectorAll('[lazy-src]');
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.getAttribute('src') == '#') {
                        beLoaded(entry.target);
                    }
                }
            })
        }, )
        lazyImg.forEach(img => {
            observer.observe(img);
        })
    }
}

document.addEventListener("DOMContentLoaded", ready)
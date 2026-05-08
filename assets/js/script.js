/** MENU */
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".toggleMenu");
    const menu = document.querySelector(".nav-menu2");
    toggle.addEventListener("click", function (e) {
        e.preventDefault();

        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });

});

/** ad place */
window.addEventListener("load", () => {
    function loadAd(id, file) {
        const el = document.getElementById(id);
        if (!el) return;
        fetch(file)
            .then(res => res.text())
            .then(html => {
                el.innerHTML = html;
            });
    }
    loadAd("adbanner", "{{ '/adbanner.html'}}");
    loadAd("adnativ", "{{ '/adnativ.html'}}");
    loadAd("ad", "{{ '/ad.html'}}");
});

/** Blank Target External Links */
$(document.links).filter(function () {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');

// Set the overflow property on the body element to prevent scrolling
document.body.style.overflow = "hidden";
// Use a timer to enable scrolling after 5 seconds
setTimeout(function () {
    document.body.style.overflow = "auto";
}, 3000); // 3000 milliseconds = 3 seconds
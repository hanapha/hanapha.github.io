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
window.addEventListener("load", function () {

  function injectAd(targetId, templateId) {

    const target = document.getElementById(targetId);
    const template = document.getElementById(templateId);

    if (!target || !template) return;

    // clone template
    const clone = template.content.cloneNode(true);

    // append html first
    target.appendChild(clone);

    // rerun scripts
    target.querySelectorAll("script").forEach(oldScript => {

      const newScript = document.createElement("script");

      // copy attributes
      [...oldScript.attributes].forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });

      // inline script
      newScript.textContent = oldScript.textContent;

      // replace old script
      oldScript.parentNode.replaceChild(newScript, oldScript);

    });

  }

  injectAd("adbanner", "tpl-adbanner");

  injectAd("adnativ", "tpl-adnativ");

  injectAd("ad", "tpl-ad");

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
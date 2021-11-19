window.addEventListener('load', function () {
    window.cookieconsent.initialise({
        revokeBtn: "<div class='cc-revoke'></div>",
        type: "opt-in",
        position: "bottom-left",
        theme: "edgeless",
        palette: {
            popup: {
                background: "#000",
                text: "#fff"
            },
            button: {
                background: "#fd0",
                text: "#000"
            }
        },
        content: {
            link: "Cookie Policy",
            href: "https://getwebapps.uk/cookies.html"
        },
        onInitialise: function (status) {
            if (status == cookieconsent.status.allow) myScripts();
        },
        onStatusChange: function (status) {
            if (this.hasConsented()) myScripts();
        }
    })
});

function myScripts() {
    // Global site tag (gtag.js) - Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-VSDEZZZ110');
}
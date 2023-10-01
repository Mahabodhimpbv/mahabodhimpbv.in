var prevScrollpos = window.pageYOffset;
var header = document.querySelector(".navbar");
var headerText = document.querySelectorAll(".fade");
var bottomElement = document.querySelector(".bottom");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        // Scrolling up, show the faded elements and bottom
        header.style.top = "0";
        headerText.forEach(function(element) {
            element.style.opacity = "1";
        });
        bottomElement.style.height = "0px";
    } else {
        // Scrolling down, hide the faded elements and bottom
        header.style.top = "-" + header.clientHeight + "px";
        headerText.forEach(function(element) {
            element.style.opacity = "0";
        });
        bottomElement.style.height = "50px";
    }
    prevScrollpos = currentScrollPos;
};

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var menu = document.getElementById('menu');
    if (menu.classList.contains('closed')) {
        menu.style.right = '0'; // Open the menu
        menu.classList.remove('closed');
    } else {
        menu.style.right = '-250px'; // Close the menu
        menu.classList.add('closed');
    }
});


// إظهار الزر عند التمرير لأسفل 20 بكسل من أعلى الصفحة
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }

    var navSticky = document.getElementById("nav_sticky");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navSticky.style.backgroundColor = "#16171b";
    } else {
        navSticky.style.backgroundColor = "transparent";
    }
}

// عند النقر على الزر، الانتقال إلى أعلى الصفحة
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementById("toggleIcon");

    icon.addEventListener("click", function() {
        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-bars-staggered");
            toggleIcon.classList.add('toggled');
        } else {
            icon.classList.remove("fa-bars-staggered");
            icon.classList.add("fa-bars");
            toggleIcon.classList.remove('toggled');
        }
    });
});

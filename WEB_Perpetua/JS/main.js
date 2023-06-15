/* Logo Transition (start) */

function loadLogo() {
  document.getElementById("logo").className = 'logo_home';
}

window.onload = loadLogo;

/* Logo Transition (End) */

/* Slider (Start) */

const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");

const rightArrow = document.querySelector(".right");

const indicatorParents = document.querySelector('.controls ul');

var sectionIndex = 0;

//Bottom Indicators
document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
    indicator.addEventListener('click', function () {
        sectionIndex = ind
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -35 + '%)';
    })
})

//Slider Arrows
leftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -35 + '%)';
});

rightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -35 + '%)';
});

//Slider (End)
// When the user scrolls the page, execute myFunction
window.onscroll = function () { stickynav() };

window.onload = function () {
    typeWriter();


}




// Get the navbar
var navbar = document.getElementById("navbar");

console.log("navbar: ", navbar)

// Get the offset position of the navbar

// console.log("STICKY: ", sticky)

// console.log("nav offset: ", navbar.offsetTop)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position


var i = 0;
var txt = "Oh, The Places You've Been! A Digital Photostory";
var subtxt = "A Digital Photostory"
var speed = 70;
var descriptions = ["writer", "student", "joker", "problem solver", "explorer", "leader", "teammate", "friend", "Kathleen"]
var j = 0;
var initial_ended = false;


function typeWriter() {
    var get_text = document.querySelector("#typewriter-text")
    //console.log("get text: ", get_text)

    if (i < txt.length) {
        document.querySelector("#typewriter-text").textContent += txt.charAt(i);
        i++;
        if (get_text.textContent !== "Oh, The Places You've Been! ") {

            setTimeout(typeWriter, speed);
        }
        else {
            //console.log("is this hey: ", get_text.textContent)
            setTimeout(typeWriter, 800)
        }


    }
    // else {
    //     if (i == txt.length) {
    //         //console.log("is this ever True?")
    //         setTimeout(typeWriter, 1200)

    //         i++;
    //     } else {
    //         var new_text = get_text.textContent.slice(0, 11)
    //         //console.log("new get text is: ", new_text)
    //         //console.log("j is : ", j)
    //         j++;
    //         if (j < descriptions.length - 1) {
    //             get_text.textContent = new_text + descriptions[j];

    //             setTimeout(typeWriter, (j + 1500) / ((j + 1)))
    //             // want it to pick up speed logarithmically almost
    //             //need the nummber to decrease
    //             //setInterval(switchText, (j + 60) / ((j + 1))
    //             //)
    //         }
    //         else {
    //             get_text.textContent = "Hey! I'm Kathleen";
    //             //particles();
    //             // return particles();
    //             initial_ended = true;
    //             particles()
    //             get_text.classList.add("add-this")

    //             // setTimeout(particles(), 1000)
    //             //document.querySelector("#moving-text").textContent = "I'm Kathleen"
    //         }
    //     }
    // }
}
var sticky;

function particles() {



    var hidden_items = document.querySelectorAll(".hidden")
    console.log("hidden: ", hidden_items)
    for (var i of hidden_items) {
        i.classList.remove("hidden")
    }
    sticky = navbar.offsetTop;
    // console.log("new sticky is: ", newsticky)

    //console.log("PARS: ", particles)

}

function stickynav() {


    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function responsiveNav() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function () {
    $(".animsition").animsition({
        inClass: 'fade-in-down-sm',
        outClass: 'fade-out-down-sm',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) { window.location.href = url; }
    });
});

// filterSelection("all") // Execute the function and show all columns
// function filterSelection(c) {
//     var x, i;
//     x = document.getElementsByClassName("column");
//     if (c == "all") c = "";
//     // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//     for (i = 0; i < x.length; i++) {
//         w3RemoveClass(x[i], "show");
//         if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//     }
// }

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var b = 0; b < btns.length; b++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function toggleSkills(divNameHidden, divNameShow) {
    // console.log(divName)
    let elementToHide = document.getElementById(divNameHidden)
    elementToHide.classList.add("skills-hidden")
    let elementToShow = document.getElementById(divNameShow)
    // elementToShow.style.transition = "all 2s"
    elementToShow.classList.remove("skills-hidden")

}

function toggleProjects(projectType) {

    let allProjects = document.getElementsByClassName("column")
    let allRows = document.getElementsByClassName("row")
    console.log("ROWS: ", allRows)
    // console.log("all projects: ", allProjects)
    if (projectType === "all") {
        for (let proj of allRows) {
            console.log("PROJ: ", proj)
            proj.classList.remove("projects-hidden")
        }
    } else {
        for (let proj of allRows) {
            console.log("PROJ: ", proj.classList)
            if (!proj.classList.contains(projectType)) {
                proj.classList.add("projects-hidden")
            } else {
                proj.classList.remove("projects-hidden")
            }
        }
    }

}
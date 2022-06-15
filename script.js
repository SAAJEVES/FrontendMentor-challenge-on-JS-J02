window.onload = function() {
    slideChange(slideIndex);
}

// Text Array
let textArray = [
    '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
];

// Image Array
let imgArray = [
    'image-tanya.jpg',
    'image-john.jpg'
];

// Name Array
let nameArray = [
    'Tanya Sinclair',
    'John Tarkpor'
];

// Occupation Array
let occupationArray = [
    'UX Engineer',
    'Junior Front-end Developer'
];

// Image Source
let imgSrc = document.querySelector("#image");

// Text
let textShow = document.querySelector(".text");

// Name
let nameShow = document.querySelector(".name");

// Occupation
let occupationShow = document.querySelector("#occupation");


// The Previous & Next Buttons
let prevBtn = document.querySelector("#left").parentElement;

prevBtn.addEventListener("click", function() {
    prevSlide(-1);
})

let nextBtn = document.querySelector("#right").parentElement;

nextBtn.addEventListener("click", function() {
    nextSlide(1);
})


// The function
let slideIndex = 0;
function slideChange(n) {
    if (slideIndex > 1) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = 1;
    }

    imgSrc.src = imgArray[slideIndex];
    textShow.innerHTML = textArray[slideIndex];
    nameShow.innerHTML = nameArray[slideIndex];
    occupationShow.innerHTML = occupationArray[slideIndex];
}

function nextSlide(n) {
    slideChange(slideIndex += n);
}

function prevSlide(n) {
    slideChange(slideIndex += n);
}


// Using Keyboard arrow keys (left and right) to move images
document.onkeydown = (e) => {
    switch(e.keyCode) {
        case 37: //left
            prevSlide(-1);
            break;
        case 39:  //right
            nextSlide(1);
            break;
    }
}
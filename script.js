// RESEARCH 1

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}






// AUTOMATIC SLIDESSHOW
// let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 17000); // Change image every 6 seconds

}






// typewriter
var s = 0;
var txt = 'This project aims at innitiating increase in forest cover at Kajiado County to aid in climate change; to encourage sustainable exploitation of forestland for focusing on environmental conservation and protection and for the benefit of present and future generations of Kenyans; to respect socio-cultural values and to ensure access to justice, gender equity, and inclusiveness; to sustainably conserve irrigation catchments areas by facilitating human institutional capacity'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (s < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(s);
    s++;
    setTimeout(typeWriter, speed);
  }
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// MULTIPLE SLIDES
// let slideIndex = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }





// let action=document.querySelector('.choose');
// let choice1=document.querySelector('.choice1');
// let choice2=document.querySelector('.choice2');
// let choice3=document.querySelector('.choice3');



// action.onclick = () =>{
//     choice1.classList.toggle('fa-times');
//     choice2.classList.toggle('active');
//     choice3.classList.toggle('active');
//   }

// document.querySelector('.choose').onclick = () =>{
//     document.querySelector('#three-options').classList.toggle('active');
//   }
  
//   document.querySelector('.choose').onclick = () =>{
//     document.querySelector('#three-options').classList.remove('active');
//   }
  
const boxes = document.querySelectorAll('#classid')

window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes() {
  const flexBox = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < flexBox) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
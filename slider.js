// get elements from html using classNames
const slider = document.querySelector('.image-slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const captionHeader = document.querySelector('.caption h1');
const captionDescription = document.querySelector('.caption p');


// array for sliderImages 
const sliderImages = [
    "p1.jpeg",
    "p2.jpeg",
    "p3.jpeg",
    "p4.jpeg",
    "p5.jpeg",
    "wp2512678.jpg",
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg",
    "bg6.png",
    "bg7.jpg",
    "bg8.jpg"
];

// array for caption Headers
const headings = [
    "UNIVERSITY OF BUEA",
    "UNIVERSITY OF DOUALA",
    "UNIVERSITY OF BAMENDA",
    "UNIVERSITY OF YAOUNDE",
    "UNIVERSITY OF CAMBRIDGE",
    "UNIVERSITY OF NEW BELL",
    "Thialand Touristic View",
    "UNIVERSITY OF NEW BELL",
    "UNIVERSITY OF NEW BELL",
    "UNIVERSITY OF NEW BELL",
    "UNIVERSITY OF NEW BELL",
    "UNIVERSITY OF NEW BELL",
    "UNIVERSITY OF NEW BELL",
    "UNIVERSITY OF NEW BELL",
];

// array for caption descriptions
const descriptions = [
    "A Place To Be When You Are Not There!",
    "The University Innovation And Creativity",
    "An Institute For Entreprenuership",
    "A University for Politicians",
    "A New Vision For Scholars",
    "Truth, Solidarity And Succelence",
    "Truth, Solidarity And Succelence",
    "Truth, Solidarity And Succelence",
    "Truth, Solidarity And Succelence",
    "Truth, Solidarity And Succelence",
    "Truth, Solidarity And Succelence",
    "Truth, Solidarity And Succelence",
    "Truth, Solidarity And Succelence",
    "Truth, Solidarity And Succelence",
];

// slider initialization
let slideshow = 0;

// slider function declaration
function slide(slideshow){
    // set background image for slider
    slider.style.backgroundImage = 
    `url(img/${sliderImages[slideshow]})`;

    // add image-fade animation
    slider.classList.add('image-fade');

    // remove animation after each slide
    setTimeout(() =>{
        slider.classList.remove('image-fade');
    }, 550);
    // caption header changer in each slide
    captionHeader.innerText = headings[slideshow];

    // caption header changer in each slide
    captionDescription.innerText = descriptions[slideshow];
}

prevBtn.addEventListener('click', () => {
    // decrement img id
    slideshow--;

    /*do an if statement to check
    if slideshow is less than 
    slider image length
    */
   if(slideshow < 0){
    //change to last image
    slideshow =  sliderImages.length - 1;
   }
//    run the slider function
slide(slideshow);
});

nextBtn.addEventListener('click', () => {
    // increment img id
    slideshow++;

    /*do an if statement to check
    if slideshow is more than 
    slider image length
    */
   if(slideshow > sliderImages.length - 1){
    //change to first image
    slideshow = 0;
   }
//    run the slider function
slide(slideshow);
});
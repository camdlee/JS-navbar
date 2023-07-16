// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


// ------------ Assigning selections to variables -------------
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


//-------------- Events -----------------
navToggle.addEventListener('click', ()=>{
    //console.log(links.classList)
    // console.log(links.classList.contains('links'))
    
    // adding or removing show links class to change the DOM
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }

    // one liner using the toggle method
    links.classList.toggle('show-links')
});


const sections = document.querySelectorAll('section');
// console.log(sections);

for (const section of sections) {
    console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '20px';
    section.style.backgroundColor = 'lightgray'
}

// const places = document.getElementById('Places-container');
// console.log(places);

// places.style.backgroundColor = 'yellow'

const places = document.getElementById('places-container');
places.classList.add('yellow-bg');
places.classList.remove('large-text');


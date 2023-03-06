// console.log('hey');

// // Where to add 
// const placeList = document.getElementById('places-list');
// console.log(placeList);
// // What to be added 
// const li = document.createElement('li');
// li.innerText = 'Pahar Toli bon';
// // add the child 
// placeList.appendChild(li);
// placeList;


// // Added New Section 

// const section = document.getElementById('sections');
// console.log(section);

// const section4 = document.createElement('section');
// const h1 = document.createElement('h1');
// h1.innerText = 'My food List';
// section4.appendChild(h1);

// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// li1.innerText = 'biriani';
// ul.appendChild(li1);
// const li2 = document.createElement('li');
// li2.innerText = 'borhani';
// ul.appendChild(li2);
// const li3 = document.createElement('li');
// li3.innerText = 'Chiken';
// ul.appendChild(li3);


// section.appendChild(ul);
// section.appendChild(section4);



// // set innerHTML directly 

// const sectionDress = document.createElement('section');

// sectionDress.innerHTML = `
// <h1> My Dress section </h1>
// <ul>
//     <li> T-shirt </li>
//     <li> Lungi </li>
//     <li> Genji </li>
// </ul>
// `

// section.appendChild(sectionDress);


const placeList = document.getElementById('places-list');

const li = document.createElement('li');
li.innerText = 'PaharToli Bon';

placeList.appendChild(li);

const mainContainer = document.getElementById('main-container');

console.log(mainContainer);

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My favorite Dress'

section.appendChild(h1);
mainContainer.appendChild(section);

const ul = document.createElement('ul');
section.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'Biriani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Chicken';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Borhani';
ul.appendChild(li3);

sectionDress.innerHTML = `
<h1> My Dress section </h1>
<ul>
    <li> T-shirt </li>
    <li> Lungi </li>
    <li> Genji </li>
</ul>
`

section.appendChild(sectionDress);

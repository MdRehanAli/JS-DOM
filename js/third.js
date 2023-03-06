console.log('Third JS File');

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
section.innerHTML = `
    <h1> My Dynamic Section </h1>
    <p> Extra text added inside paragraph </p>
    <ul>
        <li>Item 1 </li>
        <li>Item 2 </li>
        <li>Item 3 </li>
        <li>Item 4 </li>
    </ul>

`
mainContainer.appendChild(section);
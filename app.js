const searchbar = document.getElementById('searchbar');
const charactersList = document.getElementById('charactersList');
let gotCharacters = [];

searchbar.addEventListener('keyup',(e) => {
    const searchString = e.target.value;
    const filteredCharacters = gotCharacters.filter((character) =>{
        return (
            character.fullName.includes(searchString) ||
            character.family.includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://thronesapi.com/api/v2/Characters');
        gotCharacters = await res.json();
        displayCharacters(gotCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.fullName}</h2>
                <p>Family: ${character.family}</p>
                <img src="${character.imageUrl}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
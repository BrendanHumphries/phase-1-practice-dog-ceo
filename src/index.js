document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => images.message.forEach(renderImages))
    
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        for (const item in breeds.message) {
            addBreeds(item);
        }
    })

    const breedListItem = document.querySelector('#dog-breeds');
    breedListItem.addEventListener('click', colorAClickedLi);
})

function renderImages(image) {
    const newItem = document.createElement('img');
    const imageContainer = document.querySelector('#dog-image-container');
    newItem.src = image;
    imageContainer.append(newItem);
}

function addBreeds(breed) {
    const newItem = document.createElement('li');
    const breedsContainer = document.querySelector('#dog-breeds');
    newItem.textContent = breed;
    breedsContainer.append(newItem);
}

function colorAClickedLi(event) {
    event.target.style.color = 'red';
}